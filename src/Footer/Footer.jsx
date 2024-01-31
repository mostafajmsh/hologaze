import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop/FooterTop";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mt-32 py-12 bg-white/5 relative">
      <FooterTop />
      <svg
        className="absolute bottom-[12%] md:bottom-28"
        width="100%"
        height="2"
        viewBox="0 0 808 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="807.536"
          y1="0.785929"
          x2="0.697876"
          y2="0.785929"
          stroke="url(#paint0_linear_5_4815)"
          strokeOpacity="0.7"
          strokeWidth="1.14608"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5_4815"
            x1="795.287"
            y1="0.212994"
            x2="0.706066"
            y2="0.219562"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BD00FF" stopOpacity="0" />
            <stop
              offset="0.50868"
              stopColor="#BD00FF"
              stopOpacity="0.50868"
            />
            <stop offset="1" stopColor="#BD00FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <FooterBottom />
    </footer>
  );
}
