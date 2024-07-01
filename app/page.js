import { React } from "react";
import EventCard from "./components/EventCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import TopPicks from "./top-picks/page";
import Background from "./components/Background";
import { supabase } from "./lib/supabase";

export default function Home() {

 /*const setNewView = async() => {
    console.log('setting new view')
    const {data,error}= await supabase
    .from("views")
    .insert({
      name:"random name"
    })

    if(data) console.log(data)
    if(error) console.log(error)
  };

  setNewView();*/
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SearchBar />
      {/* CONTENT CONTAINER */}
      <div className="flex flex-col h-auto w-full z-10">
        <h1 className="text-6xl h-20 leading-[80px] font-black px-5">
          Our Top Picks
          <p>u r logged in</p>
        </h1>
        <TopPicks />
      </div>
      <Background />
    </main>
  );
}
