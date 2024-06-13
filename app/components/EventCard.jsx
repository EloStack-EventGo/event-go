import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

const EventCard = ({ source }) => {
  return (
    <div className="relative lg:w-[320px] lg:h-64 2xl:w-[420px] 2xl:h-80 rounded-2xl border-4 bg-white">
      <FavoriteButton />
      <Image
        className="object-cover rounded-xl non-selectable"
        src={source}
        fill="true"
        alt="Picture of the author"
      />
    </div>
  );
};

export default EventCard;
