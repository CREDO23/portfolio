import { ReactNode } from "react";

interface Iprops {
  link?: string;
  label: string;
  icon?: ReactNode;
}

export default function Button({ label, link, icon }: Iprops): JSX.Element {
  return (
    <button className=" transition-all hover:shadow-lg text-white bg-pink-400 hover:bg-pink-500 w-28 h-10 px-4 rounded-3xl text-sm ">
      {link ? <a href={link}>{label}</a> : <span>{label}</span>}
      {icon && icon}
    </button>
  );
}
