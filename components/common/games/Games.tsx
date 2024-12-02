import {
  faBell,
  faDownload,
  faPlay,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface GameTag {
  tagName: string;
  tagLink: string;
}

interface GameUpdate {
  title: string;
  dateUpdate: string;
}

interface GameInfo {
  img: string;
  name: string;
  tag: GameTag[];
  dowloadLink: string;
  rate: number;
  update: GameUpdate;
  video: boolean;
}

const Games: React.FC<GameInfo> = ({
  img,
  name,
  tag,
  dowloadLink,
  rate,
  update,
  video,
}) => {
  return (
    <div>
      <div className="relative">
        <div className=" rounded-xl hover-animation group">
          <img
            src={img}
            alt=""
            className="group-hover:scale-105 transition-all"
          />
        </div>
        <div className="top-3 absolute">
          <span className="text-white font-semibold text-xs bg-green-500 rounded-e-lg px-2 py-1 flex items-center gap-2 mb-0.5 uppercase">
            <FontAwesomeIcon icon={faBell} className="size-4 text-white" />
            {update.title}
          </span>
          <p className="rounded-e-lg w-fit flex items-center gap-2 px-2 py-1 text-xs font-semibold text-white bg-blue-500">
            Update: {update.dateUpdate}
          </p>
        </div>
        {video ? (
          ""
        ) : (
          <div className="size-7 -top-3 right-2 absolute flex items-center justify-center bg-red-700 rounded-full">
            <FontAwesomeIcon icon={faPlay} className="size-4 pl-1 text-white" />
          </div>
        )}
      </div>
      <div>
        <a
          href={dowloadLink}
          className="hover:text-secondry dark:text-secondry dark:hover:text-white block text-xl font-bold truncate"
        >
          {name}
        </a>
        <div className="line-clamp-2 py-1 space-x-1">
          <FontAwesomeIcon icon={faTag} className="size-4" />
          {tag.map((tag, index) => (
            <a href={tag.tagLink} key={index}>
              {tag.tagName},
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="hover:bg-secondry dark:bg-dark-bg-secondary flex items-center px-4 py-2 bg-black rounded">
            <a href={dowloadLink} className="block text-white uppercase">
              <FontAwesomeIcon
                icon={faDownload}
                className="size-6 text-white"
              />{" "}
              Tải game
            </a>
          </button>
          <div className="dark:bg-dark-bg-secondary flex items-center justify-center gap-3 px-4 py-2 text-xs font-semibold text-white bg-black rounded">
            <FontAwesomeIcon icon={faStar} className="size-6 text-yellow-500" />
            <p>{rate}/100 điểm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
