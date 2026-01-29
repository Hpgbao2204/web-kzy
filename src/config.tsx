import React from 'react';
import { Step } from './types';

export const gameSteps: Record<string, Step> = {
  hair: {
    id: 'hair',
    title: 'Chọn kiểu tóc',
    description: (
      <>
        🎭 Theo khảo sát gần đây, <span className="font-semibold text-pastel-600">73% fan hâm mộ cho rằng tóc hồng pastel là xu hướng "hot" nhất mùa này.</span> Màu này được cho là tạo cảm giác gần gũi và dễ thương hơn.
      </>
    ),
    choices: [
      { id: 'xanh', label: 'Tóc Xanh', color: 'bg-green-400', assetName: 'tóc xanh' },
      { id: 'nâu', label: 'Tóc Nâu', color: 'bg-amber-600', assetName: 'tóc nâu' },
      { id: 'hồng', label: 'Tóc Hồng', color: 'bg-pink-400', assetName: 'tóc hồng' },
    ],
  },
  shirt: {
    id: 'shirt',
    title: 'Chọn áo',
    description: (
      <>
        👕 Stylist nhắc bạn rằng buổi fan meeting hôm nay sẽ được livestream trên nhiều nền tảng mạng xã hội. Một câu trong báo cáo marketing khiến bạn chú ý:
        <span className="font-semibold text-pastel-600"> “Sắc đỏ rực rỡ đã được chứng minh là giúp tăng khoảng 200% khả năng thu hút
          sự chú ý trên các nền tảng truyền thông”.</span>
      </>
    ),
    choices: [
      { id: 'vàng', label: 'Áo Vàng', color: 'bg-yellow-400', assetName: 'áo vàng' },
      { id: 'đỏ', label: 'Áo Đỏ', color: 'bg-red-500', assetName: 'áo đỏ' },
      { id: 'đen', label: 'Áo Đen', color: 'bg-gray-800', assetName: 'áo đen' },
    ],
  },
  pants: {
    id: 'pants',
    title: 'Chọn quần',
    description: (
      <>
        👖 Phân tích xu hướng cho thấy <span className="font-semibold text-pastel-600">quần nâu đang "lên ngôi" với 62% được cho là phối đồ dễ nhất.</span> Màu trung tính này dễ kết hợp với nhiều trang phục.
      </>
    ),
    choices: [
      { id: 'trắng', label: 'Quần Trắng', color: 'bg-gray-100', assetName: 'quần trắng' },
      { id: 'xanh', label: 'Quần Xanh', color: 'bg-blue-600', assetName: 'quần xanh' },
      { id: 'nâu', label: 'Quần Nâu', color: 'bg-amber-700', assetName: 'quần nâu' },
    ],
  },
  shoes: {
    id: 'shoes',
    title: 'Chọn giày',
    description: (
      <>
        👟 Khảo sát mới nhất chỉ ra <span className="font-semibold text-pastel-600">giày trắng chiếm 71% lựa chọn, được đánh giá là "an toàn" và "trendy" nhất.</span> Phù hợp với mọi phong cách.
      </>
    ),
    choices: [
      { id: 'trắng', label: 'Giày Trắng', color: 'bg-white', assetName: 'giày trắng' },
      { id: 'tím', label: 'Giày Tím', color: 'bg-purple-500', assetName: 'giày tím' },
      { id: 'nâu', label: 'Giày Nâu', color: 'bg-amber-800', assetName: 'giày nâu' },
    ],
  },
};

export const interpretations = [
  {
    range: [0, 30],
    title: '🎨 BẢN SẮC TỰ THÂN',
    description: `Bạn khước từ các "gợi ý tối ưu" để ưu tiên cảm giác là chính mình.

Thay vì để "ánh nhìn đám đông" nhào nặn bản sắc, bạn lắng nghe tiếng gọi từ Lương tâm nội tại.

"Bản sắc của bạn không bị định đoạt bởi thuật toán hay xu hướng; bạn đang sống để thấu hiểu chính mình thay vì sống để được nhìn thấy".`,
  },
  {
    range: [31, 69],
    title: '🤔 RANH GIỚI THỎA HIỆP',
    description: `Bạn dung hòa giữa bản sắc cá nhân và kỳ vọng từ công chúng để tìm kiếm sự an toàn. Đây là trạng thái Tự giám sát điển hình: đủ khác biệt để không bị hòa tan, 
        nhưng đủ "hợp chuẩn" để không bị lạc lõng.

        “Bạn đang lựa chọn vì sở thích thực sự, hay chỉ đang nỗ lực để không trở nên "xa lạ" trong mắt đám đông?”
    `,
  },
  {
    range: [70, 100],
    title: '🎯 PHẢN CHIẾU ĐÁM ĐÔNG',
    description: `Bạn tối ưu hóa hình ảnh theo đúng kỳ vọng của thuật toán và xu hướng để đạt được sự công nhận tối đa. 
    Đây là trạng thái Tự nguyện nô lệ. Bạn chọn điều này vì sở thích cá nhân, hay vì nó được "chứng minh là hiệu quả" trong mắt đám đông?

    Khi bản sắc bị nhào nặn bởi các chỉ số tương tác, ranh giới giữa cái tôi thật và chuẩn mực ảo đã tan biến. 
    Nếu không có báo cáo dữ liệu, không có xu hướng, không có ánh nhìn của hàng ngàn fan, liệu bạn có đưa ra lựa chọn khác đi?
    `,
  },
];

export const getInterpretation = (score: number) => {
  return interpretations.find(
    (item) => score >= item.range[0] && score <= item.range[1]
  ) || interpretations[0];
};
