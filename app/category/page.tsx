"use client";

import Games from "@/components/common/games/Games";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const filterCategory = [
  {
    id: "sortBy",
    category: "sắp xếp",
    options: ["chọn mục sắp xếp", "Game mới nhất", "Game nhiều lượt xem"],
  },
  {
    id: "configuration",
    category: "cấu hình",
    options: ["chọn cấu hình", "Cấu hình Yếu", "Cấu hình Vừa", "Cấu hình Mạnh"],
  },
  {
    id: "ram",
    category: "RAM",
    options: ["chọn số lượng RAM", "Dưới 4GB", "Dưới 8GB", "Dưới 16GB"],
  },
  {
    id: "storage",
    category: "dung lượng",
    options: ["chọn dung lượng", "Dưới 10GB", "Dưới 20GB", "Dưới 50GB"],
  },
  {
    id: "numPeople",
    category: "số người",
    options: ["chọn số người", "Chơi đơn", "Nhiều người chơi"],
  },
  {
    id: "language",
    category: "ngôn ngữ",
    options: ["chọn ngôn ngữ", "Tiếng Việt", "Tiếng Anh", "Ngôn ngữ khác"],
  },
  {
    id: "platform",
    category: "nền tảng",
    options: ["chọn hệ điều hành", "ưindows", "Mac OS X", "SteamOS + Linux"],
  },
  {
    id: "usage",
    category: "sử dụng",
    options: ["chọn đầu vào", "VR", "tay cầm", "bàn phím / Chuột"],
  },
];

const gameInfo = [
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "Japanese Rail Sim Hakone Town of Natural BHS Việt Hóa",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "./game",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: false,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
    tag: [
      { tagName: "Game", tagLink: "#" },
      { tagName: "Game 2D", tagLink: "#" },
      { tagName: "Game thủ thành", tagLink: "#" },
      { tagName: "Game giả lập", tagLink: "#" },
      { tagName: "Game chiến thuật", tagLink: "#" },
      { tagName: "Game quản lý", tagLink: "#" },
      { tagName: "Game sắp phát hành", tagLink: "#" },
      { tagName: "Game mô phỏng", tagLink: "#" },
      { tagName: "Game xây dựng", tagLink: "#" },
    ],
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: false,
  },
];

const page = () => {
  type Filters = {
    sortBy: string;
    numPeople: string;
    configuration: string;
    language: string;
    ram: string;
    platform: string;
    storage: string;
    usage: string;
  };

  const [filters, setFilters] = useState<Filters>({
    sortBy: "",
    numPeople: "",
    configuration: "",
    language: "",
    ram: "",
    platform: "",
    storage: "",
    usage: "",
  });

  const [isExpand, setIsExpand] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="py-4">
      <p className="flex items-baseline gap-1">
        <a href="/" className="text-secondry">
          Trang chủ
        </a>
        <FontAwesomeIcon icon={faAnglesRight} className="size-3" />
        <span>Game Việt Hóa</span>
      </p>
      <div
        id="span"
        className="relative flex items-center justify-between my-6"
      >
        <span className=" pr-5 text-2xl font-bold capitalize bg-gray-200 dark:bg-gray-900">
          Games Việt Hóa
        </span>
      </div>
      <div className="px-7 lg:flex items-center w-full py-4 bg-white dark:bg-dark-bg-primary dark:border border-dark-border rounded-lg gap-2.5">
        <div className="gap-x-6 gap-y-2 lg:grid-cols-4 grid w-full">
          {filterCategory.map((filter, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className=" text-sm font-semibold">{filter.category}</span>
              <select
                name={filter.id}
                onChange={handleChange}
                value={filters[filter.id as keyof Filters]}
                className="border py-1.5 px-2.5 rounded-md text-sm w-[264px] lg:w-[150px] appearance-none border-dark-border bg-white dark:text-black"
              >
                {filter.options.map((option, index) => (
                  <option key={index} value={option} className="">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <button className="px-10 py-2.5 mt-4 lg:mt-0 block bg-secondry uppercase w-full lg:w-fit text-white text-sm font-semibold rounded-md hover:bg-primary">
          Lọc
        </button>
      </div>
      <section className="my-6">
        <div className="lg:grid-cols-4 grid gap-6">
          {gameInfo.map((game, index) => (
            <Games
              img={game.img}
              dowloadLink={game.dowloadLink}
              name={game.name}
              rate={game.rate}
              tag={game.tag}
              update={game.update}
              video={game.video}
              key={index}
            />
          ))}
        </div>
      </section>
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
          <button onClick={() => setIsExpand(!isExpand)} className="uppercase">
            {isExpand == true ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
