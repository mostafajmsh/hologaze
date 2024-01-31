import BottomSec from "./BottomSec";
import FirstShape from "./FirstShape";
import LeftBg from "./LeftBg";
import SecondShape from "./SecondShape";

export default function LeftSec() {
  return (
    <div className="flex flex-col justify-end relative mt-14 w-full items-end">
      <LeftBg />
      <FirstShape />
      <div>
        <img className=" sm:mr-28 md:w-80 lg:w-[350px] xl:w-[370px] z-50 lg:mt-0 xl:mt-10 md:mr-0 lg:mr-12 xl:mr-8" src="/bannerImg.png" alt="" />
      </div>
      <div className="relative -right-4 xs:-right-[32%] md:-right-[45%] lg:-right-[36%] xl:-right-[22%]">
        <svg
          className="absolute right-0 h-1 md:w-[600px] xl:w-[1000px]"
          viewBox="0 0 582 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="1.94633"
            x2="1000"
            y2="1.94633"
            stroke="url(#paint0_linear_5_4697)"
            strokeOpacity="0.3"
            strokeWidth="2.29215"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5_4697"
              x1="9.51564"
              y1="3.0923"
              x2="585.7"
              y2="3.08885"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BD00FF" stopOpacity="0" />
              <stop offset="1" stopColor="#BD00FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <SecondShape />
      <BottomSec />
    </div>
  );
}
