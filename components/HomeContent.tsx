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
    // Counter animation
    const counters = document.querySelectorAll('.counter')
    if (counters.length) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter(entry.target as HTMLElement)
            obs.unobserve(entry.target)
          }
        })
      }, { threshold: 0.4 })

      counters.forEach(c => observer.observe(c))

      function startCounter(el: HTMLElement) {
        if ((el as any)._done) return
        const target = parseInt(el.dataset.target || '0', 10)
        const suffix = el.dataset.suffix || ""
        const duration = 1400
        const start = 0
        let startTime: number | null = null

        function step(timestamp: number) {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime!) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.innerText = Math.floor(eased * (target - start) + start) + suffix
          if (progress < 1) requestAnimationFrame(step)
          else el.innerText = target + suffix
        }
        requestAnimationFrame(step)
        ;(el as any)._done = true
      }
    }

    // Tech tabs
    document.querySelectorAll('.tech-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = (tab as HTMLElement).dataset.tab
        document.querySelectorAll('.tech-tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        document.querySelectorAll('.tech-content').forEach(content => {
          content.classList.toggle('active', (content as HTMLElement).dataset.tab === target)
        })
      })
    })
   
    // Initialize Swiper for services
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      const Swiper = (window as any).Swiper
      if (document.querySelector('.servicesSwiper')) {
        new Swiper('.servicesSwiper', {
          loop: true,
          autoplay: {
            delay: 2200,
            disableOnInteraction: false,
          },
          slidesPerView: 4,
          spaceBetween: 20,
          breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 5 }
          }
        })
      }
    }
  }, [])

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
  <div 
    className="mil-animation mil-position-1 mil-scale" 
    data-value-1="7" 
    data-value-2="1.6"
  >
    {/* If this requires the same dodecahedron structure, paste it here */}
  </div>

  <div 
    className="mil-animation mil-position-2 mil-scale" 
    data-value-1="4" 
    data-value-2="1"
  >
    {/* Inner structure here */}
  </div>

  <div 
    className="mil-animation mil-position-3 mil-scale" 
    data-value-1="1.2" 
    data-value-2=".1"
  >
    {/* Inner structure here */}
  
            {/* REQUIRED INNER STRUCTURE */}
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
              <Link href="/service" className="mil-button mil-arrow-place mil-btn-space" style={{color: '#fff'}}>
                <span>What we do</span> {/* SVG Arrow */}
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
              </Link>
              <Link href="/web-and-apps" className="mil-link mil-muted mil-arrow-place" style={{color: '#fff'}}>
                <span>View works</span> {/* SVG Arrow */}
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
              </Link>
              <div className="mil-circle-text">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                  <defs>
                    <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text style={{letterSpacing: '6.5px'}}>
                      <textPath xlinkHref="#circlePath">Scroll down - Scroll down -</textPath>
                    </text>
                  </g>
                </svg>
                <a href="#industries" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"> <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg></a>
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

      {/* Services Carousel */}
     {/* Services Carousel */}
<section className="services-carousel">
  <div className="container-fluid">
    <Swiper
      className="servicesSwiper"
      modules={[Autoplay]}
      slidesPerView={5}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      <SwiperSlide className="service-slide">
        <i className="bi bi-cpu"></i>
        <h4>AI Automation</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-phone"></i>
        <h4>Mobile App Development</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-gear"></i>
        <h4>ERP Solutions</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-diagram-3"></i>
        <h4>Portals</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-cart"></i>
        <h4>E-Commerce</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-plug"></i>
        <h4>API / Plugin / SDK</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-globe"></i>
        <h4>Web Development</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-palette"></i>
        <h4>Branding</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-person-badge"></i>
        <h4>IT Consulting</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-cloud"></i>
        <h4>Cloud Solutions</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-search"></i>
        <h4>SEO</h4>
      </SwiperSlide>

      <SwiperSlide className="service-slide">
        <i className="bi bi-envelope"></i>
        <h4>Professional Mail</h4>
        <p style={{ color: '#000' }}>Office 365 / Google / Zoho</p>
      </SwiperSlide>
    </Swiper>
  </div>
