export default function FooterMenu() {
  return (
    <div className="w-full z-50">
      <ul className="flex flex-col text-white/80 text-lg w-full gap-4 md:gap-8 justify-start">
        <li className="text-white font-titleFont">Menu</li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Home</a>
        </li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Catalog</a>
        </li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Contact</a>
        </li>
        <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
          <a>Features</a>
        </li>
      </ul>
    </div>
  );
}
