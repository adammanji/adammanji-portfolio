import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Index } from "@/components/Index";
import { BashiFeature } from "@/components/BashiFeature";
import { SnappyFeature } from "@/components/SnappyFeature";
import { TaserTagFeature } from "@/components/TaserTagFeature";
import { MoreWork } from "@/components/MoreWork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Index />
        <BashiFeature />
        <SnappyFeature />
        <TaserTagFeature />
        <MoreWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
