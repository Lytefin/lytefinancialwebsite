import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FlowChartSection from "@/components/FlowChartSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FlowChartSection />
        <CTASection />
      </main>
    </div>
  );
}
