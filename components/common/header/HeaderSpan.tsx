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
      <span className="text-2xl font-bold px-5 text-[#f15a24] flex items-center bg-gray-200 gap-1 ml-8 uppercase">
        Games <p className="text-primary">{title}</p>
      </span>
      {more ? (
        <a
          href={link}
          className="text-primary flex px-5 text-sm font-bold bg-gray-200"
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
