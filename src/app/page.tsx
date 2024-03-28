"use client"

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useState } from "react";
import Home1 from "@/components/main/Home";
import About from "@/components/main/About";
import News from "@/components/main/news";
import Projects from "@/components/main/projects";

export default function Home() {
  const [hamburger, setHamburger] = useState<boolean>(false);

  return (
    <div className=" scroll-smooth relative w-screen overflow-auto no-scrollbar h-screen bgmain">
      <div className="bgcircle1 max-[500px]:-left-[20rem] absolute -top-[10rem] -left-[10rem] w-[40rem] h-[40rem] rounded-full"></div>
      <Header hamburger={hamburger} setHamburger={setHamburger} />
      <main
        className={`z-30  ${
          hamburger ? " max-[768px]:h-0" : "h-auto"
        } transition-all duration-500 w-full px-5  flex items-center flex-col overflow-auto no-scrollbar`}
      >
        <Home1 />
        <About />
        <Projects />
      </main>
      <Footer hamburger={hamburger} />
    </div>
  );
}
