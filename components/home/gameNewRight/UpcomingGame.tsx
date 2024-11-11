import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const gamesNew = [
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
];

const UpcomingGame = () => {
  return (
    <div className="rounded-xl overflow-hidden">
      <h4 className="text-xl bg-primary text-white font-bold py-3 text-center w-full">
        Game sắp phát hành
      </h4>
      <div className="p-4 bg-white  divide-y divide-black">
        {gamesNew.map((game, index) => (
          <div key={index} className="py-2.5">
            {index === 0 ? (
              <div className="pt-5 pb-2.5">
                <img src={game.img} alt="" className="w-full rounded-lg" />
                <a
                  href={game.link}
                  className="text-sm font-bold text-primary text-center block pt-2"
                >
                  {game.name}
                </a>
              </div>
            ) : (
              <div key={index} className="pt-5 pb-2.5 flex items-center gap-4">
                <img
                  src={game.img}
                  alt=""
                  className="w-[90px] h-[50px] object-cover rounded-lg"
                />
                <div className="text-primary">
                  <a href={game.link} className="block text-sm font-bold mb-3">
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
