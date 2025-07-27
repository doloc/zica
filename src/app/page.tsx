'use client'

import CollectionShowcase from "@/components/CollectionShowcaseSection";
import Floating from "@/components/Floating";
import Header from "@/components/HeaderSection";
import Hero from "@/components/HeroSection";
import SpecialFeaturesSection from "@/components/SpecialFeaturesSection";
import { useRef } from "react";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div ref={topRef}>
      <Floating onScrollToTop={scrollToTop} />
      <Header />
      <Hero />
      <CollectionShowcase />
      <SpecialFeaturesSection />
    </div>
  );
}
