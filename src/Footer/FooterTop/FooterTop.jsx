import FooterMedia from "./FooterMedia";
import FooterMenu from "./FooterMenu";
import FooterRegister from "./FooterRegister";
import NewsLetter from "./NewsLetter";

export default function FooterTop() {
  return (
    <div className="container justify-between mx-auto p-4 md:px-8 xl:px-12 flex flex-col md:flex-row w-full">
      <FooterMedia />
      <div className="flex w-full mt-8 md:mt-0">
        <FooterMenu />
        <FooterRegister />
      </div>
      <NewsLetter />
    </div>
  );
}
