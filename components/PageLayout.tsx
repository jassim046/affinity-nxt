'use client'

import Header from './Header'
import Footer from './Footer'
import Cursor from './Cursor'
import ScrollProgress from './ScrollProgress'
import MenuFrame from './MenuFrame'
import MobileFrame from './MobileFrame'
import Scripts from './Scripts'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mil-wrapper" id="top">
      <Cursor />
      <ScrollProgress />
      <Header />
      <MenuFrame />
      <div className="mil-curtain"></div>
      <MobileFrame />
      
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          {children}
          <Footer />
        </div>
      </div>
      
      <Scripts />
    </div>
  )
}
