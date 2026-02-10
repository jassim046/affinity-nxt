# Setup Guide - Affinity Interactive Next.js Project

## Prerequisites

- **Node.js** version 18.0.0 or higher
- **npm** version 9.0.0 or higher (or yarn/pnpm)

## Quick Start

### 1. Install Node.js (if not already installed)

Download and install Node.js from [nodejs.org](https://nodejs.org/) (LTS version recommended)

Verify installation:
```bash
node --version
npm --version
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- GSAP (animations)
- Swiper (sliders)
- jQuery (for legacy scripts)
- And more...

### 3. Run Development Server

```bash
npm run dev
```

The application will start on **http://localhost:3000**

Open your browser and navigate to `http://localhost:3000` to see the site.

### 4. Build for Production (Optional)

```bash
npm run build
npm start
```

## Project Structure

```
affinity-jan/
├── app/                    # Next.js pages
├── components/             # React components
├── hooks/                  # Custom React hooks
├── public/                 # Static assets (CSS, JS, images)
├── styles/                 # Global styles
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Clear Cache
If you encounter issues:
```bash
rm -rf .next
npm run dev
```

### Node Version Issues
Use Node.js 18+:
```bash
node --version  # Should be 18.0.0 or higher
```

## Notes

- All HTML files have been removed
- All pages are now Next.js React components
- Header and Footer are separate, reusable components
- Images are optimized using Next.js Image component
- All CSS and JavaScript files are in `/public` directory

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
