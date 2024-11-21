"use client";
import Games from "@/components/common/games/Games";
import HeaderSpan from "@/components/common/header/HeaderSpan";
import Trick from "@/components/common/trick/Trick";
import GameUpdate from "@/components/home/gameNewRight/GameUpdate";
import UpcomingGame from "@/components/home/gameNewRight/UpcomingGame";
import SlideShow from "@/components/common/slideShow/SlideShow";
import { EmblaOptionsType } from "embla-carousel";
import { useState } from "react";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const headerGames = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2LtxIuLDmHfP5Hd_ZsUQuyZYXWdAieA3GA&s",
    name: "returnal",
    link: "#",
  },
  {
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/146d81d3-58f4-45c2-957e-1dc554a4a869/dg9z2p1-ee2e6be5-84ab-4b76-ad1e-e005cd4d0878.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE0NmQ4MWQzLTU4ZjQtNDVjMi05NTdlLTFkYzU1NGE0YTg2OVwvZGc5ejJwMS1lZTJlNmJlNS04NGFiLTRiNzYtYWQxZS1lMDA1Y2Q0ZDA4NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5LPXUmy1CPfDz-JVIjoPthoit--snXK2TuPo1fseL8s",
    name: "StarField",
    link: "#",
  },
  {
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e87d432c-0c31-4673-912d-407d8ee09362/dgr1pya-91f28ea0-45a1-444e-9c96-4f61073c03c6.png/v1/fit/w_828,h_828/palworld_ico_by_nc831_by_darknc831_dgr1pya-414w-2x.png",
    name: "Palworld",
    link: "#",
  },
  {
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aacf7545-f3cd-48d5-b931-28ce4a28db0e/dc6k0s9-29018cf9-7ab1-4498-bd6a-7b6ef5fbbbd4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhY2Y3NTQ1LWYzY2QtNDhkNS1iOTMxLTI4Y2U0YTI4ZGIwZVwvZGM2azBzOS0yOTAxOGNmOS03YWIxLTQ0OTgtYmQ2YS03YjZlZjVmYmJiZDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Sq5qv0lu98sAX0hWF0m97guzJSxrHteqTDLBeKj23To",
    name: "sea of thieves",
    link: "#",
  },
  {
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef02abe3-63cc-4dfa-8eab-5543cf3bcf4f/de5pgkr-1c39f714-8a7c-4972-a69f-3ecc5eae5241.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VmMDJhYmUzLTYzY2MtNGRmYS04ZWFiLTU1NDNjZjNiY2Y0ZlwvZGU1cGdrci0xYzM5ZjcxNC04YTdjLTQ5NzItYTY5Zi0zZWNjNWVhZTUyNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wHon20tP06HDzXZlqStF-t49nzmKSMNJsQnDj2QYA_k",
    name: "prince of persia",
    link: "#",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxsWvwjSNjVwMXTNyNLGW7L0JD5SqlT9imw&s",
    name: "Hogwarts legacy",
    link: "#",
  },
];

const gameHots = [
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1730763397",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "./game",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
  {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2676380/capsule_616x353.jpg?t=1703991594",
    name: "forza horizon 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia maxime quae minima modi nam vero quod veritatis quam, aliquid nostrum, omnis, porro qui nisi ullam! A nisi praesentium mollitia?",
    link: "#",
  },
];

const gameInfo = [
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
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
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
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
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: false,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
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
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: true,
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2707490/3fcd62e99d47f8ff1a5f7ea19e25cd6bdd9a10c9/capsule_616x353.jpg?t=1729437625",
    name: "tower factory",
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
    dowloadLink: "#",
    rate: 84,
    update: { title: "game sắp ra mắt", dateUpdate: "06/11/2024" },
    video: false,
  },
];

const tricks = [
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
  {
    img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/dang-ky-steam-gamelade.jpg",
    name: "steam và những điều cần biết khi sử dụng",
    link: "",
  },
];

const imgs = [
  "https://images.unsplash.com/photo-1616565441366-34a5fe33fe42",
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
  "https://images.unsplash.com/photo-1626240130051-68871c71de47",
  "https://images.unsplash.com/photo-1626686707291-7bda5c45e8a8",
];

