"use client";
import React, { useEffect } from "react";
import FlyoutMenu from "@/components/common/flyoutMenu/FlyoutMenu";
import Nav from "@/components/common/nav/Nav";
import {
  faCommentDots,
  faHeart,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FlyoutMess from "../flyoutMenu/flyoutMess";
import { useTheme } from "next-themes";

const Header = () => {
  const [isLight, setIsLight] = useState<boolean | null>(null); // Để null để xác định trạng thái chưa được load
  const [isThemeReady, setIsThemeReady] = useState(false); // Đảm bảo trạng thái đã đồng bộ

  // Lấy trạng thái từ LocalStorage khi tải trang
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light"; // Mặc định là 'light'
    setIsLight(storedTheme === "light");
    setIsThemeReady(true); // Đánh dấu trạng thái đã sẵn sàng
    document.documentElement.className = storedTheme; // Cập nhật className của <html>
  }, []);

  // Cập nhật theme và LocalStorage khi người dùng chuyển đổi
  useEffect(() => {
    if (isLight !== null) {
      const theme = isLight ? "light" : "dark";
      document.documentElement.className = theme; // Cập nhật className
      localStorage.setItem("theme", theme); // Lưu vào LocalStorage
    }
  }, [isLight]);

  if (!isThemeReady) return null; // Chờ cho đến khi trạng thái theme được đồng bộ

  return (
    <div>
      <div className="lg:flex items-center justify-between">
        <div className="flex items-center justify-center text-sm font-medium">
          <FontAwesomeIcon icon={faHeart} className="size-4 text-red-600" />
          <p>
            <a href="#" className="text-secondry font-bold uppercase">
              Donate{" "}
            </a>
            tải tốc độ cao chỉ 1000 donate/1game
          </p>
        </div>
        <div className="w-full border border-black flex flex-nowrap rounded-md max-w-[415px]">
          <input
            type="text"
            className="rounded-s-md w-full pl-3 dark:bg-[#262a30] bg-white"
            placeholder="Tìm kiếm game..."
          />
          <button className="size-10 rounded-e-md flex items-center justify-center bg-black">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="size-5 text-white"
            />
          </button>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-fit flex gap-1 p-1 bg-gray-400 rounded-full">
            <button
              onClick={() => setIsLight(true)}
              className={`${
                isLight ? "bg-white text-secondry" : "bg-none text-gray-700"
              } rounded-full flex items-center justify-center p-1`}
            >
              <FontAwesomeIcon icon={faSun} className="size-5 " />
            </button>
            <button
              onClick={() => setIsLight(false)}
              className={`${
                !isLight ? "bg-black text-orange-600" : "bg-none text-gray-700"
              } rounded-full flex items-center justify-center p-1`}
            >
              <FontAwesomeIcon icon={faMoon} className="size-5 " />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <FlyoutMess />
            <FlyoutMenu />
            <a href="#" className="text-xs font-bold uppercase">
              Đăng ký Đăng nhập
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-b">
        <div className="flex items-center gap-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1728384290756-4f884c9c6812?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="size-8 object-cover rounded-full"
          />
          <p className="text-3xl font-extrabold text-red-900">
            Daominhha
            <span className="text-2xl text-gray-300">.net</span>
          </p>
        </div>
        <div>
          <Nav />
        </div>
      </div>
      <div className=" flex py-4 border-t border-b border-gray-500">
        <FontAwesomeIcon icon={faVolumeHigh} className="size-5 " />
        <div className="w-full overflow-hidden">
          <div className="marquee flex items-center gap-5">
            <p>Đây là dòng chữ chạy ngang màn hình!</p>
            <p>Đây là dòng chữ chạy ngang màn hình!</p>
            <p>Đây là dòng chữ chạy ngang màn hình!</p>
            <p>Đây là dòng chữ chạy ngang màn hình!</p>
            <p>Đây là dòng chữ chạy ngang màn hình!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
