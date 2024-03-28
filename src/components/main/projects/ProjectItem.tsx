import Button from "@/components/shared/Button";
import Image from "next/image";

export default function ProjectItem({
  title,
  description,
  image,
  link,
}: IprojectCard): JSX.Element {
  return (
    <div className="max-[500px]:w-80 w-[18rem] flex flex-col justify-center gap-4 p-4 h-[24rem] glass-project">
      <h4 className="">{title}</h4>
      <div className="flex gap-2 flex-col ">
        <Image className="h-44 rounded-2xl" src={image} alt="chataw" />
        <p className="h-16 font-light text-sm">
          {description.length > 100
            ? description.substring(0, 100) + ". . ."
            : description}
        </p>
      </div>
      <div className=" py-2 flex items-center">
        <Button link={link} label="See more" />
      </div>
    </div>
  );
}
