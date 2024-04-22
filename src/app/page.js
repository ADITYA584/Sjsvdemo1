"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import About from "@/Components/About";

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-black">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars"></div>
        <div id="stars"></div>
      </div>
      <div className=" flex flex-col items-center justify-center h-[91vh] pt-[9.5rem] ">
        <div className="text-white text-4xl border-2px border-white bg-transparent">
          <p className="Urbanist">Making Galactic Moves</p>
          <br />
          <p>for your Brand? Begin Here</p>
        </div>
        <div className=" flex justify-evenly w-[30rem] my-[1.7rem] py-[0.8rem]">
          <button className=" bg-rose-400  rounded-full w-[8rem] p-[0.5rem] text-white ">
            Know more
          </button>
          <button className="broder-white border-2 p-[0.5rem] w-[8rem] rounded-full text-white">
            Book a call
          </button>
        </div>
      </div>
      <About />
    </main>
  );
}
