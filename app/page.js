import Image from 'next/image'
import React from 'react'
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa'
import EventCard from './components/EventCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* NAV BAR ( MAKE INTO COMPONENT ) */}
      <div className="transparent h-36 w-lvw flex flex-row z-10 justify-between pr-9">
        <div className="flex flex-row gap-10 items-center">
          <div className="bg-logo bg-no-repeat bg-contain w-36 overflow-auto h-36" />
          <p className="font-black text-black text-xl pt-1"> Explore </p>
          <p className="font-black text-black text-xl pt-1"> Sports </p>
          <p className="font-black text-black text-xl pt-1">Theatre & Comedy</p>
          <p className="font-black text-black text-xl pt-1"> Music </p>
        </div>
        <div className="flex flex-row gap-10 pr-5 items-center">
          <p className="font-black text-black text-xl pt-1"> SELL </p>
          <FaHeart size={25} />
          <FaUser size={25} />
        </div>
      </div>

      {/* SEARCH BAR HERE */}
      <div className="flex h-[350px] w-full z-10 justify-center items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events, artists, teams and more..."
            className="pl-3 pr-4 py-2 h-[54px] w-[500px] rounded-3xl"
            style={{ color: 'black' }}
          />
          <FaSearch
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black"
            style={{ color: 'black' }}
            size={23}
          />
        </div>
      </div>

      {/* CONTENT HERE */}
      <div className="flex flex-col h-auto w-full z-10">
        <h1 className="text-6xl h-20 leading-[80px] font-black px-5">
          {' '}
          Our Top Picks{' '}
        </h1>
        {/* CARD CONTAINER */}
        <div className="flex flex-row justify-between pt-5 h-[1000px] px-5">
          <EventCard source={'/sample.webp'} />
          <EventCard source={'/sample2.webp'} />
          <EventCard source={'/sample3.webp'} />
          <EventCard source={'/sample4.webp'} />
        </div>
      </div>
      {/* BACKGROUND IMAGE */}
      <div className="absolute top-[-500px] bg-concert bg-no-repeat h-[1350px] w-full bg-contain mb-[-300px]" />
    </main>
  )
}
