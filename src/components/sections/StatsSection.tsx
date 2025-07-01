
import { Heart, Utensils, Camera, Globe } from 'lucide-react';

interface StatsSectionProps {
  collabCount: number;
}

const StatsSection = ({ collabCount }: StatsSectionProps) => {
  const stats = [
    { number: collabCount.toLocaleString(), label: "Successful Collaborations", icon: Heart },
    { number: "2,500+", label: "Active Restaurants", icon: Utensils },
    { number: "8,900+", label: "Food Creators", icon: Camera },
    { number: "150+", label: "Cities Worldwide", icon: Globe }
  ];

  return (
    <section className="px-4 py-12 md:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-[#FF4438]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-[#FF4438]" />
              </div>
              <div className="text-3xl font-bold text-[#1D252C] mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
