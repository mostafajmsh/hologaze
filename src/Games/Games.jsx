import Slider from "./Slider/Slider";
import TopSec from "./TopSec/TopSec";

export default function Games() {
  return (
    <div className="mt-60 relative">
      <svg
        className="absolute -left-32 -top-60"
        width="372"
        height="978"
        viewBox="0 0 372 978"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_5_4641)">
          <ellipse
            cx="-20.3429"
            cy="489.137"
            rx="225.777"
            ry="129.22"
            transform="rotate(90 -20.3429 489.137)"
            fill="#530070"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_5_4641"
            x="-412.015"
            y="0.908203"
            width="783.344"
            height="976.458"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="131.226"
              result="effect1_foregroundBlur_5_4641"
            />
          </filter>
        </defs>
      </svg>
      <TopSec />
      <Slider />
    </div>
  );
}
