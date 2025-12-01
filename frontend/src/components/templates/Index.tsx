"use client";

import { Header } from "@/components/organisms/Header";
import { HeroCarousel } from "@/components/organisms/HeroCarousel";
import { ScrollingTicker } from "@/components/molecules/ScrollingTicker";
import { AboutSection } from "@/components/organisms/AboutSection";
import { Benefits } from "@/components/organisms/Benefits";
import { StatsCounter } from "@/components/molecules/StatsCounter";
import { Programs } from "@/components/organisms/Programs";
import { Trainers } from "@/components/organisms/Trainers";
import { Pricing } from "@/components/organisms/Pricing";
import { Footer } from "@/components/organisms/Footer";
import GymRow from "@/components/organisms/GymRow";
import OffersRow from "@/components/molecules/OffersRow";
import PassesRow from "@/components/molecules/PassesRow";
import CategoriesRow from "@/components/molecules/CategoriesRow";
import WidePromo from "@/components/molecules/WidePromo";
import FeaturedGyms from "@/components/organisms/FeaturedGyms";
import HireTrainer from "@/components/organisms/HireTrainer";
import MobileNav from "@/components/organisms/MobileNav";

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
      <MobileNav />
    </div>
  );
};

export default Index;

