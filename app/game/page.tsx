"use client";
import Rating from "@/components/common/rating/Rating";
import SlideShow from "@/components/common/slideShow/SlideShow";
import LinkButton from "@/components/game/linkButton/LinkButton";
import VideoTab from "@/components/game/videoTAB/VideoTab";
import {
  faAnglesRight,
  faBars,
  faBug,
  faCalendarDays,
  faCircleCheck,
  faCircleInfo,
  faClipboard,
  faFile,
  faGem,
  faImage,
  faNewspaper,
  faQuoteLeft,
  faTag,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmblaOptionsType } from "embla-carousel";
import React, { useState } from "react";
import GameUpdate from "@/components/home/gameNewRight/GameUpdate";
import AccountInfo from "@/components/account/AccountInfo";
import NewComment from "@/components/common/comment/NewComment";

const gameDetail = {
  name: "Japanese Rail Sim Hakone Town of Natural BHS Việt Hóa",
  dateUpdate: "11/11/2024",
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
  storage: "26GB",
  part: 2,
  ram: "8GB",
  numPeople: "Chơi đơn",
  language: "Tiếng Anh",
  platform: "windows",
  usage: "Bàn phím/ Chuột",
  series: {
    name: "Japanese Rail Sim Hakone Town of Natural BHS",
    href: "#",
  },
  author: { name: "DIXGAME.COM", href: "#" },
  gameImgs: [
    "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3145510/header.jpg",
    "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3145510/ss_4a88be4d806a5ccd875dfdbdbb63a3f1ff5501eb.1920x1080.jpg",
    "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3145510/ss_e27b520d985bd3194ec498e4b2cb736ec4c66085.1920x1080.jpg",
    "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3145510/ss_25a29445c912ab18ab86399cd2452aaaafcb56e3.1920x1080.jpg",
  ],
  // video: "https://youtu.be/omdCX7J0_6E",
};

const imgs = [
  "https://images.unsplash.com/photo-1616565441366-34a5fe33fe42",
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
  "https://images.unsplash.com/photo-1626240130051-68871c71de47",
  "https://images.unsplash.com/photo-1626686707291-7bda5c45e8a8",
];

const bugList = [
  "Hướng dẫn cài đặt việt hóa của Daominhha.net và Dixgames.com",
  "Hướng dẫn tải Google drive bị giới hạn tải 24h thành công 100%",
  "Tổng hợp những lỗi về LINK VIP & cách khắc phục",
  "Hướng dẫn khắc phục lỗi Full 100% Disk trên Windows 8, 10",
  "Lỗi ngôn ngữ Tiếng Việt khi cài đặt, giải nén chơi Game",
  "Hướng dẫn khắc phục và sửa lỗi VCOMP120.dll",
  "Hướng dẫn khắc phục và sửa lỗi X3DAudio1_7.dll",
  "Hướng dẫn sửa lỗi d3dx9_43.dll trên Windows 10, 8 và 7",
  "Khắc phục lỗi thiếu file VCRUNTIME140.DLL trong Windows",
  "Hướng dẫn sửa lỗi xinput1_3.dll trên Windows 10, 8 và 7",
  "Hướng dẫn Locale Emulator giả lập Locale Nhật Bổn để chơi Game JAP",
  "Cách Fix lỗi “CANNOT WRITE IN GAME FOLDER” Trên Windows 10",
  "Tổng hợp các Lỗi Game trên Windows 7 và 10",
  "Hướng dẫn sửa lỗi 0xc000007b Trong Windows 10, 8 và 7",
  "Hướng dẫn sử dụng AIO RUNTIMES – Cài Đặt Tự Động Các Thành Phần Hỗ Trợ Game",
  "Tổng hợp những phần mềm cần thiết để chơi Game",
  "7 Cách đơn giản Khắc phục lỗi ISDone.DLL / UnARC.DLL trên Windows 7/10",
  "Hướng dẫn refresh link tải Game cho Internet Download Manager (IDM) và EagleGet",
  "Hướng dẫn Mount ổ đĩa Ảo và Cài đặt Game từ file ISO",
  "Hướng dẫn khắc phục lỗi msvcr100.dll",
];

const userInfo = {
  userName: "User 1",
  avatar:
    "https://i.pinimg.com/736x/bd/2e/0c/bd2e0c554128568300f3de254b6fbb73.jpg",
};

