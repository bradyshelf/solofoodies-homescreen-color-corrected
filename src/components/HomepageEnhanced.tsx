import { Button } from '@/components/ui/button';
import { Utensils } from 'lucide-react';
import { useState, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import MissionSection from './sections/MissionSection';
import HowItWorksSection from './sections/HowItWorksSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import FAQSection from './sections/FAQSection';
import CallToActionSection from './sections/CallToActionSection';
import FooterSection from './sections/FooterSection';
import VersionSwitcher from './VersionSwitcher';

const HomepageEnhanced = () => {
  const [collabCount, setCollabCount] = useState(1247);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  useEffect(() => {
    const interval = setInterval(() => {
      setCollabCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="px-4 py-6 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF4438] rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1D252C]">SoloFoodies</span>
          </div>
          <nav className="flex items-center gap-6">
            <Button variant="outline" className="border-[#FF4438] text-[#FF4438] hover:bg-[#FF4438]/10">
              Iniciar Sesión
            </Button>
          </nav>
        </div>
      </header>

      <HeroSection collabCount={collabCount} />
      <StatsSection collabCount={collabCount} />
      <MissionSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FeaturesSection />
      <PricingSection selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CallToActionSection />
      <StatsSection collabCount={collabCount} />
      <FooterSection collabCount={collabCount} />
      
      <VersionSwitcher />
    </div>
  );
};

export default HomepageEnhanced;
