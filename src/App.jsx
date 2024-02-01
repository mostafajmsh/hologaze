import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import BannerBg from "./components/BgShapes/BannerBg";
import HeaderBg from "./components/BgShapes/HeaderBg";
import Product from "./components/Product/Product";
import Blog from "./components/Blog/Blog";
import Games from "./components/Games/Games";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

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
