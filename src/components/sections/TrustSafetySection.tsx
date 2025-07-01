
import { Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare } from 'lucide-react';
import { trustFeatures } from '@/data/landingPageData';

const TrustSafetySection = () => {
  const iconMap = {
    Search,
    Heart,
    TrendingUp,
    Shield,
    Clock,
    Award,
    MessageSquare
  };

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1D252C] mb-4">Trust & Safety</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your security and success are our top priorities. We've built comprehensive systems to ensure every collaboration is safe and successful.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#FF4438] rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1D252C] mb-3">{feature.title}</h3>
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
