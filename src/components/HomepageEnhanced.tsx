
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Users, MapPin, Star, ArrowRight, CheckCircle, Search, Camera, TrendingUp, Heart, MessageSquare, Award, Shield, Clock, Zap, Globe, Euro, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import FAQSection from './sections/FAQSection';
import VersionSwitcher from './VersionSwitcher';
import { testimonials, howItWorksSteps, trustFeatures, foodieFeatures, restaurantFeatures, missionValues } from '@/data/landingPageData';

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

  const iconMap = {
    Search, Heart, TrendingUp, Shield, Clock, Award, MessageSquare
  };

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
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="px-4 py-6 md:px-6 lg:px-8 border-b border-gray-100">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6F61] rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SoloFoodies</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-gray-600 hover:text-[#FF6F61] transition-colors">How It Works</a>
            <a href="#features" className="text-gray-600 hover:text-[#FF6F61] transition-colors">Features</a>
            <a href="#faq" className="text-gray-600 hover:text-[#FF6F61] transition-colors">FAQ</a>
            <Button variant="outline" className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      <HeroSection collabCount={collabCount} />
      <StatsSection collabCount={collabCount} />

      {/* Mission Section - moved above How It Works */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Why SoloFoodies Exists</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              Our mission is to make it effortless for restaurants and creators to work together, 
              build buzz, and celebrate food culture. We believe in authentic connections that 
              benefit everyone in the food community.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {missionValues.map((value, index) => {
                const IconComponent = iconMap[value.icon as keyof typeof iconMap];
                return (
                  <div key={index}>
                    <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#FF6F61]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Three simple steps to start building meaningful collaborations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6F61]/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-[#FF6F61]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Benefits Split Section */}
      <section id="features" className="px-4 py-20 md:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Built for Everyone</h2>
          </div>
          
          {/* Food Creators Section */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#FDBD50]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Camera className="w-8 h-8 text-[#FDBD50]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Food Creators</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Turn your passion into partnerships with amazing restaurants</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {foodieFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FDBD50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
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
                <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Utensils className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Restaurants</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Amplify your brand with authentic food influencer partnerships</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {restaurantFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6F61] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
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
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Restaurant Agencies</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Scale influencer marketing across your entire restaurant portfolio</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {agencyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Real stories from restaurants and creators who've found success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#FF6F61] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Planes y Precios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los creadores empiezan gratis, los restaurantes acceden a todas las funcionalidades con planes mensuales.
            </p>
          </div>

          {/* Plan Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedPlan === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setSelectedPlan('onetime')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedPlan === 'onetime'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pago único
              </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-[#FF6F61] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#FF6F61] text-white px-4 py-1 rounded-b-lg text-sm font-medium">
                Más Popular
              </div>
              
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Restaurante Individual</h3>
                  <p className="text-gray-600 mb-6">Para restaurantes independientes, grupos y agencias</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-1">
                      <Euro className="w-8 h-8 text-gray-900" />
                      <span className="text-5xl font-bold text-gray-900">
                        {selectedPlan === 'monthly' ? '29' : '232'}
                      </span>
                      {selectedPlan === 'monthly' && (
                        <span className="text-xl text-gray-600">/mes</span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedPlan === 'monthly' 
                        ? 'Primer restaurante incluido'
                        : 'Acceso de por vida'
                      }
                    </p>
                    
                    {selectedPlan === 'monthly' && (
                      <p className="text-sm text-[#FF6F61] font-medium mt-1">
                        +€29/mes por cada restaurante adicional
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Colaboraciones públicas ilimitadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Filtros avanzados de creadores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Chat ilimitado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Analíticas básicas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Soporte prioritario</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Gestión de múltiples restaurantes</span>
                  </div>
                </div>

                <Button className="w-full bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white font-semibold py-3">
                  Comenzar Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />

      {/* Trust & Safety Section */}
      <section className="px-4 py-20 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Safe & Secure Platform</h2>
            <p className="text-xl text-gray-600">Your safety and success are our top priorities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-[#FF6F61]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-r from-[#FF6F61] to-[#FDBD50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your First Collaboration Today</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of restaurants and food creators already building amazing partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#FF6F61] hover:bg-gray-50 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
              Join as a Foodie
            </Button>
            <Button variant="outline" className="border-white text-[#FF6F61] bg-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
              Partner as a Restaurant
            </Button>
          </div>
        </div>
      </section>

      <StatsSection collabCount={collabCount} />

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-200 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#FF6F61] rounded-lg flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SoloFoodies</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Connecting restaurants and food creators worldwide through meaningful collaborations.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{collabCount.toLocaleString()} collaborations and counting</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">How It Works</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Pricing</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Success Stories</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Help Center</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">About Us</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Press</a>
                <a href="#" className="block text-gray-600 hover:text-[#FF6F61] transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 mb-4 md:mb-0">© 2024 SoloFoodies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-[#FF6F61] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      
      <VersionSwitcher />
    </div>
  );
};

export default HomepageEnhanced;
