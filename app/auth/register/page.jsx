"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Slider from "@/app/components/Slider";
import sliderData from "@/app/components/SliderData";
import RegisterForm from "@/app/components/RegisterForm";

//const RegisterForm = dynamic(() => import("@/app/components/RegisterForm"), { ssr: false });

export default function Register() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="bg-crowd bg-cover bg-center bg-no-repeat w-full">
        <div className="w-full h-screen flex items-center bg-black bg-opacity-70">
          <div className="absolute left-[calc(5%)] w-1/3">
            <div className="container mx-auto pl-20">
              <h1 className="text-2xl font-semibold text-center text-white my-9 ml-4">Featured Artists</h1>
              <Slider slides={sliderData} />
            </div>
          </div>

          <div className="absolute left-[calc(45%)] top-[calc(10%)] w-[45%] bg-white opacity-65 p-5 text-black rounded-2xl py-10 px-20 flex-1 justify-center text-justify mt-8 mb-1">
            <p className="text-2xl font-bold mb-2 flex items-center justify-center text-center">JOIN US TODAY!</p>
            <RegisterForm />
          </div>
        </div>
      </main>
    </>
  );
}
