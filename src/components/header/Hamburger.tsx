export default function Hamburger({
  setHamburger,
  hamburger,
}: IhamburgerProps): JSX.Element {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div
      onClick={() => setHamburger(!hamburger)}
      className="md:hidden absolute top-[20px] right-6 flex-col items-center h-6 w-6 space-y-2"
    >
      <div
        className={`${genericHamburgerLine} ${
          hamburger
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          hamburger ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          hamburger
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </div>
  );
}
