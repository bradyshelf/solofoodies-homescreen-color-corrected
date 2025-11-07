import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface PricingSectionProps {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
}

const PricingSection = ({ selectedPlan, setSelectedPlan }: PricingSectionProps) => {
  const plans = [
    {
      id: 'individual',
      name: 'Individual',
      description: 'Ideal para un restaurante individual',
      monthlyPrice: 49,
      annualPrice: 294,
      monthlyEquivalent: 24.50,
      restaurants: 1,
      badge: 'Plan Actual',
      badgeColor: 'bg-blue-500',
      borderColor: 'border-gray-300'
    },
    {
      id: 'multi4',
      name: 'Multi 4',
      description: 'Ideal para grupos de restauración',
      monthlyPrice: 99,
      annualPrice: 594,
      monthlyEquivalent: 49.50,
      restaurants: 4,
      badge: 'Más Popular',
      badgeColor: 'bg-[#FF4438]',
      borderColor: 'border-[#FF4438]',
      isPopular: true
    },
    {
      id: 'multi9',
      name: 'Multi 9',
      description: 'Ideal para agencias de marketing gastronómico',
      monthlyPrice: 199,
      annualPrice: 1194,
      monthlyEquivalent: 99.50,
      restaurants: 9,
      borderColor: 'border-gray-300'
    },
    {
      id: 'unlimited',
      name: 'Ilimitado',
      description: 'Ideal para agencias internacionales de marketing',
      monthlyPrice: 499,
      annualPrice: 2994,
      monthlyEquivalent: 249.50,
      restaurants: 'unlimited',
      badge: 'Mejor Valor',
      badgeColor: 'bg-[#FF4438]',
      borderColor: 'border-[#FF4438]'
    }
  ];

  const isAnnual = selectedPlan === 'annual';

  return (
    <section className="px-4 py-20 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-6">Planes y Precios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gestiona múltiples marcas de restaurantes desde una sola cuenta
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Obtén 7 días gratis de prueba seleccionando un plan, podrás cancelar sin coste durante este período
          </p>
        </div>

        {/* Plan Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`font-medium ${!isAnnual ? 'text-[#1D252C]' : 'text-gray-600'}`}>
            Mensual
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={(checked) => setSelectedPlan(checked ? 'annual' : 'monthly')}
          />
          <span className={`font-medium ${isAnnual ? 'text-[#1D252C]' : 'text-gray-600'}`}>
            Anual
          </span>
          {isAnnual && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Ahora 50%
            </span>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`border-2 ${plan.borderColor} relative overflow-visible hover:shadow-lg transition-shadow`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap`}>
                  {plan.badge}
                </div>
              )}
              
              <CardContent className="p-6 pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1D252C] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-4xl font-bold text-[#1D252C]">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}€
                    </span>
                    <span className="text-gray-600">
                      {isAnnual ? '/año' : '/mes'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-600">
                      {plan.monthlyEquivalent}€/mes facturado anualmente
                    </p>
                  )}
                  {/* Show per-restaurant pricing for Multi 4 and Multi 9 */}
                  {(plan.id === 'multi4' || plan.id === 'multi9') && typeof plan.restaurants === 'number' && (
                    <p className="text-sm text-green-500 font-medium mt-2">
                      Solo {isAnnual 
                        ? (plan.annualPrice / 12 / plan.restaurants).toFixed(2)
                        : (plan.monthlyPrice / plan.restaurants).toFixed(2)
                      }€ por restaurante/mes
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-6">
                  <Zap className="w-4 h-4 text-[#FDBD50]" />
                  <span>
                    {plan.restaurants === 'unlimited' 
                      ? 'Gestiona restaurantes ilimitados'
                      : `Gestiona ${plan.restaurants} restaurante${typeof plan.restaurants === 'number' && plan.restaurants > 1 ? 's' : ''}`
                    }
                  </span>
                </div>

                <Button className="w-full bg-[#1D252C] hover:bg-[#1D252C]/90 text-white font-semibold">
                  Continuar con {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 bg-gray-50 px-6 py-4 rounded-lg max-w-5xl mx-auto">
            <strong>Todos los planes incluyen:</strong> Acceso al chat interno con los creadores • Gestionar múltiples direcciones para cada marca de restauración • Colaboraciones ilimitadas • Integración con Covermanager
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
