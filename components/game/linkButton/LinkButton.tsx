import { faCirclePlay, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface Linkprops {
  title: string;
  icon?: boolean;
  link: string;
}

const LinkButton: React.FC<Linkprops> = ({ title, icon, link }) => {
  return (
    <div className="relative">
      <a
        href={link}
        className="flex items-center text-secondry font-semibold uppercase py-1.5 px-2.5 border border-secondry rounded gap-2 text-nowrap text-sm hover:bg-primary"
      >
        {icon ? (
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="size-5 text-primary hover:text-white"
          />
        ) : (
          ""
        )}{" "}
        {title}
      </a>
      <div className="absolute -top-3 -right-3 animate-shake">
        <FontAwesomeIcon icon={faCrown} className="size-6 text-yellow-500" />
      </div>
    </div>
  );
};

export default LinkButton;
