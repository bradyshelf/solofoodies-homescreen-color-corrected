
import { Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare } from 'lucide-react';
import { trustFeatures } from '@/data/landingPageData';

const TrustSafetySection = () => {
  const iconMap = {
    Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare
  };

  return (
    <section className="px-4 py-20 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-6">Safe & Secure Platform</h2>
          <p className="text-xl text-gray-600">Your safety and success are our top priorities</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FF4438]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#FF4438]" />
                </div>
                <h3 className="text-xl font-bold text-[#1D252C] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;
