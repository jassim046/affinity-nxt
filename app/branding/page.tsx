'use client';

import React from 'react'; // or whatever your next line is...
import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function BrandingPage() {
  const [activeCategory, setActiveCategory] = useState('logo')
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    { id: 'logo', label: 'Logo Designs' }
    // Add more categories here if needed: 'branding', 'mockups', etc.
  ]

  const brands = [
    { category: 'logo', logo: 'corp-afro.png', name: 'Corp Afro' },
    { category: 'logo', logo: 'sk-driver.png', name: 'SK Driver' },
    { category: 'logo', logo: 'tilis.png', name: 'Tilis' },
    { category: 'logo', logo: 'kl-kitchen.png', name: 'KL Kitchen' },
    { category: 'logo', logo: 'pixel.png', name: 'Pixel' },
  ]

  const filteredBrands = activeCategory === 'logo' 
    ? brands 
    : brands.filter(b => b.category === activeCategory)

  const handleTabClick = (e: React.MouseEvent<HTMLElement>) => {
  const target = e.target as HTMLElement;
  const btn = target.closest('.tab-btn') as HTMLElement;
  
  if (!btn || !btn.dataset.category) return;
  
  setActiveCategory(btn.dataset.category);
};
  if (!mounted) {
    return (
      <PageLayout>
        <div className="branding-loading">
          <div>Loading branding portfolio...</div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
       <div className="mil-inner-banner">
      <div className="mil-animation-frame">
  <div
    className="mil-animation mil-position-4 mil-dark mil-scale"
    data-value-one="6"
    data-value-two="1.4"
  >
    <div className="mil-dodecahedron">
      {Array.from({ length: 12 }).map((_, i) => (
        <div className="mil-pentagon" key={i}>
          {Array.from({ length: 5 }).map((_, j) => (
            <div key={j}></div>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>

      <div className="mil-banner-content mil-up">
        <div className="container">
          <ul className="mil-breadcrumbs mil-mb-60">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/branding">Branding</Link></li>
          </ul>

          <h2 className="mil-mb-60">
            Creative <span className="mil-thin">Branding</span>
          </h2>
        </div>
      </div>
    </div>

      <div className="branding-section" style={{ paddingBottom: '60px' }}>
        {/* Tab Buttons */}
        <div 
          className="tab-buttons"
          ref={containerRef}
          onClick={handleTabClick}
          role="tablist"
          aria-label="Filter branding portfolio"
        >
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`tab-btn ${activeCategory === id ? 'active' : ''}`}
              data-category={id}
              role="tab"
              aria-selected={activeCategory === id}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        <div className="partners-grid" role="tabpanel">
          {filteredBrands.map((brand, index) => (
            <div 
              key={`${brand.category}-${index}`} 
              className={`partner-item ${activeCategory === 'logo' || brand.category === activeCategory ? 'active' : ''}`}
              data-category={brand.category}
              role="img"
              aria-label={`Logo design for ${brand.name}`}
            >
              <div className="partner-logo-box">
                <div className="partner-logo">
                  <Image 
                    src={`/img/brands/${brand.logo}`}
                    alt={`${brand.name} logo`}
                    width={240}
                    height={120}
                    className="brand-img"
                    priority={index < 3}
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </PageLayout>
  )
}
