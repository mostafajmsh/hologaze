import ProductInfo from "./ProductInfo";

export default function ProductRight() {
  return (
    <div className="flex flex-col w-full items-start md:items-end mt-4 md:mt-8">
      <p className="font-titleFont text-xl xs:text-2xl md:text-3xl lg:text-4xl text-white text-left ">
        Our Virtual Headsets Shine with Unique Features!
      </p>
      <ProductInfo />
    </div>
  );
}
