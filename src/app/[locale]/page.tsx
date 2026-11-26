import { Hero } from "@/components/sections/Hero";
import { OnePlace } from "@/components/sections/OnePlace";
import { PoweredByTelegram } from "@/components/sections/PoweredByTelegram";
import { ForEveryone } from "@/components/sections/ForEveryone";
import { Connects } from "@/components/sections/Connects";
import { AcrossGermany } from "@/components/sections/AcrossGermany";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="main" className="home-flow">
      <Hero />
      <OnePlace />
      <div className="messenger-band">
        <PoweredByTelegram />
        <ForEveryone />
      </div>
      <Connects />
      <AcrossGermany />
      <Footer />
    </main>
  );
}
