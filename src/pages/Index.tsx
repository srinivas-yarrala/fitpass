import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { AboutSection } from "@/components/AboutSection";
import { Benefits } from "@/components/Benefits";
import { StatsCounter } from "@/components/StatsCounter";
import { Programs } from "@/components/Programs";
import { Trainers } from "@/components/Trainers";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import GymRow from "@/components/GymRow";
import OffersRow from "@/components/OffersRow";
import PassesRow from "@/components/PassesRow";
import CategoriesRow from "@/components/CategoriesRow";
// import ReviewsRow from "@/components/ReviewsRow";
import WidePromo from "@/components/WidePromo";
import FeaturedGyms from "@/components/FeaturedGyms";
import HireTrainer from "@/components/HireTrainer";
// Removed profile-like elements from landing for a marketing-first layout

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <HeroCarousel />
      <ScrollingTicker />
      <AboutSection />
      {/* Swiggy-style horizontal sections and banners */}
      <GymRow />
      <OffersRow />
      <CategoriesRow />
      <FeaturedGyms />
      <WidePromo />
      <HireTrainer />
      <PassesRow />
      <Footer />
    </div>
  );
};

export default Index;
