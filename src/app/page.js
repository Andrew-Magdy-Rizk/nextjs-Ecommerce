"use client";
import { useSelector } from "react-redux";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
export default function Home() {
  const modeState = useSelector((state) => state.mode);
  return (
    <div className={modeState && "dark bg-[#171717]"}>
      <Hero />
      <ProductSection />
    </div>
  );
}
