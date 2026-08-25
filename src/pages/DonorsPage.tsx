import PageHeader from '../components/PageHeader'
import Donors from '../components/Donors'
import { useLanguage } from '../i18n/LanguageContext'

export default function DonorsPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader
        eyebrow={
          language === 'te'
            ? 'కృతజ్ఞతలతో'
            : 'With Gratitude'
        }
        title={
          language === 'te'
            ? 'మా దాతలు'
            : 'Our Devotees'
        }
        subtitle={
          language === 'te'
            ? 'ప్రతి చిన్న లేదా పెద్ద విరాళం ఈ ఆలయ నిర్మాణానికి తోడ్పడుతుంది.'
            : 'Every contribution, big or small, builds this temple.'
        }
      />

      <Donors />
    </>
  )
}