import Navbar from "./Navbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="flex justify-between items-center pt-8">
      <MobileNav />
      <Navbar />
      <Logo styles="text-2xl sm:text-3xl text-center lg:text-2xl xl:text-3xl font-logoFont" />
      <SearchBar />
    </header>
  );
}

export default Header;
