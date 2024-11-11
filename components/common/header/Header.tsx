"use client";
import React from "react";
import FlyoutMenu from "@/components/common/flyoutMenu/FlyoutMenu";
import Nav from "@/components/common/nav/Nav";
import {
  faHeart,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isLight, setIsLight] = useState(true);
  return (
    <div>
      <div className="lg:flex items-center justify-between">
        <div className="flex items-center justify-center text-sm font-medium text-gray-700">
          <FontAwesomeIcon icon={faHeart} className="size-4 text-red-600" />
          <p>
            <a href="#" className="font-bold text-red-600 uppercase">
              Donate{" "}
            </a>
            tải tốc độ cao chỉ 1000 donate/1game
          </p>
        </div>
        <div className="w-full border border-black flex flex-nowrap rounded-md max-w-[415px]">
          <input
            type="text"
            className="rounded-s-md w-full pl-3"
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
              onClick={() => {
                setIsLight(true);
              }}
              className={`${
                isLight ? "bg-white text-orange-600" : "bg-none text-gray-700"
              } rounded-full flex items-center justify-center p-1`}
            >
              <FontAwesomeIcon icon={faSun} className="size-5 " />
            </button>
            <button
              onClick={() => {
                setIsLight(false);
              }}
              className={`${
                !isLight ? "bg-black text-orange-600" : "bg-none text-gray-700"
              } rounded-full flex items-center justify-center p-1`}
            >
              <FontAwesomeIcon icon={faMoon} className="size-5 " />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <FlyoutMenu />
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
