
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

interface HeroSectionProps {
  collabCount: number;
}

const HeroSection = ({ collabCount }: HeroSectionProps) => {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 bg-gradient-to-br from-[#FF4438]/5 to-[#FDBD50]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#FDBD50]/10 px-4 py-2 rounded-full text-[#FF4438] font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Over {collabCount.toLocaleString()} successful collaborations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1D252C] mb-6 leading-tight">
            Where Restaurants &
            <span className="text-[#FF4438]"> Foodies Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            SoloFoodies makes brand deals easy by connecting food influencers with restaurants — all in one simple platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF4438] hover:bg-[#FF4438]/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Join as a Foodie
            </Button>
            <Button variant="outline" className="border-[#FDBD50] text-[#FF4438] hover:bg-[#FDBD50]/10 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Partner as a Restaurant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
