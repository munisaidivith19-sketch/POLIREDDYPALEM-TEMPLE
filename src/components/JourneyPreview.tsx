import { motion } from 'framer-motion'
import PlaceholderPhoto from './PlaceholderPhoto'
import { constructionStages } from '../data/construction'
import { useLanguage } from '../i18n/LanguageContext'

export default function JourneyPreview() {
  const { language } = useLanguage()

  const getStageName = (stageId: string, defaultName: string) => {
    if (language !== 'te') return defaultName

    const translations: Record<string, string> = {
      'old-temple': 'పాత ఆలయం',
      planning: 'కొత్త ఆలయ శంకుస్థాపన',
      basement: 'బేస్‌మెంట్ నిర్మాణం',
      'main-structure': 'గర్భాలయం నిర్మాణం',
      salab: 'పైకప్పు నిర్మాణం',
      gopuram: 'గోపురం నిర్మాణం',
      finishing: 'తదుపరి దశ త్వరలో',
    }

    return translations[stageId] ?? defaultName
  }

  return (
    <section className="section-cream relative py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <span className="eyebrow-light">
            ◆{' '}
            {language === 'te'
              ? 'ఆలయ నిర్మాణ ప్రయాణం'
              : 'Construction Journey'}{' '}
            ◆
          </span>

          <h2 className="section-title-light mt-2">
            {language === 'te'
              ? 'ఆలయ నిర్మాణ ప్రయాణం'
              : 'Construction Journey'}
          </h2>

          <p className="mt-1 text-sm text-ink-soft/70">
            {language === 'te'
              ? 'పునాది నుండి భవిష్యత్తు వరకు'
              : 'From Foundation to Future'}
          </p>
        </div>

        <div className="mt-12 overflow-x-auto pb-2">
          <ol className="relative mx-auto flex min-w-max items-start justify-center gap-6 px-2 md:min-w-0 md:gap-10">
            <div
              className="absolute left-10 right-10 top-10 hidden h-px border-t-2 border-dotted border-gold-dim/50 md:block"
              aria-hidden="true"
            />

            {constructionStages.slice(0, 6).map((stage, i) => (
              <motion.li
                key={stage.id}
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                className="flex w-24 flex-col items-center text-center md:w-28"
              >
                <a
                  href="#/construction"
                  className={`relative z-10 h-20 w-20 overflow-hidden rounded-full border-4 transition-transform hover:scale-105 md:h-24 md:w-24 ${
                    stage.status === 'in-progress'
                      ? 'border-gold shadow-gold'
                      : 'border-gold-dim/40'
                  }`}
                >
                  <PlaceholderPhoto
                    src={stage.image}
                    alt={getStageName(stage.id, stage.name)}
                    label={getStageName(stage.id, stage.name)}
                    className="grayscale-[15%]"
                  />
                </a>

                <p className="mt-3 text-sm font-semibold text-ink">
                  {getStageName(stage.id, stage.name)}
                </p>

                <p className="text-xs text-ink-soft/70">
                  {stage.date}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#/construction"
            className="text-sm font-semibold text-gold-dim hover:underline"
          >
            {language === 'te'
              ? 'పూర్తి నిర్మాణ ప్రయాణాన్ని చూడండి →'
              : 'View Full Construction Journey →'}
          </a>
        </div>
      </div>
    </section>
  )
}