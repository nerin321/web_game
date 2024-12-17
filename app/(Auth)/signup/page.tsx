import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="flex items-baseline gap-1 py-4">
        <a href="./" className="text-secondry dark:text-white">
          Trang chủ
        </a>
        <FontAwesomeIcon icon={faAnglesRight} className="size-3" />
        <span>Đăng ký thành viên</span>
      </p>
      <div
        className="relative flex items-center justify-between mb-6"
        id="span-item"
      >
        <div className=" lg:pr-5 text-2xl font-bold bg-gray-200 dark:bg-gray-900 flex items-center gap-1.5">
          <p>Đăng ký thành viên</p>
        </div>
      </div>
    </div>
  );
};

export default page;
