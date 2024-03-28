import Button from "@/components/shared/Button";

export default function IntroduceUser(): JSX.Element {
  return (
    <div className="flex px-2 flex-col gap-2">
      <div className="flex flex-col">
        <h3 className=" font-light text-xl">
          Hey 👋 , I am <span className=" font-normal">Thierry</span>
        </h3>
        <h2 className=" animrole font-semibold text-2xl">Software Developer</h2>
      </div>
      <div className="flex gap-4 flex-col">
        <p className=" max-[550px]:w-[22rem] w-[25.5rem] text-lg font-light">
          I Design and code beautifully Web Application and I love what I do
        </p>
        <Button link="#about-me" label="Learn more" />
      </div>
    </div>
  );
}
