
import { Heart, Utensils, Camera, Globe } from 'lucide-react';

interface StatsSectionProps {
  collabCount: number;
}

const StatsSection = ({ collabCount }: StatsSectionProps) => {
  const stats = [
    {
      number: collabCount.toLocaleString(),
      label: "Successful Collaborations",
      icon: Heart
    },
    {
      number: "2,500+",
      label: "Active Restaurants",
      icon: Utensils
    },
    {
      number: "8,900+",
      label: "Food Creators",
      icon: Camera
    },
    {
      number: "150+",
      label: "Cities Worldwide",
      icon: Globe
    }
  ];

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#FF4438] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#1D252C] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
