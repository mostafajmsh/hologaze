import FooterMedia from "./FooterMedia";
import MenuTemplate from "../../Menus/MenuTemplate";
import MenuItem from "../../Menus/MenuItem";
import NewsLetter from "./NewsLetter";

export default function FooterTop() {
  return (
    <div className="container justify-between mx-auto p-4 md:px-8 xl:px-12 flex flex-col md:flex-row w-full">
      <FooterMedia />
      <div className="flex w-full mt-8 md:mt-0">
        <MenuTemplate
          wrapperStyles="w-full z-50"
          listStyles="flex flex-col text-white/80 text-lg w-full gap-4 md:gap-8 justify-start"
          title="Menu"
        >
          <li className="text-white font-titleFont">Menu</li>
          <MenuItem title="Home" />
          <MenuItem title="Catalog" />
          <MenuItem title="Contact" />
          <MenuItem title="Features" />
        </MenuTemplate>
        <MenuTemplate
          wrapperStyles="w-full z-50"
          listStyles="flex flex-col text-white/80 text-lg w-full gap-4 md:gap-8 justify-start"
          title="Company"
        >
          <li className="text-white font-titleFont">Company</li>
          <MenuItem title="Login" />
          <MenuItem title="Sign Up" />
          <MenuItem title="Privacy" />
          <MenuItem title="Products" />
        </MenuTemplate>
      </div>
      <NewsLetter />
    </div>
  );
}
