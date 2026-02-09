import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CVSection } from "@/components/cv-section";
import { SelectedWorks } from "@/components/selected-works";
import { DashboardWidgets } from "@/components/dashboard-widgets";
import { CoreStack } from "@/components/core-stack";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { EducationSection } from "@/components/education-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <HeroSection />
      <CVSection />
      <SelectedWorks />
      <EducationSection />
      <CoreStack />
      <DashboardWidgets />
      <CTASection />
      <Footer />
    </main>
  );
}
