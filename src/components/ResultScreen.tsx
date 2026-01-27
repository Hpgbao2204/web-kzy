import { motion } from 'framer-motion';
import { useGameStore } from '../store';
import { getInterpretation } from '../config';
import CharacterPreview from './CharacterPreview';

export default function ResultScreen() {
  const { score, reset } = useGameStore();
  const interpretation = getInterpretation(score);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen p-4 py-8"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="card text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pastel-600 mb-2">
            🎉 Hoàn thành!
          </h2>
          <p className="text-gray-600">
            Đây là idol của bạn và phân tích về cách bạn đưa ra quyết định
          </p>
        </motion.div>

        {/* Character preview */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CharacterPreview />
        </motion.div>

        {/* Score card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="card text-center"
        >
          <div className="mb-6">
            <div className="text-6xl md:text-7xl font-bold text-pastel-600 mb-2">
              {score}%
            </div>
            <div className="text-gray-600 text-sm">
              Độ trùng khớp với "sở thích của fan"
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-pastel-400 to-pastel-600 rounded-full"
            />
          </div>

          {/* Interpretation */}
          <div className="bg-pastel-50 rounded-2xl p-6 text-left">
            <h3 className="text-2xl font-bold text-pastel-700 mb-3">
              {interpretation.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {interpretation.description}
            </p>
          </div>
        </motion.div>

        {/* Reflection prompt */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="card bg-gradient-to-br from-pastel-100 to-white"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            💭 Suy ngẫm
          </h3>
          <div className="space-y-2 text-gray-700 text-sm md:text-base">
            <p>• Bạn có cảm thấy bị ảnh hưởng bởi những con số và xu hướng không?</p>
            <p>• Liệu bạn có chọn khác nếu không có những thông tin đó?</p>
            <p>• Quyết định nào là "đúng" - theo bản thân hay theo đám đông?</p>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 flex-col sm:flex-row"
        >
          <button
            onClick={reset}
            className="btn-primary flex-1"
          >
            Thử lại 🔄
          </button>
          <button
            onClick={() => {
              // Share functionality could be added here
              alert('Cảm ơn bạn đã trải nghiệm! 💖');
            }}
            className="btn-secondary flex-1"
          >
            Chia sẻ cảm nhận ✨
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
