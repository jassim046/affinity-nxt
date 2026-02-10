# Conversion Notes

This document outlines what has been converted and what still needs to be done.

## ✅ Completed

1. **Next.js Project Setup**
   - Created `package.json` with Next.js 14 and dependencies
   - Set up `next.config.js` and `tsconfig.json`
   - Created `.gitignore`

2. **Project Structure**
   - Created `/app` directory with all page routes
   - Created `/components` directory with shared components
   - Created `/hooks` directory for custom React hooks
   - Moved all assets to `/public` directory

3. **Components Created**
   - `Header.tsx` - Navigation header
   - `Footer.tsx` - Footer component
   - `Cursor.tsx` - Custom cursor
   - `Preloader.tsx` - Page preloader
   - `ScrollProgress.tsx` - Scroll progress bar
   - `MenuFrame.tsx` - Mobile menu frame
   - `MobileFrame.tsx` - Mobile frame
   - `Scripts.tsx` - Script loader
   - `HomeContent.tsx` - Homepage content (simplified)

4. **Pages Created**
   - `/` - Homepage
   - `/corporate` - Corporate page
   - `/solution` - Solutions page
   - `/service` - Services page
   - `/ai-automation` - AI Automation page
   - `/footprint` - Footprint page
   - `/web-and-apps` - Web & Apps page
   - `/branding` - Branding page
   - `/contact` - Contact page
   - `/privacypolicy` - Privacy Policy page
   - `/tos` - Terms of Service page

5. **Assets**
   - All CSS files copied to `/public/css`
   - All JavaScript files copied to `/public/js`
   - All images copied to `/public/img`
   - Global CSS imports set up

## ⚠️ Still Needs Work

1. **Page Content Conversion**
   - Each page currently has placeholder content
   - Need to extract full HTML content from original HTML files and convert to React/JSX
   - Pay attention to:
     - Converting HTML attributes to JSX (class → className, etc.)
     - Converting inline styles to React style objects
     - Handling SVG elements
     - Converting `<a>` tags to Next.js `<Link>` components

2. **JavaScript Functionality**
   - The original `main.js` uses jQuery and GSAP
   - Some functionality has been converted to React hooks (`useMainScript.ts`)
   - Still need to:
     - Convert all jQuery selectors to React refs/useEffect
     - Ensure GSAP animations work with React lifecycle
     - Handle Swiper initialization properly
     - Convert all inline scripts to React hooks

3. **HomeContent Component**
   - Currently has simplified version with main sections
   - Need to add all sections from `index.html`:
     - Full banner section
     - All service carousel items
     - Complete technologies section with all tabs
     - Partners/clients section
     - Any other sections

4. **Image Optimization**
   - Some images use Next.js `Image` component
   - Some still use `<img>` tags (external URLs)
   - Consider optimizing all images

5. **CSS Issues**
   - CSS files are imported via URL in `globals.css`
   - Consider moving critical CSS inline or using CSS modules
   - Some CSS may need adjustment for Next.js

6. **Swup Integration**
   - Swup is currently commented out as it conflicts with Next.js routing
   - Consider using Next.js built-in transitions or Framer Motion instead

## 📝 Next Steps

1. **Extract Content from HTML Files**
   - Read each HTML file
   - Extract the main content sections
   - Convert to React components
   - Update each page.tsx file

2. **Test Functionality**
   - Test all animations (GSAP)
   - Test all sliders (Swiper)
   - Test menu functionality
   - Test form submissions (if any)
   - Test all links and navigation

3. **Optimize**
   - Optimize images
   - Minimize CSS
   - Code splitting
   - Performance optimization

4. **Deploy**
   - Test build: `npm run build`
   - Deploy to Vercel or your preferred hosting

## 🔧 Dependencies

The project uses:
- Next.js 14
- React 18
- TypeScript
- GSAP (for animations)
- Swiper (for sliders)
- jQuery (legacy, consider removing)
- Font Awesome (via CDN)
- Bootstrap Icons (via CDN)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [GSAP Documentation](https://greensock.com/docs/)
- [Swiper Documentation](https://swiperjs.com/)
