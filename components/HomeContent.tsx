'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState('frontend');

  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const startCounter = (el: HTMLElement) => {
      if ((el as any)._done) return;
      const target = parseInt(el.dataset.target || '0', 10);
      const suffix = el.dataset.suffix || "";
      let count = 0;
      const increment = target / 50;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          el.innerText = Math.ceil(count) + suffix;
          setTimeout(updateCount, 20);
        } else {
          el.innerText = target + suffix;
          (el as any)._done = true;
        }
      };
      updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target as HTMLElement);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((c) => observer.observe(c));
    return () => counters.forEach((c) => observer.unobserve(c));
  }, []);

  const clientLogos = [
    'prajwala.png', 'seaguljobs4u.png', 'travelexpo.png', 'sinmarcompanylogo.png',
    'marmara-trading.png', 'khalid.png', 'sn-college.png', 'mes-asambi.png',
    'ayushcare.png', 'gsc-movers.png', 'mahe-teachers.png', 'cosmos.png',
    'genisis.png', 'pace.png', 'mineralx.png', 'sanjo.png', 'rajam-sukku.png',
    'Jesus_logo.png', 'vastubras.png', 'sbvsbmt.png', 'precious.png',
    'alrumanuae.png', 'hr-meridian.png', 'ammalsolicitors.png'
  ]

  const industries = [
    'Human Resources', 'Trading & Contracting', 'Travel & Tourism', 'Logistics',
    'Civil & Construction', 'Realty', 'Education', 'Healthcare', 'Hospitality',
    'Retail', 'Professional Services', 'Technical Services', 'Engineering & Manufacturing',
    'Print & Pack', 'Charity & Community', 'Govt. & Administration', 'IT/ITES', 'Media & Film'
  ]

  return (
    <>
      {/* Banner Section - RESTORED ANIMATION & STRUCTURE */}
      <section className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix" style={{background: '#002147'}}>
          <div className="mil-gradient"></div>
          
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
            <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
            <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1">
              {/* This Dodecahedron structure is what makes the banner look original */}
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

          <div className="container">
            <div className="mil-banner-content mil-up">
              <div className="row">
                <div className="col-md-7 col-lg-6">
                  <h2 className="mil-muted" style={{fontSize: '40px'}}>
                    Empowering <br />
                    <span className="mil-thin">Digital Transformation</span><br />
                    <span className="mil-thin">Since 2004</span>
                  </h2>
                  <p className="mil-light-soft mil-mb-30 mil-mt-30">
                    For over two decades, Affinity Interactive has been the catalyst behind successful digital journeys for businesses across the globe.
                  </p>
                  <div className="mil-banner-buttons">
                    <Link href="/service" className="mil-button mil-arrow-place mil-btn-space" style={{color: '#fff', marginRight: '20px'}}>
                      <span>What we do</span>
                    </Link>
                    <Link href="/web-and-apps" className="mil-link mil-muted mil-arrow-place" style={{color: '#fff'}}>
                      <span>View works</span>
                    </Link>
                  </div>
                </div>
                
                <div className="col-md-5 col-lg-6 desktop-only">
                  <div className="unique-stats-grid">
                    <div className="unique-stat-card">
                      <span className="unique-stat-number counter" data-target="21" data-suffix="+">0</span>
                      <span className="unique-stat-label">Years of Excellence</span>
                    </div>
                    <div className="unique-stat-card">
                      <span className="unique-stat-number counter" data-target="400" data-suffix="+">0</span>
                      <span className="unique-stat-label">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - ALL 8 TABS WITH CONTENT */}
      <section className="tech-section mil-p-120-90">
        <div className="container">
          <div className="tech-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <button className={`tech-tab ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>Modern Frameworks</button>
            <button className={`tech-tab ${activeTab === 'robust' ? 'active' : ''}`} onClick={() => setActiveTab('robust')}>Robust Programming</button>
            <button className={`tech-tab ${activeTab === 'db' ? 'active' : ''}`} onClick={() => setActiveTab('db')}>Scalable Databases</button>
            <button className={`tech-tab ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => setActiveTab('backend')}>Backend Frameworks</button>
            <button className={`tech-tab ${activeTab === 'cloud' ? 'active' : ''}`} onClick={() => setActiveTab('cloud')}>Cloud Platforms</button>
            <button className={`tech-tab ${activeTab === 'ecommerce' ? 'active' : ''}`} onClick={() => setActiveTab('ecommerce')}>E-Commerce</button>
            <button className={`tech-tab ${activeTab === 'project' ? 'active' : ''}`} onClick={() => setActiveTab('project')}>Project Management</button>
            <button className={`tech-tab ${activeTab === 'devops' ? 'active' : ''}`} onClick={() => setActiveTab('devops')}>DevOps Tools</button>
          </div>

          <div className="tech-content-wrapper mil-mt-60">
            {activeTab === 'frontend' && (
              <div className="tech-content active">
                <h2>Modern Frontend Development</h2>
                <p>Crafting high-performance user interfaces using React, Next.js, and Tailwind CSS.</p>
                <div className="tech-logos">
                  <div className="logo-card"><span>React</span></div>
                  <div className="logo-card"><span>Next.js</span></div>
                  <div className="logo-card"><span>Angular</span></div>
                </div>
              </div>
            )}
            {activeTab === 'robust' && (
              <div className="tech-content active">
                <h2>Robust Programming</h2>
                <p>Leveraging Python, Java, and TypeScript for secure and scalable logic.</p>
                <div className="tech-logos">
                  <div className="logo-card"><span>Python</span></div>
                  <div className="logo-card"><span>Java</span></div>
                  <div className="logo-card"><span>TypeScript</span></div>
                </div>
              </div>
            )}
            {activeTab === 'db' && (
              <div className="tech-content active">
                <h2>Scalable Databases</h2>
                <p>Data management with MySQL, PostgreSQL, and Oracle.</p>
                <div className="tech-logos">
                  <div className="logo-card"><span>MySQL</span></div>
                  <div className="logo-card"><span>Postgres</span></div>
                </div>
              </div>
            )}
            {activeTab === 'backend' && (
              <div className="tech-content active">
                <h2>Backend Frameworks</h2>
                <p>Utilizing Django, Spring, and Node.js for stable server solutions.</p>
              </div>
            )}
            {activeTab === 'cloud' && (
              <div className="tech-content active">
                <h2>Cloud Platforms</h2>
                <p>Deploying on AWS, Azure, and Google Cloud for 99.9% uptime.</p>
              </div>
            )}
            {activeTab === 'ecommerce' && (
              <div className="tech-content active">
                <h2>E-Commerce</h2>
                <p>Custom Shopify, WooCommerce, and Magento experiences.</p>
              </div>
            )}
            {activeTab === 'project' && (
              <div className="tech-content active">
                <h2>Project Management</h2>
                <p>Structured delivery using Jira, Trello, and Agile methodologies.</p>
              </div>
            )}
            {activeTab === 'devops' && (
              <div className="tech-content active">
                <h2>DevOps Tools</h2>
                <p>Automation with Docker, Kubernetes, and GitHub Actions.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Section - FIXED VISIBILITY */}
      <section className="mil-dark-bg mil-p-120-90" style={{ background: '#0a0b1e' }}>
        <div className="container">
          <div className="mil-complex-text justify-content-center mil-mb-60">
            <h2 className="mil-h1 mil-muted mil-center">Our <span className="mil-thin">Solutions</span></h2>
          </div>
          
          <div className="row mil-services-grid" style={{ justifyContent: 'center' }}>
            {[
              { id: 1, title: 'NAAC ERP', desc: 'A NAAC-focused ERP for colleges, enabling effortless documentation.' },
              { id: 2, title: 'Attendance App', desc: 'Hybrid mobile app for tracking student attendance with FYUG support.' },
              { id: 3, title: 'Fee Collection', desc: 'Secure platform for schools offering online payments and receipts.' },
              { id: 4, title: 'Logistics Tracker', desc: 'Real-time consignment tracking for logistics transparency.' },
              { id: 5, title: 'Temple Booking', desc: 'Online offering bookings for temples with secure payment gateways.' },
            ].map((sol) => (
              <div key={sol.id} className="col-lg-2-5 col-md-6 mil-mb-30">
                <div className="mil-service-card-sm mil-up" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '12px', height: '100%' }}>
                  <div className="ai-partner-logo mil-mb-30">
                    <Image src={`/img/solution/${sol.id}.png`} alt={sol.title} width={60} height={60} />
                  </div>
                  <h4 className="mil-muted mil-mb-20">{sol.title}</h4>
                  <p className="mil-light-soft">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-center mil-mb-60">We <span className="mil-thin">Empower</span></h2>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {industries.map((industry, index) => (
              <div key={index} className="stat-card" style={{ textAlign: 'center', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
                <h4 className="stat-label-em" style={{ fontSize: '14px', margin: 0 }}>{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-center mil-mb-60">Our <span className="mil-thin">Clients</span></h2>
          <div className="ai-partners-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', alignItems: 'center' }}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="ai-partner-item">
                <Image src={`/img/partners/${logo}`} alt="Client" width={100} height={50} style={{ filter: 'grayscale(100%)', opacity: 0.6 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
