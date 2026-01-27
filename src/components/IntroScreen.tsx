import { motion } from 'framer-motion';
import { useGameStore } from '../store';

export default function IntroScreen() {
  const nextStep = useGameStore((state) => state.nextStep);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="card max-w-lg w-full space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-pastel-600 mb-2">
            ✨ Idol Dress-up
          </h1>
          <p className="text-pastel-500 font-medium">
            Interactive Narrative Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 text-gray-700"
        >
          <p className="leading-relaxed">
            Chào mừng bạn đến với trải nghiệm tương tác đặc biệt.
          </p>
          <p className="leading-relaxed">
            Bạn sẽ tạo ra một idol theo phong cách của riêng mình.
            Trong quá trình này, bạn sẽ nhận được nhiều thông tin về
            <span className="font-semibold text-pastel-600"> xu hướng</span>,
            <span className="font-semibold text-pastel-600"> dữ liệu</span>, và
            <span className="font-semibold text-pastel-600"> kỳ vọng của đám đông</span>.
          </p>
          <p className="leading-relaxed">
            Kết thúc trải nghiệm, bạn sẽ nhận được một phân tích thú vị
            về cách bạn đưa ra quyết định.
          </p>
          <div className="bg-pastel-50 rounded-xl p-4 border-l-4 border-pastel-400">
            <p className="text-sm text-gray-600">
              💡 <span className="font-medium">Lưu ý:</span> Không có đáp án đúng hay sai.
              Hãy chọn theo cảm nhận của bạn!
            </p>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={nextStep}
          className="btn-primary w-full text-lg"
          whileTap={{ scale: 0.95 }}
        >
          Bắt đầu ✨
        </motion.button>
      </div>
    </motion.div>
  );
}
