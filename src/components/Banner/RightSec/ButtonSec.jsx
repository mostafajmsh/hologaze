export default function ButtonSec() {
  return (
    <div className="mt-12 flex w-full sm:w-1/2 sm:mx-auto flex-col md:flex-row md:justify-start md:ml-0 gap-4">
      <a
        href="#"
        className="bg-primaryColor w-full flex h-12 md:h-full justify-center items-center py-2 px-4 gap-4 rounded-sm"
      >
        <span className="font-regFont leading-none flex justify-center items-center text-nowrap font-medium text-[#182627] md:text-sm xl:text-base">
          Visit Store
        </span>
        <svg
          className="w-5 h-4 xl:w-5 xl:h-[21px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 14"
          fill="none"
        >
          <path
            d="M7.54082 2.50765L6.73284 3.31563L9.93039 6.51892H2.95651V7.665H9.93039L6.73284 10.8683L7.54082 11.6763L12.1251 7.09196L7.54082 2.50765Z"
            fill="#182627"
          />
        </svg>
      </a>
      <a
        href="#"
        className="py-2 px-4 border w-full flex h-12 md:h-full items-center justify-center gap-2 rounded-sm border-white/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M6.9799 1.36157C3.81672 1.36157 1.24951 3.92879 1.24951 7.09196C1.24951 10.2551 3.81672 12.8223 6.9799 12.8223C10.1431 12.8223 12.7103 10.2551 12.7103 7.09196C12.7103 3.92879 10.1431 1.36157 6.9799 1.36157ZM6.9799 11.6763C4.4528 11.6763 2.39559 9.61906 2.39559 7.09196C2.39559 4.56486 4.4528 2.50765 6.9799 2.50765C9.507 2.50765 11.5642 4.56486 11.5642 7.09196C11.5642 9.61906 9.507 11.6763 6.9799 11.6763ZM3.82819 10.2437L8.13171 8.24377L10.1316 3.94025L5.82809 5.94015L3.82819 10.2437ZM6.9799 6.46162C7.32945 6.46162 7.61024 6.7424 7.61024 7.09196C7.61024 7.44151 7.32945 7.7223 6.9799 7.7223C6.63034 7.7223 6.34956 7.44151 6.34956 7.09196C6.34956 6.7424 6.63034 6.46162 6.9799 6.46162Z"
            fill="white"
          />
        </svg>
        <span className="text-white font-regFont text-sm xl:text-base">
          Explore
        </span>
      </a>
    </div>
  );
}
