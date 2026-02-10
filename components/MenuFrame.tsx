'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function MenuFrame() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`mil-menu-frame ${isMenuOpen ? 'mil-active' : ''}`}>
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">
          <Image src="/img/logo.png" alt="Affinity" width={150} height={50} style={{width: 'auto', height: 'auto'}} />
        </Link>
        <div className="mil-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
        </div>
      </div>
      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-12">
              <nav className="mil-main-menu" id="swupMenu">
                <ul>
                  <li className="mil-active"><Link href="/">Home</Link></li>
                  <li><Link href="/corporate">Corporate</Link></li>
                  <li><Link href="/service">Services</Link></li>
                  <li><Link href="/solution">Solution</Link></li>
                  <li><Link href="/ai-automation">AI Automation</Link></li>
                  <li><Link href="/footprint">Footprint</Link></li>
                  <li><Link href="/web-and-apps">Web & Apps</Link></li>
                  <li><Link href="/branding">Branding</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
