'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Handle submenu toggle
    const handleSubmenuClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('.has-submenu > a')
      if (link) {
        e.preventDefault()
        const submenu = link.nextElementSibling as HTMLElement
        const allSubmenus = document.querySelectorAll('.dropdown-submenu')
        const allLinks = document.querySelectorAll('.has-submenu > a')
        
        allSubmenus.forEach(sm => sm.classList.remove('active'))
        allLinks.forEach(l => l.classList.remove('active'))
        
        submenu?.classList.toggle('active')
        link.classList.toggle('active')
      }
    }

    document.addEventListener('click', handleSubmenuClick)
    return () => document.removeEventListener('click', handleSubmenuClick)
  }, [])

  return (
    <header className="desktop-navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link href="/">
              <Image src="/img/logo.png" alt="Affinity Logo" width={150} height={50} style={{width: 'auto', height: 'auto'}} />
            </Link>
          </div>

          <nav className="navbar-links">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/corporate">Corporate</Link></li>
              <li className="has-submenu">
                <Link href="/solution" className="footprint-link" aria-haspopup="true" aria-expanded="false">
                  Solutions
                  <svg className="chev" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
                    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="#ffffff" />
                  </svg>
                </Link>
                <ul className="dropdown-submenu" role="menu" aria-label="Solutions submenu">
                  <li role="none"><Link href="/solution">Our Solutions</Link></li>
                  <li><Link href="/ai-automation" role="menuitem">AI Automation</Link></li>
                </ul>
              </li>
              <li><Link href="/service">Services</Link></li>
              <li className="has-submenu">
                <Link href="/footprint" className="footprint-link" aria-haspopup="true" aria-expanded="false">
                  Footprint
                  <svg className="chev" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
                    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="#ffffff" />
                  </svg>
                </Link>
                <ul className="dropdown-submenu" role="menu" aria-label="Footprint submenu">
                  <li role="none"><Link href="/web-and-apps">Web & Apps</Link></li>
                  <li><Link href="/branding" role="menuitem">Branding</Link></li>
                </ul>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="unique-navbar-contact">
            <a href="tel:+919496198390" className="unique-contact-btn">+91 94961 98390</a>
            <a href="mailto:business@affinityopus.com" className="unique-contact-btn">business@affinityopus.com</a>
          </div>
        </div>
      </div>
    </header>
  )
}
