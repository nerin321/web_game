import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const rateProps = {
  story: 80,
  gamePlay: 80,
  graphic: 80,
  sound: 80,
  all: 100,
  time: 1,
};

const categories = ["Cốt truyện", "Đồ họa", "Gameplay", "Âm thanh", "Tổng thể"];
const ratingOptions = [20, 40, 60, 80, 100];

function ratingPoint() {
  let cmt = "";
  const avg =
    (rateProps.story +
      rateProps.all +
      rateProps.gamePlay +
      rateProps.graphic +
      rateProps.sound) /
    5;
  if (avg < 30) {
    cmt = "Chơi 1 Lần";
  } else if (avg < 50) {
    cmt = "Ổn Áp";
  } else if (avg < 60) {
    cmt = "Được";
  } else if (avg < 80) {
    cmt = "OK";
  } else if (avg < 90) {
    cmt = "Hay Đấy";
  } else if (avg < 100) {
    cmt = "Provip";
  } else {
    cmt = "Đỉnh Kout";
  }
  return { avg, cmt };
}
const Rating = () => {
  const offSet = 100 - ratingPoint().avg;
  return (
    <div className="bg-white rounded-lg p-4 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2.5">
        <FontAwesomeIcon icon={faGamepad} className="size-6" /> Đánh giá game
        Japanese Rail Sim Hakone Town of Natural BHS Việt Hóa ({rateProps.time}{" "}
        đánh giá)
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="relative size-[180px]">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              {/* Vòng tròn nền */}
              <circle
                className="text-primary"
                stroke="currentColor"
                strokeWidth="2"
                fill="black"
                cx="18"
                cy="18"
                r="17"
              />
              {/* Vòng tròn rating */}
              <circle
                className="text-red-600"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                cx="18"
                cy="18"
                r="17"
                strokeDasharray="100"
                strokeDashoffset={offSet}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl">
              <p className="text-6xl font-semibold">{ratingPoint().avg}</p>
              <p>{ratingPoint().cmt}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center justify-between">
              <p>Cốt Truyện</p>
              <p>
                <b>{rateProps.story}</b> điểm
              </p>
            </div>
            <div className="w-full bg-primary rounded-full h-2">
              <div
                className="bg-red-500 h-full rounded-full flex items-center justify-center text-white text-sm font-semibold"
                style={{ width: `${rateProps.story}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p>Gameplay</p>
              <p>
                <b>{rateProps.gamePlay}</b> điểm
              </p>
            </div>
            <div className="w-full bg-primary rounded-full h-2">
              <div
                className="bg-red-500 h-full rounded-full flex items-center justify-center text-white text-sm font-semibold"
                style={{ width: `${rateProps.gamePlay}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p>Đồ Họa</p>
              <p>
                <b>{rateProps.graphic}</b> điểm
              </p>
            </div>
            <div className="w-full bg-primary rounded-full h-2">
              <div
                className="bg-red-500 h-full rounded-full flex items-center justify-center text-white text-sm font-semibold"
                style={{ width: `${rateProps.graphic}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p>Âm Thanh</p>
              <p>
                <b>{rateProps.sound}</b> điểm
              </p>
            </div>
            <div className="w-full bg-primary rounded-full h-2">
              <div
                className="bg-red-500 h-full rounded-full flex items-center justify-center text-white text-sm font-semibold"
                style={{ width: `${rateProps.sound}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p>Đánh Giá Tổng Thể</p>
              <p>
                <b>{rateProps.all}</b> điểm
              </p>
            </div>
            <div className="w-full bg-primary rounded-full h-2">
              <div
                className="bg-red-500 h-full rounded-full flex items-center justify-center text-white text-sm font-semibold"
                style={{ width: `${rateProps.all}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center py-4">
        <div className="lg:w-fit">
          <table>
            <tbody>
              {categories.map((category) => (
                <tr key={category} className="flex flex-wrap justify-end">
                  <td className="px-4 py-2">{category}</td>
                  {ratingOptions.map((option) => (
                    <td key={option} className="px-4 py-2 text-center">
                      <button
                        type="button"
                        className={` transition-colors bg-black text-white rounded w-14 h-10 font-semibold hover:bg-primary`}
                      >
                        {option}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button className="font-semibold uppercase text-center py-2.5 bg-[#22a2b1] text-white w-full rounded hover:bg-blue-500">
            Gửi đánh giá
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
