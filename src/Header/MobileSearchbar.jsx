export default function MobileSearchBar() {
  return (
    <div className="flex md:hidden lg:w-0">
      <button>
        <svg
          className="w-5 h-5 sm:w-8 sm:h-8"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Search">
            <circle
              id="Ellipse_739"
              cx="5.30069"
              cy="5.44962"
              r="4.72156"
              stroke="#BEAFC3"
              strokeWidth="0.859558"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Line_181"
              d="M8.58463 8.97876L10.4357 10.8251"
              stroke="#BEAFC3"
              strokeWidth="0.859558"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
