import { AnimatePresence } from 'framer-motion';
import { useGameStore } from './store';
import IntroScreen from './components/IntroScreen';
import GenderSelection from './components/GenderSelection';
import CustomizationStep from './components/CustomizationStep';
import ResultScreen from './components/ResultScreen';

function App() {
  const currentStep = useGameStore((state) => state.currentStep);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentStep === 'intro' && <IntroScreen key="intro" />}
        {currentStep === 'gender' && <GenderSelection key="gender" />}
        {currentStep === 'hair' && <CustomizationStep key="hair" stepId="hair" />}
        {currentStep === 'shirt' && <CustomizationStep key="shirt" stepId="shirt" />}
        {currentStep === 'pants' && <CustomizationStep key="pants" stepId="pants" />}
        {currentStep === 'shoes' && <CustomizationStep key="shoes" stepId="shoes" />}
        {currentStep === 'result' && <ResultScreen key="result" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
