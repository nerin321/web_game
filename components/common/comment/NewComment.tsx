"use client";

import {
  faBolt,
  faCaretDown,
  faFire,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Reply {
  id: number;
  dateTime: Date;
  userName: string;
  avatar: string;
  content: string;
  like: number;
  replies: Reply[];
  replyTo?: string;
}

interface Comment {
  id: number;
  dateTime: Date;
  userName: string;
  avatar: string;
  content: string;
  like: number;
  replies: Reply[];
}

interface CommentProps {
  comments: Comment[];
}

const userInfo = {
  userName: "user-name",
  avatar:
    "https://i.pinimg.com/736x/1d/aa/ed/1daaedf28727c2403a01d1fbb7dfac4c.jpg",
};

const NewComment: React.FC<CommentProps> = ({ comments }) => {
  const [allComments, setAllComments] = useState<Comment[]>([...comments]);
  const [newCommentContent, setNewCommentContent] = useState<string>("");

  const formatDate = (date: Date) =>
    new Date(date).toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const handleNewCommentSubmit = () => {
    if (!newCommentContent.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      dateTime: new Date(),
      userName: userInfo.userName,
      avatar: userInfo.avatar,
      content: newCommentContent.trim(),
      like: 0,
      replies: [],
    };

    setAllComments([newComment, ...allComments]);
    setNewCommentContent("");
  };

  const handleLike = (
    id: number,
    isLike: boolean,
    isReply = false,
    parentId?: number
  ) => {
    setAllComments((prev) =>
      prev.map((comment) => {
        if (comment.id === id && !isReply) {
          return { ...comment, like: comment.like + (isLike ? 1 : -1) };
        }
        if (isReply && parentId) {
          return {
            ...comment,
            replies: updateLikes(comment.replies, id, isLike),
          };
        }
        return comment;
      })
    );
  };

  const updateLikes = (
    replies: Reply[],
    id: number,
    isLike: boolean
  ): Reply[] =>
    replies.map((reply) =>
      reply.id === id
        ? { ...reply, like: reply.like + (isLike ? 1 : -1) }
        : { ...reply, replies: updateLikes(reply.replies, id, isLike) }
    );

  const handleReplySubmit = (
    commentId: number,
    replyContent: string,
    parentReplyId?: number
  ) => {
    if (!replyContent.trim()) return;

    const newReply: Reply = {
      id: Date.now(),
      dateTime: new Date(),
      userName: userInfo.userName,
      avatar: userInfo.avatar,
      content: replyContent.trim(),
      like: 0,
      replies: [],
      replyTo: parentReplyId
        ? findReply(allComments, commentId, parentReplyId)?.userName
        : undefined,
    };

    setAllComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          if (parentReplyId) {
            return {
              ...comment,
              replies: updateNestedReplies(
                comment.replies,
                parentReplyId,
                newReply
              ),
            };
          }
          return { ...comment, replies: [...comment.replies, newReply] };
        }
        return comment;
      })
    );
  };

  const findReply = (
    comments: Comment[],
    commentId: number,
    replyId: number
  ): Reply | undefined => {
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) return undefined;

    const findNestedReply = (
      replies: Reply[],
      id: number
    ): Reply | undefined => {
      for (const reply of replies) {
        if (reply.id === id) return reply;
        const nested = findNestedReply(reply.replies, id);
        if (nested) return nested;
      }
      return undefined;
    };

    return findNestedReply(comment.replies, replyId);
  };

  const countAllComments = (comments: Comment[]): number => {
    let count = comments.length;
    comments.forEach((comment) => {
      count += countReplies(comment.replies);
    });
    return count;
  };

  const countReplies = (replies: Reply[]): number => {
    let count = replies.length;
    replies.forEach((reply) => {
      count += countReplies(reply.replies);
    });
    return count;
  };

  const updateNestedReplies = (
    replies: Reply[],
    replyId: number,
    newReply: Reply
  ): Reply[] =>
    replies.map((reply) =>
      reply.id === replyId
        ? { ...reply, replies: [...reply.replies, newReply] }
        : {
            ...reply,
            replies: updateNestedReplies(reply.replies, replyId, newReply),
          }
    );

  return (
    <div className="space-y-6">
      {/* New comment input */}
      <div className="space-y-7">
        <div className="flex items-center py-2 border-b border-gray-500">
          <p className="border-primary px-1 border-r-2">
            Bạn đã đăng nhập - <a href="#">{userInfo.userName}</a>
          </p>
          <a href="#" className="px-1">
            Đăng xuất
          </a>
        </div>
        <div className="flex items-start gap-2">
          <img
            src={userInfo.avatar}
            alt={`${userInfo.userName}'s avatar`}
            className="object-cover w-12 h-12 rounded-full"
          />
          <textarea
            className="w-full h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a new comment..."
            value={newCommentContent}
            onChange={(e) => setNewCommentContent(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-secondry hover:bg-secondry/80 px-4 py-2 mt-2 text-white rounded-md"
            onClick={handleNewCommentSubmit}
          >
            Đăng bình luận
          </button>
        </div>
      </div>

      <div>
        <div className=" flex items-center justify-between border-b-2 border-gray-300">
          <h3 className="uppercase font-semibold py-1.5 border-b-2 border-secondry w-fit -mb-0.5">
            {countAllComments(comments)} Bình luận
          </h3>
          <div className="flex items-center gap-0.5">
            <div className="px-2.5 py-1.5 border-b-2 border-[#ffa600] -mb-0.5">
              <FontAwesomeIcon icon={faBolt} className="size-4" />
            </div>
            <div className="px-2.5 py-1.5 border-b-2 border-[#fc5844] -mb-0.5">
              <FontAwesomeIcon icon={faFire} className="size-4" />
            </div>
            <div className="flex items-center px-2.5 py-1.5 border-b-2 border-primary -mb-0.5">
              <p>Mới nhất</p>
              <FontAwesomeIcon icon={faCaretDown} className="size-5" />
            </div>
          </div>
        </div>
        {/* Comment List */}
        {allComments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onLike={handleLike}
            onReplySubmit={handleReplySubmit}
            formatDate={formatDate}
          />
        ))}
      </div>
    </div>
  );
};

