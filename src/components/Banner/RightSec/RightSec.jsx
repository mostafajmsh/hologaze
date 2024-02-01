import ButtonSec from "./ButtonSec";
import MediaSec from "./MediaSec";

export default function RightSec() {
  return (
    <div className="flex flex-col items-start z-50 justify-end mt-8 md:mt-14 w-full">
      <p className="font-regFont text-base xl:text-lg text-white/80">VIRTUAL HEADSETS</p>
      <p className="font-titleFont text-start md:max-w-[340px] xl:max-w-none text-4xl md:text-4xl xl:text-5xl text-white mt-8">
        Experience a new dimension of reality
      </p>
      <p className="flex gap-2 mt-8 max-w-80 text-left">
        <svg
          width="26"
          height="26"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Star 4"
            d="M6.88881 0.495941L9.11741 4.57077L13.1922 6.79937L9.11741 9.02796L6.88881 13.1028L4.66022 9.02796L0.585388 6.79937L4.66022 4.57077L6.88881 0.495941Z"
            fill="#BF23F5"
          />
        </svg>
        <span className="text-white/80 text-base xl:text-base">
          Step into the future with our virtual headset, come to life right
          before your eyes
        </span>
      </p>
      <ButtonSec />
      <p className="text-white text-sm xl:text-base font-regFont font-bold mt-8 md:mt-10 lg:mt-12 tracking-wider">
        FOLLOW US
      </p>
      <MediaSec />
    </div>
  );
}
