'use client'

import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'

export default function WebAndAppsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const partners = [
    // Bahrain Partners
    { category: 'bah', href: 'https://www.kar-group.com/', src: '/img/partners/khalid.png', alt: 'Khalid Group' },
    { category: 'bah', href: 'https://www.bahrainalloys.com/', src: '/img/partners/bahrain-alloys.png', alt: 'Bahrain Alloys' },
    { category: 'bah', href: 'http://asconcontrol.com', src: '/img/partners/ascon.png', alt: 'Ascon Control' },
    { category: 'bah', href: 'https://marmaratrading.com/', src: '/img/partners/marmara-trading.png', alt: 'Marmara Trading' },

    // Canada Partners
    { category: 'cana', href: 'http://naircpa.com', src: '/img/partners/balachandran-nair.png', alt: 'Balachandran Nair CPA' },

    // Ghana Partners
    { category: 'ghana', href: 'http://www.transwingsafrica.com/', src: '/img/partners/transwingafrica.png', alt: 'Transwing Africa' },

    // India Partners
    { category: 'india', href: 'https://vastubrass.com/', src: '/img/partners/adibhavan.png', alt: 'Vastu Brass' },
    { category: 'india', href: 'https://www.kalagurukulam.com/', src: '/img/partners/kalagurukulam.png', alt: 'Kala Gurukulam' },
    { category: 'india', href: 'https://sbvsbmt.com/', src: '/img/partners/sbvsbmt.png', alt: 'SBVSBMT' },
    { category: 'india', href: 'https://itsthehub.com/', src: '/img/partners/the-hub.png', alt: 'The Hub' },
    { category: 'india', href: 'https://bvmchithali.in/', src: '/img/partners/bvm-school-chitali.png', alt: 'BVM School Chithali' },
    { category: 'india', href: 'http://sanjocps.com', src: '/img/partners/sanjo.png', alt: 'Sanjo CPS' },
    { category: 'india', href: 'http://mesasmabicollege.edu.in', src: '/img/partners/mes-asambi.png', alt: 'MES Asambi College' },
    { category: 'india', href: 'http://sncollegenattika.ac.in', src: '/img/partners/sn-college.png', alt: 'SN College Nattika' },
    { category: 'india', href: 'https://bsstcaltr.com/', src: '/img/partners/brahmnda-swami.png', alt: 'Brahmnda Swami' },
    { category: 'india', href: 'https://mccte.ac.in/', src: '/img/partners/mahe-teachers.png', alt: 'Mahe Teachers College' },
    { category: 'india', href: 'https://www.itsthememories.com/', src: '/img/partners/memmories.png', alt: 'Its The Memories' },
    { category: 'india', href: 'https://www.thefireworks.in/', src: '/img/partners/fireworks.png', alt: 'The Fireworks' },
    { category: 'india', href: 'https://rajamsukkucoffee.com/', src: '/img/partners/rajam-sukku.png', alt: 'Rajam Sukku Coffee' },
    { category: 'india', href: 'https://jesusdiaries.com/', src: '/img/partners/Jesus_logo.png', alt: 'Jesus Diaries' },
    { category: 'india', href: 'https://pixelcareconnect.com/', src: '/img/partners/pixelcare.png', alt: 'Pixelcare Connect' },
    { category: 'india', href: 'https://aayushcare.com/', src: '/img/partners/ayushcare.png', alt: 'Aayushcare' },
    { category: 'india', href: 'https://www.idchospital.com/', src: '/img/partners/idukki-hosp.png', alt: 'IDC Hospital' },
    { category: 'india', href: 'http://narayanaayurvedic.com', src: '/img/partners/amruthakripa.png', alt: 'Narayana Ayurvedic' },
    { category: 'india', href: 'http://antonystower.com', src: '/img/partners/antony-tower.png', alt: 'Antony Tower' },
    { category: 'india', href: 'http://fournsquare.com/residency', src: '/img/partners/fournsquare.png', alt: 'Foursquare Residency' },
    { category: 'india', href: 'seagullgroup.in', src: '/img/partners/seagulhr.png', alt: 'Seagull Group' },
    { category: 'india', href: 'http://futuremanagement.in', src: '/img/partners/futuremanagement.png', alt: 'Future Management' },
    { category: 'india', href: 'https://hrmeridian.com/', src: '/img/partners/hr-meridian.png', alt: 'HR Meridian' },
    { category: 'india', href: 'https://www.promedsystems.in/', src: '/img/partners/pro-med-industries.png', alt: 'Pro Med Systems' },
    { category: 'india', href: 'https://urbanartinteriors.com/', src: '/img/partners/urban-art.png', alt: 'Urban Art Interiors' },
    { category: 'india', href: 'https://seagulljobs4u.com/', src: '/img/partners/seaguljobs4u.png', alt: 'Seagull Jobs' },
    { category: 'india', href: 'https://bksmumbai.org/', src: '/img/partners/bombay-kerala-samaj.png', alt: 'Bombay Kerala Samaj' },
    { category: 'india', href: 'https://www.prajwalaindia.com/', src: '/img/partners/prajwala.png', alt: 'Prajwala India' },
    { category: 'india', href: 'https://holyfamilydeaddiction.org/', src: '/img/partners/holyfamily.png', alt: 'Holy Family Deaddiction' },
    { category: 'india', href: 'https://ksscpa.org/', src: '/img/partners/ksscpa.png', alt: 'KSS CPA' },
    { category: 'india', href: 'https://siruthuligalfoundation.org/', src: '/img/partners/siruthuligal.png', alt: 'Siruthuligal Foundation' },
    { category: 'india', href: 'https://www.fournsquare.com/', src: '/img/partners/fournsquare.png', alt: 'Foursquare' },
    { category: 'india', href: 'https://www.sribhavanresidency.com/', src: '/img/partners/sribhavan.png', alt: 'Sri Bhavan Residency' },
    { category: 'india', href: 'https://kanikkamatha.in/', src: '/img/partners/kanikkamatha.png', alt: 'Kanikka Matha' },
    { category: 'india', href: 'https://www.royalindianschool.org/', src: '/img/partners/royal-school.png', alt: 'Royal Indian School' },
    { category: 'india', href: 'https://cosmosagencies.com/', src: '/img/partners/cosmos.png', alt: 'Cosmos Agencies' },
    { category: 'india', href: 'https://genisis.in/', src: '/img/partners/genisis.png', alt: 'Genisis' },
    { category: 'india', href: 'https://travelxpo.in/', src: '/img/partners/travelexpo.png', alt: 'Travel Expo' },
    { category: 'india', href: 'https://www.myne.co.in/', src: '/img/partners/myne.png', alt: 'Myne' },

    // UAE Partners
    { category: 'uae', href: 'http://expressechocargo.com/', src: '/img/partners/expressecho.png', alt: 'Express Echo Cargo' },
    { category: 'uae', href: 'https://lyonlighting-me.com/', src: '/img/partners/lyonlighting.png', alt: 'Lyon Lighting' },
    { category: 'uae', href: 'https://sendexpresscargo.com/', src: '/img/partners/sendexpresscargo.png', alt: 'Send Express Cargo' },
    { category: 'uae', href: 'https://www.gscmovers.com/', src: '/img/partners/gsc-movers.png', alt: 'GSC Movers' },
    { category: 'uae', href: 'http://nooralfalak.ae', src: '/img/partners/Noor-al-falak-logo.png', alt: 'Noor Al Falak' },
    { category: 'uae', href: 'https://preciousgiftsuae.com/', src: '/img/partners/precious.png', alt: 'Precious Gifts UAE' },
    { category: 'uae', href: 'https://alrumanuae.com/', src: '/img/partners/alrumanuae.png', alt: 'Al Rumana UAE' },

    // Saudi Arabia Partners
    { category: 'sa', href: 'http://www.emdadatalmarwah.com/', src: '/img/partners/emdadat.png', alt: 'Emdad Al Marwah' },
    { category: 'sa', href: 'https://www.elsacontracting.com/', src: '/img/partners/elsa.png', alt: 'Elsa Contracting' },
    { category: 'sa', href: 'https://perfectartcontracting.com/', src: '/img/partners/pace.png', alt: 'Perfect Art Contracting' },
    { category: 'sa', href: 'https://www.sinmarglobal.com/', src: '/img/partners/sinmarcompanylogo.png', alt: 'Sinmar Global' },
    { category: 'sa', href: 'https://alzahraksa.com/', src: '/img/partners/al-zahara.png', alt: 'Al Zahra KSA' },
    { category: 'sa', href: 'http://amadalbaeed.com', src: '/img/partners/al-amad-al.png', alt: 'Amad Al Baheed' },

    // Singapore Partners
    { category: 'sg', href: 'https://ozpecchemoil.com/', src: '/img/partners/ozpec.png', alt: 'Ozpec Chemoil' },

    // Qatar Partners
    { category: 'doha', href: 'https://newskyexpresscargo.com/', src: '/img/partners/newskyexpress.png', alt: 'New Sky Express Cargo' },

    // UK Partners
    { category: 'uk', href: 'https://relifephysiotherapy.com/', src: '/img/partners/relief.png', alt: 'Relife Physiotherapy' },
    { category: 'uk', href: 'https://www.vprotect.co.uk/', src: '/img/partners/vprotect.png', alt: 'VProtect' },
    { category: 'uk', href: 'https://ammalsolicitors.co.uk/', src: '/img/partners/ammalsolicitors.png', alt: 'Ammal Solicitors' }
  ]

  const filteredPartners = useCallback(() => {
    return activeCategory === 'all' 
      ? partners 
      : partners.filter(partner => partner.category === activeCategory)
  }, [activeCategory])

 const handleTabClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
  const target = e.target as HTMLElement;
  const btn = target.closest('.tab-btn') as HTMLElement;
  
  if (!btn || !btn.dataset.category) return;
  
  setActiveCategory(btn.dataset.category);
}, []); // Ensure the empty array [] is here if it was there before

  if (!mounted) {
    return (
      <PageLayout>
        <div className="partners-section" style={{ paddingBottom: '60px' }}>
          <div>Loading partners...</div>
        </div>
      </PageLayout>
    )
  }

  return (
    
    <PageLayout>
          {/* Banner */}
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
            <li><Link href="/web-and-apps">Web & Apps</Link></li>
          </ul>

          <h2 className="mil-mb-60">
            Web & <span className="mil-thin">Applications</span>
          </h2>
        </div>
      </div>
    </div>

      <section className="contact-section mb-5">
      <div className="partners-section" style={{ paddingBottom: '60px !important' }}>
        {/* Tab Buttons */}
        <div 
          className="tab-buttons"
          ref={containerRef}
          onClick={handleTabClick}
          role="tablist"
          aria-label="Filter partners by country"
        >
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`tab-btn ${activeCategory === id ? 'active' : ''}`}
              data-category={id}
              role="tab"
              aria-selected={activeCategory === id}
              tabIndex={activeCategory === id ? 0 : -1}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="partners-grid" role="tabpanel">
          {filteredPartners().map((partner, index) => (
            <div 
              key={`${partner.category}-${index}`} 
              className={`partner-item ${activeCategory === 'all' || partner.category === activeCategory ? 'active' : ''}`}
              data-category={partner.category}
            >
              <div className="partner-logo-box">
                <Link 
                  href={partner.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="partner-logo"
                >
                  <Image 
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    className="partner-img"
                    priority={false}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
        </section>
   
    </PageLayout>
  )
}
