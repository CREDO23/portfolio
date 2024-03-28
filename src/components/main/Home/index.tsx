import IntroduceUser from "./IntroduceUser";
import UserImage from "./Userimage";

export default function Home(): JSX.Element {
  return (
    <section
      id="home"
      className="w-full max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8 md:px-12 my-6 flex"
    >
      <div className="flex max-[900px]:order-2 items-center z-20 justify-center w-1/2">
        <IntroduceUser />
      </div>
      <div className=" flex items-center justify-center md:w-1/2">
        <UserImage />
      </div>
    </section>
  );
}
