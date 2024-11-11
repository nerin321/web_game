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
        <img src={img} alt="" className="rounded-xl" />
        <div className="absolute top-3">
          <span className="text-white font-semibold text-xs bg-green-500 rounded-e-lg px-2 py-1 flex items-center gap-2 mb-0.5 uppercase">
            <FontAwesomeIcon icon={faBell} className="size-4 text-white" />
            {update.title}
          </span>
          <p className="text-white font-semibold text-xs bg-blue-500 rounded-e-lg px-2 py-1 flex items-center gap-2 w-fit">
            Update: {update.dateUpdate}
          </p>
        </div>
        {video ? (
          ""
        ) : (
          <div className="size-7 flex items-center justify-center absolute -top-3 right-2 bg-red-700 rounded-full">
            <FontAwesomeIcon icon={faPlay} className="size-4 pl-1 text-white" />
          </div>
        )}
      </div>
      <div>
        <a href={dowloadLink} className="text-xl font-bold">
          {name}
        </a>
        <div className="space-x-1 line-clamp-2 py-1">
          <FontAwesomeIcon icon={faTag} className="size-4" />
          {tag.map((tag, index) => (
            <a href={tag.tagLink} key={index}>
              {tag.tagName},
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-black px-4 py-2 rounded">
            <a href={dowloadLink} className="text-white uppercase">
              <FontAwesomeIcon
                icon={faDownload}
                className="size-6 text-white"
              />{" "}
              Tải game
            </a>
          </button>
          <div className="flex items-center justify-center gap-3 text-xs font-semibold bg-black px-4 py-2 text-white rounded">
            <FontAwesomeIcon icon={faStar} className="size-6 text-yellow-500" />
            <p>{rate}/100 điểm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
