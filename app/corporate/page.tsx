import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function CorporatePage() {
  const coreValues = [
    { icon: 'bi-shield-check', title: 'Integrity', text: 'Transparent communication, ethical practices, and honest counsel in all client interactions' },
    { icon: 'bi-lightbulb', title: 'Innovation', text: 'Embracing new technologies and methodologies to solve complex business challenges' },
    { icon: 'bi-award', title: 'Excellence', text: 'Uncompromising commitment to quality in every project deliverable' },
    { icon: 'bi-people', title: 'Collaboration', text: 'Working as an extension of our clients\' teams to achieve shared objectives' },
    { icon: 'bi-arrow-repeat', title: 'Adaptability', text: 'Flexibility to evolve with changing market demands and client needs' },
    { icon: 'bi-lightbulb', title: 'Innovation Excellence', text: 'We commit to delivering cutting-edge digital solutions that not only meet current business needs but anticipate future challenges and opportunities. Our innovation-first approach ensures our clients stay ahead of industry trends.' },
    { icon: 'bi-people-fill', title: 'Partnership Philosophy', text: 'We believe in building long-term relationships rather than transactional engagements. Our success is measured by our clients\' growth, and we invest in understanding their business deeply to provide strategic guidance beyond mere technical implementation.' },
    { icon: 'bi-patch-check', title: 'Quality Without Compromise', text: 'Every line of code, every design element, and every marketing campaign is crafted with meticulous attention to detail. Our quality standards have been refined over two decades of client feedback and industry best practices.' },
    { icon: 'bi-tree-fill', title: 'Sustainable Growth', text: 'We help businesses build sustainable competitive advantages through technology, ensuring that our solutions contribute to long-term profitability and environmental responsibility.' },
    { icon: 'bi-people', title: 'Community Impact', text: 'As a responsible corporate entity, we contribute to the digital literacy of communities we serve, supporting startups, educational institutions, and non-profit organizations in their digital transformation journey.' }
  ]

  return (
    <PageLayout>
    {/* banner */}
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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/corporate">Corporate Profile</Link>
              </li>
              <li>
                <Link href="/corporate">Corporate Profile</Link>
              </li>
            </ul>

            <h2 className="mil-mb-60">
              Corporate <span className="mil-thin">Profile</span>
            </h2>
          </div>
        </div>
      </div>
      {/* banner end */}

          {/* Hero Section */}
       {/* Hero Section */}
<section className="ai-about-hero about-section bg-light pt-5 pb-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="mil-complex-text justify-content-center">
          <h2 className="mil-up mil-mb-30">About <span className="mil-thin">Affinity Interactive </span></h2>
        </div>
        <p className="about-text">
          Established in 2004, Affinity Interactive has evolved from a promising digital agency into a comprehensive
          technology solutions provider with an impressive 21-year legacy of innovation and client success. Our
          headquarters anchors our operations while our influence spans continents, serving businesses from Silicon
          Valley startups to Fortune 500 enterprises across Asia, Europe, the Middle East, and beyond.
        </p>
      </div>
    </div>
  </div>
</section>

          {/* Vision & Mission */}
          <section className="mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{top: '300px', right: '-100px'}}></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{left: '150px'}}></div>
              </div>
              <div className="container mil-p-60-60">
                <div className="mil-complex-text justify-content-center mil-up mil-mb-20">
                  <h2 className="mil-muted mil-center">
                    Vision <span className="mil-thin">& Mission</span>
                  </h2>
                </div>
                <div className="vision-mission-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className="vision-mission-box">
                          <h3 className="vision-mission-title">
                            <i className="fas fa-eye"></i> Vision
                          </h3>
                          <p className="vision-mission-text">
                            From startups seeking their first digital presence to enterprises requiring complex system integrations, we deliver solutions that scale with your ambitions.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="vision-mission-box">
                          <h3 className="vision-mission-title">
                            <i className="fas fa-bullseye"></i> Mission
                          </h3>
                          <p className="vision-mission-text">
                            From startups seeking their first digital presence to enterprises requiring complex system integrations, we deliver solutions that scale with your ambitions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section id="about">
            <div className="container mil-p-120-60">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                  <div className="mil-mb-90">
                    <h2 className="mil-up mil-mb-60">Why Choose <br /><span className="mil-thin">Affinity Interactive?</span></h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="mil-mb-90">
                    <ul className="mil-up mil-mb-60 mil-list">
                      <li><strong>21 Years</strong> of Proven Excellence in digital innovation</li>
                      <li>Global Reach with local expertise across major Indian cities</li>
                      <li><strong>360-Degree Solutions</strong> from concept to deployment and beyond</li>
                      <li>Industry-Agnostic Expertise serving <strong>15+</strong> diverse verticals</li>
                      <li>End-to-End Support including hosting, maintenance, and growth strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Sets Us Apart */}
          <section className="mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{top: '300px', right: '-100px'}}></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{left: '150px'}}></div>
              </div>
              <div className="container mil-p-80-0">
                <div className="mil-mb-30">
                  <div className="mil-complex-text justify-content-center">
                    <h2 className="mil-h1 mil-muted mil-center">What <span className="mil-thin">Sets Us Apart</span></h2>
                  </div>
                </div>
                <div className="row mil-services-grid m-0">
                  <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <h5 className="mil-muted mil-mb-30">Industry Expertise</h5>
                      <p className="mil-light-soft mil-mb-30">
                        Our deep understanding spans across Engineering, Manufacturing, Retail, Education, Hospitality, Healthcare, Professional Services, Media & Entertainment, Government sectors, and more. This cross-industry experience enables us to bring innovative solutions from one sector to solve challenges in another.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <h5 className="mil-muted mil-mb-30">Technology Leadership</h5>
                      <p className="mil-light-soft mil-mb-30">
                        We stay ahead of the curve by continuously investing in emerging technologies, ensuring our clients benefit from the latest in web development, cloud computing, artificial intelligence integration, and digital marketing strategies.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <h5 className="mil-muted mil-mb-30">Quality Assurance</h5>
                      <p className="mil-light-soft mil-mb-30">
                        Every project undergoes rigorous testing and quality checks. Our ISO-compliant processes ensure consistent delivery standards that have earned us recognition as a trusted technology partner.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                    <div className="mil-service-card-sm mil-up">
                      <h5 className="mil-muted mil-mb-30">Global Perspective,<br /> Local Understanding</h5>
                      <p className="mil-light-soft mil-mb-30">
                        While we serve international markets, our roots in India provide us with unique insights into cost-effective development without compromising quality — a combination that has made us the preferred choice for businesses seeking premium solutions at competitive pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
    <section
  className="about-section pt-5 pb-5"
  style={{ background: "#f8f8f8" }}
>  <div className="mil-complex-text justify-content-center">
          <h2 className="mil-up mil-mb-60">Our <span className="mil-thin">Core Value </span></h2>
        </div>
  <div className="container about-reveal">

    <div className="about-view row justify-content-center">
      {/* Integrity */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-shield-check"></i> Integrity
          </h3>
          <p>
            Transparent communication, ethical practices, and honest counsel
            in all client interactions
          </p>
        </div>
      </div>

      {/* Innovation */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-lightbulb"></i> Innovation
          </h3>
          <p>
            Embracing new technologies and methodologies to solve complex
            business challenges
          </p>
        </div>
      </div>

      {/* Excellence */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-award"></i> Excellence
          </h3>
          <p>
            Uncompromising commitment to quality in every project deliverable
          </p>
        </div>
      </div>

      {/* Collaboration */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-people"></i> Collaboration
          </h3>
          <p>
            Working as an extension of our clients' teams to achieve shared
            objectives
          </p>
        </div>
      </div>

      {/* Adaptability */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-arrow-repeat"></i> Adaptability
          </h3> <br />
          <p>
            Flexibility to evolve with changing market demands and client
            needs
          </p>
        </div>
      </div>

      {/* Innovation Excellence */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-lightbulb"></i> Innovation Excellence
          </h3>
          <p>
            We commit to delivering cutting-edge digital solutions that not
            only meet current business needs but anticipate future challenges
            and opportunities. Our innovation-first approach ensures our
            clients stay ahead of industry trends.
          </p>
        </div>
      </div>

      {/* Partnership Philosophy */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-people-fill"></i> Partnership Philosophy
          </h3>
          <p>
            We believe in building long-term relationships rather than
            transactional engagements. Our success is measured by our
            clients' growth, and we invest in understanding their business
            deeply to provide strategic guidance beyond mere technical
            implementation.
          </p>
        </div>
      </div>

      {/* Quality Without Compromise */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-patch-check"></i> Quality Without Compromise
          </h3>
          <p>
            Every line of code, every design element, and every marketing
            campaign is crafted with meticulous attention to detail. Our
            quality standards have been refined over two decades of client
            feedback and industry best practices.
          </p>
        </div>
      </div>

      {/* Sustainable Growth */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-tree-fill"></i> Sustainable Growth
          </h3>
          <p>
            We help businesses build sustainable competitive advantages
            through technology, ensuring that our solutions contribute to
            long-term profitability and environmental responsibility.
          </p>
        </div>
      </div>

      {/* Community Impact */}
      <div className="about-card col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="bg-about">
          <h3 className="abouts-subtitle">
            <i className="bi bi-people"></i> Community Impact
          </h3>
          <p>
            As a responsible corporate entity, we contribute to the digital
            literacy of communities we serve, supporting startups,
            educational institutions, and non-profit organizations in their
            digital transformation journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </PageLayout>
  )
}
