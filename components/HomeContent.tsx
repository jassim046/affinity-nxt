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
