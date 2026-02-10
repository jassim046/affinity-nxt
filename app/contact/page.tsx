
import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function ContactPage() {
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
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <h2 className="mil-mb-60">
            Get in <span className="mil-thin">Touch</span>
          </h2>
        </div>
      </div>
    </div>

      <section className="contact-section">
        <div className="affinity-contact-reset">
          <div className="affinity-contact-container">
            <div className="affinity-contact-main-grid">
              <div className="affinity-contact-card">
                <h2 className="affinity-contact-card-title">Get In Touch</h2>
                <div className="affinity-contact-info-section">
                  <div className="affinity-contact-info-item">
                    <span className="affinity-contact-info-icon"><i className="fas fa-map-marker-alt"></i></span>
                    <div className="affinity-contact-info-details">
                      <div className="affinity-contact-info-label">Headquarters:</div>
                      <div className="affinity-contact-info-value" style={{color: '#000'}}>
                        Affinity Interactive<br />
                        Chokkathukalam, Opp FCI Godown<br />
                        Industrial Estate Road PO, Puduppariyaram<br />
                        Palakkad Dist, Kerala, India<br />
                        PIN: 678731
                      </div>
                    </div>
                  </div>

                  <div className="affinity-contact-info-item">
                    <span className="affinity-contact-info-icon"><i className="fas fa-phone-alt"></i></span>
                    <div className="affinity-contact-info-details">
                      <div className="affinity-contact-info-label">Direct Line:</div>
                      <div className="affinity-contact-info-value">
                        <a href="tel:+919496193390" style={{color: '#000'}}>+91 9496193390</a>
                      </div>
                    </div>
                  </div>

                  <div className="affinity-contact-info-item">
                    <span className="affinity-contact-info-icon"><i className="fas fa-envelope"></i></span>
                    <div className="affinity-contact-info-details">
                      <div className="affinity-contact-info-label">Business Email:</div>
                      <div className="affinity-contact-info-value">
                        <a href="mailto:business@affinityopus.com" style={{color: '#000'}}>business@affinityopus.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="affinity-contact-info-item">
                    <span className="affinity-contact-info-icon"><i className="fas fa-globe"></i></span>
                    <div className="affinity-contact-info-details">
                      <div className="affinity-contact-info-label">Website:</div>
                      <div className="affinity-contact-info-value" style={{color: '#000'}}>www.affinityopus.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="affinity-contact-card">
                <div className="affinity-contact-form-box" style={{padding: '20px', background: '#f9f9f9', borderRadius: '8px'}}>
                  <h2 className="affinity-contact-card-title">Send Us an Enquiry</h2>
                  <form action="/api/contact" method="post" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    <input type="text" name="name" placeholder="Your Name" required style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%'}} />
                    <input type="email" name="email" placeholder="Your Email" required style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%'}} />
                    <input type="text" name="subject" placeholder="Subject" required style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%'}} />
                    <textarea name="message" rows={4} placeholder="Your Message" required style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%', resize: 'none'}}></textarea>
                    <button type="submit" style={{padding: '12px', background: '#000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'}}>
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="affinity-contact-social-section">
              <a href="#" className="affinity-contact-social-link"><i className="fas fa-briefcase"></i></a>
              <a href="#" className="affinity-contact-social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="affinity-contact-social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="affinity-contact-social-link"><i className="fab fa-facebook-f"></i></a>
            </div>

            <div className="affinity-contact-footer-message mil-mb-60">
              &quot;At Affinity Interactive, we don&apos;t just deliver projects — we build lasting partnerships that drive continuous growth and innovation. Let&apos;s discuss how we can transform your digital vision into reality.&quot;
            </div>
          </div>
        </div>
      </section>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{width: '100%', height: '400px', border: 0}}
        ></iframe>
      </div>
    </PageLayout>
  )
}
