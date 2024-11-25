import React from "react";

interface TrickProps {
  img: string;
  name: string;
  link: string;
}
const Trick: React.FC<TrickProps> = ({ img, name, link }) => {
  return (
    <div className="text-primary">
      <div className=" hover-animation group rounded-md">
        <img
          src={img}
          alt=""
          className="group-hover:scale-105 object-cover transition-all"
        />
      </div>
      <a href={link} className="hover:text-secondry font-bold">
        {name}
      </a>
    </div>
  );
};

export default Trick;
