'use client'

import Script from 'next/script'
import { useMainScript } from '@/hooks/useMainScript'

export default function Scripts() {
  useMainScript()

  return (
    <>
      <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/plugins/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/js/plugins/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src="/js/plugins/ScrollTo.min.js" strategy="lazyOnload" />
      <Script src="/js/plugins/swiper.min.js" strategy="lazyOnload" />
      <Script src="/js/plugins/swup.min.js" strategy="lazyOnload" />
      <Script src="/js/plugins/fancybox.min.js" strategy="lazyOnload" />
      <Script src="/js/plugins/smooth-scroll.js" strategy="lazyOnload" />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  )
}
