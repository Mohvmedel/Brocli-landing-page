import Header from "./components/Header";
import Hero from "./components/Hero";
import RabatLive from "./components/RabatLive";
import Services from "./components/Services";
import MarketProblem from "./components/MarketProblem";
import Solution from "./components/Solution";
import LenisScroll from "./components/LenisScroll";
import FinalCta from "./components/FinalCta";
import { LocaleProvider } from "./components/LocaleProvider";

export default function Home() {
  return (
    <LocaleProvider>
      <main className="min-h-screen">
        <LenisScroll />
        <Header />
        <Hero />
        <MarketProblem />
        <RabatLive />
        <Services />
        <Solution />
        <FinalCta />
      </main>
    </LocaleProvider>
  );
}
