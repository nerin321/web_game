"use client";
import Pagination from "@/components/common/pagination/Pagination";
import Trick from "@/components/common/trick/Trick";
import GameUpdate from "@/components/home/gameNewRight/GameUpdate";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const blogList = [
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "./blog-detail",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/ca/9f/f4/ca9ff4fb5e35a0d98dabca4ae7c7e1b2.jpg",
    name: "Cách khắc phục lỗi “RPC server is unavailable” trên máy tính",
    link: "#",
  },
];
const tabList = {
  games: [
    {
      id: "app",
      name: "Phần Mềm Mới",
      featured: [
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
      ],
    },
    {
      id: "new",
      name: "Game Mới",
      featured: [
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
        {
          name: "Homeworld 3 Việt hóa",
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1840080/header.jpg?t=1729879364",
          link: "#",
          date: "11/11/2024",
        },
      ],
    },
  ],
};

const Page = () => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <main className="py-3">
      <p className="flex items-baseline gap-1">
        <a href="/" className="text-secondry">
          Trang chủ
        </a>
        <FontAwesomeIcon icon={faAnglesRight} className="size-3" />
        <span>Blogs</span>
      </p>
      <div
        id="span"
        className="relative flex items-center justify-between my-6"
      >
        <span className="dark:bg-gray-900 pr-5 text-2xl font-bold capitalize bg-gray-200">
          Thủ thuật
        </span>
      </div>
      <article className="lg:grid lg:grid-cols-3 lg:space-y-0 relative block gap-5 space-y-5">
        <section className=" col-span-2">
          <div className="lg:grid-cols-3 grid grid-cols-2 gap-6">
            {blogList.map((blog, index) => (
              <Trick
                img={blog.img}
                link={blog.link}
                name={blog.name}
                key={index}
              />
            ))}
          </div>
          <Pagination currentPage={1} totalPages={5} />
        </section>
        <section className="h-fit sticky top-0">
          <GameUpdate tabList={tabList} />
        </section>
      </article>
      <div className=" dark:bg-dark-bg-primary p-4 mt-8 font-medium bg-white border-l-4 border-orange-600 rounded">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione
          iure magni quibusdam dignissimos, quo maiores sed. Rerum tempore animi
          magni est error ipsa a, aut dolorem praesentium suscipit beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione
          iure magni quibusdam dignissimos, quo maiores sed. Rerum tempore animi
          magni est error ipsa a, aut dolorem praesentium suscipit beatae.
        </p>
        <div className={`${isExpand == true ? `block` : `hidden`}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>Xin cảm ơn</p>
        </div>
        <div className="flex justify-center text-red-500">
          <button onClick={() => setIsExpand(!isExpand)}>
            {isExpand == true ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
