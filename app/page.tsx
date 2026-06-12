import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCategory from "./components/ProductCategory";
import Countdown from "./components/Countdown";
import BundleExperience from "./components/BundleExperience";
import TopSellingProducts from "./components/TopSellingProducts";
import PromoBanner from "./components/PromoBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductCategory />
        <Countdown />
        <BundleExperience />
        <TopSellingProducts />
        <PromoBanner />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

