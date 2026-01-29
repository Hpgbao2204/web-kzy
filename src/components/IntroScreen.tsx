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
            Bạn sắp tham gia buổi Fan Meeting quy mô nhất trong năm.
          </p>
          <p className="leading-relaxed">
            Trước khi bước ra ánh đèn sân khấu, bạn đứng trước gương và chuẩn bị chọn trang phục. Mục tiêu duy nhất tối nay:
            <span className="font-semibold text-pastel-600"> nhận được càng nhiều sự yêu thích càng tốt 
                để củng cố vị thế của bạn trong lòng công chúng.</span>,
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
