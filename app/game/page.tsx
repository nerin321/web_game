import SlideShow from "@/components/common/slideShow/SlideShow";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";

const gameDetail = {
  name: "japanese rail sim hakone town of natural BHS",
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
  numPeople: "chơi đơn",
  language: "Tiếng Anh",
  platform: "windows",
  usage: "Bàn phím/ Chuột",
  series: "japanese rail sim hakone town of natural BHS",
  author: "DIXGAME.COM",
};

const imgs = [
  "https://images.unsplash.com/photo-1616565441366-34a5fe33fe42",
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
  "https://images.unsplash.com/photo-1626240130051-68871c71de47",
  "https://images.unsplash.com/photo-1626686707291-7bda5c45e8a8",
];

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Page() {
  return (
    <main className="py-5">
      <h1 className="text-primary text-3xl font-bold capitalize">
        tải game {gameDetail.name} - PC download full
      </h1>
      <article className="grid grid-cols-3 py-6">
        <section className=" col-span-2">
          <div
            className="relative flex items-center justify-between mb-6"
            id="span"
          >
            <div className="text-primary pr-5 text-2xl font-bold uppercase bg-gray-200 w-[610px] flex items-center gap-1.5">
              <FontAwesomeIcon icon={faImage} className="size-6" />
              <p className="truncate">
                ảnh game <span className="capitalize">{gameDetail.name}</span> -
                PC download full
              </p>
            </div>
          </div>
          <div>
            <SlideShow slides={SLIDES} options={OPTIONS} imgs={imgs} />
          </div>
        </section>
        <section></section>
      </article>
    </main>
  );
}
