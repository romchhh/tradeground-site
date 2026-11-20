import { Hero } from "@/components/sections/Hero";
import { OnePlace } from "@/components/sections/OnePlace";
import { PoweredByTelegram } from "@/components/sections/PoweredByTelegram";
import { ForEveryone } from "@/components/sections/ForEveryone";
import { Connects } from "@/components/sections/Connects";
import { AcrossGermany } from "@/components/sections/AcrossGermany";
import { Footer } from "@/components/sections/Footer";
import { CoverPin } from "@/components/fx/CoverPin";

export default function Home() {
  return (
    <main id="main">
      <div className="cover-stack">
        <CoverPin z={1} round={false}>
          <Hero />
        </CoverPin>

        {/* sticky: Telegram slides over this */}
        <CoverPin z={2} tone="light">
          <OnePlace />
        </CoverPin>

        {/* sticky + higher z: covers One Place, then ForEveryone covers this */}
        <CoverPin z={4} round={false} clip={false}>
          <PoweredByTelegram />
        </CoverPin>

        <CoverPin z={6}>
          <ForEveryone />
        </CoverPin>

        <CoverPin z={7} tone="light">
          <Connects />
        </CoverPin>

        <CoverPin z={8} tone="light" fill>
          <AcrossGermany />
        </CoverPin>

        <CoverPin z={9} pin={false}>
          <Footer />
        </CoverPin>
      </div>
    </main>
  );
}
