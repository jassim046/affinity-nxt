'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    $: any
    gsap: any
    Swiper: any
    Swup: any
    ScrollTrigger: any
    ScrollToPlugin: any
  }
}

export function useMainScript() {
  useEffect(() => {
    // Wait for scripts to load
    if (typeof window === 'undefined') return

    const initScripts = () => {
      if (!window.$ || !window.gsap) {
        setTimeout(initScripts, 100)
        return
      }

      const $ = window.$
      const gsap = window.gsap

      // Register GSAP plugins
      if (gsap.registerPlugin && window.ScrollTrigger && window.ScrollToPlugin) {
        gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin)
      }

      // Menu toggle
      $('.mil-menu-btn').on('click', function() {
        $('.mil-menu-btn').toggleClass('mil-active')
        $('.mil-menu').toggleClass('mil-active')
        $('.mil-menu-frame').toggleClass('mil-active')
      })

      // Initialize Swiper sliders
      if (window.Swiper) {
        // Services Swiper
        if (document.querySelector('.servicesSwiper')) {
          new window.Swiper('.servicesSwiper', {
            loop: true,
            autoplay: {
              delay: 2200,
              disableOnInteraction: false,
            },
            slidesPerView: 4,
            spaceBetween: 20,
            breakpoints: {
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 5 }
            }
          })
        }
      }

      // Initialize Fancybox if available
      if (window.$ && (window.$ as any).fancybox) {
        (window.$ as any)('[data-fancybox="gallery"]').fancybox({
          buttons: ['slideShow', 'zoom', 'fullScreen', 'close'],
          loop: false,
          protect: true
        })
      }
    }

    initScripts()
  }, [])
}
