import Header from "./components/Header";
import Hero from "./components/Hero";
import RabatLive from "./components/RabatLive";
import Services from "./components/Services";
import MarketProblem from "./components/MarketProblem";
import Solution from "./components/Solution";
import LenisScroll from "./components/LenisScroll";
import FinalCta from "./components/FinalCta";
import SupportBlock from "./components/SupportBlock";
import MobileStickyCta from "./components/MobileStickyCta";
import PricingSection from "./components/PricingSection";
import TrustProof from "./components/TrustProof";
import VisualProof from "./components/VisualProof";
import FaqSection from "./components/FaqSection";
import { LocaleProvider } from "./components/LocaleProvider";
import { StoreLinksProvider } from "./components/StoreLinksProvider";

export default function Home() {
  return (
    <LocaleProvider>
      <StoreLinksProvider>
        <main className="min-h-screen pb-24 md:pb-0">
          <LenisScroll />
          <Header />
          <Hero />
          <PricingSection />
          <MarketProblem />
          <TrustProof />
          <RabatLive />
          <Services />
          <VisualProof />
          <Solution />
          <SupportBlock />
          <FaqSection />
          <FinalCta />
          <MobileStickyCta />
        </main>
      </StoreLinksProvider>
    </LocaleProvider>
  );
}
