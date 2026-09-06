import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import BubbleCategories from "@/components/sections/BubbleCategories";
import TelegramSection from "@/components/sections/TelegramSection";
import PrivateBusiness from "@/components/sections/PrivateBusiness";
import ProductExperience from "@/components/sections/ProductExperience";
import MatchDeals from "@/components/sections/MatchDeals";
import GermanyMap from "@/components/sections/GermanyMap";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <BubbleCategories />
        <TelegramSection />
        <PrivateBusiness />
        <ProductExperience />
        <MatchDeals />
        <GermanyMap />
      </main>
      <Footer />
    </>
  );
}
