import React from "react";
import NewComment from "@/components/common/comment/NewComment";

const comments = [
  {
    id: 1,
    dateTime: new Date(),
    userName: "John Doe",
    avatar: "https://via.placeholder.com/150",
    content: "This is a great post! Thanks for sharing.",
    like: 5,
    replies: [
      {
        id: 101,
        dateTime: new Date(),
        userName: "Jane Smith",
        avatar: "https://via.placeholder.com/150",
        content: "I completely agree!",
        like: -1,
        replies: [
          {
            id: 201,
            dateTime: new Date(),
            userName: "Mike Johnson",
            avatar: "https://via.placeholder.com/150",
            content: "Absolutely, well said!",
            like: 5,
            replies: [],
          },
        ],
        replyTo: "John Doe",
      },
    ],
  },
  {
    id: 2,
    dateTime: new Date(),
    userName: "Alice Johnson",
    avatar: "https://via.placeholder.com/150",
    content: "I learned so much from this. Thank you.",
    like: 2,
    replies: [],
  },
];

export default function Home() {
  return (
    <div className="mt-8 bg-white rounded-lg p-4 space-y-5">
      <div className="relative z-10" id="span">
        <div className="w-fit pr-5 text-xl font-bold uppercase bg-white">
          <p>Bình luận</p>
        </div>
      </div>
      <NewComment comments={comments} />
    </div>
  );
}
