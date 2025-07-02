import { Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare } from 'lucide-react';
import { missionValues } from '@/data/landingPageData';
const MissionSection = () => {
  const iconMap = {
    Search,
    Heart,
    TrendingUp,
    Shield,
    Clock,
    Award,
    MessageSquare
  };
  return <section className="px-4 py-20 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-8">¿Por qué Solofoodies?</h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">Nuestra misión es facilitar al máximo las colaboraciones entre restaurantes y creadores gastronómicos. Queremos ayudarte a generar visibilidad, compartir experiencias auténticas y celebrar la cultura culinaria. Creemos en conexiones reales que benefician al ecosistema gastronómico</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {missionValues.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            return <div key={index}>
                  <div className="w-16 h-16 bg-[#FF4438]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#FF4438]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D252C] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;