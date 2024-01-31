export default function MobileNav() {
  return (
    <div className="w-full lg:w-0">
      <div className="menu-icon cursor-pointer flex lg:hidden flex-col justify-between w-[30px] h-5">
        <div className="bar w-[30px] h-1 bg-white/80 transition-all duration-300"></div>
        <div className="bar w-[30px] h-1 bg-white/80 transition-all duration-300"></div>
        <div className="bar w-[30px] h-1 bg-white/80 transition-all duration-300"></div>
      </div>
    </div>
  );
}
