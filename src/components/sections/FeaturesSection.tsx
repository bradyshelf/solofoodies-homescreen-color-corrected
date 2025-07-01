
import { CheckCircle, Camera, Utensils, Building2 } from 'lucide-react';

const FeaturesSection = () => {
  const foodieFeatures = [
    {
      title: "Explora colaboraciones según tu ubicación actual",
      description: "Encuentra oportunidades cerca de ti"
    },
    {
      title: "Añade viajes próximos con ubicación y fechas", 
      description: "Planifica colaboraciones durante tus viajes"
    },
    {
      title: "Aplica a colaboraciones antes de llegar a nuevas ciudades",
      description: "Asegura tu agenda antes de viajar"
    },
    {
      title: "Rastrea el estado de tus colaboraciones y chatea con restaurantes",
      description: "Mantén control total de tus partnerships"
    }
  ];

  const restaurantFeatures = [
    {
      title: "Crea colaboraciones públicas en menos de 1 minuto",
      description: "Proceso rápido y sencillo"
    },
    {
      title: "Recibe solicitudes de creadores locales e internacionales",
      description: "Accede a una amplia red de influencers"
    },
    {
      title: "Habla directo con creadores y define expectativas desde el chat integrado",
      description: "Comunicación clara y directa"
    },
    {
      title: "Valora a los creadores al finalizar la colaboración",
      description: "Construye una red de confianza"
    }
  ];

  const agencyFeatures = [
    {
      title: "Gestiona múltiples restaurantes desde un solo perfil",
      description: "Centraliza todas tus operaciones"
    },
    {
      title: "Maneja restaurantes con múltiples ubicaciones",
      description: "Escala tus campañas fácilmente"
    },
    {
      title: "Dashboard centralizado para todas las colaboraciones",
      description: "Control total desde una sola vista"
    },
    {
      title: "Analíticas consolidadas por cliente",
      description: "Reportes detallados para cada restaurante"
    }
  ];

  return (
    <section id="features" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-6">Built for Everyone</h2>
        </div>
        
        {/* Food Creators Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#FDBD50]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Camera className="w-8 h-8 text-[#FDBD50]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1D252C] mb-4">For Food Creators</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Turn your passion into partnerships with amazing restaurants</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {foodieFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FDBD50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1D252C] mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#FF4438]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Utensils className="w-8 h-8 text-[#FF4438]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1D252C] mb-4">For Restaurants</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Amplify your brand with authentic food influencer partnerships</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {restaurantFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF4438] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1D252C] mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurant Agencies Section */}
        <div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#10B981]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-8 h-8 text-[#10B981]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1D252C] mb-4">For Restaurant Agencies</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Scale influencer marketing across your entire restaurant portfolio</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {agencyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1D252C] mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
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
