// components/CommentSection.tsx
"use client";
import {
  faClock,
  faReply,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Reply {
  id: number;
  userName: string;
  avatar: string;
  content: string;
  timestamp: Date;
}

interface Comment {
  id: number;
  dateTime: Date;
  userName: string;
  avatar: string;
  content: string;
  replies: Reply[];
}

function dateCustomFormatting(date: Date): string {
  const padStart = (value: number): string => value.toString().padStart(2, "0");
  return `${padStart(date.getDate())}/${padStart(
    date.getMonth() + 1
  )}/${date.getFullYear()} ${padStart(date.getHours())}:${padStart(
    date.getMinutes()
  )}`;
}

const userInfo = {
  userName: "user-name",
  avatar:
    "https://i.pinimg.com/736x/1d/aa/ed/1daaedf28727c2403a01d1fbb7dfac4c.jpg",
};

const CommentSection: React.FC = () => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      dateTime: new Date(),
      avatar:
        "https://i.pinimg.com/736x/c4/f1/63/c4f16394f30703c6800ac6d0f6d6de77.jpg",
      userName: "username1",
      content: "comment mẫu tự động tạo với mục đích có comment",
      replies: [
        {
          id: 1,
          userName: "user1",
          avatar:
            "https://i.pinimg.com/736x/77/f5/49/77f549283dc17e5936efc7091761b0f3.jpg",
          content:
            "comment reply mẫu tự động tạo với mục đích có comment reply",
          timestamp: new Date(),
        },
      ],
    },
  ]);

  const [replyContent, setReplyContent] = useState<string>("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const [score, setScore] = useState(0);

  const updateCounter = (action: string) => {
    if (action === "like") {
      setScore(score + 1);
    } else if (action === "dislike") {
      setScore(score - 1);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        dateTime: new Date(),
        userName: userInfo.userName,
        avatar: userInfo.avatar,
        content: comment,
        replies: [],
      };
      setComments([newComment, ...comments]); // Thêm bình luận mới vào đầu danh sách
      setComment(""); // Xóa nội dung trong ô nhập sau khi gửi
    }
  };
  const handleReplySubmit = (commentId: number) => {
    console.log(replyContent);
    if (replyContent.trim()) {
      const newReply = {
        id: Date.now(),
        userName: userInfo.userName,
        avatar: userInfo.avatar,
        content: replyContent,
        timestamp: new Date(),
      };
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, newReply] }
            : comment
        )
      );
      setReplyContent("");
      setReplyingTo(null); // Đóng phần nhập trả lời
    }
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(e.target.value);
  };

  return (
    <div className="space-y-7 p-4 bg-white border border-white rounded-lg shadow-md">
      <div className="relative z-10" id="span">
        <div className="w-fit pr-5 text-xl font-bold uppercase bg-white">
          <p>Bình luận</p>
        </div>
      </div>

      {/* Phần nhập bình luận */}
      <div className="space-y-6">
        <div className="flex items-center py-2 text-gray-500 border-b border-gray-500">
          <p className="border-primary px-1 border-r-2">
            Bạn đã đăng nhập -{" "}
            <a href="#" className="text-primary">
              {userInfo.userName}
            </a>
          </p>
          <a href="#" className="text-primary px-1">
            Đăng xuất
          </a>
        </div>
        <div className="flex items-start w-full gap-3 mb-4">
          <img
            src={userInfo.avatar}
            alt=""
            className="size-14 object-cover rounded-full"
          />
          <div className="flex flex-col items-end w-full">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Viết bình luận của bạn..."
              className="focus:outline-none focus:border-blue-500 w-full p-2 border border-gray-300 rounded-lg resize-none"
              rows={4}
            />
            <button
              onClick={handleCommentSubmit}
              className="hover:bg-blue-600 px-4 py-2 mt-2 text-white transition-colors bg-blue-500 rounded-lg"
            >
              Gửi bình luận
            </button>
          </div>
        </div>
      </div>

      {/* Phần hiển thị các bình luận */}
      <div>
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id}>
              <div className="flex items-start gap-6">
                <img
                  src={c.avatar}
                  alt=""
                  className="size-14 object-cover rounded-full"
                />
                <div className="w-full">
                  <div className="flex items-center gap-3">
                    <p className="text-secondry font-semibold">{c.userName}</p>
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} className="size-4" />
                      <p className="text-xs">
                        {dateCustomFormatting(c.dateTime)}
                      </p>
                    </span>
                  </div>
                  <p>{c.content}</p>
                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateCounter("like")}>
                        <FontAwesomeIcon
                          icon={faThumbsUp}
                          className="size-4 text-gray-400"
                        />
                      </button>
                      <p>{score}</p>
                      <button onClick={() => updateCounter("dislike")}>
                        <FontAwesomeIcon
                          icon={faThumbsDown}
                          className="size-4 text-gray-400"
                        />
                      </button>
                    </div>
                    <button onClick={() => setReplyingTo(c.id)}>
                      <FontAwesomeIcon
                        icon={faReply}
                        rotation={180}
                        className="size-4 text-gray-400"
                      />{" "}
                      Trả lời
                    </button>
                  </div>
                  {replyingTo === c.id && (
                    <div className="flex items-start w-full gap-3 mb-4">
                      <img
                        src={userInfo.avatar}
                        alt=""
                        className="size-14 object-cover rounded-full"
                      />
                      <div className="flex flex-col items-end w-full">
                        <textarea
                          value={replyContent}
                          onChange={handleReplyChange}
                          placeholder="Viết bình luận của bạn..."
                          className="focus:outline-none focus:border-blue-500 w-full p-2 border border-gray-300 rounded-lg resize-none"
                          rows={4}
                        />
                        <button
                          onClick={() => handleReplySubmit(c.id)}
                          className="hover:bg-blue-600 px-4 py-2 mt-2 text-white transition-colors bg-blue-500 rounded-lg"
                        >
                          Gửi bình luận
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="ml-10 mt-4">
                {c.replies.map((reply) => (
                  <div key={reply.id} className="flex items-start gap-6">
                    <img
                      src={reply.avatar}
                      alt=""
                      className="size-14 object-cover rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-3">
                        <p className="text-secondry font-semibold">
                          {reply.userName}
                        </p>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faClock} className="size-4" />
                          <p className="text-xs">
                            {dateCustomFormatting(reply.timestamp)}
                          </p>
                        </span>
                      </div>
                      <p>{reply.content}</p>
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3">
                          <button onClick={() => updateCounter("like")}>
                            <FontAwesomeIcon
                              icon={faThumbsUp}
                              className="size-4 text-gray-400"
                            />
                          </button>
                          <p>{score}</p>
                          <button onClick={() => updateCounter("dislike")}>
                            <FontAwesomeIcon
                              icon={faThumbsDown}
                              className="size-4 text-gray-400"
                            />
                          </button>
                        </div>
                        <button onClick={() => setReplyingTo(c.id)}>
                          <FontAwesomeIcon
                            icon={faReply}
                            rotation={180}
                            className="size-4 text-gray-400"
                          />{" "}
                          Trả lời
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Chưa có bình luận nào.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
