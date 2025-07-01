
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const VersionSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isEnhanced = location.pathname === '/' || location.pathname === '/enhanced';
  const isExperimental = location.pathname === '/experimental';
  const isExperimentalV2 = location.pathname === '/experimental-v2';

  const handleSwitch = () => {
    if (isEnhanced) {
      navigate('/experimental');
    } else if (isExperimental) {
      navigate('/experimental-v2');
    } else {
      navigate('/enhanced');
    }
  };

  const getButtonText = () => {
    if (isEnhanced) return 'Experimental';
    if (isExperimental) return 'Experimental V2';
    return 'Enhanced';
  };

  const getButtonColors = () => {
    if (isExperimentalV2) {
      return 'border-gray-300 text-gray-700 hover:bg-gray-50';
    } else if (isExperimental) {
      return 'border-[#FF6F61] bg-[#FF6F61]/10 text-[#FF6F61] hover:bg-[#FF6F61]/20';
    } else {
      return 'border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleSwitch}
        variant="outline"
        size="sm"
        className={`flex items-center gap-2 ${getButtonColors()}`}
      >
        {!isExperimentalV2 && (
          <>
            <span className="text-sm font-medium">{getButtonText()}</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
        {isExperimentalV2 && (
          <>
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{getButtonText()}</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default VersionSwitcher;
