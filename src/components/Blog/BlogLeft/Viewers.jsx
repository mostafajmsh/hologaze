import ViewerImg from "./ViewerImg";

export default function Viewers() {
  return (
    <div className="flex mt-8">
      <div className="flex items-center">
        <ViewerImg
          styles="relative sm:w-[45px] sm:h-[50px]"
          image="Polygon7.svg"
        />
        <ViewerImg
          styles="relative -left-6 sm:-left-4 sm:w-[45px] sm:h-[50px]"
          image="Polygon8.png"
        />
        <ViewerImg
          styles="relative -left-10 sm:-left-8 sm:w-[45px] sm:h-[50px]"
          image="Polygon9.svg"
        />
        <ViewerImg
          styles="relative -left-14 sm:-left-12 sm:w-[45px] sm:h-[50px]"
          image="Polygon10.svg"
        />
        <ViewerImg
          styles="relative -left-20 sm:-left-16 sm:w-[45px] sm:h-[50px]"
          image="Polygon11.svg"
        />
      </div>
      <p className="text-white font-regFont text-nowrap sm:text-lg font-bold leading-none flex items-center relative -left-8">
        +258K Views
      </p>
    </div>
  );
}
