import TwitterModal from "./TwitterModal";

export default function BlogRight() {
  return (
    <div className="flex w-full justify-center md:justify-end relative">
      <img className="w-[500px] z-40" src="/Rectangle1081.png" alt="" />
      <svg
        className="absolute -bottom-28 -right-44"
        width="518"
        height="343"
        viewBox="0 0 418 313"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_5_4745)">
          <ellipse
            cx="208.721"
            cy="156.215"
            rx="131.087"
            ry="42.923"
            transform="rotate(-24.9011 208.721 156.215)"
            fill="#530070"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_5_4745"
            x="0.190262"
            y="0.41777"
            width="417.062"
            height="311.595"
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
              stdDeviation="44.124"
              result="effect1_foregroundBlur_5_4745"
            />
          </filter>
        </defs>
      </svg>
      <TwitterModal />
    </div>
  );
}
