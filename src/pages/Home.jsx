import HeroBanner from "../components/home/HeroBanner";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Benefits from "../components/home/Benefits";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Benefits />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
}