
import { CheckCircle, Camera, Utensils, Building2 } from 'lucide-react';

const FeaturesSection = () => {
  const foodieFeatures = [
    {
      title: "Explora colaboraciones según tu ubicación actual"
    },
    {
      title: "Añade viajes próximos con ubicación y fechas"
    },
    {
      title: "Aplica a colaboraciones antes de llegar a nuevas ciudades"
    },
    {
      title: "Rastrea el estado de tus colaboraciones y chatea con restaurantes"
    }
  ];

  const restaurantFeatures = [
    {
      title: "Crea colaboraciones públicas en menos de 1 minuto"
    },
    {
      title: "Recibe solicitudes de creadores locales e internacionales"
    },
    {
      title: "Habla directo con creadores y define expectativas desde el chat integrado"
    },
    {
      title: "Valora a los creadores al finalizar la colaboración"
    }
  ];

  const agencyFeatures = [
    {
      title: "Gestiona múltiples restaurantes desde un solo perfil"
    },
    {
      title: "Maneja restaurantes con múltiples ubicaciones"
    },
    {
      title: "Dashboard centralizado para todas las colaboraciones"
    },
    {
      title: "Analíticas consolidadas por cliente"
    }
  ];

  return (
    <section id="features" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-6">Built for Everyone</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Food Creators Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#FDBD50]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Camera className="w-8 h-8 text-[#FDBD50]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1D252C] mb-4">For Food Creators</h3>
            </div>
            <div className="space-y-4">
              {foodieFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDBD50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1D252C] text-sm">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Restaurants Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#FF4438]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Utensils className="w-8 h-8 text-[#FF4438]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1D252C] mb-4">For Restaurants</h3>
            </div>
            <div className="space-y-4">
              {restaurantFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF4438] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1D252C] text-sm">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Restaurant Agencies Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#10B981]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-8 h-8 text-[#10B981]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1D252C] mb-4">For Restaurant Agencies</h3>
            </div>
            <div className="space-y-4">
              {agencyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1D252C] text-sm">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
