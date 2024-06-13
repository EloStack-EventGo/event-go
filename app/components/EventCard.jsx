import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import Image from 'next/image'

const EventCard = ({ source }) => {
  return (
    <div className="relative w-[420px] h-80 rounded-2xl border-4 bg-white">
      <div className="h-10 w-10">
        <FaRegHeart
          className="z-10 absolute top-6 right-3 transform -translate-y-1/2"
          size={30}
        />
      </div>
      <Image
        className="object-cover rounded-xl"
        src={source}
        fill="true"
        alt="Picture of the author"
      />
    </div>
  )
}

export default EventCard
