import { useState } from "react";
import menus from "../../data/menus";

export default function Navigation({
  setHamburger,
  hamburger,
}: InavigationProps): JSX.Element {
  const [selected, setSelected] = useState<number>(0);

  return (
    <nav className="flex w-auto items-center justify-center px-5 py-3">
      <ul className=" flex items-center justify-center flex-col md:flex-row gap-8">
        {menus.map((item: InavigationMenu, key) => (
          <li
            key={key}
            onClick={() => {
              setSelected(item.index);
              setHamburger(!hamburger);
            }}
            className={` nav-item ${
              item.index == selected
                ? "after:duration-300 after:transition-all after:bg-transparent after:absolute after:-bottom-3 after:left-0 after:bg-gradient-to-l from-slate-200 via-orange-300 to-slate-200 after:h-[1px] after:w-full"
                : ""
            }`}
          >
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
