import BlogLeft from "./BlogLeft/BlogLeft"
import BlogRight from "./BlogRight/BlogRight"
export default function Blog() {
    return(
        <div className="flex flex-col md:flex-row mt-20 gap-8 md:gap-4 xl:gap-0 md:mt-32">
        <BlogLeft />
        <BlogRight />
        <div className=""></div>
    </div>
    )
}