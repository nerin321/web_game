"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  imgs: string[];
};
const SlideShow: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex items-center h-[400px]">
          {props.imgs.map((item, index) => (
            <img
              src={item}
              key={index}
              alt=""
              className="basis-full flex-grow flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
      <button
        className="size-10 top-1/2 -left-5 hover:bg-orange-700/80 hover:text-white absolute z-10 flex items-center justify-center bg-white rounded-full"
        onClick={scrollPrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="size-5" />
      </button>
      <button
        className="size-10 top-1/2 -right-5 hover:bg-orange-700/80 hover:text-white absolute z-10 flex items-center justify-center bg-white rounded-full"
        onClick={scrollNext}
      >
        <FontAwesomeIcon icon={faChevronRight} className="size-5" />
      </button>
    </div>
  );
};

export default SlideShow;
