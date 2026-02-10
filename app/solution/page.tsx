'use client';

import React from 'react'; // or whatever your next line is...
import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import Image from 'next/image'

export default function SolutionPage() {
  const solutions = [
    {
      logo: 'sanctum.png',
      title: 'Sanctum ERP – NAAC-Focused ERP for Colleges',
      description: 'Sanctum ERP is a comprehensive Enterprise Resource Planning solution designed specifically for colleges in India that are preparing for NAAC accreditation or re-accreditation. Unlike generic ERP systems, Sanctum ERP has been built ground-up with a focus on compliance, documentation, and streamlined data management for NAAC requirements.',
      details: 'The platform empowers stakeholders at every level — administrators, principals, Heads of Departments, faculty members, and even club and committee conveners — to seamlessly enter the required data with minimal clicks. Once captured, the system automatically organizes and formats the information in a standardized and structured manner to align with NAAC\'s documentation and reporting needs.',
      benefits: 'By eliminating manual data compilation, reducing redundancy, and ensuring data accuracy, Sanctum ERP enables institutions to save time, reduce compliance risks, and present their achievements in a professional and compelling manner to NAAC evaluators. This results in a smoother accreditation process and greater institutional credibility.'
    },
    {
      logo: 'almanac.png',
      title: 'Almanac – Smart Attendance & Reporting App',
      description: 'Almanac is a standalone hybrid mobile app designed to simplify the way colleges record and monitor student attendance. With a user-friendly interface, it allows faculty to capture attendance class-wise and hour-wise, ensuring greater accuracy and accountability.',
      details: 'The app is FYUG-enabled, making it future-ready and compliant with the latest academic structures. Beyond attendance tracking, Almanac generates consolidated reports that help institutions analyze student participation and monitor overall classroom engagement.',
      benefits: 'Additionally, administrators can view summarized reports at department and institution levels, while students and parents can access attendance records for greater transparency. With real-time updates, digital storage, and easy report generation, Almanac reduces paperwork and enhances efficiency in academic monitoring.'
    },
    {
      logo: 'feewhiz.png',
      title: 'FeeWhiz – Online Fee Collection Made Simple',
      description: 'FeeWhiz is a smart and secure web app that helps schools and colleges collect fees online with maximum ease and transparency. Designed with both institutions and parents in mind, FeeWhiz eliminates the hassle of manual fee collection and offers a seamless digital experience.',
      details: 'Institutions can set up fee structures, deadlines, and payment options, while students and parents can complete transactions from the comfort of their homes. The system supports multiple payment gateways, ensuring convenience and trust.',
      benefits: 'Additionally, FeeWhiz provides automated receipts, detailed reports, and real-time tracking of payments, reducing administrative burden while increasing financial accuracy. By digitizing fee collection, institutions can enhance efficiency, ensure timely payments, and offer a modern experience to students and parents alike.'
    },
    {
      logo: 'tapkaro.png',
      title: 'TrakPro – Consignment Tracking Simplified',
      description: 'TrakPro is a web-based solution developed for logistics and moving companies, designed to enhance transparency and convenience in consignment tracking. With TrakPro, companies can easily update shipment and consignment details online, enabling customers to monitor their goods in real time.',
      details: 'The system provides a simple interface where customers can enter their tracking ID to view live updates of consignment movement, from dispatch to delivery. For businesses, TrakPro reduces customer inquiries, improves trust, and ensures operational efficiency.',
      benefits: 'By offering status updates, digital records, and reliable notifications, TrakPro empowers logistics providers to deliver a professional and customer-friendly service, strengthening their reputation in a competitive industry.'
    },
    {
      logo: 'aradana.png',
      title: 'Aaradhana – Digital Offering Platform for Temples',
      description: 'Aaradhana is an innovative web app designed to bring temples closer to their devotees by enabling online booking of offerings and services. Recognizing the importance of faith and convenience, Aaradhana ensures that devotees can make offerings from anywhere, anytime, without having to visit the temple physically.',
      features: [
        'Payment Gateway Enabled: Secure and seamless online transactions.',
        'Multi-Deity Enabled: Supports multiple deities, allowing devotees to select offerings as per their faith.',
        'User Login & Profiles: Devotees can create accounts, save preferences, and securely store data for repeated use.'
      ],
      benefits: 'For temple administrations, Aaradhana offers a centralized system to manage bookings, track payments, and maintain devotee records, ensuring smooth operations and better engagement with the community. By blending tradition with technology, Aaradhana enhances accessibility while preserving cultural sanctity.'
    }
  ]

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
            <li><Link href="/solution">Solution</Link></li>
          </ul>

          <h2 className="mil-mb-60">
            Our <span className="mil-thin">Solutions</span>
          </h2>
        </div>
      </div>
    </div>

      <section id="service">
        <div className="container mil-p-60-60">
          <div className="row g-4">
            {solutions.map((solution, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="product-container">
                  <div className="company-logo">
                    <Image src={`/img/partners/${solution.logo}`} alt={solution.title} width={150} height={80} />
                  </div>
                  <h4 className="product-heading">{solution.title}</h4>
                  <p className="product-text">{solution.description}</p>
                  <p className="product-text"><br />{solution.details}</p>
                  {solution.features && (
                    <>
                      <p className="product-text"><br /><strong>Key Features:</strong></p>
                      <ul className="product-text">
                        {solution.features.map((feature, i) => (
                          <li key={i}><b>{feature.split(':')[0]}:</b> {feature.split(':')[1]}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <p className="product-text"><br />{solution.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
