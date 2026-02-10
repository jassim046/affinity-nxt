import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="container" style={{maxWidth: '900px', margin: '0 auto', padding: '32px'}}>
        <header style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'}}>
          <div>
            <div style={{fontWeight: 600}}>Affinity Interactive</div>
            <div style={{color: '#666'}}>Privacy Policy — WhatsApp Business Bot</div>
          </div>
        </header>

        <main className="card" role="main" style={{background: '#fff', padding: '28px', borderRadius: '12px', boxShadow: '0 6px 18px rgba(15,23,42,0.06)'}}>
          <h1 style={{margin: '0 0 12px', fontSize: '1.6rem'}}>Privacy Policy</h1>
          <div style={{color: '#555', fontSize: '0.95rem', marginBottom: '20px'}}>
            Last updated: <strong>November 16, 2025</strong>
          </div>

          <p>Affinity Interactive (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the WhatsApp-based restaurant menu and booking bot available at <Link href="https://affinityopus.com">affinityopus.com</Link>. This page explains how we collect, use, store, and protect information when you interact with our WhatsApp service.</p>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>1. Information We Collect</h2>
          <p>When you use our WhatsApp bot we may collect the following information:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li><strong>Contact details:</strong> Your WhatsApp phone number and the name you choose to provide.</li>
            <li><strong>Order information:</strong> Menu items you view or order, quantities, price, delivery/pickup details.</li>
            <li><strong>Messages and media:</strong> Messages, images or other media you send to the bot (only if required to process your request).</li>
            <li><strong>Technical data:</strong> Timestamps, server logs, IP address and device metadata (collected by our hosting provider).</li>
          </ul>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li>Display menu items and prices to you;</li>
            <li>Process and confirm food bookings and orders;</li>
            <li>Respond to customer queries and provide support;</li>
            <li>Improve, troubleshoot and analyze our services;</li>
            <li>Comply with legal or regulatory obligations, if required.</li>
          </ul>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>3. Data Storage & Retention</h2>
          <p>We retain data only for as long as necessary to fulfill the purpose for which it was collected, including to complete orders, maintain records for billing/support, and for legal compliance.</p>
          <p>We do <strong>not</strong> retain WhatsApp messages longer than necessary — message content is stored temporarily only when required to process an order or a support request.</p>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>4. Data Sharing</h2>
          <p>We do not sell, rent or trade your personal information. We may share your data with:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li>Hosting and infrastructure providers (for delivery of the service).</li>
            <li>Our restaurants or operations team to fulfill orders and bookings.</li>
            <li>Third-party service providers who process data on our behalf and under confidentiality (e.g., payment processors, analytics).</li>
          </ul>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>5. WhatsApp / Meta</h2>
          <p>This service uses the WhatsApp Business API provided by Meta. By interacting with our bot you agree to WhatsApp&apos;s Terms of Service and Privacy Policy. We follow Meta&apos;s guidelines for handling WhatsApp user data.</p>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>6. Data Security</h2>
          <p>We implement reasonable technical and organizational measures to protect your personal information, including secure servers and access controls. However, no method of transmission or storage is 100% secure.</p>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li>Request access to the personal data we hold about you;</li>
            <li>Request correction or deletion of your personal data;</li>
            <li>Object to or restrict processing of your data where applicable.</li>
          </ul>
          <p>To exercise these rights, please contact us using the details below.</p>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>8. How to Contact Us</h2>
          <p>If you have questions or wish to request access/deletion of your data, contact us at:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li><strong>Company:</strong> Affinity Interactive</li>
            <li><strong>Website:</strong> <Link href="https://affinityopus.com">https://affinityopus.com</Link></li>
            <li><strong>Email:</strong> <a href="mailto:port21@affinityopus.com">port21@affinityopus.com</a></li>
          </ul>

          <h2 style={{marginTop: '22px', fontSize: '1.05rem'}}>9. Changes to This Policy</h2>
          <p>We may update this policy from time to time. We will post the updated policy at this URL with a revised &quot;Last updated&quot; date.</p>

          <footer style={{marginTop: '26px', fontSize: '0.9rem', color: '#555'}}>
            <p>By using our WhatsApp service you acknowledge that you have read and understood this Privacy Policy.</p>
          </footer>
        </main>
      </div>
    </PageLayout>
  )
}
