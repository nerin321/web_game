import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const page = () => {
  return (
    <div className="space-y-4">
      <p className="flex items-baseline gap-1 py-4">
        <a href="./" className="text-secondry dark:text-white">
          Trang chủ
        </a>
        <FontAwesomeIcon icon={faAnglesRight} className="size-3" />
        <span>Đăng nhập thành viên</span>
      </p>
      <div>
        <div
          className="relative flex items-center justify-between mb-6"
          id="span-item"
        >
          <div className=" lg:pr-5 text-2xl font-bold bg-gray-200 dark:bg-gray-900 flex items-center gap-1.5">
            <p>Đăng nhập thành viên</p>
          </div>
        </div>
        <form action="#" method="POST" className="space-y-6 w-2/5 mx-auto">
          <div>
            <label htmlFor="email" className="block font-semibold">
              Tên tài khoản hoặc Email *
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block font-semibold">
                Mật khẩu *
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 "
              />
            </div>
          </div>
          <div className="space-x-2 flex items-center">
            <input
              type="checkbox"
              name="auto-login"
              id="autoLogin"
              className="size-4"
            />
            <label htmlFor="auto-login" className="font-semibold text-[#888]">
              Tự động đăng nhập
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-secondry px-3 py-1.5 text-white"
            >
              Đăng nhập
            </button>
            <a
              href=""
              className="flex w-full justify-center rounded-md bg-secondry px-3 py-1.5"
            >
              Đăng ký
            </a>
          </div>
          <div className="text-center">
            <a href="" className="text-[#888] hover:underline">
              Lấy lại mật khẩu?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
