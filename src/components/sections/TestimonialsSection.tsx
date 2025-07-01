import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/landingPageData';

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-20 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D252C] mb-6">Lo que dice nuestra comunidad</h2>
          <p className="text-xl text-gray-600">Historias reales de restaurantes y creadores que han encontrado el éxito con Solofoodies</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF4438] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-[#1D252C]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
