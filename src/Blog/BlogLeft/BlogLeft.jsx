import Viewers from "./viewers";

export default function BlogLeft() {
  return (
    <div className="flex flex-col w-full items-start justify-center">
      <p className="text-white text-left text-xl xs:text-2xl md:text-3xl lg:text-4xl font-titleFont leading-normal">
        Jane Wilson,
        <br /> Gaming Creator
      </p>
      <p className="text-sm sm:text-base text-white mt-8 text-left">
        A virtual headset creator is an individual or company that specializes
        in designing and manufacturing virtual reality headsets, also known as
        VR headsets.
      </p>
      <a href="#" className="flex gap-4 items-center py-3 px-6 bg-[#141a32] mt-8 rounded-sm">
        <span className="text-primaryColor leading-none text-sm sm:text-base font-regFont font-bold">
          Read my blog
        </span>
        <svg
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            d="M7.08013 2.8739L6.27214 3.68189L9.4697 6.88517H2.49582V8.03125H9.4697L6.27214 11.2345L7.08013 12.0425L11.6644 7.45821L7.08013 2.8739Z"
            fill="#3DDEED"
          />
        </svg>
      </a>
      <Viewers />
    </div>
  );
}
