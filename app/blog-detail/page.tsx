import AccountInfo from "@/components/account/AccountInfo";
import React from "react";

const blogDetailProps = {
  title: "Steam và những điều cần biết khi sử dụng",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvPW3HsfNHdZmmAf3rFIjAxMeeahmV7y2wA&s",
};

const userInfo = {
  userName: "User 1",
  avatar:
    "https://i.pinimg.com/736x/bd/2e/0c/bd2e0c554128568300f3de254b6fbb73.jpg",
};

const page = () => {
  return (
    <main>
      <h2>{blogDetailProps.title}</h2>
      <article className="grid grid-cols-3 gap-6">
        <section className="col-span-2"></section>
        <section>
          <AccountInfo name={userInfo.userName} avatar={userInfo.avatar} />
        </section>
      </article>
    </main>
  );
};

export default page;
