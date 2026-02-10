import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (




    
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{top: '300px', right: '-100px'}}></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{left: '150px'}}></div>
        </div>
        <div className="container mil-p-60-60">
          <div className="row">
            <div className="col-12" style={{textAlign: 'center', marginBottom: '40px'}}>
              <Link href="/" style={{display: 'inline-block'}}>
                <Image src="/img/logo.png" alt="Affinity Interactive Logo" width={180} height={60} style={{maxWidth: '180px', height: 'auto', width: 'auto'}} />
              </Link>
            </div>
          </div>

          <div className="row text-center text-md-start mil-mb-60">
            <div className="col-md-3 col-lg-4 mil-mb-30">
              <p className="mil-light-soft mil-up" style={{color: '#fff', lineHeight: 1.8}}>
                Affinity Interactive empowers businesses with end-to-end digital solutions—from portals, ERPs, and web apps to e-commerce, branding, SEO, and social media. Founded in 2004, we combine 21 years of expertise with a global footprint to deliver scalable, results-driven transformation.
              </p>
            </div>

            <div className="col-md-3 col-lg-4 mil-mb-30">
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                <i className="fas fa-map-marker-alt" style={{background: '#fff', color: '#000', borderRadius: '50%', padding: '8px', fontSize: '18px', lineHeight: 1, flex: 0}}></i>
                <p className="mil-light-soft mil-up" style={{lineHeight: 1.8, color: '#fff', margin: 0}}>
                  Chokkathukalam<br />Opp FCI Godown<br />Industrial Estate PO<br />Puduppariyaram<br />Palakkad Dist<br />Kerala-678731 IND
                </p>
              </div>
            </div>

            <div className="col-md-3 col-lg-4 mil-mb-30">
              <p className="mil-light-soft mil-up" style={{lineHeight: 2, color: '#fff'}}>
                <span style={{display: 'inline-flex', alignItems: 'center', marginBottom: '8px'}}>
                  <i className="fas fa-phone-alt" style={{background: '#fff', color: '#000', borderRadius: '50%', padding: '8px', fontSize: '18px', marginRight: '10px'}}></i>
                  <a href="tel:+919496193390" style={{color: '#fff', textDecoration: 'none'}}>+91 9496193390</a>
                </span><br />
                <span style={{display: 'inline-flex', alignItems: 'center'}}>
                  <i className="fas fa-envelope" style={{background: '#fff', color: '#000', borderRadius: '50%', padding: '8px', fontSize: '18px', marginRight: '10px'}}></i>
                  <a href="mailto:business@affinityopus.com" style={{color: '#fff', textDecoration: 'none'}}>business@affinityopus.com</a>
                </span>
              </p><br />
              <ul className="mil-social-icons mil-up" style={{display: 'inline-flex', gap: '12px', listStyle: 'none', padding: 0, margin: 0, justifyContent: 'center', marginBottom: '15px'}}>
                <li><a href="#." target="_blank" className="social-icon"><i className="fab fa-facebook-f"></i></a></li>
                <li>
                  <a href="https://x.com/yourhandle" target="_blank" className="social-icon" aria-label="X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
                </li>
                <li><a href="#." target="_blank" className="social-icon"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#." target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="container" style={{textAlign: 'center'}}>
              <nav className="mil-footer-menu" style={{display: 'inline-block', marginBottom: '15px'}}>
                <ul style={{display: 'inline-flex', gap: '10px', listStyle: 'none', padding: 0, margin: 0, flexWrap: 'wrap', justifyContent: 'center'}}>
                  <li><Link href="/" className="mil-light-soft">Home</Link></li>
                  <span style={{color: '#fff'}}>|</span>
                  <li><Link href="/corporate" className="mil-light-soft">Corporate</Link></li>
                  <span style={{color: '#fff'}}>|</span>
                  <li><Link href="/service" className="mil-light-soft">Our Services</Link></li>
                  <span style={{color: '#fff'}}>|</span>
                  <li><Link href="/solution" className="mil-light-soft">Our Solutions</Link></li>
                  <span style={{color: '#fff'}}>|</span>
                  <li><Link href="/footprint" className="mil-light-soft">Footprint</Link></li>
                  <span style={{color: '#fff'}}>|</span>
                  <li><Link href="/contact" className="mil-light-soft">Contact Us</Link></li>
                  <span style={{color: '#fff'}}>|</span>
                  <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                  <span style={{color: '#fff'}}>|</span>
                  <li><Link href="/tos">Terms of Service</Link></li>
                </ul>
              </nav>
              <br />
              <p className="mil-light-soft mil-up" style={{marginTop: '10px', color: '#fff'}}>
                © Copyright 2026 - Affinity. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

      
      </div>
        <div className="global-whatsapp-sticky">
       {/* WhatsApp Floating Button */}
      <a href="https://api.whatsapp.com/send?phone=918921954132" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </div>
    
      <style jsx>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          z-index: 1000;
          transition: transform 0.3s;
        }
        .whatsapp-btn img {
          width: 35px;
          height: 35px;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </footer>

    
  )
}
