
import { Card, CardContent } from '@/components/ui/card';
import { Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare } from 'lucide-react';
import { howItWorksSteps } from '@/data/landingPageData';

const HowItWorksSection = () => {
  const iconMap = {
    Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare
  };

  return (
    <section id="how-it-works" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-6">Cómo Funciona</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tres pasos simples para comenzar a construir colaboraciones significativas</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#FF4438]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF4438]/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-[#FF4438]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D252C] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
