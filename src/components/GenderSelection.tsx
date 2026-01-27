import { motion } from 'framer-motion';
import { useGameStore } from '../store';
import type { Gender } from '../types';

export default function GenderSelection() {
  const { gender, setGender, nextStep } = useGameStore();

  const handleSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
    setTimeout(() => nextStep(), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="card max-w-lg w-full space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pastel-600 mb-2">
            Chọn nhân vật của bạn
          </h2>
          <p className="text-gray-600">
            Bạn muốn tạo một Idol nam hay nữ?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect('female')}
            className={`option-card p-8 ${gender === 'female' ? 'selected' : ''}`}
          >
            <div className="text-6xl mb-3">👩</div>
            <div className="text-xl font-semibold text-gray-800">Idol Nữ</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect('male')}
            className={`option-card p-8 ${gender === 'male' ? 'selected' : ''}`}
          >
            <div className="text-6xl mb-3">👨</div>
            <div className="text-xl font-semibold text-gray-800">Idol Nam</div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
