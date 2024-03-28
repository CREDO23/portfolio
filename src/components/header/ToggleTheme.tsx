import React, { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";

export default function ToggleTheme(): JSX.Element {
  const [currenttheme, setCurrentTheme] = useState(1);
  const [open, setOpen] = useState<boolean>(false);

  const themes: Itheme[] = [
    { index: 0, label: "Light", icon: <WiDaySunny /> },
    { index: 1, label: "Dark", icon: <IoIosMoon /> },
  ];

  return (
    <div
      onClick={() => setOpen(!open)}
      className={` overflow-hidden space-x-2 border border-slate-200 w-[40px] ${
        open ? "w-[90px]" : ""
      }  transition-all duration-500 h-[2.5rem] text-pink  rounded-3xl`}
    >
      {themes.map((theme: Itheme, index: number) => {
        if (index == currenttheme) {
          return (
            <span
              onClick={() => setOpen(!open)}
              key={index}
              className="border inline-flex cursor-pointer glass-theme h-10 w-10 rounded-full items-center justify-center"
            >
              {theme.icon}
            </span>
          );
        }
      })}
      {themes.map((theme, index) => {
        if (index != currenttheme) {
          return (
            <span
              key={index}
              onClick={() => {
                setCurrentTheme(theme.index);
                setOpen(!open);
              }}
              className="border inline-flex cursor-pointer glass-theme h-10 w-10 rounded-full items-center justify-center"
            >
              {theme.icon}
            </span>
          );
        }
      })}
    </div>
  );
}
