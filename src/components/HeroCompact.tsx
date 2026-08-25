import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PetalField from './PetalField'
import PlaceholderPhoto from './PlaceholderPhoto'
import { templeInfo } from '../data/temple'
import { useLanguage } from '../i18n/LanguageContext'

const HERO_IMAGE = '/images/temple/hero/hero.webp'

export default function HeroCompact() {
  const { language, t } = useLanguage()

  const heroSubtitle =
    language === 'te'
      ? 'భక్తి, విశ్వాసం మరియు సమాజ సహకారంతో నిర్మించబడుతున్న పవిత్ర ఆలయం'
      : templeInfo.heroSubtitle

  return (
    <section className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <PlaceholderPhoto
          src={HERO_IMAGE}
          alt="Venkateshwara Swami Temple — current construction photograph"
          label="[Replace with real temple construction photograph — public/images/temple/hero/hero.webp]"
          className="rounded-none"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep via-midnight-deep/75 to-midnight-deep/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-transparent to-transparent" />
      </div>

      <PetalField count={40} />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <span className="eyebrow">
            {t.hero.mantra}
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
  <span className="text-gold-light">
    {language === 'te'
      ? 'శ్రీ వెంకటేశ్వర స్వామి ఆలయం'
      : 'VENKATESHWARA SWAMI TEMPLE'}
  </span>

  <br />

  <span className="text-ivory">
    {language === 'te'
      ? 'పోలిరెడ్డిపాలెం'
      : 'POLIREDDYPALEM'}
  </span>
</h1>

          <p className="mt-5 max-w-md font-display text-lg italic text-beige/90 md:text-xl">
            "{heroSubtitle}"
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#/about"
              className="btn-primary"
            >
              {t.hero.exploreTemple}
              <ArrowRight size={16} />
            </a>

            <a
              href="#/construction"
              className="btn-secondary"
            >
              {t.hero.constructionJourney}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}