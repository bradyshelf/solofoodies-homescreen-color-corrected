import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Euro } from 'lucide-react';

interface PricingSectionProps {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
}

const PricingSection = ({ selectedPlan, setSelectedPlan }: PricingSectionProps) => {
  const features = [
    "Colaboraciones públicas ilimitadas",
    "Chat ilimitado",
    "Analíticas básicas",
    "Gestión de múltiples restaurantes"
  ];

  return (
    <section className="px-4 py-20 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-6">Planes y Precios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Los creadores empiezan gratis, los restaurantes acceden a todas las funcionalidades con planes mensuales.
          </p>
        </div>

        {/* Mobile Plan Toggle */}
        <div className="flex justify-center mb-12 md:hidden">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedPlan === 'monthly'
                  ? 'bg-white text-[#1D252C] shadow-sm'
                  : 'text-gray-600 hover:text-[#1D252C]'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setSelectedPlan('onetime')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                selectedPlan === 'onetime'
                  ? 'bg-white text-[#1D252C] shadow-sm'
                  : 'text-gray-600 hover:text-[#1D252C]'
              }`}
            >
              Pago único
            </button>
          </div>
        </div>

        {/* Mobile Single Card View */}
        <div className="md:hidden max-w-md mx-auto">
          <Card className={`border-2 ${selectedPlan === 'monthly' ? 'border-[#FF4438]' : 'border-[#FDBD50]'} relative overflow-hidden`}>
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${selectedPlan === 'monthly' ? 'bg-[#FF4438]' : 'bg-[#FDBD50]'} text-white px-4 py-1 rounded-b-lg text-sm font-medium`}>
              {selectedPlan === 'monthly' ? 'Más Popular' : 'Mejor Valor'}
            </div>
            
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1D252C] mb-2">
                  {selectedPlan === 'monthly' ? 'Plan Mensual' : 'Pago Único'}
                </h3>
                <p className="text-gray-600 mb-6">Para restaurantes independientes, grupos y agencias</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-1">
                    <Euro className="w-8 h-8 text-[#1D252C]" />
                    <span className="text-5xl font-bold text-[#1D252C]">
                      {selectedPlan === 'monthly' ? '29' : '232'}
                    </span>
                    {selectedPlan === 'monthly' && (
                      <span className="text-xl text-gray-600">/mes</span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedPlan === 'monthly' 
                      ? 'Primer restaurante incluido'
                      : 'Primer restaurante incluido'
                    }
                  </p>
                  
                  <p className="text-sm text-green-500 font-medium mt-1">
                    {selectedPlan === 'monthly' 
                      ? '+€29/mes por cada restaurante adicional'
                      : '+€232 por cada restaurante adicional'
                    }
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full ${selectedPlan === 'monthly' ? 'bg-[#FF4438] hover:bg-[#FF4438]/90' : 'bg-[#FDBD50] hover:bg-[#FDBD50]/90'} text-white font-semibold py-3`}>
                Comenzar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Two Cards Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <Card className="border-2 border-[#FF4438] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#FF4438] text-white px-4 py-1 rounded-b-lg text-sm font-medium">
              Más Popular
            </div>
            
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1D252C] mb-2">Plan Mensual</h3>
                <p className="text-gray-600 mb-6">Para restaurantes independientes, grupos y agencias</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-1">
                    <Euro className="w-8 h-8 text-[#1D252C]" />
                    <span className="text-5xl font-bold text-[#1D252C]">29</span>
                    <span className="text-xl text-gray-600">/mes</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">
                    Primer restaurante incluido
                  </p>
                  
                  <p className="text-sm text-green-500 font-medium mt-1">
                    +€29/mes por cada restaurante adicional
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#FF4438] hover:bg-[#FF4438]/90 text-white font-semibold py-3">
                Comenzar
              </Button>
            </CardContent>
          </Card>

          {/* One-time Plan */}
          <Card className="border-2 border-[#FDBD50] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#FDBD50] text-white px-4 py-1 rounded-b-lg text-sm font-medium">
              Mejor Valor
            </div>
            
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1D252C] mb-2">Pago Único</h3>
                <p className="text-gray-600 mb-6">Para restaurantes independientes, grupos y agencias</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-1">
                    <Euro className="w-8 h-8 text-[#1D252C]" />
                    <span className="text-5xl font-bold text-[#1D252C]">232</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">
                    Primer restaurante incluido
                  </p>
                  
                  <p className="text-sm text-green-500 font-medium mt-1">
                    +€232 por cada restaurante adicional
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#FDBD50] hover:bg-[#FDBD50]/90 text-white font-semibold py-3">
                Comenzar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
