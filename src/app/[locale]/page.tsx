import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import CategoryTicker from "@/components/sections/CategoryTicker";
import BubbleCategories from "@/components/sections/BubbleCategories";
import TelegramSection from "@/components/sections/TelegramSection";
import StickyFlow from "@/components/sections/StickyFlow";
import PrivateBusiness from "@/components/sections/PrivateBusiness";
import ProductExperience from "@/components/sections/ProductExperience";
import MatchDeals from "@/components/sections/MatchDeals";
import GermanyMap from "@/components/sections/GermanyMap";
import Footer from "@/components/sections/Footer";
import { CoverPin } from "@/components/fx/CoverPin";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <div className="cover-stack">
          <CoverPin z={1} round={false}>
            <Hero />
          </CoverPin>
          <CoverPin z={2}>
            <CategoryTicker />
            <BubbleCategories />
          </CoverPin>
          <CoverPin z={3} fill>
            <TelegramSection />
          </CoverPin>
        </div>

        <StickyFlow />
        <PrivateBusiness />
        <ProductExperience />
        <MatchDeals />
        <GermanyMap />
      </main>
      <Footer />
    </>
  );
}
