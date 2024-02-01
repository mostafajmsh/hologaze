export default function NewsLetter() {
  return (
    <div className="flex flex-col mt-8 md:mt-0 w-full md:w-[150%]">
      <p className="text-white font-titleFont text-lg">
        Subscribe Our News Letter
      </p>
      <p className="text-white/80 mt-8">
        Sure, please provide your email address to subscribe to newsletter
      </p>
      <div className="flex flex-col gap-4 md:flex-row w-full h-14 rounded-sm mt-12 relative">
        <input
          className="bg-transparent text-white/80 text-sm outline-none w-full py-6 px-4 rounded-sm h-full border border-white/20"
          type="text"
          placeholder="Enter your mail..."
        />
        <a
          className="md:absolute right-0 bg-primaryColor rounded-r-sm font-titleFont text-sm h-full flex justify-center items-center p-4 text-[#0F041C]"
          href="#"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
}
