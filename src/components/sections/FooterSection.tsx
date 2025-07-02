
import { Utensils } from 'lucide-react';
interface FooterSectionProps {
  collabCount: number;
}
const FooterSection = ({
  collabCount
}: FooterSectionProps) => {
  return <footer className="px-4 py-12 border-t border-gray-200 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF4438] rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#1D252C]">SoloFoodies</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Conectando restaurantes y creadores de contenido gastronómico en todo el mundo a través de colaboraciones significativas.
            </p>
          </div>
          
          <div className="hidden md:block"></div>
          
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[#1D252C] mb-4">Plataforma</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Cómo Funciona</a>
              
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Historias de Éxito</a>
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Centro de Ayuda</a>
            </div>
          </div>
          
          
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 mb-4 md:mb-0">© 2024 SoloFoodies. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-[#FF4438] transition-colors text-sm">Política de Privacidad</a>
            <a href="#" className="text-gray-600 hover:text-[#FF4438] transition-colors text-sm">Términos de Servicio</a>
            <a href="#" className="text-gray-600 hover:text-[#FF4438] transition-colors text-sm">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;
