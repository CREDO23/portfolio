import Image from "next/image";
import thierry from '../../../../public/thierry.png'
export default function UserImage(): JSX.Element {
  return (
    <div className=" relative rounded-full">
      <div className=" bg-blue-400 rounded-full -z-10 top-0 right-0 w-full h-full absolute"></div>
      <div className=" bg-blue-400 -z-10 top-0 right-0 w-1/2 h-1/2 absolute"></div>
      <div className=" bgpic -z-20 top-0 rounded-e-full rounded-tl-full -left-3 w-full h-full absolute"></div>
      <div className="bgcircle1 max-[500px]:-right-[4rem] absolute -z-20 -bottom-[2rem] -right-[2rem] w-[10rem] h-[10rem] rounded-full"></div>
      <Image className=" rounded-full" alt="thierry" src={thierry} />
    </div>
  );
}
