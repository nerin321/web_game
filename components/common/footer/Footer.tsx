import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <article>
      <section className="border-secondry pt-14 lg:grid-cols-3 grid gap-6 pb-4 mt-12 border-t-4">
        <div className="space-y-6">
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
          <p className="text-xl">
            <strong className="font-semibold">
              <FontAwesomeIcon icon={faHeart} className="size-4 text-red-700" />{" "}
              Daominhha.net & Dixgames.com
            </strong>
            : Chúng tôi chỉ có 2 website này là website Tải Game Việt Hóa Miễn
            Phí Tốc độ cao mới nhất , Full Kích Hoạt , Full DLC , Full Mods …
            chia sẻ những thủ thuật về game và công nghệ . Không liên quan đến
            bất kỳ website khác.
          </p>
          <p className="text-xl">
            Ngoài ra{" "}
            <strong className="font-semibold">
              <FontAwesomeIcon icon={faHeart} className="size-4 text-red-700" />{" "}
              Daominhha.net & Dixgames.com
            </strong>{" "}
            còn cung cấp cho anh em một nơi tải Phần Mềm Miễn Phí Chất Lượng Cao
            . Với Phương Châm ” Chia sẻ miễn phí tất cả “
          </p>
          <p className="text-xl">
            <strong className="font-semibold">
              <FontAwesomeIcon icon={faHeart} className="size-4 text-red-700" />{" "}
              Daominhha.net & Dixgames.com
            </strong>{" "}
            là website độc lập hoàn toàn không có liên quan đến bất kỳ một
            website nào khác . Chúng tôi là một website riêng biệt . Chúng tôi
            với quan niệm sẽ là một cộng đồng sạch sẽ , ko toxic , là một nơi
            chia sẻ hỗ trợ tận tâm nhất
          </p>
        </div>
        <div>
          <div>
            <h3 className="dark:text-secondry text-xl font-bold uppercase">
              Chính sách & điều khoản
            </h3>
            <ul className="pl-6 text-lg font-semibold list-disc">
              <li>Giới thiệu về daominhha.net</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
              <li>Câu hỏi thường gặp</li>
              <li>Nạp Donate Tải link VIP</li>
              <li>Làm Nhiệm vụ Tải Vip Miễn Phí</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div>
            <h3 className="dark:text-secondry text-xl font-bold uppercase">
              DANH MỤC YÊU THÍCH
            </h3>
            <ul className="pl-6 text-lg font-semibold list-disc">
              <li>Game tải nhiều nhất</li>
              <li>Game Việt Hóa</li>
              <li>Phần mềm Full Active</li>
            </ul>
          </div>
          <img
            src="https://mona.media/wp-content/uploads/2021/09/dmca-protected.png"
            alt=""
            width={121}
            height={55}
            className="mt-6"
          />
        </div>
        <div className="text-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYZoN-v60qelJBrnr9iXZPNLjfta92YHTkA&s"
            alt=""
            className="w-full h-[89px] object-cover"
          />
          <div className="mt-10">
            <h3 className="dark:text-secondry  font-bold uppercase">
              Mục xem nhiều
            </h3>
            <div className="divide-primary mt-4 divide-y">
              <a
                href=""
                className="flex items-center justify-between py-1.5 hover:text-secondry"
              >
                <p>game việt hóa</p>
                <p>`(5.000.000 views - 938 bài)`</p>
              </a>
              <a
                href=""
                className="flex items-center justify-between py-1.5 hover:text-secondry"
              >
                <p>game việt hóa</p>
                <p>`(5.000.000 views - 938 bài)`</p>
              </a>
              <a
                href=""
                className="flex items-center justify-between py-1.5 hover:text-secondry"
              >
                <p>game việt hóa</p>
                <p>`(5.000.000 views - 938 bài)`</p>
              </a>
              <a
                href=""
                className="flex items-center justify-between py-1.5 hover:text-secondry"
              >
                <p>game việt hóa</p>
                <p>`(5.000.000 views - 938 bài)`</p>
              </a>
              <a
                href=""
                className="flex items-center justify-between py-1.5 hover:text-secondry"
              >
                <p>game việt hóa</p>
                <p>`(5.000.000 views - 938 bài)`</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="text-xs font-medium text-center">
        <p>
          ❤️ Copyright &copy; 2018 - CHÚNG TÔI CHỈ CÓ 2 WEBSITE DAOMINHHA.NET &
          DIXGAMES.COM ❤️ KHÔNG LIÊN QUAN ĐẾN BẤT KỲ WEBSITE KHÁC
        </p>
      </div>
    </article>
  );
};

export default Footer;
