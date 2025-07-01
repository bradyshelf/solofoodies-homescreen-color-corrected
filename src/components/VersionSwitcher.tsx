
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const VersionSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isEnhanced = location.pathname === '/' || location.pathname === '/enhanced';
  const isExperimental = location.pathname === '/experimental';

  const handleSwitch = () => {
    if (isEnhanced) {
      navigate('/experimental');
    } else {
      navigate('/enhanced');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleSwitch}
        variant="outline"
        size="sm"
        className={`flex items-center gap-2 ${
          isExperimental 
            ? 'border-white text-white hover:bg-white/10' 
            : 'border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10'
        }`}
      >
        {isEnhanced && (
          <>
            <span className="text-sm font-medium">Experimental</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
        {isExperimental && (
          <>
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Enhanced</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default VersionSwitcher;
