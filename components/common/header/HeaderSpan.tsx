import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface HeaderSpanProps {
  title: string;
  more?: boolean;
  link?: string;
  color?: boolean;
}

const HeaderSpan: React.FC<HeaderSpanProps> = ({
  title,
  more,
  link,
  color,
}) => {
  return (
    <div
      className="relative flex items-center justify-between mb-6"
      id={`${color ? "span" : "span-title"}`}
    >
      <p className="dark:bg-gray-900 inline-block px-5 ml-8 text-2xl font-bold uppercase bg-gray-200">
        <span className="text-secondry">Games</span> {title}
      </p>
      {more ? (
        <a
          href={link}
          className="text-primary dark:text-white dark:bg-gray-900 flex px-5 text-sm font-bold bg-gray-200"
        >
          <p className="hover:text-secondry">Xem tất cả</p>
          <FontAwesomeIcon icon={faChevronRight} className="size-5" />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderSpan;
