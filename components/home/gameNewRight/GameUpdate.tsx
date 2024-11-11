import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React, { Fragment } from "react";
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
const GameUpdate = () => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <TabGroup>
        <div className="border-b border-gray-200">
          <TabList className="grid grid-cols-2 bg-primary ">
            {/* categories */}
            {tabList.games.map((game) => (
              <Tab
                key={game.id}
                className="flex justify-center items-center whitespace-nowrap border-b-4 border-transparent text-base py-3 font-medium text-white data-[selected]:bg-orange-600 "
              >
                {game.name}
              </Tab>
            ))}
          </TabList>
        </div>
        <TabPanels as={Fragment}>
          {/* items */}
          {tabList.games.map((game) => (
            <TabPanel key={game.id}>
              <div className="border bg-white px-2.5 pb-2.5 divide-y divide-black">
                {game.featured.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 pt-3 mt-6 first:mt-0 text-primary"
                  >
                    <img src={item.img} alt="" width={100} height={57} />
                    <div>
                      <a href={item.link} className="text-sm font-bold">
                        {item.name}
                      </a>
                      <span className="flex items-center gap-1 text-[13px]">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="size-4"
                        />
                        <p>{item.date}</p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default GameUpdate;
