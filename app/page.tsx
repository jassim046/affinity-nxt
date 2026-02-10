import PageLayout from '@/components/PageLayout'
import HomeContent from '@/components/HomeContent'

export default function Home() {
  const phoneNumber = "918921954132";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <>
      <PageLayout>
        <HomeContent />
        
      </PageLayout>
    </>
  )
}
