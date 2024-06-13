import { React } from "react";
import EventCard from "./components/EventCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <SearchBar />
      {/* CONTENT HERE */}
      <div className="flex flex-col h-auto w-full z-10">
        <h1 className="text-6xl h-20 leading-[80px] font-black px-5">
          {" "}
          Our Top Picks{" "}
        </h1>
        {/* CARD CONTAINER */}
        <div className="flex flex-row justify-between pt-5 h-[1000px] px-5">
          <EventCard source={"/sample.webp"} />
          <EventCard source={"/sample2.webp"} />
          <EventCard source={"/sample3.webp"} />
          <EventCard source={"/sample4.webp"} />
        </div>
      </div>
      {/* BACKGROUND IMAGE */}
      <div className="absolute top-[-500px] bg-concert bg-no-repeat h-[1350px] w-full bg-contain mb-[-300px]" />
    </main>
  );
}
