import React from "react";

interface TrickProps {
  img: string;
  name: string;
  link: string;
}
const Trick: React.FC<TrickProps> = ({ img, name, link }) => {
  return (
    <div className="text-primary">
      <div className=" rounded-md hover-animation group">
        <img
          src={img}
          alt=""
          className="object-cover group-hover:scale-105 transition-all"
        />
      </div>
      <a href={link} className="font-bold">
        {name}
      </a>
    </div>
  );
};

export default Trick;
