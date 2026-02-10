import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function ServicePage() {
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/service">Services</Link></li>
          </ul>

          <h2 className="mil-mb-60">
            Our <span className="mil-thin">Services</span>
          </h2>
        </div>
      </div>
    </div>

      <section id="service" className="custom-service-section">
        <div className="container custom-service-container">
          <div className="row">
            <div className="col-lg-6 custom-service-col">
              <div className="section-header">
                <div className="mil-complex-text mil-up mil-mb-15">
                  <h3>Enterprise <span className="mil-thin">Solutions</span></h3>
                </div>
                <div className="title-underline"></div>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-cogs"></i></div>
                <h4>Portals & ERP Systems</h4>
                <p>Transform your business operations with our enterprise-grade solutions designed for scalability and efficiency.</p>
                <ul>
                  <li><b>Custom ERP Development:</b> Tailored enterprise resource planning systems that integrate all business processes</li>
                  <li><b>Business Process Automation:</b> Streamline workflows and reduce manual interventions</li>
                  <li><b>Data Analytics & Reporting:</b> Real-time dashboards and comprehensive reporting modules</li>
                  <li><b>Multi-user Access Controls:</b> Role-based permissions and security protocols</li>
                  <li><b>Cloud Migration Services:</b> Seamless transition from legacy systems to modern cloud infrastructure</li>
                  <li><b>API Development & Integration:</b> Connect disparate systems for unified business operations</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-mobile-alt"></i></div>
                <h4>Web & Mobile Applications</h4>
                <p>Create powerful digital experiences that engage users and drive business results.</p>
                <ul>
                  <li><b>Progressive Web Apps (PWA):</b> Fast, reliable, and engaging web applications that work across all devices</li>
                  <li><b>Native Mobile Development:</b> iOS and Android applications with platform-specific optimizations</li>
                  <li><b>Cross-Platform Solutions:</b> React Native and Flutter applications for efficient multi-platform deployment</li>
                  <li><b>UI/UX Design:</b> User-centered design approach ensuring intuitive and accessible interfaces</li>
                  <li><b>Performance Optimization:</b> Speed optimization, SEO-friendly architecture, and responsive design</li>
                  <li><b>Maintenance & Support:</b> Ongoing updates, security patches, and feature enhancements</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
                <h4>Digital Presence Solutions</h4>
                <p><b>Website Design & Development</b><br />Build stunning digital experiences that reflect your brand excellence and drive conversions.</p>
                <ul>
                  <li><b>Corporate Websites:</b> Professional, responsive websites that establish credibility and showcase capabilities</li>
                  <li><b>Landing Page Optimization:</b> High-converting pages designed for specific marketing campaigns</li>
                  <li><b>Content Management Systems:</b> Easy-to-use CMS solutions for non-technical content updates</li>
                  <li><b>Website Redesign:</b> Modernization of existing websites with improved functionality and aesthetics</li>
                  <li><b>Accessibility Compliance:</b> WCAG 2.1 compliant websites ensuring inclusivity for all users</li>
                  <li><b>Multi-language Support:</b> Localized websites for global market penetration</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-shopping-cart"></i></div>
                <h4>E-commerce Solutions</h4>
                <p>Comprehensive online selling platforms designed to maximize revenue and customer satisfaction.</p>
                <ul>
                  <li><b>Custom E-commerce Platforms:</b> Tailored online stores with unique features and functionality</li>
                  <li><b>Marketplace Integration:</b> Multi-channel selling across Amazon, eBay, and other platforms</li>
                  <li><b>Payment Gateway Integration:</b> Secure payment processing with multiple payment options</li>
                  <li><b>Inventory Management:</b> Real-time stock tracking and automated reorder systems</li>
                  <li><b>Customer Relationship Management:</b> Integrated CRM for personalized customer experiences</li>
                  <li><b>Analytics & Optimization:</b> Detailed sales analytics and conversion rate optimization</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-palette"></i></div>
                <h4>Brand & Marketing Services</h4>
                <p><b>Comprehensive Branding</b><br />Create memorable brand identities that resonate with your target audience and differentiate your business.</p>
                <ul>
                  <li><b>Logo Design & Brand Identity:</b> Unique visual identities that communicate brand values effectively</li>
                  <li><b>Corporate Stationery:</b> Professional business cards, letterheads, and promotional materials</li>
                  <li><b>Signage Solutions:</b> Indoor and outdoor signage design for physical locations</li>
                  <li><b>Brand Guidelines:</b> Comprehensive style guides ensuring consistent brand application</li>
                  <li><b>Brand Strategy Consulting:</b> Market positioning and brand differentiation strategies</li>
                  <li><b>Trademark & Copyright Support:</b> Assistance with intellectual property protection</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-chart-line"></i></div>
                <h4>Digital Marketing Excellence</h4>
                <p><b>Search Engine Optimization (SEO):</b></p>
                <ul>
                  <li><b>Technical SEO:</b> Website optimization for search engine crawling and indexing</li>
                  <li><b>Content Strategy:</b> Keyword research and content planning for organic traffic growth</li>
                  <li><b>Local SEO:</b> Google My Business optimization and local search visibility</li>
                  <li><b>Link Building:</b> High-quality backlink acquisition strategies</li>
                  <li><b>SEO Audits:</b> Comprehensive website analysis and improvement recommendations</li>
                </ul>
                <p><b>Social Media Marketing:</b></p>
                <ul>
                  <li><b>Strategy Development:</b> Platform-specific marketing strategies aligned with business objectives</li>
                  <li><b>Content Creation:</b> Engaging visual and written content for social platforms</li>
                  <li><b>Community Management:</b> Active audience engagement and reputation management</li>
                  <li><b>Paid Social Advertising:</b> Targeted advertising campaigns across Facebook, Instagram, LinkedIn, and Twitter</li>
                  <li><b>Analytics & Reporting:</b> Detailed performance metrics and ROI analysis</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 custom-service-col custom-service-right">
              <div className="section-header">
                <div className="mil-complex-text mil-up mil-mb-15">
                  <h3>Business <span className="mil-thin">Support Services</span></h3>
                </div>
                <div className="title-underline"></div>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-globe"></i></div>
                <h4>Domain Registration & Management</h4>
                <ul>
                  <li><b>Global Domain Extensions:</b> Registration and management of country-specific and generic domains</li>
                  <li><b>Domain Portfolio Management:</b> Centralized control for multiple domain properties</li>
                  <li><b>DNS Management:</b> Advanced DNS configuration and security settings</li>
                  <li><b>Domain Transfer Services:</b> Seamless migration from existing providers</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-server"></i></div>
                <h4>Web Hosting Solutions</h4>
                <ul>
                  <li><b>Shared Hosting:</b> Cost-effective hosting for small to medium websites</li>
                  <li><b>VPS Hosting:</b> Dedicated resources with scalable configurations</li>
                  <li><b>Dedicated Servers:</b> High-performance hosting for enterprise applications</li>
                  <li><b>WordPress Hosting:</b> Optimized hosting specifically for WordPress websites</li>
                  <li><b>24/7 Technical Support:</b> Round-the-clock monitoring and issue resolution</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-cloud"></i></div>
                <h4>Cloud Hosting & Infrastructure</h4>
                <ul>
                  <li><b>AWS Partnership:</b> Certified solutions architecture on Amazon Web Services</li>
                  <li><b>Microsoft Azure Integration:</b> Enterprise-grade cloud solutions and hybrid deployments</li>
                  <li><b>Google Cloud Platform:</b> Scalable infrastructure with advanced analytics capabilities</li>
                  <li><b>Disaster Recovery:</b> Automated backup and business continuity planning</li>
                  <li><b>Security Compliance:</b> SOC 2, ISO 27001, and industry-specific compliance standards</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-envelope"></i></div>
                <h4>Professional Email Services</h4>
                <ul>
                  <li><b>Microsoft 365 Integration:</b> Complete productivity suite with advanced collaboration tools</li>
                  <li><b>Google Workspace:</b> Cloud-based email and productivity applications</li>
                  <li><b>Custom Email Solutions:</b> Branded email addresses with enterprise-grade security</li>
                  <li><b>Email Migration Services:</b> Seamless transition from existing email providers</li>
                  <li><b>Anti-Spam & Security:</b> Advanced threat protection and email filtering</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-comments"></i></div>
                <h4>Communication Solutions</h4>
                <ul>
                  <li><b>WhatsApp Business API:</b> Automated customer communication and support</li>
                  <li><b>SMS Marketing Platforms:</b> Bulk messaging with analytics and automation</li>
                  <li><b>Voice Broadcasting:</b> Automated voice message delivery systems</li>
                  <li><b>Chatbot Development:</b> AI-powered customer service automation</li>
                </ul>
              </div>

              <div className="custom-service-box">
                <div className="service-icon"><i className="fas fa-graduation-cap"></i></div>
                <h4>Consultancy & Training Services</h4>
                <ul>
                  <li><b>IT Strategy Consulting:</b> Technology roadmap development and implementation planning</li>
                  <li><b>Digital Transformation Consulting:</b> Comprehensive business process digitization</li>
                  <li><b>Technical Training:</b> Custom training programs for your team on implemented solutions</li>
                  <li><b>Ongoing Support:</b> Retainer-based technical support and maintenance services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
