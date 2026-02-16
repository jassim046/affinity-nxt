'use client'

import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function HomeContent() {

  useEffect(() => {
    // Counter Logic
    const counters = document.querySelectorAll('.counter')

    const startCounter = (el: HTMLElement) => {
      if ((el as any)._done) return
      const target = parseInt(el.dataset.target || '0', 10)
      const suffix = el.dataset.suffix || ''
      let count = 0
      const increment = target / 50

      const updateCount = () => {
        if (count < target) {
          count += increment
          el.innerText = Math.ceil(count) + suffix
          setTimeout(updateCount, 20)
        } else {
          el.innerText = target + suffix
          ;(el as any)._done = true
        }
      }
      updateCount()
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter(entry.target as HTMLElement)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach(c => observer.observe(c))

    // Tech Tabs
    document.querySelectorAll('.tech-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = (tab as HTMLElement).dataset.tab
        document.querySelectorAll('.tech-tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        document.querySelectorAll('.tech-content').forEach(content => {
          content.classList.toggle(
            'active',
            (content as HTMLElement).dataset.tab === target
          )
        })
      })
    })

    return () => {
      counters.forEach(c => observer.unobserve(c))
    }
  }, [])

  const clientLogos = [
    'prajwala.png','seaguljobs4u.png','travelexpo.png','sinmarcompanylogo.png',
    'marmara-trading.png','khalid.png','sn-college.png','mes-asambi.png',
    'ayushcare.png','gsc-movers.png','mahe-teachers.png','cosmos.png',
    'genisis.png','pace.png','mineralx.png','sanjo.png','rajam-sukku.png',
    'Jesus_logo.png','vastubras.png','sbvsbmt.png','precious.png',
    'alrumanuae.png','hr-meridian.png','ammalsolicitors.png'
  ]

  const industries = [
    'Human Resources','Trading & Contracting','Travel & Tourism','Logistics',
    'Civil & Construction','Realty','Education','Healthcare','Hospitality',
    'Retail','Professional Services','Technical Services',
    'Engineering & Manufacturing','Print & Pack','Charity & Community',
    'Govt. & Administration','IT/ITES','Media & Film'
  ]

  return (
    <>

      {/* WE EMPOWER */}
      <section id="industries">
        <div className="creative-stats-wrapper mil-p-60-60">
          <h2 className="mil-center industries-title mil-mb-30" style={{ textAlign: 'center' }}>
            We <span className="mil-thin">Empower</span>
          </h2>
          <div className="stats-grid">
            {industries.map((industry, index) => (
              <div key={index} className="stat-card">
                <h4 className="stat-label-em">{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section>
        <div className="container-fluid mil-p-60-60">
          <div className="row align-items-center">

            <div
              className="mil-complex-text justify-content-center mil-up mil-mb-5"
              style={{ textAlign: 'center' }}
            >
              <h2 className="mil-center industries-title">
                Our <span className="mil-thin">Clients</span>
              </h2>
            </div>

            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-lg-12 col-md-12 mil-p-60-20">
                  <div className="ai-partners-wrap">
                    <div className="ai-partners-grid">
                      {clientLogos.map((logo, index) => (
                        <div key={index} className="ai-partner-item">
                          <div
                            className="ai-partner-card"
                            style={{
                              border: '1px solid rgba(0,0,0,0.15)',
                              borderRadius: '8px',
                              padding: '20px',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: '#fff'
                            }}
                          >
                            <div className="ai-partner-logo">
                              <Image
                                src={`/img/partners/${logo}`}
                                alt={logo.replace('.png', '')}
                                width={150}
                                height={80}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mil-adaptive-center mil-up" style={{ textAlign: 'center' }}>
              <Link
                href="/web-and-apps"
                className="mil-link mil-dark mil-arrow-place"
                style={{ display: 'inline-flex' }}
              >
                <span>View all</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
