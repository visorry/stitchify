import { CreatorShowcase } from "@/components/creator-showcase";
import { LandingPage } from "@/components/enhanced-landing-page";
import Footer from "@/components/Footer";
import Hero from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <Hero />
      <LandingPage />
      <CreatorShowcase />
      <Footer />
    </>
  );
}
