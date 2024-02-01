import MediaSec from "../../Banner/RightSec/MediaSec";
import Logo from "../../Header/Logo";

export default function FooterMedia() {
  return (
    <div className="flex flex-col w-full items-start">
      <Logo styles="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-logoFont text-left"/>
      <MediaSec />
      <p className="text-white/80 mt-8">(+994) 199-28-786</p>
    </div>
  );
}
