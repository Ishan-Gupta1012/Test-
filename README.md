# Video Streaming Dashboard 🎥

A modern, minimalist video streaming dashboard built with Next.js, TypeScript, and Tailwind CSS. Features a professional dark mode design, responsive layout, and placeholder integration for VdoCipher video platform.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- **📚 Video Library** - Browse videos in a responsive grid layout
- **▶️ Video Player** - Dedicated player page with VdoCipher integration placeholder
- **📊 Analytics Dashboard** - View detailed metrics and engagement data
- **🎨 Dark Mode Design** - Professional Slate/Zinc color scheme
- **📱 Fully Responsive** - Mobile-first design with adaptive layouts
- **🎯 TypeScript** - Full type safety throughout the application
- **⚡ Modern Stack** - Next.js 16 App Router with Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd video-streaming-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Home page (Video Library)
│   ├── player/[id]/       # Dynamic player page
│   ├── videos/            # My Videos page
│   └── analytics/         # Analytics dashboard
├── components/            # React components
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── VideoCard.tsx     # Video card component
│   ├── VideoPlayer.tsx   # Player container
│   └── AnalyticsCard.tsx # Analytics metric card
├── lib/                  # Utilities and data
│   └── videos.ts        # Mock video data & helpers
└── types/               # TypeScript definitions
    └── video.ts        # Video & Analytics interfaces
```

## 🎯 Pages

### Dashboard (Home)
- Video library with grid layout
- 10 sample videos with metadata
- Hover effects and smooth transitions

### My Videos
- Overview statistics (Total Videos, Views, Avg. Views)
- Video management interface
- Same grid layout as home

### Analytics
- Viewer metrics and engagement data
- Geographic distribution charts
- Device type breakdown

### Player (Dynamic Route)
- Large video player container (16:9)
- VdoCipher integration placeholder
- Video analytics section
- Device distribution visualization

## 🔧 VdoCipher Integration

The VideoPlayer component includes a detailed placeholder for VdoCipher integration. To integrate:

1. Sign up for VdoCipher and get API credentials
2. Create API endpoint to fetch OTP and playbackInfo
3. Replace the placeholder in `components/VideoPlayer.tsx`:

```tsx
<iframe 
  src={`https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`}
  allow="encrypted-media"
  allowFullScreen
  className="w-full h-full"
/>
```

See the comment in [VideoPlayer.tsx](components/VideoPlayer.tsx) for more details.

## 🎨 Design System

### Colors
- **Background**: Slate-950 (`#020617`)
- **Cards**: Slate-800 (`#1e293b`)
- **Borders**: Slate-700 (`#334155`)
- **Accent**: Indigo-600 (`#6366f1`)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 2xl-4xl
- **Body**: Regular, slate-300/400

### Components
- Rounded corners (lg, xl)
- Hover effects (scale, shadow, border)
- Smooth transitions (200ms)
- Custom scrollbar styling

## 📱 Responsive Breakpoints

- **Mobile**: 1 column grid
- **Tablet** (sm: 640px): 2 columns
- **Desktop** (lg: 1024px): 3 columns
- **Large** (xl: 1280px): 4 columns

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# TypeScript type checking
npx tsc --noEmit

# Linting
npm run lint
```

## 🧪 Testing

TypeScript compilation verified with zero errors:
```bash
npx tsc --noEmit
```

## 📦 Dependencies

- **next**: ^16.1.6
- **react**: ^19.0.0
- **lucide-react**: ^0.469.0
- **tailwindcss**: ^4.0.0
- **typescript**: ^5.7.2

## 🌟 Features Implemented

- ✅ Responsive sidebar navigation with mobile drawer
- ✅ Video card components with hover effects
- ✅ Dynamic routing for video player
- ✅ Analytics dashboard with metrics
- ✅ Dark mode theme with Slate/Zinc colors
- ✅ TypeScript types and interfaces
- ✅ Mock data with 10 sample videos
- ✅ VdoCipher integration placeholder
- ✅ Custom scrollbar styling
- ✅ Smooth animations and transitions

## 📝 License

This project is created as a demonstration and is available for personal and commercial use.

## 🤝 Contributing

This is a template project. Feel free to fork and customize for your needs!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
