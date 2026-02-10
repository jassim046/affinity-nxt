import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export default function TOSPage() {
  return (
    <PageLayout>
      <div className="container" style={{maxWidth: '900px', margin: 'auto', padding: '32px'}}>
        <header style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'}}>
          <div>
            <div style={{fontWeight: 600}}>Affinity Interactive</div>
            <div style={{color: '#666'}}>Terms of Service</div>
          </div>
        </header>

        <div className="card" style={{background: '#fff', padding: '28px', borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.05)'}}>
          <h1 style={{margin: '0 0 12px', fontSize: '1.7rem'}}>Terms of Service</h1>
          <div style={{fontSize: '0.95rem', color: '#555', marginBottom: '18px'}}>
            Last updated: <strong>November 16, 2025</strong>
          </div>

          <p style={{lineHeight: 1.55}}>Welcome to Affinity Interactive (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our WhatsApp-based restaurant menu and food booking bot provided through affinityopus.com and the WhatsApp Business API.</p>

          <p style={{lineHeight: 1.55}}>By interacting with our WhatsApp bot, you agree to these Terms. If you do not agree, please discontinue using the service.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>1. Description of Service</h2>
          <p style={{lineHeight: 1.55}}>Affinity Interactive provides a WhatsApp-based automated bot that:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li>Displays restaurant menu items and pricing</li>
            <li>Provides food item details</li>
            <li>Assists with booking or ordering food items</li>
            <li>Helps customers with restaurant-related queries</li>
          </ul>
          <p style={{lineHeight: 1.55}}>Booking through the bot does not guarantee order confirmation until validated by the restaurant&apos;s operations team.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>2. Eligibility</h2>
          <p style={{lineHeight: 1.55}}>By using our service, you confirm that you are at least 18 years of age or are using the service under parental/guardian supervision.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>3. User Responsibilities</h2>
          <p style={{lineHeight: 1.55}}>You agree to:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li>Provide accurate information</li>
            <li>Use the bot only for lawful purposes</li>
            <li>Refrain from sending harmful, offensive, or fraudulent messages</li>
            <li>Not attempt to disrupt or misuse the bot</li>
          </ul>
          <p style={{lineHeight: 1.55}}>We may block users who violate these rules.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>4. Orders & Menu Information</h2>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li>Menu prices and availability may change at any time.</li>
            <li>The bot may occasionally show outdated or incorrect information.</li>
            <li>Order confirmation depends on the restaurant team.</li>
          </ul>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>5. Payments</h2>
          <p style={{lineHeight: 1.55}}>If payment options are integrated, payment instructions will be provided. Refunds or cancellations follow the restaurant&apos;s policy.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>6. Data Usage & Privacy</h2>
          <p style={{lineHeight: 1.55}}>Your use of this service is governed by our Privacy Policy available at:</p>
          <p style={{lineHeight: 1.55}}><strong>https://affinityopus.com/privacy-policy</strong></p>
          <p style={{lineHeight: 1.55}}>By using the bot, you consent to the collection and processing of your WhatsApp number, chat messages, and order details as necessary.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>7. Service Availability</h2>
          <p style={{lineHeight: 1.55}}>We strive to keep the bot operational at all times, but availability may be affected by updates, server issues, or network delays outside our control.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>8. Prohibited Activities</h2>
          <p style={{lineHeight: 1.55}}>You agree not to:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li>Reverse-engineer, hack, or disrupt the bot</li>
            <li>Send malicious code, viruses, or harmful content</li>
            <li>Use the bot to harass, spam, or impersonate others</li>
            <li>Copy or reproduce content without permission</li>
          </ul>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>9. Limitation of Liability</h2>
          <p style={{lineHeight: 1.55}}>We are not liable for indirect, incidental, or consequential damages. Use of the service is at your own risk. Menu errors, booking issues, or delays caused by the restaurant are outside our responsibility.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>10. Changes to These Terms</h2>
          <p style={{lineHeight: 1.55}}>We may update these Terms from time to time. Continued use of the bot constitutes acceptance of the updated Terms.</p>

          <h2 style={{marginTop: '24px', fontSize: '1.1rem'}}>11. Contact Information</h2>
          <p style={{lineHeight: 1.55}}>If you have questions regarding these Terms, you may contact us at:</p>
          <ul style={{paddingLeft: '1.1rem', lineHeight: 1.55}}>
            <li><strong>Affinity Interactive</strong></li>
            <li><strong>Website:</strong> https://affinityopus.com</li>
            <li><strong>Email:</strong> port21@affinityopus.com</li>
          </ul>

          <footer style={{marginTop: '24px', color: '#555', fontSize: '0.9rem'}}>
            <p>By using our WhatsApp bot, you acknowledge that you have read and agreed to these Terms of Service.</p>
          </footer>
        </div>
      </div>
    </PageLayout>
  )
}
