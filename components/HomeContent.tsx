'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomeContent() {
  // 1. Fixed State: Added all 8 categories back
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
                <div className="col-md-7 col-lg-6">
                  <h2 className="mil-muted" style={{fontSize: '40px'}}>
                    Empowering <br />
                    <span className="mil-thin">Digital Transformation</span><br />
                    <span className="mil-thin">Since 2004</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Technologies Section - ALL 8 TABS RESTORED */}
      <section className="tech-section mil-p-120-90">
        <div className="container">
          <div className="tech-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <button className={`tech-tab ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>Modern Frameworks</button>
            <button className={`tech-tab ${activeTab === 'robust-programming' ? 'active' : ''}`} onClick={() => setActiveTab('robust-programming')}>Robust Programming</button>
            <button className={`tech-tab ${activeTab === 'scalable-database' ? 'active' : ''}`} onClick={() => setActiveTab('scalable-database')}>Scalable Databases</button>
            <button className={`tech-tab ${activeTab === 'backend-frameworks' ? 'active' : ''}`} onClick={() => setActiveTab('backend-frameworks')}>Backend Frameworks</button>
            <button className={`tech-tab ${activeTab === 'cloud' ? 'active' : ''}`} onClick={() => setActiveTab('cloud')}>Cloud Platforms</button>
            <button className={`tech-tab ${activeTab === 'ecommerce' ? 'active' : ''}`} onClick={() => setActiveTab('ecommerce')}>E-Commerce</button>
            <button className={`tech-tab ${activeTab === 'project' ? 'active' : ''}`} onClick={() => setActiveTab('project')}>Project Management</button>
            <button className={`tech-tab ${activeTab === 'devops' ? 'active' : ''}`} onClick={() => setActiveTab('devops')}>DevOps Tools</button>
          </div>

          <div className="tech-content-wrapper mil-mt-60">
            {activeTab === 'frontend' && (
              <div className="tech-content active">
                <h2>Modern Frontend Development</h2>
                <p>We leverage React, Next.js, Tailwind CSS, and Bootstrap for high-performance user interfaces.</p>
                <div className="tech-logos">
                  <div className="logo-card"><span>React</span></div>
                  <div className="logo-card"><span>Next.js</span></div>
                  <div className="logo-card"><span>Tailwind</span></div>
                </div>
              </div>
            )}
            {activeTab === 'robust-programming' && (
              <div className="tech-content active">
                <h2>Robust Backend Engineering</h2>
                <p>Proficient in Python, Java, TypeScript, and JavaScript for efficient technology stacks.</p>
                <div className="tech-logos">
                  <div className="logo-card"><span>Python</span></div>
                  <div className="logo-card"><span>Java</span></div>
                  <div className="logo-card"><span>PHP</span></div>
                </div>
              </div>
            )}
            {activeTab === 'scalable-database' && (
              <div className="tech-content active">
                <h2>Secure Data Management</h2>
                <p>Ensuring your application data is stored securely with MySQL, PostgreSQL, and Oracle.</p>
                <div className="tech-logos">
                  <div className="logo-card"><span>MySQL</span></div>
                  <div className="logo-card"><span>PostgreSQL</span></div>
                  <div className="logo-card"><span>Oracle</span></div>
                </div>
              </div>
            )}
            {activeTab === 'backend-frameworks' && (
              <div className="tech-content active">
                <h2>Backend Frameworks</h2>
                <p>Utilizing Django, Spring, and Node.js to accelerate development and stability.</p>
              </div>
            )}
            {activeTab === 'cloud' && (
              <div className="tech-content active">
                <h2>Cloud Platforms</h2>
                <p>Secure, high-availability applications on AWS, Microsoft Azure, and Google Cloud.</p>
              </div>
            )}
            {activeTab === 'ecommerce' && (
              <div className="tech-content active">
                <h2>E-Commerce</h2>
                <p>High-performance Shopify, WooCommerce, and Magento stores.</p>
              </div>
            )}
            {activeTab === 'project' && (
              <div className="tech-content active">
                <h2>Project Management</h2>
                <p>Collaboration and delivery using Jira and Trello.</p>
              </div>
            )}
            {activeTab === 'devops' && (
              <div className="tech-content active">
                <h2>DevOps Tools</h2>
                <p>Automated deployments using GitHub, Bitbucket, and Docker.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Section - FIXED VISIBILITY & BACKGROUND */}
      <section className="mil-dark-bg mil-p-120-90" style={{ background: '#0a0b1e', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="mil-complex-text justify-content-center mil-mb-60">
            <h2 className="mil-h1 mil-muted mil-center">Our <span className="mil-thin">Solutions</span></h2>
          </div>
          
          <div className="row mil-services-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {/* Card 1 */}
            <div className="col-lg-2-5 col-md-6">
              <div className="mil-service-card-sm mil-up" style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/1.png" alt="NAAC ERP" width={60} height={60} />
                </div>
                <p className="mil-light-soft" style={{ color: '#fff' }}>A NAAC-focused ERP for colleges, enabling effortless documentation and reporting.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-2-5 col-md-6">
              <div className="mil-service-card-sm mil-up" style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/2.png" alt="Attendance" width={60} height={60} />
                </div>
                <p className="mil-light-soft" style={{ color: '#fff' }}>A hybrid mobile app for tracking student attendance class-wise with FYUG support.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-2-5 col-md-6">
              <div className="mil-service-card-sm mil-up" style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/3.png" alt="Fee" width={60} height={60} />
                </div>
                <p className="mil-light-soft" style={{ color: '#fff' }}>Secure fee collection platform for schools offering online payments and receipts.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-2-5 col-md-6">
              <div className="mil-service-card-sm mil-up" style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/4.png" alt="Logistics" width={60} height={60} />
                </div>
                <p className="mil-light-soft" style={{ color: '#fff' }}>Web app for logistics companies to track consignments in real time with ease.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-2-5 col-md-6">
              <div className="mil-service-card-sm mil-up" style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
                <div className="ai-partner-logo mil-mb-30">
                  <Image src="/img/solution/5.png" alt="Temple" width={60} height={60} />
                </div>
                <p className="mil-light-soft" style={{ color: '#fff' }}>Web app for temples enabling devotees to book offerings online with secure payments.</p>
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
