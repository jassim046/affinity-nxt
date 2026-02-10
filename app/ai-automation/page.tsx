import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function AIAutomationPage() {
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
            <li><Link href="/ai-automation">AI Automation</Link></li>
          </ul>

          <h2 className="mil-mb-60">
            AI <span className="mil-thin">Automation</span>
          </h2>
        </div>
      </div>
    </div>

      <div className="ai-section-wrapper">
        <div className="ai-main-container">
          <div className="ai-hero">
            <h2 className="mil-mb-30" style={{color: '#fff'}}>Get Ready for Tomorrow with<br /> <span className="mil-thin">Our AI Automation services</span></h2>
            <p className="ai-hero-description">
              We design and deploy AI-driven automation solutions that streamline operations, enhance decision-making, and unlock new efficiencies across business processes. Our approach focuses on practical, scalable AI that integrates seamlessly with existing systems.
            </p>
              {/* AI Partner / Technology Logos */}
  <div className="ai-hero-logos">
  <a
    href="https://seagulljobs4u.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="ai-logo"
    onClick={(e) => e.stopPropagation()}
  >
    <img src="/img/partners/Seagulljobs4u.png" alt="Seagull Jobs Logo" />
  </a>

  <a
    href="https://hiremint.net/"
    target="_blank"
    rel="noopener noreferrer"
    className="ai-logo"
    onClick={(e) => e.stopPropagation()}
  >
    <img src="/img/partners/hiremint.png" alt="HireMint Logo" />
  </a>

  <a
    href="#"
    className="ai-logo"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
  >
    <img src="/img/partners/thathasthu-logo.png" alt="Thathasthu Logo" />
  </a>
</div>
          </div>

          <div className="ai-services-grid">
            <div className="ai-service-card">
              <div className="ai-service-icon">🤖</div>
              <h3 className="ai-service-title">AI Automation</h3>
              <div className="ai-service-item">End-to-end automation of business workflows using AI and RPA</div>
              <div className="ai-service-item">Intelligent process optimization to reduce manual effort and errors</div>
              <div className="ai-service-item">Automated data processing, validation, and reporting</div>
            </div>

            <div className="ai-service-card">
              <div className="ai-service-icon">⚡</div>
              <h3 className="ai-service-title">AI Enablement</h3>
              <div className="ai-service-item">Integrating AI capabilities into existing applications and platforms</div>
              <div className="ai-service-item">AI readiness assessment and solution architecture</div>
              <div className="ai-service-item">Custom AI model integration using APIs or on-premise deployments</div>
            </div>
          </div>

          <div className="ai-solutions-section">
            <div className="ai-section-header">
              <h3 className="ai-section-title">AI-Powered Solutions</h3>
            </div>
            <div className="ai-solutions-grid">
              <div className="ai-solution-box">
                <div className="ai-solution-icon">📊</div>
                <p className="ai-solution-text">Predictive analytics and data-driven insights</p>
              </div>
              <div className="ai-solution-box">
                <div className="ai-solution-icon">💬</div>
                <p className="ai-solution-text">Natural Language Processing (NLP) for chatbots, document analysis, and content intelligence</p>
              </div>
              <div className="ai-solution-box">
                <div className="ai-solution-icon">👁️</div>
                <p className="ai-solution-text">Computer Vision for image, video, and visual data processing</p>
              </div>
              <div className="ai-solution-box">
                <div className="ai-solution-icon">🎯</div>
                <p className="ai-solution-text">Recommendation engines and intelligent personalization</p>
              </div>
            </div>
          </div>

          <div className="ai-usecases-section">
            <div className="ai-section-header">
              <h3 className="ai-section-title">Key Use Cases</h3>
            </div>
            <div className="ai-usecases-grid">
              <div className="ai-usecase-card">
                <div className="ai-usecase-number">01</div>
                <h4 className="ai-section-title">Customer Support Automation</h4>
                <p className="ai-usecase-desc">Customer support automation and AI chat assistants</p>
              </div>
              <div className="ai-usecase-card">
                <div className="ai-usecase-number">02</div>
                <h4 className="ai-section-title">Document Processing</h4>
                <p className="ai-usecase-desc">Document processing and intelligent information extraction</p>
              </div>
              <div className="ai-usecase-card">
                <div className="ai-usecase-number">03</div>
                <h4 className="ai-usecase-title">Decision Support</h4>
                <p className="ai-usecase-desc">Intelligent dashboards and decision support systems</p>
              </div>
              <div className="ai-usecase-card">
                <div className="ai-usecase-number">04</div>
                <h4 className="ai-usecase-title">Business Intelligence</h4>
                <p className="ai-usecase-desc">Demand forecasting, risk analysis, and performance optimization</p>
              </div>
            </div>
          </div>

          <div className="ai-bottom-section">
            <div className="ai-info-panel">
              <h3 className="ai-panel-title">Our Approach</h3>
              <div className="ai-panel-item">Business-first AI strategy focused on measurable outcomes</div>
              <div className="ai-panel-item">Secure, scalable, and compliant implementations</div>
              <div className="ai-panel-item">Human-in-the-loop AI for accuracy and control</div>
              <div className="ai-panel-item">Continuous optimization and performance monitoring</div>
            </div>

            <div className="ai-info-panel">
              <h3 className="ai-panel-title">Benefits</h3>
              <div className="ai-panel-item">Faster operations and reduced operational costs</div>
              <div className="ai-panel-item">Improved accuracy and consistency</div>
              <div className="ai-panel-item">Enhanced customer experience</div>
              <div className="ai-panel-item">Smarter, data-driven decision making</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
