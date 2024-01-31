import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import BannerBg from "./BgShapes/BannerBg";
import HeaderBg from "./BgShapes/HeaderBg";
import Product from "./Product/Product";
import Blog from "./Blog/Blog";
import Games from "./Games/Games";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <HeaderBg />
      <BannerBg />
      <div className="container mx-auto p-4 md:px-8 xl:px-12">
        <Header />
        <Banner />
        <Product />
        <Blog />
        <Games />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default App;