</section>


      {/* Technologies Section */}
      <section className="tech-section">
        <div className="tech-tabs">
          <button className="tech-tab active" data-tab="frontend">Modern Frameworks</button>
          <button className="tech-tab" data-tab="robust-programming">Robust Programming Languages</button>
          <button className="tech-tab" data-tab="scalable-database">Scalable Databases</button>
          <button className="tech-tab" data-tab="backend-frameworks">Backend Frameworks</button>
          <button className="tech-tab" data-tab="cloud">Cloud Platforms</button>
          <button className="tech-tab" data-tab="ecommerce">E-Commerce</button>
          <button className="tech-tab" data-tab="project">Project management</button>
          <button className="tech-tab" data-tab="devops">DevOps Tools</button>
        </div>

        <div className="tech-content-wrapper">
          <div className="tech-content active" data-tab="frontend">
            <h2>Modern Frontend Development</h2>
            <p>We leverage cutting-edge frontend technologies such as React, Next.js, Tailwind CSS, and Bootstrap to craft high-performance, responsive, and visually stunning user interfaces that deliver exceptional user experiences.</p>
            <div className="tech-logos">
              <div className="logo-card">
                <i className="fa-brands fa-react"></i>
                <span>React</span>
              </div>
              <div className="logo-card">
                <img src="https://assets.vercel.com/image/upload/front/assets/design/nextjs-black-logo.svg" alt="Next.js" className="tech-logo" style={{width: '50px', height: '50px'}} />
                <span>Next.js</span>
              </div>
              <div className="logo-card angular-icon">
                <i className="fa-brands fa-angular"></i>
                <span>Angular</span>
              </div>
              <div className="logo-card">
                <i className="fa-brands fa-vuejs"></i>
                <span>Vue.js</span>
              </div>
              <div className="logo-card tailwind-icon">
                <span className="text-icon">TW</span>
                <span>Tailwind</span>
              </div>
            </div>
          </div>

          <div className="tech-content" data-tab="robust-programming">
            <h2>Robust Backend Engineering</h2>
            <p>Our development team is proficient in industry-leading programming languages including Python, Java, TypeScript, and JavaScript, enabling us to select the most efficient and scalable technology stack tailored to your project&apos;s needs.</p>
            <div className="tech-logos">
              <div className="logo-card php-icon">
                <i className="fa-brands fa-php"></i>
                <span>PHP</span>
              </div>
              <div className="logo-card python-icon">
                <i className="fa-brands fa-python"></i>
                <span>Python</span>
              </div>
              <div className="logo-card js-icon">
                <i className="fa-brands fa-js"></i>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div className="tech-content" data-tab="scalable-database">
            <h2>Secure & Scalable Data Management</h2>
            <p>We work with powerful database systems like MySQL, PostgreSQL, and Oracle to ensure your application&apos;s data is stored securely, managed efficiently, and scaled seamlessly as your business grows.</p>
            <div className="tech-logos">
              <div className="logo-card mysql-icon">
                <i className="fa-solid fa-database"></i>
                <span>MySQL</span>
              </div>
              <div className="logo-card mongo-icon">
                <i className="fa-brands fa-envira"></i>
                <span>MongoDB</span>
              </div>
              <div className="logo-card firebase-icon">
                <i className="fa-solid fa-fire"></i>
                <span>Firebase</span>
              </div>
            </div>
          </div>

          <div className="tech-content" data-tab="backend-frameworks">
            <h2>Backend Frameworks & Architecture</h2>
            <p>We utilize powerful backend frameworks such as Django, Spring, and Node.js to accelerate development, minimize errors, and deliver stable, high-performance server-side solutions through proven, pre-built functionalities.</p>
            <div className="tech-logos">
              <div className="logo-card laravel-icon">
                <i className="fa-brands fa-laravel"></i>
                <span>Laravel</span>
              </div>
              <div className="logo-card django-icon">
                <img src="https://static.djangoproject.com/img/logos/django-logo-negative.svg" alt="Django" style={{width: '50px', height: '50px'}} />
                <span>Django</span>
              </div>
              <div className="logo-card node-icon">
                <i className="fa-brands fa-node-js"></i>
                <span>Node.js</span>
              </div>
            </div>
          </div>

          <div className="tech-content" data-tab="ecommerce">
            <h2>E commerce</h2>
            <p>We design and develop high-performance e-commerce platforms that deliver seamless shopping experiences, secure transactions, and scalable growth. From custom storefronts to advanced integrations, our solutions help businesses convert visitors into loyal customers.</p>
            <div className="tech-logos">
              <div className="logo-card">
                <svg className="woo-logo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-label="WooCommerce" style={{width: '50px', height: '50px'}}>
                  <path fill="currentColor" d="M461.3 128H50.7C22.7 128 0 150.7 0 178.7v154.7C0 361.3 22.7 384 50.7 384h410.7c28 0 50.7-22.7 50.7-50.7V178.7c-.1-28-22.8-50.7-50.8-50.7z"/>
                  <text x="256" y="300" textAnchor="middle" fontSize="160" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Woo</text>
                </svg>
                <span>WooCommerce</span>
              </div>
              <div className="logo-card shopify-icon">
                <i className="fa-brands fa-shopify"></i>
                <span>Shopify</span>
              </div>
              <div className="logo-card magento-icon">
                <i className="fa-brands fa-magento"></i>
                <span>Magento</span>
              </div>
            </div>
          </div>

          <div className="tech-content" data-tab="project">
            <h2>Project Management</h2>
            <p>We implement structured, technology-driven project management systems that improve collaboration, visibility, and delivery timelines. Our approach ensures projects stay on track, within scope, and aligned with business goals from planning to execution.</p>
            <div className="tech-logos">
              <div className="logo-card jira-icon">
                <i className="fa-brands fa-jira"></i>
                <span>Jira</span>
              </div>
              <div className="logo-card trello-icon">
                <i className="fa-brands fa-trello"></i>
                <span>Trello</span>
              </div>
            </div>
          </div>

          <div className="tech-content" data-tab="cloud">
            <h2>Cloud-Driven Scalability</h2>
            <p>We harness leading cloud platforms including AWS, Microsoft Azure, and Google Cloud to build secure, scalable, and high-availability applications that perform flawlessly under any workload.</p>
            <div className="tech-logos">
              <div className="logo-card aws-icon">
                <i className="fa-brands fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="logo-card azure-icon">
                <i className="fa-brands fa-microsoft"></i>
                <span>Microsoft Azure</span>
              </div>
              <div className="logo-card cloud-icon">
                <i className="fa-solid fa-cloud"></i>
                <span>Cloud Services</span>
              </div>
            </div>
          </div>

          <div className="tech-content" data-tab="devops">
            <h2>DevOps & Deployment Excellence</h2>
            <p>Our DevOps practices leverage advanced tools like Docker and Kubernetes to automate deployments, optimize infrastructure management, and ensure consistent application reliability across environments.</p>
            <div className="tech-logos">
              <div className="logo-card github-icon">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </div>
              <div className="logo-card bitbucket-icon">
                <i className="fa-brands fa-bitbucket"></i>
                <span>Bitbucket</span>
              </div>
              <div className="logo-card azure-repos-icon">
                <i className="fa-solid fa-code-branch"></i>
                <span>Azure Repos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="ai-clients-services-section">
        <div className="content-section">
          <section className="mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{top: '300px', right: '-100px'}}></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{left: '150px'}}></div>
              </div>
              <div className="container mil-p-80-0">
                <div className="mil-mb-30">
                  <div className="mil-complex-text justify-content-center">
                    <h2 className="mil-h1 mil-muted mil-center">Our <span className="mil-thin">Solutions</span></h2>
                  </div>
                </div>
                <div className="row mil-services-grid m-0">
                  <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <div className="ai-partner-logo mil-mb-30">
                        <img src="/img/solution/1.png" className="img-fluid v-100" alt="NAAC ERP"  />
                      </div>
                      <p className="mil-light-soft mil-mb-30">
                        A NAAC-focused ERP for colleges, enabling effortless data entry, streamlined documentation, and compliance-ready reporting for accreditation and re-accreditation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <div className="ai-partner-logo mil-mb-30" >
                        <img src="/img/solution/2.png" alt="Attendance App"  />
                      </div>
                      <p className="mil-light-soft mil-mb-30">
                        A hybrid mobile app for colleges to record, track, and report student attendance class-wise and hour-wise, with FYUG support and consolidated reporting.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <div className="ai-partner-logosolution mil-mb-30">
                        <img src="/img/solution/3.png" alt="Fee Collection"  />
                      </div>
                      <p className="mil-light-soft mil-mb-30">
                        A simple, secure fee collection platform for schools and colleges, offering online payments, automated receipts, and real-time reporting.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <div className="ai-partner-logo mil-mb-30">
                        <img src="/img/solution/4.png" alt="Logistics Tracking"  />
                      </div>
                      <p className="mil-light-soft mil-mb-30">
                        A web app for logistics companies that lets customers track consignments in real time with ease, improving transparency and customer trust.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-2-5 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <div className="ai-partner-logo mil-mb-30">
                        <img src="/img/solution/5.png" alt="Temple Booking"  />
                      </div>
                      <p className="mil-light-soft mil-mb-30">
                        A web app for temples that enables devotees to book offerings online with secure payments, multi-deity support, and user-friendly profiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Empower Section */}
      <section id="industries" aria-label="Industries">
        <div className="creative-stats-wrapper">
          <div className="creative-stats-box mil-p-60-60">
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <h2 className="mil-center industries-title">
                We <span className="mil-thin">Empower</span>
              </h2>
            </div>
            <div className="stats-grid">
              {industries.map((industry, index) => (
                <div key={index} className="stat-card">
                  <h4 className="stat-label-em">{industry}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section>
        <div className="container-fluid mil-p-60-60">
          <div className="row align-items-center">
            <div className="mil-complex-text justify-content-center mil-up mil-mb-5">
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
                          <div className="ai-partner-card">
                            <div className="ai-partner-logo">
                              <Image src={`/img/partners/${logo}`} alt={logo.replace('.png', '')} width={150} height={80} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mil-adaptive-center mil-up" style={{textAlign: 'center'}}>
              <Link href="/web-and-apps" className="mil-link mil-dark mil-arrow-place" style={{display: 'inline-flex'}}>
                <span>View all</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
d
