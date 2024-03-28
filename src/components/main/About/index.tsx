export default function About(): JSX.Element {
  return (
    <section
      id="about-me"
      className="w-full my-6 flex items-center flex-col gap-10"
    >
      <h3 className=" text-2xl">About me</h3>
      <div className=" font-light flex flex-col gap-4 items-center justify-center text-center">
        <p className="w-[30rem] max-[550px]:w-[22rem] ">
          Since beginning my journey as a Web developper , I&apos;ve done remote
          work for agencies , consulted for statups , and collaborate with
          talend people to create digital products for both business and
          consumer use . I&apos;m quietly confident , naturally curious , and
          perpetually working on improving my chops and problem solving .
        </p>
        <p className=" max-[550px]:w-[21rem] w-[25rem]">
          My passions are Computer Science, problem-solving, science and
          Technology. I spend my free time in reading books or listing musics
          and podcasts.
        </p>
        <p className="w-[30rem] max-[550px]:w-[22rem] ">
          I am a keen and hard-working computer science with 2+ years of work
          experience, designing, implementing, and maintaining a wide range of
          software applications and projects with agile methodology.
        </p>
      </div>
      <div className=" max-[640px]:flex-col flex  max-[640px]:items-center items-start  justify-center gap-8">
        <div className="flex p-1  flex-col items-center  text-center justify-center gap-4">
          <h2 className=" underline">Programing languages</h2>
          <ul className="max-w-md space-y-1 font-light">
            <li>C</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div className="flex p-1 flex-col items-center text-center justify-center gap-4">
          <h2 className=" underline">Skills</h2>

          <ol className="space-y-4 text-center list-none  list-insid">
            <li className=" flex flex-col items-center text-center">
              <span className=" text-pink-400">Backend</span>
              <ul className="list-none p-1 flex flex-col items-center  font-light space-y-1">
                <li className="">NodeJs</li>
                <li>ExpressJs</li>
              </ul>
            </li>
            <li>
              <span className=" text-pink-400">Frontend</span>
              <ul className="  font-light space-y-1">
                <li>HTML && CSS / Sass</li>
                <li>NextJs</li>
                <li>ReactJs</li>
                <li>React Native</li>
                <li>TailwindCss / Bootstrap</li>
                <li>Redux & Toolkit / Recoil</li>
              </ul>
            </li>
            <li>
              <span className=" text-pink-400">Database and ORM</span>
              <ul className="  font-light space-y-1">
                <li>MongoDB / Mongoose</li>
                <li>PostgreSQL / Sequelize</li>
                <li>SQLite3</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex p-1 items-center flex-col text-center justify-center gap-4">
          <h2 className=" underline">Tools</h2>
          <ul className="max-w-md space-y-1 font-light">
            <li>Git & Github</li>
            <li>Docker</li>
            <li>Asana / Trello / Notion</li>
            <li>Figma / Canva / Visily</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
