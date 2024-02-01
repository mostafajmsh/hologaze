import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MobileMenuBtn from "./MobileMenuBtn";
import MenuTemplate from "../Menus/MenuTemplate";
import MenuItem from "../Menus/MenuItem";

function Header() {
  return (
    <header className="flex justify-between items-center pt-8">
      <MobileMenuBtn />
      <MenuTemplate
        wrapperStyles="w-0 lg:w-full z-50"
        listStyles="lg:flex hidden text-white/80 md:text-sm lg:text-base xl:text-lg w-full gap-8 justify-start"
      >
        <MenuItem title="Home" />
        <MenuItem title="Catalog" />
        <MenuItem title="Contact" />
        <MenuItem title="Features" />
      </MenuTemplate>
      <Logo styles="text-2xl sm:text-3xl text-center lg:text-2xl xl:text-3xl font-logoFont" />
      <SearchBar />
    </header>
  );
}

export default Header;