const historyUpdate = [
  {
    date: "29/09/2024",
    title: "File Việt Hóa - Việt Hóa Daominhha.net",
  },
  {
    date: "29/09/2024",
    title: "File Việt Hóa - Việt Hóa Daominhha.net",
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

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Page() {
  const [isExpand, setIsExpand] = useState(true);
  return (
    <main className="py-3 space-y-6">
      <p className="flex items-baseline gap-1">
        <a href="./" className="text-secondry">
          Trang chủ
        </a>
        <FontAwesomeIcon icon={faAnglesRight} className="size-3" />
        <a href="./category" className="text-secondry">
          Game
        </a>
        <FontAwesomeIcon icon={faAnglesRight} className="size-3" />
        <span>{gameDetail.name}</span>
      </p>
      <h1 className=" dark:text-secondry text-3xl font-bold">
        Tải game {gameDetail.name} - PC download full
      </h1>
      <article className="lg:grid lg:grid-cols-3 lg:relative lg:space-y-0 block gap-6 space-y-6">
        <section className="lg:col-span-2 space-y-6">
          <div>
            <div
              className="relative flex items-center justify-between mb-6"
              id="span-item"
            >
              <div className=" lg:pr-5 text-2xl font-bold bg-gray-200 dark:bg-black w-[400px] lg:w-[610px] flex items-center gap-1.5">
                <FontAwesomeIcon icon={faImage} className="size-6" />
                <p className="truncate">
                  <span className="uppercase">ảnh game</span> {gameDetail.name}{" "}
                  - PC download full
                </p>
              </div>
            </div>
            <SlideShow
              slides={SLIDES}
              options={OPTIONS}
              imgs={imgs}
              button={false}
            />
          </div>
          <div>
            <div
              className="relative flex items-center justify-between mb-6"
              id="span-item"
            >
              <div className="lg:pr-5 text-2xl font-bold bg-gray-200 dark:bg-black w-[420px] lg:w-[610px] flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCircleInfo} className="size-6" />
                <p className="truncate">Chi tiết game {gameDetail.name}</p>
              </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-5">
              <ul className="rounded-xl border-primary dark:bg-dark-bg-primary p-4 space-y-3 bg-white border">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faNewspaper} className="size-5" />
                  <p>
                    <b>Tên:</b> {gameDetail.name}
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarDays} className="size-5" />
                  <p>
                    <b className="normal-case">Ngày update:</b>{" "}
                    {gameDetail.dateUpdate}
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faTag} className="size-5" />
                  <span>
                    <b className="normal-case">Thể loại: </b>
                    {gameDetail.tag.map((tag, index) => (
                      <span key={index}>
                        {index === 0 ? "" : ", "}
                        <a href={tag.tagLink} className="text-secondry">
                          {tag.tagName}
                        </a>
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faFile} className="size-5" />
                  <p>
                    <b className="normal-case">Dung lượng:</b>{" "}
                    {gameDetail.storage}
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClipboard} className="size-5" />
                  <p>
                    <b className="normal-case">Số part:</b> {gameDetail.part}
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClipboard} className="size-5" />
                  <p>
                    <b className="normal-case">Kích thước RAM:</b>{" "}
                    {gameDetail.ram}
                  </p>
                </li>
              </ul>
              <ul className="border-primary rounded-xl h-fit dark:bg-dark-bg-primary p-4 normal-case bg-white border">
                <li className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="size-5" />
                  <p>
                    <b>Số người chơi:</b> {gameDetail.numPeople}
                  </p>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="size-5" />
                  <p>
                    <b>Ngôn ngữ:</b> {gameDetail.language}
                  </p>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="size-5" />
                  <p>
                    <b>Hệ điều hành:</b> {gameDetail.platform}
                  </p>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="size-5" />
                  <p>
                    <b>Chơi bằng:</b> {gameDetail.usage}
                  </p>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="size-5" />
                  <span>
                    <b>Seri game:</b>{" "}
                    <a href={gameDetail.series.href} className="text-secondry">
                      {gameDetail.series.name}
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <FontAwesomeIcon icon={faCircleCheck} className="size-5" />
                  <span>
                    <b>Tác giả:</b>{" "}
                    <a href={gameDetail.author.href} className="text-secondry">
                      {gameDetail.author.name}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div
              className="relative flex items-center justify-between mb-6"
              id="span"
            >
              <div className="text-secondry dark:bg-dark-bg-primary px-5 ml-5 font-bold text-center bg-gray-200">
                <FontAwesomeIcon icon={faQuoteLeft} className="size-10" />
              </div>
            </div>
            <div className="p-2.5 bg-primary dark:bg-dark-bg-primary text-white font-medium rounded-md">
              <div className="flex items-center justify-between">
                <p>Nội dung bài</p>
                <button
                  className="px-2 py-1 border border-white rounded-md"
                  onClick={() => setIsExpand(!isExpand)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              {isExpand ? (
                <div className=" ease-linear">
                  <div className="hover:text-secondry">
                    1.{" "}
                    <a href="#" className="hover:underline">
                      Giới thiệu game{" "}
                      <p className="hover:underline inline">
                        {gameDetail.name}
                      </p>
                    </a>
                  </div>
                  <div className="hover:text-secondry">
                    2.{" "}
                    <a href="#" className="hover:underline">
                      Hình ảnh game{" "}
                      <p className="hover:underline inline">
                        {gameDetail.name}
                      </p>
                    </a>
                  </div>
                  <div className="hover:text-secondry">
                    3.{" "}
                    <a href="#" className="hover:underline">
                      Quy trình cài đặt Game từ A-Z
                    </a>
                  </div>
                  <div className="hover:text-secondry">
                    4.{" "}
                    <a href="#" className="hover:underline">
                      Hướng dẫn cài đặt game{" "}
                      <p className="hover:underline inline">
                        {gameDetail.name}
                      </p>
                    </a>
                  </div>
                  <div className=" pl-5">
                    <div className="hover:text-secondry">
                      4.1{" "}
                      <a href="#" className="hover:underline">
                        Đối với bộ game là file cài sẵn
                      </a>
                    </div>
                    <div className="hover:text-secondry">
                      4.2{" "}
                      <a href="#" className="hover:underline">
                        Đối với bộ game là file iso
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <div>
              <div className="border-secondry flex items-end gap-3 border-b-2">
                <FontAwesomeIcon
                  icon={faGem}
                  className="size-5 px-2.5 pt-2 bg-secondry text-white"
                />
                <p className=" font-bold truncate w-[350px] lg:normal-case lg:w-full">
                  Giới thiệu game {gameDetail.name}
                </p>
              </div>
              <div className="space-y-7 my-7 ">
                <p className="font-semibold">
                  Tải game {gameDetail.name} Việt Hóa miễn phí link Google Drive
                  tốc độ cao | Free download {gameDetail.name} Việt Hóa full PC
                </p>
                <p>
                  Điểm dừng tiếp theo là Hakone! Hãy đến vận hành Tàu hỏa Hakone
                  Tozan, một chuyến tàu hỏa leo núi nổi tiếng nằm ở Hakone, một
                  trong những điểm đến du lịch hàng đầu của Nhật Bản! Trải
                  nghiệm mùa xuân và mùa thu ở Hakone!
                </p>
                <p className="font-semibold">
                  Một trò chơi vận hành tàu hỏa lấy bối cảnh ở Hakone, một thị
                  trấn giàu văn hóa Nhật Bản!
                </p>
                <p>
                  Hakone là một điểm đến du lịch nổi tiếng, giàu thiên nhiên và
                  văn hóa Nhật Bản đích thực. Trở thành người vận hành tàu hỏa
                  của Đường sắt Hakone Tozan, một tuyến đường sắt leo núi nổi
                  tiếng chạy qua những ngọn núi của Hakone. <br /> Trải nghiệm
                  cảm giác hồi hộp khi đi tàu hỏa leo núi qua những cảnh quay
                  thực tế!
                </p>
                <p>
                  Thưởng thức những cảnh quay thú vị từ bên trong tàu khi tàu
                  chạy qua những con dốc đứng và những khúc cua gấp. Điểm hấp
                  dẫn là trải nghiệm vận hành mạnh mẽ chỉ có thể đạt được thông
                  qua những cảnh quay thực tế được quay từ một chuyến tàu hỏa
                  Nhật Bản thực sự.
                </p>
                <p className="font-semibold">
                  Đầy đủ thông tin du lịch Hakone!
                </p>
                <p>
                  Có rất nhiều thông tin du lịch về Hakone, bao gồm tuyến đường
                  Hakone nổi tiếng có tên là Hakone Golden Course, nơi bạn có
                  thể trải nghiệm đi cáp treo, cáp treo và tàu cướp biển trên Hồ
                  Ashinoko!
                </p>
                <p>
                  Thưởng thức hình ảnh và video về các điểm du lịch nổi tiếng
                  của Nhật Bản như núi Phú Sĩ, suối nước nóng và đền thờ!
                </p>
              </div>
            </div>
            <div>
              <div className="border-secondry flex items-end gap-3 border-b-2">
                <FontAwesomeIcon
                  icon={faGem}
                  className="size-5 px-2.5 pt-2 bg-secondry text-white"
                />
                <p className=" font-bold truncate w-[350px] lg:normal-case lg:w-full">
                  Hình ảnh game {gameDetail.name}
                </p>
              </div>
              <div className="lg:px-7 py-7 space-y-2">
                {gameDetail.gameImgs.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt="" className="object-cover w-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-7">
              <div className="border-secondry flex items-end gap-3 border-b-2">
                <FontAwesomeIcon
                  icon={faGem}
                  className="size-5 px-2.5 pt-2 bg-secondry text-white"
                />
                <p className=" font-bold truncate w-[350px] lg:normal-case lg:w-full">
                  Quy trình cài đặt Game từ A-Z
                </p>
              </div>
              <div>
                <div className="mb-4 space-y-6">
                  <p>
                    ĐÂY LÀ QUY TRÌNH BẮT BUỘC PHẢI LÀM THEO NẾU CÁC BẠN KHÔNG
                    MUỐN BỊ LỖI ISDONE.DLL và CÁC LỖI VẶT KHÁC. (CÁC BẠN NHẤP
                    TRỰC TIẾP VÀO CÁC HÀNG ĐỂ XEM)
                  </p>
                  <ul className="pl-10 font-medium list-decimal">
                    <li>
                      <a href="#" className="text-secondry">
                        ƯU TIÊN KIỂM TRA CẤU HÌNH TRƯỚC KHI TẢI GAME.
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-secondry">
                        Tắt Windows Defender bằng phần mềm hoặc bất kỳ antivirus
                        nào khác.
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-secondry">
                        Cài cài đặt bổ sung các phần mềm bổ trợ chơi Game.
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-secondry">
                        HƯỚNG DẪN Tải, Giải nén và Setup GAME.
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <p className="font-bold uppercase">Lưu ý:</p>
                  <ol className="pl-10 list-disc">
                    <li>
                      Đường dẫn, thư mục và ổ đĩa không dùng kí tự có dấu hoặc
                      Tiếng việt.
                    </li>
                    <li>
                      Không dùng Windows Tiếng Việt, nếu không muốn gặp phải lỗi
                      khi chơi Việt Hoá; các lỗi về chạm, trùng phím.
                    </li>
                    <li>
                      Khi tải Game, File có bao nhiu PART vui lòng tải đầy đủ,
                      bỏ chung vào 1 thư mục. Chuột phải vào 1 File chọn Extract
                      Here, Winrar sẽ auto giải nén hết các Part.
                    </li>
                    <li>
                      Một số File chỉ cần Giải nén ra là chơi, nên không cần
                      tiềm File setup.exe để cài đặt hoặc kiếm thư mục CR4CK để
                      chép CR4CK nhe.
                    </li>
                    <li>
                      Nếu Game có chơi Online thì bắt buộc phải cài SPACEWAR: Mở
                      Steam, mở RUN lên (Windows +R) gõ “steam://install/480” để
                      cài.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="my-7 space-y-7">
            <div className="border-secondry flex items-end gap-3 border-b-2">
              <FontAwesomeIcon
                icon={faGem}
                className="size-5 px-2.5 pt-2 bg-secondry text-white"
              />
              <p className=" font-bold truncate w-[350px] lg:normal-case lg:w-full">
                Hướng dẫn cài đặt Game {gameDetail.name}
              </p>
            </div>
            <div className="space-y-7">
              <strong className="text-secondry">
                LƯU Ý: Tắt Diệt Virus Đúng Cách Trước Khi Tải Và Cài Đặt Game
              </strong>
              <ol className="ml-10 list-disc">
                <li>
                  Tải full Part file game về máy tính, bỏ vào chung 1 thư mục.
                </li>
                <li>
                  Sau đó giải nén toàn bộ tệp tin bằng Winrar{" "}
                  <span className="text-secondry font-semibold">
                    *đọc kỹ bảng lưu ý pass bên dưới link tải.
                  </span>
                </li>
                <li>
                  Sau khi giải nén, chạy file “
                  <span className="text-secondry font-semibold">
                    Japanese Rail Sim Hakone Town of Natural Beauty and Hot
                    Springs.exe
                  </span>
                  ” bằng quyền “administrator” và chơi game.
                </li>
              </ol>
            </div>
          </div>
          <div className="space-y-7">
            <div className="border-secondry flex items-end gap-3 border-b-2">
              <FontAwesomeIcon
                icon={faGem}
                className="size-5 px-2.5 pt-2 bg-secondry text-white"
              />
              <p className=" font-bold truncate w-[350px] lg:normal-case lg:w-full">
                Hướng dẫn cài đặt việt hóa {gameDetail.name} -Daominhha.net
              </p>
            </div>
            <div className="space-y-7">
              <ol className="ml-10 list-disc">
                <li>
                  Tắt diệt virus, tải{" "}
                  <span className="text-secondry font-semibold">
                    File Việt Hóa – Daominhha.net
                  </span>{" "}
                  về máy và giải nén
                </li>
                <li>Copy toàn bộ file việt hóa paste vào folder game</li>
                <li>
                  Các bạn nắm kéo file “
                  <span className="text-secondry font-semibold">
                    Japanese Rail Sim Hakone Town of Natural Beauty and Hot
                    Springs.exe
                  </span>
                  ” (cái file mà để mấy bạn mở game lên chơi ấy) – thả vào cái
                  file tên “
                  <span className="text-secondry font-semibold">
                    SetupReiPatcherAndAutoTranslator.exe
                  </span>
                  “.
                </li>
                <li>
                  Lúc này nếu làm đúng sẽ có 1 bảng CMD màu đen hiện lên và kêu
                  các bạn “
                  <span className="text-secondry font-semibold">
                    click any key to exit
                  </span>
                  “, lúc này bấm đại phím nào đó cũng được thì bảng CMD sẽ tắt
                  xuống, đồng thời tạo thêm 1 file “
                  <span className="text-secondry">Game.exe</span>” nữa nhưng có
                  thêm dòng chữ “(
                  <span className="text-secondry">Patch and Run</span>)”
                </li>
                <li>
                  Lúc này các bạn chỉ việc chạy cái file “
                  <span className="text-secondry font-semibold">
                    TênGame(Patch and Run).exe
                  </span>
                  ” là game sẽ chơi được.
                </li>
              </ol>
              <p>
                LƯU Ý: Vì đây là tool auto dịch nên có thể vài game sẽ không thể
                hoạt động 100% vì dev có thể thay đổi 1 số file hệ thống làm
                tool ko hoạt động được, các bạn lưu ý giúp mình nha.
              </p>
              <p className="text-secondry text-base font-semibold">
                Lưu ý trước khi cài đặt việt hóa
              </p>
              <ol className="ml-10 list-disc">
                <li>
                  Việt hóa được thực hiện bởi{" "}
                  <span className="text-secondry font-semibold">
                    Daominhha.net
                  </span>
                </li>
                <li>
                  Đây là bản dịch bằng <strong>GOOGLE DỊCH</strong> – Bạn chơi
                  tới đâu dịch tới đó , nên cần có internet để chơi game
                </li>
              </ol>
            </div>
          </div>
          <div className="border border-dashed p-2.5 my-2.5 border-primary rounded-md">
            <p>
              Bài viết "Japanese Rail Sim Hakone Town of Natural BHS Việt Hóa"
              thuộc chuyên mục{" "}
              {gameDetail.tag.map((tag, index) => (
                <span key={index}>
                  {index === 0 ? "" : ", "}
                  <a href={tag.tagLink} className="text-secondry font-medium">
                    {tag.tagName}
                  </a>
                </span>
              ))}{" "}
              - Trân trọng cảm ơn Bạn đam mê game đã gắn bó với{" "}
              <a href="" className="text-secondry font-medium">
                Daominhha.net & Dixgames.com
              </a>{" "}
              trong suốt thời gian qua. Bạn có thể donate ủng hộ chúng tôi bằng
              cách{" "}
              <a href="" className="text-secondry font-medium">
                NẠP VIP
              </a>{" "}
              để tải link tốc độ chỉ với 1000 donate / 1 game trong thời hạn 3
              tháng. Chúc Bạn chơi GAME vui vẻ! Nếu cần hỗ trợ gì các bạn có thể
              truy cập nhóm của chúng tôi để được hỗ trợ tốt nhất hoặc comment
              bên dưới bài viết chúng tôi sẽ hỗ trợ bạn .
            </p>
          </div>
          <div>
            <VideoTab />
          </div>
          <div className="dark:bg-dark-bg-primary p-4 space-y-6 text-sm bg-white rounded-lg">
            <div className="relative z-10" id="span">
              <div className="w-fit dark:bg-dark-bg-primary pr-5 text-xl font-bold bg-white">
                <p>Link tải game {gameDetail.name}</p>
              </div>
            </div>
            <div className="divide-dashed divide-primary divide-y">
              <div className="divide-dashed divide-primary grid grid-cols-5 divide-x">
                <div className="lg:col-span-2 uppercase pr-1.5 font-semibold">
                  Video hướng dẫn cài đặt game {gameDetail.name}
                </div>
                <div className="flex items-center justify-center">
                  03/10/2024
                </div>
                <div className="col-span-3 lg:col-span-2 flex items-center px-5 py-2.5">
                  <LinkButton title="xem video hướng dẫn" icon link="#" />
                </div>
              </div>
              <div className="divide-dashed divide-primary grid grid-cols-5 divide-x">
                <div className="lg:col-span-2 uppercase pr-1.5 font-semibold">
                  Video hướng dẫn cài đặt Việt hóa game {gameDetail.name}
                </div>
                <div className="flex items-center justify-center">
                  03/10/2024
                </div>
                <div className="col-span-3 lg:col-span-2 flex items-center px-5 py-2.5">
                  <LinkButton title="xem video hướng dẫn" icon link="#" />
                </div>
              </div>
              <div className="divide-dashed divide-primary grid grid-cols-5 divide-x">
                <div className="lg:col-span-2 pr-1.5 font-semibold">
                  {gameDetail.name} (ID: 1741852779)
                </div>
                <div className="flex items-center justify-center">
                  03/10/2024
                </div>
                <div className="col-span-3 lg:col-span-2 flex items-center px-5 py-2.5 gap-3">
                  <LinkButton title="part 1" link="#" />
                  <LinkButton title="part 2" link="#" />
                </div>
              </div>
            </div>
          </div>
          <div className="dark:bg-dark-bg-primary p-4 space-y-6 bg-white rounded-lg">
            <div className="relative z-10" id="span">
              <div className="w-fit dark:bg-dark-bg-primary pr-5 text-xl font-bold bg-white">
                <p>Link tải mod game {gameDetail.name}</p>
              </div>
            </div>
            <div className="divide-dashed divide-primary grid grid-cols-5 divide-x">
              <div className="col-span-2 pr-1.5 font-semibold">
                File Việt Hóa - Việt Hóa Daominhha.net
              </div>
              <div className="flex items-center justify-center">03/10/2024</div>
              <div className="col-span-2 flex items-center px-5 py-2.5 gap-3">
                <LinkButton title="Download" link="#" />
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#ffebd7] rounded-xl space-y-5 text-primary font-medium">
            <div className="flex flex-col items-center gap-1">
              <FontAwesomeIcon icon={faCircleInfo} className="size-6 block" />
              <span className="flex items-end uppercase gap-0.5">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="size-6 text-yellow-500"
                />
                <p className="text-xl font-semibold text-black underline">
                  một số lưu ý
                </p>
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="size-6 text-yellow-500"
                />
              </span>
            </div>
            <div className="space-y-4 text-base">
              <div>
                <p className="text-secondry pb-4 text-xl font-semibold text-center">
                  1. MẬT KHẨU GIẢI NÉN FILE :
                </p>
                <ul className="ml-10 list-disc">
                  <li>
                    Đối với file tải có tên{" "}
                    <span className="text-secondry font-semibold">
                      dmh.xxx & daominhha.com.xxx
                    </span>{" "}
                    Mật khẩu giải nén :{" "}
                    <span className="text-secondry font-semibold">
                      daominhha.com
                    </span>
                  </li>
                  <li>
                    Đối với file tải có tên{" "}
                    <span className="text-secondry font-semibold">
                      dixgames.xxx
                    </span>{" "}
                    Mật khẩu giải nén :{" "}
                    <span className="text-secondry font-semibold">
                      dixgames.com
                    </span>
                  </li>
                </ul>
                <p className="text-center">
                  Lưu ý : ( vui lòng gõ mật khẩu vào và chọn hiển thị xem mình
                  có viết đúng ko nhé ) <strong>Dùng winrar từ 5.91</strong> trở
                  lên và <strong>không dùng 7zip giải nén</strong> sẽ bị báo sai
                  mật khẩu . Ae lưu ý : Tuyệt đối không được chứa game trong
                  foder <strong className="text-secondry">CÓ DẤU</strong> nó sẽ
                  xảy ra rất nhiều lỗi trong quá trình chơi game
                </p>
              </div>
              <div>
                <p className="text-secondry pb-4 text-xl font-semibold text-center">
                  2. HƯỚNG DẪN KHẮC PHỤC LỖI TẢI GGD GIỚI HẠN 24H :
                </p>
                <ul className="ml-10 list-disc">
                  <li>
                    Có video hướng dẫn chi tiết ( lưu ý bật 1.1.1.1 lên để tải
                    nếu bị lỗi ko nén được file ) : <br />
                    <a href="#" className="text-secondry">
                      https://daominhha.net/cach-tai-google-drive-24h/
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-secondry pb-4 text-xl font-semibold text-center">
                  3. KHẮC PHỤC TRUY CẬP WEB FILECRYPT BỊ XOAY VÒNG:
                </p>
                <ul className="ml-10 list-disc">
                  <li>
                    Ae dùng tạm{" "}
                    <a href="#" className="text-secondry">
                      https://1.1.1.1/
                    </a>{" "}
                    để truy cập vào nhe bạn , web filecrypt hình như đang bảo
                    trì nên nó bị lỗi và lag đó
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dark:bg-dark-bg-primary p-4 space-y-6 bg-white rounded-lg">
            <h2 className="text-xl font-bold flex items-center gap-2.5">
              <FontAwesomeIcon icon={faBug} className="size-8" />
              {""}
              Các Lỗi Thường Gặp {gameDetail.name}
            </h2>
            <ul className="ml-5 list-disc">
              {bugList.map((item, index) => (
                <li key={index}>
                  <a href="" className="hover:text-secondry">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Rating />
          </div>
          <div className="dark:bg-dark-bg-primary p-4 mt-8 space-y-5 bg-white rounded-lg">
            <div className="relative z-10" id="span">
              <div className="w-fit dark:bg-dark-bg-primary pr-5 text-xl font-bold uppercase bg-white">
                <p>Bình luận</p>
              </div>
            </div>
            <NewComment comments={comments} />
          </div>
        </section>
        <section className="space-y-7 lg:sticky lg:top-0 h-fit">
          <AccountInfo name={userInfo.userName} avatar={userInfo.avatar} />
          <div className="dark:bg-dark-bg-primary overflow-hidden bg-white rounded-md">
            <h4 className="bg-primary text-lg font-bold text-center text-white">
              Lịch sử cập nhật game <br />
              <span className="text-secondry">{gameDetail.name}</span>
            </h4>
            <div className="divide-primary p-4 divide-y">
              {historyUpdate.map((history, index) => (
                <div key={index} className="flex items-center gap-3 py-3">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarDays} className="size-5" />{" "}
                    <p>{history.date}</p>
                  </div>
                  <p className="text-secondry">{history.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <GameUpdate tabList={tabList} />
          </div>
          <div className="dark:bg-dark-bg-primary p-4 bg-white rounded-md">
            <h3 className="pb-6 text-xl font-bold uppercase">
              <span className="text-secondry">mua game</span> bản quyền
            </h3>
            <div className="space-y-7">
              <p>
                Nếu thấy game {gameDetail.name} hay thì nhớ mua bản quyền game
                ủng hộ nhà phát triển các bạn nhé
              </p>
              <button className="bg-secondry hover:bg-primary px-5 py-3 font-semibold text-white uppercase rounded">
                Click vào đây để mua bản quyền
              </button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
