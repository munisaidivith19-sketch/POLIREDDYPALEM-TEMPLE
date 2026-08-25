import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import MapSection from '../components/MapSection'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader
        eyebrow={
          language === 'te'
            ? 'సంప్రదించండి'
            : 'Get in Touch'
        }
        title={
          language === 'te'
            ? 'సంప్రదింపు & ప్రదేశం'
            : 'Contact & Location'
        }
      />

      <Contact />
      <MapSection />
    </>
  )
}