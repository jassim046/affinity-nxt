'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function FootprintPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const partners = [
    { category: 'bah', logo: 'khalid.png', url: 'https://www.kar-group.com/' },
    { category: 'bah', logo: 'bahrain-alloys.png', url: 'https://www.bahrainalloys.com/' },
    { category: 'bah', logo: 'ascon.png', url: 'http://asconcontrol.com' },
    { category: 'bah', logo: 'marmara-trading.png', url: 'https://marmaratrading.com/' },
    { category: 'cana', logo: 'balachandran-nair.png', url: 'http://naircpa.com' },
    { category: 'ghana', logo: 'transwingafrica.png', url: 'http://www.transwingsafrica.com/' },
    { category: 'india', logo: 'adibhavan.png', url: 'https://vastubrass.com/' },
    { category: 'india', logo: 'kalagurukulam.png', url: 'https://www.kalagurukulam.com/' },
    { category: 'india', logo: 'sbvsbmt.png', url: 'https://sbvsbmt.com/' },
    { category: 'india', logo: 'the-hub.png', url: 'https://itsthehub.com/' },
    { category: 'india', logo: 'bvm-school-chitali.png', url: 'https://bvmchithali.in/' },
    { category: 'india', logo: 'sanjo.png', url: 'http://sanjocps.com' },
    { category: 'india', logo: 'mes-asambi.png', url: 'http://mesasmabicollege.edu.in' },
    { category: 'india', logo: 'sn-college.png', url: 'http://sncollegenattika.ac.in' },
    { category: 'india', logo: 'brahmnda-swami.png', url: 'https://bsstcaltr.com/' },
    { category: 'india', logo: 'mahe-teachers.png', url: 'https://mccte.ac.in/' },
    { category: 'india', logo: 'memmories.png', url: 'https://www.itsthememories.com/' },
    { category: 'uae', logo: 'alrumanuae.png', url: '#' },
    { category: 'uae', logo: 'al-zahara.png', url: '#' },
    { category: 'uae', logo: 'al-amad-al.png', url: '#' },
    { category: 'sa', logo: 'Noor-al-falak-logo.png', url: '#' },
    { category: 'doha', logo: 'ozpec.png', url: '#' },
    { category: 'sg', logo: 'futuremanagement.png', url: '#' },
    { category: 'uk', logo: 'ammalsolicitors.png', url: '#' },
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'india', label: 'India' },
    { id: 'uae', label: 'UAE' },
    { id: 'sa', label: 'Saudi Arabia' },
    { id: 'bah', label: 'Bahrain' },
    { id: 'doha', label: 'Qatar' },
    { id: 'sg', label: 'Singapore' },
    { id: 'cana', label: 'Canada' },
    { id: 'uk', label: 'UK' },
    { id: 'ghana', label: 'Ghana' }
  ]

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory)

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
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/footprint">Footprint</Link></li>
            </ul>
            <h2 className="mil-mb-60">Our <br /><span className="mil-thin">Global Footprint</span><br /></h2>
          </div>
        </div>
      </div>

      <div className="partners-section" style={{paddingBottom: '60px'}}>
        <div className="tab-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="partners-grid">
          {filteredPartners.map((partner, index) => (
            <div key={index} className="partner-item" data-category={partner.category}>
              <div className="partner-logo-box">
                <a href={partner.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <Image src={`/img/partners/${partner.logo}`} alt={partner.logo.replace('.png', '')} width={200} height={100} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
