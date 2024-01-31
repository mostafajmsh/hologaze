import Navbar from "./Navbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="flex justify-between items-center pt-8">
      <MobileNav />
      <Navbar />
      <Logo />
      <SearchBar />
    </header>
  );
}

export default Header;
