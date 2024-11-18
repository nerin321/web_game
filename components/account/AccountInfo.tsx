import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface UserInfo {
  name: string;
  avatar: string;
}
const AccountInfo: React.FC<UserInfo> = ({ name, avatar }) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <h2 className="text-xl font-bold uppercase py-5">
        <span className="text-secondry">Thông tin</span> tài khoản
      </h2>
      <div className="flex flex-col items-center gap-6">
        <img
          src={avatar}
          alt=""
          className="size-[70px] object-cover rounded-full"
        />
        <div className="text-center space-y-4">
          <p className="font-bold">Xin chào: {name}</p>
          <div className="flex items-center gap-4">
            <button className="px-2.5 text-white bg-secondry rounded flex items-center gap-1">
              <FontAwesomeIcon
                icon={faBookmark}
                className="size-4 text-primary"
              />{" "}
              Lưu bài
            </button>
            <a href="#" className="border border-secondry rounded px-5">
              <FontAwesomeIcon icon={faFacebookF} className="size-4" />
            </a>
            <a href="#" className="border border-secondry rounded px-5">
              <FontAwesomeIcon icon={faXTwitter} className="size-4" />
            </a>
          </div>
          <div>
            <ul className="font-bold divide-y py-1">
              <li className="flex items-center gap-1 justify-center py-1">
                <FontAwesomeIcon icon={faGamepad} className="size-5" />
                <a href="#" className="hover:text-secondry">
                  Game đã mua
                </a>
              </li>
              <li className="flex items-center gap-1 justify-center py-1">
                <FontAwesomeIcon icon={faGamepad} className="size-5" />
                <a href="#" className="hover:text-secondry">
                  Lịch sử xem game
                </a>
              </li>
              <li className="flex items-center gap-1 justify-center py-1">
                <FontAwesomeIcon icon={faGamepad} className="size-5" />
                <a href="#" className="hover:text-secondry">
                  Lịch Sử Nạp VIP
                </a>
              </li>
              <li className="flex items-center gap-1 justify-center py-1">
                <FontAwesomeIcon icon={faGamepad} className="size-5" />
                <a href="#" className="hover:text-secondry">
                  Bài đã lưu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
