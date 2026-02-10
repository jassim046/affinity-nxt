'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function MobileFrame() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="mil-frame d-block d-lg-none">
      <div className="mil-frame-top">
        <Link href="/">
          <Image src="/img/logo.png" className="mob-logo" alt="" width={120} height={40} style={{width: 'auto', height: 'auto'}} />
        </Link>
        <div className="mil-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
        </div>
      </div>
      <div className="mil-frame-bottom">
        <div className="mil-current-page"></div>
        <div className="mil-back-to-top">
          <a href="#top" className="mil-link mil-dark mil-arrow-place">
            <span>Back to top</span>
          </a>
        </div>
      </div>
    </div>
  )
}