const tabList = {
  games: [
    {
      id: "version",
      name: "Update version&dlc",
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
      id: "mod",
      name: "update mod mới",
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

export default function Home() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className=" py-4">
      <section>
        <SlideShow slides={SLIDES} options={OPTIONS} imgs={imgs} button />
        <div className="hidden lg:grid grid-cols-3 gap-3 py-4">
          {headerGames.map((item, index) => (
            <div key={index} className="flex items-center gap-10 bg-white">
              <img src={item.img} alt="" className="h-28" />
              <div>
                <a
                  href={item.link}
                  className="block text-lg font-bold text-blue-800 uppercase"
                >
                  {item.name}
                </a>
                <a href={item.link} className="block text-lg text-orange-700">
                  Xem thêm
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-5">
        <HeaderSpan title="Hot" />
        <div className="grid lg:grid-cols-2 gap-5 overflow-hidden">
          <div className="rounded-xl bg-white max-h-[560px]">
            <img src={gameHots[0].img} alt="" className="rounded-xl w-full" />
            <div className="px-6 text-blue-700">
              <a
                href={gameHots[0].link}
                className="py-7 block text-xl font-bold"
              >
                {gameHots[0].name}
              </a>
              <p className=" font-medium">{gameHots[0].desc}</p>
              <a
                href={gameHots[0].link}
                className="w-fit hover:bg-blue-700 hover:text-white block px-5 py-2 my-4 border border-blue-700 rounded-lg"
              >
                xem bài này
              </a>
            </div>
          </div>
          <div className=" space-y-2 overflow-y-scroll hide-scrollbar h-[560px]">
            {gameHots.map((item, index) => (
              <div key={index}>
                {index === 0 ? (
                  ""
                ) : (
                  <div className="rounded-xl flex items-center gap-5 p-3 bg-white border">
                    <img src={item.img} alt="" className="h-9 w-16" />
                    <div>
                      <a
                        href={item.link}
                        className="text-xl font-bold text-[#183d6d] hover:text-orange-600"
                      >
                        {item.name}
                      </a>
                      <p className="truncate w-[290px] lg:w-[490px] text-[#183d6d]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <HeaderSpan title="Update version" more link="#" color />
        <div className="grid lg:grid-cols-4 gap-6">
          {gameInfo.map((game, index) => (
            <Games
              img={game.img}
              dowloadLink={game.dowloadLink}
              name={game.name}
              rate={game.rate}
              tag={game.tag}
              update={game.update}
              video={game.video}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="py-10">
        <HeaderSpan title="update việt hóa" more link="#" color />
        <div className="grid lg:grid-cols-4 gap-6">
          {gameInfo.map((game, index) => (
            <Games
              img={game.img}
              dowloadLink={game.dowloadLink}
              name={game.name}
              rate={game.rate}
              tag={game.tag}
              update={game.update}
              video={game.video}
              key={index}
            />
          ))}
        </div>
      </section>
      <article className="grid lg:grid-cols-3 gap-6 py-10">
        <section className="lg:col-span-2">
          <HeaderSpan title="Sắp phát hành" more link="#" color />
          <div className="py-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {gameInfo.map((game, index) => (
                <Games
                  img={game.img}
                  dowloadLink={game.dowloadLink}
                  name={game.name}
                  rate={game.rate}
                  tag={game.tag}
                  update={game.update}
                  video={game.video}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="relative mb-6" id="span-title">
            <span className="w-fit  flex items-center gap-1 px-5 ml-8 text-2xl font-bold uppercase bg-gray-200">
              Thủ thuật <p className="text-[#f15a24]">mới nhất</p>
            </span>
          </div>
          <div className="py-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {tricks.map((trick, index) => (
                <Trick
                  img={trick.img}
                  link={trick.link}
                  name={trick.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="space-y-7">
          <UpcomingGame />
          <GameUpdate tabList={tabList} />
        </section>
      </article>
      <div className=" p-4 mt-8 font-medium bg-white border-l-4 border-orange-600 rounded">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione
          iure magni quibusdam dignissimos, quo maiores sed. Rerum tempore animi
          magni est error ipsa a, aut dolorem praesentium suscipit beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione
          iure magni quibusdam dignissimos, quo maiores sed. Rerum tempore animi
          magni est error ipsa a, aut dolorem praesentium suscipit beatae.
        </p>
        <div className={`${isExpand == true ? `block` : `hidden`}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ratione iure magni quibusdam dignissimos, quo maiores sed. Rerum
            tempore animi magni est error ipsa a, aut dolorem praesentium
            suscipit beatae.
          </p>
          <p>Xin cảm ơn</p>
          <form
            action=""
            className="w-full p-5 mt-4 mb-7 border-dashed border rounded-lg flex items-center gap-6 bg-[#fffaca] border-[#ff9800]"
          >
            <input
              type="text"
              placeholder="Nhập mail user làm nv trên Dixgames"
              className="placeholder:font-bold w-3/5 h-10 pl-4 font-bold border rounded"
            />
            <button className="w-2/5 h-10 font-bold text-white bg-green-600 border rounded">
              Ấn để hiển thị code
            </button>
          </form>
        </div>
        <div className="flex justify-center text-red-500">
          <button onClick={() => setIsExpand(!isExpand)}>
            {isExpand == true ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </div>
  );
}
