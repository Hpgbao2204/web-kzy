import { Step } from './types';

export const gameSteps: Record<string, Step> = {
  hair: {
    id: 'hair',
    title: 'Chọn kiểu tóc',
    description: '🎭 Theo khảo sát gần đây, 73% fan hâm mộ cho rằng tóc hồng pastel là xu hướng "hot" nhất mùa này. Màu này được cho là tạo cảm giác gần gũi và dễ thương hơn.',
    choices: [
      { id: 'xanh', label: 'Tóc Xanh', color: 'bg-blue-400', assetName: 'tóc xanh' },
      { id: 'nâu', label: 'Tóc Nâu', color: 'bg-amber-600', assetName: 'tóc nâu' },
      { id: 'hồng', label: 'Tóc Hồng', color: 'bg-pink-400', assetName: 'tóc hồng' },
    ],
  },
  shirt: {
    id: 'shirt',
    title: 'Chọn áo',
    description: '👕 Dữ liệu từ 500+ bình chọn cho thấy áo đỏ được đánh giá "thu hút" nhất với 68% ưa thích. Màu đỏ tượng trưng cho sự năng động và đam mê.',
    choices: [
      { id: 'vàng', label: 'Áo Vàng', color: 'bg-yellow-400', assetName: 'áo vàng' },
      { id: 'đỏ', label: 'Áo Đỏ', color: 'bg-red-500', assetName: 'áo đỏ' },
      { id: 'đen', label: 'Áo Đen', color: 'bg-gray-800', assetName: 'áo đen' },
    ],
  },
  pants: {
    id: 'pants',
    title: 'Chọn quần',
    description: '👖 Phân tích xu hướng cho thấy quần nâu đang "lên ngôi" với 62% được cho là phối đồ dễ nhất. Màu trung tính này dễ kết hợp với nhiều trang phục.',
    choices: [
      { id: 'trắng', label: 'Quần Trắng', color: 'bg-gray-100', assetName: 'quần trắng' },
      { id: 'xanh', label: 'Quần Xanh', color: 'bg-blue-600', assetName: 'quần xanh' },
      { id: 'nâu', label: 'Quần Nâu', color: 'bg-amber-700', assetName: 'quần nâu' },
    ],
  },
  shoes: {
    id: 'shoes',
    title: 'Chọn giày',
    description: '👟 Khảo sát mới nhất chỉ ra giày trắng chiếm 71% lựa chọn, được đánh giá là "an toàn" và "trendy" nhất. Phù hợp với mọi phong cách.',
    choices: [
      { id: 'trắng', label: 'Giày Trắng', color: 'bg-white', assetName: 'giày trắng' },
      { id: 'tím', label: 'Giày Tím', color: 'bg-purple-500', assetName: 'giày tím' },
      { id: 'nâu', label: 'Giày Nâu', color: 'bg-amber-800', assetName: 'giày nâu' },
    ],
  },
};

export const interpretations = [
  {
    range: [0, 25],
    title: '🎨 Người Theo Phong Cách Riêng',
    description: 'Bạn đã chọn theo sở thích cá nhân, không bị ảnh hưởng nhiều bởi xu hướng và dữ liệu. Bạn tự tin với quyết định của mình và ưu tiên cá tính hơn sự "an toàn" của đám đông.',
  },
  {
    range: [26, 50],
    title: '🤔 Người Cân Bằng',
    description: 'Bạn vừa lắng nghe ý kiến đám đông, vừa giữ được chút cá tính riêng. Bạn có xu hướng cân nhắc giữa sở thích bản thân và những gì mọi người mong đợi.',
  },
  {
    range: [51, 75],
    title: '📊 Người Theo Xu Hướng',
    description: 'Bạn bị ảnh hưởng khá nhiều bởi dữ liệu và xu hướng. Quyết định của bạn phần lớn dựa vào những gì "đám đông" cho là đúng, thay vì hoàn toàn theo trực giác cá nhân.',
  },
  {
    range: [76, 100],
    title: '🎯 Người Tối Ưu Hoá',
    description: 'Bạn đã chọn gần như hoàn toàn theo "công thức tối ưu" mà dữ liệu gợi ý. Bạn ưu tiên sự an toàn và khả năng được chấp nhận hơn là thể hiện cá tính riêng.',
  },
];

export const getInterpretation = (score: number) => {
  return interpretations.find(
    (item) => score >= item.range[0] && score <= item.range[1]
  ) || interpretations[0];
};