interface CommentItemProps {
  comment: Comment;
  onLike: (
    id: number,
    isLike: boolean,
    isReply?: boolean,
    parentId?: number
  ) => void;
  onReplySubmit: (
    commentId: number,
    replyContent: string,
    parentReplyId?: number
  ) => void;
  formatDate: (date: Date) => string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  onLike,
  onReplySubmit,
  formatDate,
}) => {
  const [replyContent, setReplyContent] = useState<string>("");
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false); // Quản lý hiển thị ô nhập bình luận

  const handleReplyClick = () => {
    setShowReplyInput((prev) => !prev); // Toggle hiển thị ô nhập
    if (showReplyInput) {
      setReplyContent(""); // Reset khi đóng ô nhập
    }
  };

  return (
    <div className="flex flex-col pt-4">
      <div className="flex items-start space-x-4">
        <img
          src={comment.avatar}
          alt={`${comment.userName}'s avatar`}
          className="object-cover w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="text-secondry font-bold">{comment.userName}</h4>
            <span className="text-sm text-gray-500">
              {formatDate(comment.dateTime)}
            </span>
          </div>
          <p className="mt-1">{comment.content}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <button
              onClick={() => onLike(comment.id, true)}
              className="hover:underline font-medium text-blue-500"
            >
              <FontAwesomeIcon icon={faThumbsUp} className="size-4" />
            </button>
            <p>{comment.like}</p>
            <button
              onClick={() => onLike(comment.id, false)}
              className="hover:underline font-medium text-red-500"
            >
              <FontAwesomeIcon icon={faThumbsDown} className="size-4" />
            </button>
            {/* Nút trả lời */}
            <button
              onClick={handleReplyClick}
              className="hover:underline font-medium text-gray-500"
            >
              {showReplyInput ? "Cancel" : "Reply"}
            </button>
          </div>
        </div>
      </div>

      {/* Reply Input */}
      {showReplyInput && (
        <div className="mt-4 ml-12 space-y-3">
          <div className="flex items-start gap-2">
            <img
              src={userInfo.avatar}
              alt={`${userInfo.userName}'s avatar`}
              className="object-cover w-12 h-12 rounded-full"
            />
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="w-full h-[100px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Reply to ${comment.userName}...`}
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                onReplySubmit(comment.id, replyContent);
                setReplyContent("");
                setShowReplyInput(false); // Ẩn ô nhập khi gửi
              }}
              className="bg-secondry hover:bg-secondry/80 px-4 py-2 text-white rounded-md"
            >
              Đăng bình luận
            </button>
          </div>
        </div>
      )}

      {/* Nested Replies */}
      <div className="mt-4 ml-12 space-y-4">
        {comment.replies.map((reply) => (
          <CommentItem
            key={reply.id}
            comment={reply}
            onLike={(id, isLike) => onLike(id, isLike, true, comment.id)}
            onReplySubmit={(parentId, content) =>
              onReplySubmit(comment.id, content, parentId || reply.id)
            }
            formatDate={formatDate}
          />
        ))}
      </div>
    </div>
  );
};

export default NewComment;
