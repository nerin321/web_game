"use client";
import AccountInfo from "@/components/account/AccountInfo";
import CommentSection from "@/components/common/comment/CommentSection";
import GameUpdate from "@/components/home/gameNewRight/GameUpdate";
import {
  faArrowRight,
  faBars,
  faGem,
  faQuoteLeft,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const blogDetailProps = {
  title: "Steam và những điều cần biết khi sử dụng",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvPW3HsfNHdZmmAf3rFIjAxMeeahmV7y2wA&s",
};

const userInfo = {
  userName: "User 1",
  avatar:
    "https://i.pinimg.com/736x/bd/2e/0c/bd2e0c554128568300f3de254b6fbb73.jpg",
};

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

const page = () => {
  const [isExpand, setIsExpand] = useState(true);
  return (
    <main className="py-4 space-y-3">
      <h2 className="text-3xl font-bold">{blogDetailProps.title}</h2>
      <article className="grid grid-cols-3 gap-6">
        <section className="col-span-2 space-y-7">
          <img
            src={blogDetailProps.img}
            alt=""
            className="w-full object-cover rounded-lg"
          />
          <div>
            <div
              className="relative flex items-center justify-between mb-6"
              id="span"
            >
              <div className="text-secondry px-5 ml-5 font-bold text-center bg-gray-200">
                <FontAwesomeIcon icon={faQuoteLeft} className="size-10" />
              </div>
            </div>
            <div className="p-2.5 bg-primary text-white font-medium rounded-md">
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
                      Steam là gì?
                    </a>
                  </div>
                  <div className="hover:text-secondry">
                    2.{" "}
                    <a href="#" className="hover:underline">
                      Các tiện ích mà Steam mang lại
                    </a>
                  </div>
                  <div className=" pl-5">
                    <div className="hover:text-secondry">
                      2.1{" "}
                      <a href="#" className="hover:underline">
                        Trò chuyện trên Steam
                      </a>
                    </div>
                    <div className="hover:text-secondry">
                      2.2{" "}
                      <a href="#" className="hover:underline">
                        Trung tâm trò chơi đa dạng
                      </a>
                    </div>
                    <div className="hover:text-secondry">
                      2.3{" "}
                      <a href="#" className="hover:underline">
                        Cộng đồng người dùng đông đảo
                      </a>
                    </div>
                    <div className="hover:text-secondry">
                      2.4{" "}
                      <a href="#" className="hover:underline">
                        Steam Workshop
                      </a>
                    </div>
                    <div className="hover:text-secondry">
                      2.5{" "}
                      <a href="#" className="hover:underline">
                        Trải nghiệm sớm trò chơi sắp ra mắt
                      </a>
                    </div>
                    <div className="hover:text-secondry">
                      2.6{" "}
                      <a href="#" className="hover:underline">
                        Phát sóng trên Steam
                      </a>
                    </div>
                  </div>
                  <div className="hover:text-secondry">
                    3.{" "}
                    <a href="#" className="hover:underline">
                      Những lỗi gặp phải khi sử dụng Steam
                    </a>
                  </div>
                  <div className="pl-5">
                    <div className="hover:text-secondry">
                      3.1{" "}
                      <a href="#" className="hover:underline">
                        Lỗi Treo Logo
                      </a>
                    </div>
                    <div className="hover:text-secondry">
                      3.1{" "}
                      <a href="#" className="hover:underline">
                        Lỗi không đăng nhập được Steam
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
            <h2 className="border-secondry flex items-end gap-3 text-base font-bold border-b-2">
              <div className="px-2.5 pt-2 bg-secondry text-white w-fit">
                <FontAwesomeIcon icon={faGem} className="size-5" />
              </div>
              Steam là gì?
            </h2>
            <p className="my-6">
              <strong>Steam</strong> là một nền tảng phân phối trực tuyến, quản
              lý bản quyền kỹ thuật số, trò chơi điện tử nhiều người chơi và
              dịch vụ xã hội do <strong>Valve Corporation</strong> phát triển.
              Steam cung cấp cho người dùng khả năng cài đặt và tự động cập nhật
              trò chơi trên nhiều máy tính và các tính năng cộng đồng như bạn bè
              và nhóm, lưu trữ đám mây, trò chuyện và giọng nói trong trò chơi.
              Phần mềm này cung cấp một giao diện lập trình ứng dụng (API) miễn
              phí có tên là Steamworks, mà các nhà phát triển có thể sử dụng để
              tích hợp nhiều tính năng của Steam vào sản phẩm của họ, bao gồm
              mạng xã hội và ghép đôi, thành tích trong trò chơi, thương mại và
              hỗ trợ nội dung do người dùng tạo thông qua Steam Workshop.
            </p>
          </div>
          <div>
            <h2 className="border-secondry flex items-end gap-3 text-base font-bold border-b-2">
              <div className="px-2.5 pt-2 bg-secondry text-white w-fit">
                <FontAwesomeIcon icon={faGem} className="size-5" />
              </div>
              Các tiện ích mà Steam mang lại
            </h2>
            <div>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Trò chuyện trên Steam
                </h3>
                <p>
                  Trò chuyện với bạn bè hoặc nhóm qua tin nhắn hoặc đàm thoại mà
                  không cần thoát khỏi Steam. Hỗ trợ video, tweet, gif và nhiều
                  nội dung khác để bạn có thể tương tác trong khi chơi.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Trò chuyện trên Steam
                </h3>
                <p>
                  Trò chuyện với bạn bè hoặc nhóm qua tin nhắn hoặc đàm thoại mà
                  không cần thoát khỏi Steam. Hỗ trợ video, tweet, gif và nhiều
                  nội dung khác để bạn có thể tương tác trong khi chơi.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Trò chuyện trên Steam
                </h3>
                <p>
                  Trò chuyện với bạn bè hoặc nhóm qua tin nhắn hoặc đàm thoại mà
                  không cần thoát khỏi Steam. Hỗ trợ video, tweet, gif và nhiều
                  nội dung khác để bạn có thể tương tác trong khi chơi.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Trò chuyện trên Steam
                </h3>
                <p>
                  Trò chuyện với bạn bè hoặc nhóm qua tin nhắn hoặc đàm thoại mà
                  không cần thoát khỏi Steam. Hỗ trợ video, tweet, gif và nhiều
                  nội dung khác để bạn có thể tương tác trong khi chơi.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Trò chuyện trên Steam
                </h3>
                <p>
                  Trò chuyện với bạn bè hoặc nhóm qua tin nhắn hoặc đàm thoại mà
                  không cần thoát khỏi Steam. Hỗ trợ video, tweet, gif và nhiều
                  nội dung khác để bạn có thể tương tác trong khi chơi.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Trò chuyện trên Steam
                </h3>
                <p>
                  Trò chuyện với bạn bè hoặc nhóm qua tin nhắn hoặc đàm thoại mà
                  không cần thoát khỏi Steam. Hỗ trợ video, tweet, gif và nhiều
                  nội dung khác để bạn có thể tương tác trong khi chơi.
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Trò chuyện trên Steam
                </h3>
                <p>
                  Trò chuyện với bạn bè hoặc nhóm qua tin nhắn hoặc đàm thoại mà
                  không cần thoát khỏi Steam. Hỗ trợ video, tweet, gif và nhiều
                  nội dung khác để bạn có thể tương tác trong khi chơi.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-secondry flex items-end gap-3 text-base font-bold border-b-2">
              <div className="px-2.5 pt-2 bg-secondry text-white w-fit">
                <FontAwesomeIcon icon={faGem} className="size-5" />
              </div>
              Những lỗi gặp phải khi sử dụng Steam
            </h2>
            <div>
              <p>
                Steam đa dạng và phổ biến là vậy nhưng không thể tránh khỏi
                những lỗi ngoài mong muốn. Dưới đây là 1 số lỗi mà bạn có thể
                gặp phải trong quá trình sử dụng Steam.
              </p>
              <div>
                <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 py-6">
                  <FontAwesomeIcon
                    icon={faReply}
                    rotation={180}
                    className="size-5"
                  />{" "}
                  Lỗi Treo Logo
                </h3>
                <p>
                  Lỗi treo logo thường gặp do vấn đề Steam có bản update bị lỗi
                  hoặc do nhà mạng đã tiến hành chặn truy cập tới máy chủ của
                  Steam
                </p>
                <strong className="text-center block text-secondry py-5">
                  VIDEO HƯỚNG DẪN CHI TIẾT
                </strong>
                <video controls className="w-full">
                  <source src="/video/videoTest.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="space-y-5">
              <h3 className="flex items-center gap-1 text-secondry font-bold ml-2.5 pt-6">
                <FontAwesomeIcon
                  icon={faReply}
                  rotation={180}
                  className="size-5"
                />{" "}
                Lỗi không đăng nhập được Steam
              </h3>
              <p>
                Trong quá trình đăng nhập steam, bạn đã điền toàn bộ thông tin
                như Tài khoản Steam và mật khẩu của Steam nhưng khi ấn đăng
                nhập, Steam vẫn thông báo là “thông tin tài khoản của bạn bị
                sai” hoặc “có lỗi xảy ra trong quá trình đăng nhập” … Thì các
                bạn cần kiểm tra những thứ sau đây:
              </p>
              <ul className="list-disc pl-7">
                <li>
                  Kiểm tra lại toàn bộ thông tin: Tài khoản, Mật khẩu Steam khi
                  đăng nhập.
                </li>
                <li>
                  Đảm bảo mạng của bạn vẫn truy cập bình thường tới máy chủ của
                  Steam.
                </li>
              </ul>
              <p>
                Lỗi này do nhà mạng tại Việt Nam đang tiến hành chặn Steam vì
                một vài vấn đề liên quan tới pháp lý
              </p>
              <p>
                → Cách fix: Tải 1.1.1.1 về và cài đặt vào máy. Sau khi cài đặt
                xong thì mở phần mềm và kết nối rồi đăng nhập lại Steam.
              </p>
              <p>
                Trên đây là toàn bộ thông tin về Steam cũng như là một số lỗi sẽ
                có thể gặp phải khi sử dụng phần mềm. Team Daominhha sẽ liên tục
                cập nhật những lỗi mới và cách fix để các bạn không gặp trở ngại
                trong quá trình sử dụng Steam.
              </p>
            </div>
          </div>
          <div>
            <p className="p-2.5 border border-dashed rounded border-primary">
              Bài viết "<strong>{blogDetailProps.title}</strong> - Các bạn đang
              xem bài viết mới nhất tại website{" "}
              <a href="" className="text-secondry">
                Daominhha.net & Dixgames.com
              </a>{" "}
              trong suốt thời gian qua. Bạn đọc có thể donate ủng hộ
              Dixgames.com bằng cách{" "}
              <a href="" className="text-secondry">
                NẠP VIP
              </a>{" "}
              để tải link tốc độ chỉ với 1000 donate / 1 game trong thời hạn 3
              tháng. Chúc Bạn đọc 1 ngày vui vẻ! Nếu cần hỗ trợ gì các bạn có
              thể truy cập nhóm của chúng tôi để được hỗ trợ tốt nhất hoặc
              comment bên dưới bài viết chúng tôi sẽ hỗ trợ bạn .
            </p>
          </div>

          <div>
            <CommentSection />
          </div>
        </section>
        <section className="space-y-6 sticky top-0 h-fit">
          <AccountInfo name={userInfo.userName} avatar={userInfo.avatar} />
          <GameUpdate tabList={tabList} />
        </section>
      </article>
    </main>
  );
};

export default page;
