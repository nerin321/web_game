import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React, { Fragment } from "react";

interface FeaturedGame {
  name: string;
  img: string;
  link: string;
  date: string;
}

interface GameTab {
  id: string;
  name: string;
  featured: FeaturedGame[];
}

interface TabList {
  games: GameTab[];
}

interface GameUpdateProps {
  tabList: TabList; // Nhận tabList như một prop
}

const GameUpdate: React.FC<GameUpdateProps> = ({ tabList }) => {
  return (
    <div className="overflow-hidden border rounded-lg">
      <TabGroup>
        <div className="border-b border-gray-200">
          <TabList className="bg-primary grid grid-cols-2">
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
                    className="first:mt-0 text-primary flex items-center gap-3 pt-3 mt-6"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.img}
                        alt=""
                        width={100}
                        height={57}
                        className="hover:scale-110"
                      />
                    </div>
                    <div>
                      <a
                        href={item.link}
                        className="hover:text-secondry text-sm font-bold"
                      >
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
