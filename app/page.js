import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsBanner from "@/components/StatsBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-16 h-screen ">
      <Hero/>
      <StatsBanner/>
      <Services/>
      <Features/>
    </div>
  );
}
