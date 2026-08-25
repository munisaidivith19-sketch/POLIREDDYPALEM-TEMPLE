import PageHeader from '../components/PageHeader'
import Donation from '../components/Donation'
import { useLanguage } from '../i18n/LanguageContext'

export default function DonationPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader
        eyebrow={
          language === 'te'
            ? 'ప్రతి విరాళం ఎంతో విలువైనది'
            : 'Every Contribution Matters'
        }
        title={
          language === 'te'
            ? 'ఆలయ అభివృద్ధికి మనమందరం కలిసి చేయూతనిద్దాం'
            : "LET'S JOIN HANDS FOR TEMPLE DEVELOPMENT"
        }
      />

      <Donation />
    </>
  )
}