import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const gamesNew = [
  {
    name: "Homeworld 3 Việt hóa",
    img: "https://i.pinimg.com/736x/7e/b7/b7/7eb7b7afca6bbc224d8e9c0f94e56a86.jpg",
    link: "#",
    date: "11/11/2024",
  },
  {
    name: "Homeworld 3 Việt hóa",
    img: "https://i.pinimg.com/736x/7e/b7/b7/7eb7b7afca6bbc224d8e9c0f94e56a86.jpg",
    link: "#",
    date: "11/11/2024",
  },
  {
    name: "Homeworld 3 Việt hóa",
    img: "https://i.pinimg.com/736x/7e/b7/b7/7eb7b7afca6bbc224d8e9c0f94e56a86.jpg",
    link: "#",
    date: "11/11/2024",
  },
  {
    name: "Homeworld 3 Việt hóa",
    img: "https://i.pinimg.com/736x/7e/b7/b7/7eb7b7afca6bbc224d8e9c0f94e56a86.jpg",
    link: "#",
    date: "11/11/2024",
  },
  {
    name: "Homeworld 3 Việt hóa",
    img: "https://i.pinimg.com/736x/7e/b7/b7/7eb7b7afca6bbc224d8e9c0f94e56a86.jpg",
    link: "#",
    date: "11/11/2024",
  },
  {
    name: "Homeworld 3 Việt hóa",
    img: "https://i.pinimg.com/736x/7e/b7/b7/7eb7b7afca6bbc224d8e9c0f94e56a86.jpg",
    link: "#",
    date: "11/11/2024",
  },
];

const UpcomingGame = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <h4 className="bg-primary w-full py-3 text-xl font-bold text-center text-white">
        Game sắp phát hành
      </h4>
      <div className="dark:bg-dark-bg-primary dark:divide-dark-border p-4 bg-white divide-y divide-black">
        {gamesNew.map((game, index) => (
          <div key={index} className="py-2.5">
            {index === 0 ? (
              <div className="pt-5 pb-2.5">
                <div className="hover-animation group rounded-lg">
                  <img
                    src={game.img}
                    alt=""
                    className="group-hover:scale-105 object-cover transition-all"
                  />
                </div>
                <a
                  href={game.link}
                  className="hover:text-secondry dark:text-secondry block pt-2 text-sm font-bold text-center"
                >
                  {game.name}
                </a>
              </div>
            ) : (
              <div key={index} className="pt-5 pb-2.5 flex items-center gap-4">
                <div className="w-[90px] h-[50px] rounded-lg hover-animation group">
                  <img
                    src={game.img}
                    alt=""
                    className=" group-hover:scale-105 object-cover transition-all"
                  />
                </div>
                <div>
                  <a
                    href={game.link}
                    className="hover:text-secondry dark:text-secondry block mb-3 text-sm font-bold"
                  >
                    {game.name}
                  </a>
                  <span className="flex items-center gap-1 text-[13px]">
                    <FontAwesomeIcon icon={faCalendarDays} className="size-5" />
                    <p>{game.date}</p>
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingGame;
