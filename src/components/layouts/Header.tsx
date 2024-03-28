import Hamburger from "../header/Hamburger";
import Logo from "../header/Logo";
import Navigation from "../header/Navigation";

export default function Header({
  setHamburger,
  hamburger,
}: IhamburgerProps): JSX.Element {
  return (
    <header
      className={`py-4 ${
        hamburger ? " max-[768px]:h-[100vh] max-[768px]:z-30" : "h-20 "
      } overflow-hidden  glass-header shadow-sm sticky  top-0 z-50 max-[770px]:flex-col px-3 md:px-6 flex items-center max-[770px]:justify-start justify-between w-full`}
    >
      <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
      <div className="glass-logo max-[770px]:self-start  flex px-5 items-center justify-center py-2  p-4 rounded-full z-20">
        <Logo />
      </div>
      <div
        className={`${
          hamburger ? " max-[770px]:block" : "max-[770px]:hidden "
        } `}
      >
        <Navigation hamburger={hamburger} setHamburger={setHamburger} />
      </div>
    </header>
  );
}
