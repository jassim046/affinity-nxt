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
    // 1. Counter Logic
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

    // 2. Tech Tabs Logic
    const tabs = document.querySelectorAll('.tech-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = (tab as HTMLElement).dataset.tab;
        document.querySelectorAll('.tech-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.tech-content').forEach(content => {
          content.classList.toggle('active', (content as HTMLElement).dataset.tab === target);
        });
      });
    });

    // Cleanup function to prevent memory leaks
    return () => {
      counters.forEach((c) => observer.unobserve(c));
    };
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
      {/* Banner */}
      <section className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix" style={{background: '#002147'}}>
          <div className="mil-gradient"></div>
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
            <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
            <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1">
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
                  <br />
                  <p className="mil-light-soft mil-mb-30">
                    For over two decades, Affinity Interactive has been the catalyst behind successful digital journeys for businesses across the globe. We don&apos;t just build websites and applications — we craft comprehensive digital ecosystems that drive growth, enhance efficiency, and create lasting competitive advantages.
                  </p>
                </div>
                <div className="col-md-5 col-lg-6 desktop-only">
                  <div className="unique-stats-wrapper">
                    <div className="unique-stats-box">
                      <div className="unique-stats-grid">
                        <div className="unique-stat-card">
                          <span className="unique-stat-number counter" data-target="21" data-suffix="+">0</span>
                          <span className="unique-stat-label">Years of Excellence</span>
                        </div>
                        <div className="unique-stat-card">
                          <span className="unique-stat-number counter" data-target="300" data-suffix="+">0</span>
                          <span className="unique-stat-label">Clients</span>
                        </div>
                        <div className="unique-stat-card">
                          <span className="unique-stat-number counter" data-target="400" data-suffix="+">0</span>
                          <span className="unique-stat-label">Projects</span>
                        </div>
                        <div className="unique-stat-card">
                          <span className="unique-stat-number counter" data-target="15" data-suffix="+">0</span>
                          <span className="unique-stat-label">Nations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mil-banner-buttons mil-mt-30">
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
      </section>

      {/* Mobile Stats */}
      <div className="col-md-5 col-lg-6 mobile-tablet-only">
        <div className="unique-stats-wrapper" style={{background: '#14152c'}}>
          <div className="unique-stats-box">
            <div className="unique-stats-grid">
              <div className="unique-stat-card">
                <span className="unique-stat-number counter" data-target="21" data-suffix="+">0</span>
                <span className="unique-stat-label">Years of Excellence</span>
              </div>
              <div className="unique-stat-card">
                <span className="unique-stat-number counter" data-target="300" data-suffix="+">0</span>
                <span className="unique-stat-label">Clients</span>
              </div>
              <div className="unique-stat-card">
                <span className="unique-stat-number counter" data-target="400" data-suffix="+">0</span>
                <span className="unique-stat-label">Projects</span>
              </div>
              <div className="unique-stat-card">
                <span className="unique-stat-number counter" data-target="15" data-suffix="+">0</span>
                <span className="unique-stat-label">Nations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <div className="container mil-p-60-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-xl-4">
              <div className="mil-mb-90">
                <h2 className="mil-up mil-mb-30" style={{fontSize: '35px'}}>
                  Get Ready for Tomorrow with our <span className="mil-thin"><br />AI Automation <br />Services</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mil-about mil-mb-30">
                <div className="mil-up">
                  <p className="mil-up mil-mb-30 text-justify">
                    We design and deploy AI-driven automation solutions that streamline operations, enhance decision-making, and unlock new efficiencies across business processes. Our approach focuses on practical, scalable AI that integrates seamlessly with existing systems.
                  </p>
                  <div className="mil-adaptive-left mil-up">
                    <Link href="/ai-automation" className="mil-link mil-dark mil-arrow-place">
                      <span>Know More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Swiper */}
      <section className="services-carousel">
        <div className="container-fluid">
          <Swiper
            className="servicesSwiper"
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            <SwiperSlide className="service-slide"><h4>AI Automation</h4></SwiperSlide>
            <SwiperSlide className="service-slide"><h4>Mobile App Development</h4></SwiperSlide>
            <SwiperSlide className="service-slide"><h4>ERP Solutions</h4></SwiperSlide>
            <SwiperSlide className="service-slide"><h4>Portals</h4></SwiperSlide>
            <SwiperSlide className="service-slide"><h4>E-Commerce</h4></SwiperSlide>
            <SwiperSlide className="service-slide"><h4>Web Development</h4></SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="tech-tabs">
          <button className="tech-tab active" data-tab="frontend">Modern Frameworks</button>
          <button className="tech-tab" data-tab="robust-programming">Backend Programming</button>
          <button className="tech-tab" data-tab="scalable-database">Databases</button>
        </div>

        <div className="tech-content-wrapper">
          <div className="tech-content active" data-tab="frontend">
            <h2>Modern Frontend Development</h2>
            <div className="tech-logos">
              <div className="logo-card"><span>React</span></div>
              <div className="logo-card"><span>Next.js</span></div>
            </div>
          </div>
          {/* Add more tech-content blocks as needed */}
        </div>
      </section>

      {/* Solutions Section */}
      {/* Clients + Services Section (REPLACE with this block) */}
  <section className="ai-clients-services-section">
    <div className="content-section">
      {/* What Sets Us Apart */}
      <section className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="2.4"
              data-value-2="1.4"
              style={{ top: 300, right: "-100px" }}
            />
            <div
              className="mil-animation mil-position-2 mil-scale"
              data-value-1={2}
              data-value-2={1}
              style={{ left: 150 }}
            />
          </div>
          <div className="container mil-p-80-0">
            <div className="mil-mb-30">
              <div className="mil-complex-text justify-content-center">
                <h2 className="mil-h1 mil-muted mil-center">
                  Our <span className="mil-thin">Solutions</span>
                </h2>
              </div>
            </div>
            <div className="row mil-services-grid m-0 ">
              <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                <div className="mil-service-card-sm mil-up">
                  <div className="ai-partner-logo mil-mb-30">
                    <img src="img/solution/1.png" alt="" />
                  </div>
                  <p className="mil-light-soft mil-mb-30">
                    A NAAC-focused ERP for colleges, enabling effortless data
                    entry, streamlined documentation, and compliance-ready
                    reporting for accreditation and re-accreditation.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                <div className="mil-service-card-sm mil-up">
                  <div
                    className="ai-partner-logo mil-mb-30"
                    style={{ height: "60px !important" }}
                  >
                    <img src="img/solution/2.png" alt="" />
                  </div>
                  <p className="mil-light-soft mil-mb-30">
                    A hybrid mobile app for colleges to record, track, and
                    report student attendance class-wise and hour-wise, with
                    FYUG support and consolidated reporting.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                <div className="mil-service-card-sm mil-up">
                  <div className="ai-partner-logosolution mil-mb-30">
                    <img src="img/solution/3.png" alt="" />
                  </div>
                  <p className="mil-light-soft mil-mb-30">
                    A simple, secure fee collection platform for schools and
                    colleges, offering online payments, automated receipts, and
                    real-time reporting.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                <div className="mil-service-card-sm mil-up">
                  <div className="ai-partner-logo mil-mb-30">
                    <img src="img/solution/4.png" alt="" />
                  </div>
                  <p className="mil-light-soft mil-mb-30">
                    A web app for logistics companies that lets customers track
                    consignments in real time with ease, improving transparency
                    and customer trust.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                <div className="mil-service-card-sm mil-up">
                  <div className="ai-partner-logo mil-mb-30">
                    <img src="img/solution/5.png" alt="" />
                  </div>
                  <p className="mil-light-soft mil-mb-30">
                    A web app for temples that enables devotees to book
                    offerings online with secure payments, multi-deity support,
                    and user-friendly profiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services end
       */}
    </div>
  </section>

      {/* Empower Section */}
      <section id="industries">
        <div className="creative-stats-wrapper mil-p-60-60">
          <h2 className="mil-center industries-title mil-mb-30">We <span className="mil-thin">Empower</span></h2>
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
      <section>
        <div className="container mil-p-60-60">
          <h2 className="mil-center industries-title mil-mb-30">Our <span className="mil-thin">Clients</span></h2>
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
