import React from "react";

interface TrickProps {
  img: string;
  name: string;
  link: string;
}
const Trick: React.FC<TrickProps> = ({ img, name, link }) => {
  return (
    <div className="text-primary">
      <img src={img} alt="" className="rounded-md w-full object-cover" />
      <a href={link} className="font-bold">
        {name}
      </a>
    </div>
  );
};

export default Trick;
