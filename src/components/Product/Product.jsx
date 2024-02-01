import ProductLeft from "./ProductLeft/ProductLeft";
import ProductRight from "./ProductRight/ProductRight";

export default function Product() {
    return(
        <div className="flex flex-col-reverse md:flex-row w-full justify-between mt-10 md:gap-8 md:mt-20">
            <ProductLeft />
            <ProductRight />
        </div>
    )
}