export default function TopSec() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <p className="text-white w-full text-left text-xl xs:text-2xl md:text-3xl lg:text-4xl font-titleFont leading-normal">
        Top Games
      </p>
      <p className="sm:text-base w-full mt-4 md:mt-0 text-sm text-white ">
        If you buy video 2 games, you will receive 1 video game for free, along
        with a <span className="text-primaryColor font-regFont font-extrabold">50%</span> discount.
      </p>
      <div className=" w-full hidden md:flex justify-end gap-4">
        <button className="flex p-2 bg-[#141a32] justify-center items-center w-10 h-10 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M7.37837 11.5404L8.18635 10.7324L4.9888 7.52914L11.9627 7.52914V6.38306L4.9888 6.38306L8.18635 3.17977L7.37837 2.37179L2.79406 6.9561L7.37837 11.5404Z"
              fill="#3DDEED"
            />
          </svg>
        </button>
        <button className="flex p-2 bg-[#141a32] justify-center items-center w-10 h-10 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M7.63717 2.37146L6.82918 3.17944L10.0267 6.38273H3.05286V7.52881H10.0267L6.82918 10.7321L7.63717 11.5401L12.2215 6.95577L7.63717 2.37146Z"
              fill="#3DDEED"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
