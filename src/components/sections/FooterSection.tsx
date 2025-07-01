
import { Utensils } from 'lucide-react';

interface FooterSectionProps {
  collabCount: number;
}

const FooterSection = ({ collabCount }: FooterSectionProps) => {
  return (
    <footer className="px-4 py-12 border-t border-gray-200 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF4438] rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#1D252C]">SoloFoodies</span>
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
            <h4 className="font-semibold text-[#1D252C] mb-4">Platform</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">How It Works</a>
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Pricing</a>
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Success Stories</a>
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Help Center</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#1D252C] mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">About Us</a>
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Careers</a>
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Press</a>
              <a href="#" className="block text-gray-600 hover:text-[#FF4438] transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 mb-4 md:mb-0">© 2024 SoloFoodies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-[#FF4438] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#FF4438] transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-[#FF4438] transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
