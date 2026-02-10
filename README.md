# Affinity Interactive - Next.js Project

This is a fully converted Next.js project from the original HTML website.

## ✅ Conversion Complete

All HTML pages have been converted to Next.js pages:
- ✅ Homepage (`/`)
- ✅ Corporate (`/corporate`)
- ✅ Solutions (`/solution`)
- ✅ Services (`/service`)
- ✅ AI Automation (`/ai-automation`)
- ✅ Footprint (`/footprint`)
- ✅ Web & Apps (`/web-and-apps`)
- ✅ Branding (`/branding`)
- ✅ Contact (`/contact`)
- ✅ Privacy Policy (`/privacypolicy`)
- ✅ Terms of Service (`/tos`)

## 🏗️ Project Structure

```
affinity-jan/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── corporate/         # Corporate page
│   ├── solution/          # Solutions page
│   ├── service/           # Services page
│   ├── ai-automation/     # AI Automation page
│   ├── footprint/         # Footprint page
│   ├── web-and-apps/      # Web & Apps page
│   ├── branding/          # Branding page
│   ├── contact/           # Contact page
│   ├── privacypolicy/     # Privacy Policy page
│   └── tos/               # Terms of Service page
├── components/            # React components
│   ├── Header.tsx         # Navigation header (separate component)
│   ├── Footer.tsx         # Footer (separate component)
│   ├── Cursor.tsx         # Custom cursor
│   ├── Preloader.tsx      # Page preloader
│   ├── ScrollProgress.tsx  # Scroll progress bar
│   ├── MenuFrame.tsx      # Mobile menu frame
│   ├── MobileFrame.tsx    # Mobile frame
│   ├── Scripts.tsx        # Script loader
│   ├── HomeContent.tsx     # Homepage content
│   └── PageLayout.tsx     # Shared page layout wrapper
├── hooks/                 # Custom React hooks
│   └── useMainScript.ts   # Main JavaScript initialization
├── public/                # Static assets
│   ├── css/               # All CSS files
│   ├── js/                # All JavaScript files
│   └── img/               # All images
├── styles/                 # Global styles
│   └── globals.css        # Global CSS imports
└── package.json           # Dependencies

```

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Key Features

- **Fully Converted**: All 11 HTML pages converted to Next.js
- **Separate Components**: Header and Footer are separate, reusable components
- **TypeScript**: Full TypeScript support
- **Image Optimization**: Using Next.js Image component
- **Responsive Design**: All original responsive features preserved
- **Animations**: GSAP animations integrated
- **Sliders**: Swiper sliders configured
- **Client-side Filtering**: Interactive filtering on Footprint, Web & Apps, and Branding pages

## 🛠️ Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **GSAP** - Animations
- **Swiper** - Sliders
- **Font Awesome** - Icons
- **Bootstrap Icons** - Additional icons

## 📝 Notes

- All original CSS and JavaScript files are preserved in `/public`
- JavaScript functionality has been converted to React hooks where appropriate
- Images are optimized using Next.js Image component
- All links use Next.js Link component for client-side navigation
- The project maintains all original functionality and design

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📄 License

This project maintains the same license as the original website.
