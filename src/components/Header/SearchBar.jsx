import MobileSearchBar from "./MobileSearchbar";


export default function SearchBar() {
  return (
    <div className="flex z-50 justify-end gap-4 items-center w-full">
      <MobileSearchBar />
      <form
        action="#"
        className="hidden md:flex bg-white/5 relative w-full rounded-sm items-center"
      >
        <input
          type="text"
          className="bg-transparent leading-none placeholder:text-xs lg:placeholder:text-sm xl:placeholder:text-base placeholder:leading-none placeholder:text-[#7B678A] flex items-center pl-4 pr-10 md:py-2 xl:py-3 md:text-sm xl:text-base w-full focus:outline-none text-[#BEAFC3]"
          placeholder="Search games & products.."
        />
        <a href="#">
          <svg
            className="absolute md:w-3 md:h-3 xl:w-4 xl:h-4 right-4 top-0 bottom-0 my-auto stroke-[#beafc3] transition-all hover:transition-all hover:stroke-white"
            viewBox="0 0 12 12"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Search">
              <circle
                id="Ellipse_739"
                cx="5.30069"
                cy="5.44962"
                r="4.72156"
                // stroke="#BEAFC3"
                strokeWidth="0.859558"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Line_181"
                d="M8.58463 8.97876L10.4357 10.8251"
                // stroke="#BEAFC3"
                strokeWidth="0.859558"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </a>
      </form>
      <a href="#" className="text-white w-">
        <svg
          className="stroke-[#160524] w-5 h-5 sm:w-8 sm:h-8 xl:w-[21px] xl:h-[20px] fill-[#beafc3] hover:fill-white transition-all hover:transition-all hover:stroke-white"
          viewBox="0 0 14 13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="fi-rs-shopping-bag">
            <g id="01 align center">
              <path
                id="Vector"
                d="M9.6417 3.9935V4.0508H9.699H12.2204V10.4402C12.2204 10.7669 12.0906 11.0803 11.8595 11.3114C11.6285 11.5424 11.3151 11.6722 10.9883 11.6722H3.25232C2.92556 11.6722 2.61219 11.5424 2.38114 11.3114C2.15009 11.0803 2.02029 10.7669 2.02029 10.4402V4.0508H4.54166H4.59896V3.9935C4.59896 3.32479 4.8646 2.68347 5.33745 2.21062C5.8103 1.73777 6.45162 1.47213 7.12033 1.47213C7.78904 1.47213 8.43036 1.73777 8.90321 2.21062C9.37606 2.68347 9.6417 3.32479 9.6417 3.9935ZM8.83945 4.0508H8.89675V3.9935C8.89675 3.52236 8.70959 3.07052 8.37645 2.73738C8.0433 2.40424 7.59146 2.21708 7.12033 2.21708C6.64919 2.21708 6.19735 2.40424 5.86421 2.73738C5.53107 3.07052 5.34391 3.52236 5.34391 3.9935V4.0508H5.40121H8.83945ZM2.82254 4.79575H2.76524V4.85306V10.4402C2.76524 10.5694 2.81655 10.6933 2.9079 10.7846C2.99925 10.8759 3.12314 10.9273 3.25232 10.9273H10.9883C11.1175 10.9273 11.2414 10.8759 11.3328 10.7846C11.4241 10.6933 11.4754 10.5694 11.4754 10.4402V4.85306V4.79575H11.4181H9.699H9.6417V4.85306V5.65531H8.89675V4.85306V4.79575H8.83945H5.40121H5.34391V4.85306V5.65531H4.59896V4.85306V4.79575H4.54166H2.82254Z"
                strokeWidth="0.114608"
              />
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
}
