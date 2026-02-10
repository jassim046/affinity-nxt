'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomeContent() {
  // We use "useState" to handle the tabs. This is much better than the old way!
  const [activeTab, setActiveTab] = useState('frontend');

  useEffect(() => {
    // Counter Animation Logic
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
      {/* Banner Section */}
      <section className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix" style={{background: '#002147'}}>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <div className="row">
                <div className="col-md-7">
                  <h2 className="mil-muted" style={{fontSize: '40px'}}>
                    Empowering <br />
                    <span className="mil-thin">Digital Transformation</span>
                  </h2>
                  <p className="mil-light-soft mil-mb-30 mil-mt-30">
                    For over two decades, Affinity Interactive has been the catalyst behind successful digital journeys.
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
                <div className="col-md-5 desktop-only">
                    <div className="unique-stats-grid">
                        <div className="unique-stat-card">
                          <span className="unique-stat-number counter" data-target="21" data-suffix="+">0</span>
                          <span className="unique-stat-label">Years</span>
                        </div>
                        <div className="unique-stat-card">
                          <span className="unique-stat-number counter" data-target="300" data-suffix="+">0</span>
                          <span className="unique-stat-label">Clients</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - FIXED TABS */}
      <section className="tech-section mil-p-120-90">
        <div className="container">
            <div className="tech-tabs">
                <button className={`tech-tab ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>Modern Frameworks</button>
                <button className={`tech-tab ${activeTab === 'robust-programming' ? 'active' : ''}`} onClick={() => setActiveTab('robust-programming')}>Programming</button>
                <button className={`tech-tab ${activeTab === 'scalable-database' ? 'active' : ''}`} onClick={() => setActiveTab('scalable-database')}>Databases</button>
                <button className={`tech-tab ${activeTab === 'cloud' ? 'active' : ''}`} onClick={() => setActiveTab('cloud')}>Cloud & DevOps</button>
                <button className={`tech-tab ${activeTab === 'ecommerce' ? 'active' : ''}`} onClick={() => setActiveTab('ecommerce')}>E-Commerce</button>
            </div>

            <div className="tech-content-wrapper mil-mt-60">
                {/* Frontend Content */}
                {activeTab === 'frontend' && (
                    <div className="tech-content active">
                        <h2>Modern Frontend Development</h2>
                        <p>We leverage React, Next.js, and Tailwind CSS for stunning interfaces.</p>
                        <div className="tech-logos">
                            <div className="logo-card"><i className="fab fa-react"></i><span>React</span></div>
                            <div className="logo-card"><img src="https://assets.vercel.com/image/upload/front/assets/design/nextjs-black-logo.svg" alt="Next.js" style={{width: '40px'}} /><span>Next.js</span></div>
                            <div className="logo-card"><span>Tailwind</span></div>
                        </div>
                    </div>
                )}

                {/* Backend Content */}
                {activeTab === 'robust-programming' && (
                    <div className="tech-content active">
                        <h2>Robust Backend Engineering</h2>
                        <p>Proficient in Python, Java, and Node.js for scalable backend stacks.</p>
                        <div className="tech-logos">
                            <div className="logo-card"><span>Python</span></div>
                            <div className="logo-card"><span>Node.js</span></div>
                            <div className="logo-card"><span>PHP</span></div>
                        </div>
                    </div>
                )}

                {/* Database Content */}
                {activeTab === 'scalable-database' && (
                    <div className="tech-content active">
                        <h2>Secure Data Management</h2>
                        <p>Working with MySQL, PostgreSQL, and MongoDB for secure data.</p>
                        <div className="tech-logos">
                            <div className="logo-card"><span>MySQL</span></div>
                            <div className="logo-card"><span>Postgres</span></div>
                            <div className="logo-card"><span>MongoDB</span></div>
                        </div>
                    </div>
                )}

                {/* Cloud Content */}
                {activeTab === 'cloud' && (
                    <div className="tech-content active">
                        <h2>Cloud & DevOps</h2>
                        <p>AWS, Azure, and Docker for automated deployments.</p>
                        <div className="tech-logos">
                            <div className="logo-card"><span>AWS</span></div>
                            <div className="logo-card"><span>Azure</span></div>
                            <div className="logo-card"><span>Docker</span></div>
                        </div>
                </div>
                )}

                {/* E-Commerce Content */}
                {activeTab === 'ecommerce' && (
                    <div className="tech-content active">
                        <h2>E-Commerce Solutions</h2>
                        <p>High-performance Shopify, WooCommerce, and Magento stores.</p>
                        <div className="tech-logos">
                            <div className="logo-card"><span>Shopify</span></div>
                            <div className="logo-card"><span>WooCommerce</span></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* Solutions Section - FIXED BACKGROUND */}
      <section className="mil-dark-bg mil-p-120-90" style={{background: '#0a0b1e'}}>
        <div className="container">
          <div className="mil-complex-text justify-content-center mil-mb-60">
            <h2 className="mil-h1 mil-muted mil-center">Our <span className="mil-thin">Solutions</span></h2>
          </div>
          
          <div className="row mil-services-grid">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-service-card-sm mil-up">
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/1.png" alt="NAAC ERP" width={80} height={80} />
                </div>
                <p className="mil-light-soft">A NAAC-focused ERP for colleges, enabling effortless data entry and compliance reporting.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-service-card-sm mil-up">
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/2.png" alt="Attendance" width={80} height={80} />
                </div>
                <p className="mil-light-soft">A hybrid mobile app for tracking student attendance class-wise with FYUG support.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-service-card-sm mil-up">
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/3.png" alt="Fee Collection" width={80} height={80} />
                </div>
                <p className="mil-light-soft">Secure fee collection platform for schools offering online payments and receipts.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-service-card-sm mil-up">
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/4.png" alt="Logistics" width={80} height={80} />
                </div>
                <p className="mil-light-soft">Web app for logistics companies to track consignments in real time with ease.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-service-card-sm mil-up">
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/5.png" alt="Temple" width={80} height={80} />
                </div>
                <p className="mil-light-soft">Web app for temples enabling devotees to book offerings online with secure payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empower Section */}
      <section id="industries" className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-center mil-mb-60">We <span className="mil-thin">Empower</span></h2>
          <div className="stats-grid">
            {industries.map((industry, index) => (
              <div key={index} className="stat-card">
                <h4 className="stat-label-em">{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-center mil-mb-60">Our <span className="mil-thin">Clients</span></h2>
          <div className="ai-partners-grid">
            {clientLogos.map((logo, index) => (
              <div key={index} className="ai-partner-item">
                <Image src={`/img/partners/${logo}`} alt="Client" width={120} height={60} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
