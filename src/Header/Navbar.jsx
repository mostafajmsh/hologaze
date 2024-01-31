function Navbar() {
  return (
    <div className="w-0 lg:w-full z-50">
      <ul className="lg:flex hidden text-white/80 md:text-sm lg:text-base xl:text-lg w-full gap-8 justify-start">
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

export default Navbar;
