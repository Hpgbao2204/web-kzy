import { motion } from 'framer-motion';
import { useGameStore } from '../store';
import { gameSteps } from '../config';
import CharacterPreview from './CharacterPreview';
import type { StepId } from '../types';

interface CustomizationStepProps {
  stepId: StepId;
}

export default function CustomizationStep({ stepId }: CustomizationStepProps) {
  const gameState = useGameStore();
  const step = gameSteps[stepId];

  if (!step) return null;

  const currentValue = gameState[stepId as keyof typeof gameState];
  const setter = gameState[`set${stepId.charAt(0).toUpperCase() + stepId.slice(1)}` as keyof typeof gameState] as (value: any) => void;

  const handleSelect = (choiceId: string) => {
    setter(choiceId);
  };

  const canProceed = currentValue !== null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen p-4 py-8"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="card text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pastel-600 mb-3">
            {step.title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {step.description}
          </p>
        </div>

        {/* Main content - split view on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Character preview */}
          <div className="order-2 md:order-1">
            <CharacterPreview />
          </div>

          {/* Options */}
          <div className="order-1 md:order-2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Chọn một lựa chọn:
            </h3>
            <div className="space-y-3">
              {step.choices.map((choice) => (
                <motion.button
                  key={choice.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelect(choice.id)}
                  className={`option-card w-full p-4 flex items-center gap-4 ${currentValue === choice.id ? 'selected' : ''
                    }`}
                >
                  <div className={`w-12 h-12 rounded-full ${choice.color} border-2 border-gray-200`} />
                  <div className="text-left flex-1">
                    <div className="font-semibold text-gray-800">{choice.label}</div>
                  </div>
                  {currentValue === choice.id && (
                    <div className="text-2xl">✓</div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: canProceed ? 1 : 0.5 }}
              onClick={gameState.nextStep}
              disabled={!canProceed}
              className="btn-primary w-full mt-6"
              whileTap={canProceed ? { scale: 0.95 } : {}}
            >
              Tiếp theo →
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
