# Web-KZY - Idol Dress-up Game

## 🎨 Tech Stack

- **React 18** + **TypeScript** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling với tone hồng pastel dịu mắt
- **Zustand** - State management (nhẹ, đơn giản)
- **Framer Motion** - Animations mượt mà

## 📁 Cấu trúc Project

```
web-kzy/
├── assets/              # PNG assets (character layers)
│   ├── female/         # Assets nhân vật nữ
│   └── male/           # Assets nhân vật nam
├── public/             # Static files
├── src/
│   ├── components/     # React components
│   │   ├── IntroScreen.tsx
│   │   ├── GenderSelection.tsx
│   │   ├── CharacterPreview.tsx
│   │   ├── CustomizationStep.tsx
│   │   └── ResultScreen.tsx
│   ├── config.ts       # Game configuration & interpretations
│   ├── store.ts        # Zustand state management
│   ├── types.ts        # TypeScript types
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind + custom styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Commands

### Development
```bash
npm install    # Cài dependencies
npm run dev    # Start dev server (http://localhost:5173)
```

### Production
```bash
npm run build  # Build for production
npm run preview # Preview production build
```

## 🎮 Game Flow

1. **Intro Screen** - Giới thiệu trải nghiệm
2. **Gender Selection** - Chọn Idol Nam/Nữ
3. **Hair Customization** - Chọn màu tóc (với narrative về xu hướng)
4. **Shirt Customization** - Chọn áo (với dữ liệu fan preference)
5. **Pants Customization** - Chọn quần (với thông tin bình chọn)
6. **Shoes Customization** - Chọn giày (với số liệu khảo sát)
7. **Result Screen** - Hiển thị điểm số + phân tích quyết định

## 🎯 Scoring Logic

Game có một bộ "preferred choices" được định sẵn:
- **Tóc**: Hồng (pink)
- **Áo**: Đỏ (red)
- **Quần**: Nâu (brown)
- **Giày**: Trắng (white)

Score = số lượng matches × 25%

Dựa vào score, user được phân loại:
- **0-25%**: Người theo phong cách riêng
- **26-50%**: Người cân bằng
- **51-75%**: Người theo xu hướng
- **76-100%**: Người tối ưu hóa

## 🎨 Design System

### Colors (Pastel Pink Palette)
```css
pastel-50:  #fef5f9  /* Lightest */
pastel-100: #fde8f2
pastel-200: #fcd1e6
pastel-300: #fab0d4
pastel-400: #f780b8
pastel-500: #f06ba5  /* Primary */
pastel-600: #de3b7e
soft-pink:  #ffc9d9
light-pink: #ffe4ec
cream:      #fff8f3
```

### Mobile-First
- Được tối ưu cho mobile trước
- Responsive breakpoints: `md:` (768px+)
- Touch-friendly buttons & interactions

## 📦 Assets

Assets được organize theo gender và type:
```
assets/female/Model nữ.png
assets/female/Nữ - tóc [màu].png
assets/female/Nữ - áo [màu].png
assets/female/Nữ - quần [màu].png
assets/female/Nữ - giày [màu].png
```

Tất cả assets:
- Format: PNG transparent
- Fixed size & pose
- Layer-based rendering

## 🔧 Development Notes

- TypeScript errors trong editor là do dependencies chưa được type-check, nhưng app vẫn chạy bình thường
- Tailwind `@apply` warnings có thể ignore
- Assets path: `/assets/[gender]/[filename]`

## 🚀 Deploy

Recommend: **Vercel** hoặc **Netlify**

```bash
npm run build
# Upload dist/ folder to hosting
```

## 📝 License

Project này là một interactive narrative experience - không phải sản phẩm thương mại.
