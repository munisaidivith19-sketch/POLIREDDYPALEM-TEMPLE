import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2, Clock, CircleDashed } from 'lucide-react'
import PlaceholderPhoto from './PlaceholderPhoto'
import {
  constructionStages,
  type ConstructionStage,
} from '../data/construction'
import { useLanguage } from '../i18n/LanguageContext'

export default function ConstructionJourney() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const { language, t } = useLanguage()

  const activeStage =
    constructionStages.find((s) => s.id === activeId) ?? null

  const getStatusMeta = (
    status: ConstructionStage['status'],
  ) => {
    if (status === 'completed') {
      return {
        label: t.construction.completed,
        icon: <CheckCircle2 size={16} />,
        color: 'text-gold-light',
      }
    }

    if (status === 'in-progress') {
      return {
        label: t.construction.inProgress,
        icon: <Clock size={16} />,
        color: 'text-ivory',
      }
    }

    return {
      label: t.construction.upcoming,
      icon: <CircleDashed size={16} />,
      color: 'text-beige/50',
    }
  }

  const getStageName = (stage: ConstructionStage) => {
    if (language !== 'te') {
      return stage.name
    }

    const translations: Record<string, string> = {
      'old-temple': 'పాత ఆలయం',
      planning: 'కొత్త ఆలయ శంకుస్థాపన కార్యక్రమం',
      basement: 'బేస్‌మెంట్ నిర్మాణం',
      'main-structure': 'గర్భాలయం నిర్మాణం',
      salab: 'పైకప్పు నిర్మాణం',
      gopuram: 'గోపురం నిర్మాణం',
      bajana: 'భజన మండపం నిర్మాణం',
    }

    return translations[stage.id] ?? stage.name
  }

  const getStageDescription = (stage: ConstructionStage) => {
    if (language !== 'te') {
      return stage.description
    }

    const translations: Record<string, string> = {
      'old-temple':
        'చెన్నైకి చెందిన స్వర్గీయ తంబిరెడ్డి రమణ రెడ్డి గారు 1960లలో అసలు ఆలయాన్ని నిర్మించారు. ఈ ఆలయం అనేక దశాబ్దాలుగా గ్రామ ప్రజలకు ఆధ్యాత్మిక కేంద్రంగా సేవలందించింది.',

      planning:
        'శ్రీ వెంకటేశ్వర స్వామి వారి ఆశీస్సులతో మరియు పోలిరెడ్డిపాలెం గ్రామ ప్రజల సమిష్టి సహకారంతో కొత్త ఆలయ నిర్మాణం ప్రారంభమైంది. పాత ఆలయ భక్తి మరియు సంప్రదాయాలను భవిష్యత్ తరాలకు కొనసాగించే కొత్త అధ్యాయానికి ఇది శ్రీకారం చుట్టింది.',

      basement:
        'కొత్త శ్రీ వెంకటేశ్వర స్వామి ఆలయ నిర్మాణంలో బేస్‌మెంట్ నిర్మాణం ఒక ముఖ్యమైన దశ. ఆలయ భవిష్యత్ నిర్మాణానికి బలమైన మరియు స్థిరమైన ఆధారాన్ని అందించేందుకు పునాది మరియు బేస్ నిర్మాణాన్ని జాగ్రత్తగా అభివృద్ధి చేశారు.',

      'main-structure':
        'కొత్త శ్రీ వెంకటేశ్వర స్వామి ఆలయంలో పవిత్రమైన గర్భాలయం నిర్మాణం ఒక ముఖ్యమైన భాగంగా రూపుదిద్దుకుంటోంది. స్వామివారి ఆరాధన జరిగే ఈ పవిత్ర ప్రదేశాన్ని భక్తిశ్రద్ధలతో నిర్మిస్తున్నారు.',

      salab:
        'కొత్త శ్రీ వెంకటేశ్వర స్వామి ఆలయ నిర్మాణంలో పైకప్పు నిర్మాణం మరో ముఖ్యమైన దశ. కాంక్రీట్ స్లాబ్ నిర్మాణం ఆలయ పైభాగానికి బలం అందిస్తూ, ఆలయ నిర్మాణాన్ని దాని ప్రణాళికాబద్ధమైన రూపానికి మరింత దగ్గర చేస్తోంది.',

      gopuram:
        'కొత్త శ్రీ వెంకటేశ్వర స్వామి ఆలయ నిర్మాణంలో గోపురం నిర్మాణం ఒక ముఖ్యమైన దశ. సాంప్రదాయ ఆలయ గోపురం ఆలయానికి ఆధ్యాత్మిక మరియు నిర్మాణ ప్రత్యేకతను అందిస్తూ, గ్రామ ప్రజల భక్తి మరియు సమిష్టి కృషికి ప్రతీకగా నిలుస్తుంది.',

      bajana:
        'భజన మండపం భజనలు, భక్తి గీతాలు మరియు ఆధ్యాత్మిక కార్యక్రమాల కోసం పవిత్రమైన ప్రదేశంగా నిర్మించబడుతోంది. భక్తులు ఒకచోట చేరి మన సంప్రదాయాలను కొనసాగించేందుకు ఇది ఉపయోగపడుతుంది.',
    }

    return translations[stage.id] ?? stage.description
  }

  return (
    <section
      id="construction"
      className="relative mx-auto max-w-7xl bg-midnight-deep px-5 py-28 md:px-8"
    >
      {/* Timeline */}
      <ol className="relative mt-16 space-y-6">
        {constructionStages.map((stage, index) => {
          const meta = getStatusMeta(stage.status)

          return (
            <motion.li
              key={stage.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.1,
                ease: 'easeOut',
              }}
            >
              <button
                onClick={() => setActiveId(stage.id)}
                className="glass-card group flex w-full flex-col items-stretch gap-5 p-4 text-left sm:flex-row sm:items-center md:p-5"
              >
                {/* Stage Image */}
                <span className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl border border-gold/15 sm:h-24 sm:w-32">
                  <PlaceholderPhoto
                    src={stage.image}
                    alt={getStageName(stage)}
                    label={getStageName(stage)}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-midnight-deep/80 font-display text-sm text-gold-light backdrop-blur-sm">
                    {String(stage.number).padStart(2, '0')}
                  </span>
                </span>

                {/* Stage Information */}
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-xl text-ivory md:text-2xl">
                      {getStageName(stage)}
                    </span>

                    <span
                      className={`flex items-center gap-1 text-xs ${meta.color}`}
                    >
                      {meta.icon}
                      {meta.label}
                    </span>
                  </span>

                  <span className="mt-1 block text-sm text-beige/60">
                    {stage.date}
                  </span>

                  <span className="mt-2 line-clamp-2 block text-sm text-beige/70">
                    {getStageDescription(stage)}
                  </span>
                </span>
              </button>
            </motion.li>
          )
        })}
      </ol>

      {/* Cinematic transition overlay */}
      <AnimatePresence>
        {activeStage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-midnight-deep/90 backdrop-blur-md"
              onClick={() => setActiveId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Stage Modal */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${getStageName(activeStage)} construction stage`}
              className="glass relative z-10 grid max-h-[85vh] w-full max-w-4xl grid-rows-[auto_1fr] overflow-hidden md:grid-cols-2 md:grid-rows-1"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Close */}
              <button
                onClick={() => setActiveId(null)}
                className="absolute right-4 top-4 z-20 rounded-full border border-gold/30 bg-midnight-deep/70 p-2 text-ivory hover:border-gold"
                aria-label={t.construction.close}
              >
                <X size={18} />
              </button>

              {/* Construction Image */}
              <div className="relative h-56 overflow-hidden md:h-full">
                <motion.div
                  key={`${activeStage.id}-img`}
                  initial={{
                    scale: 1.15,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  className="h-full w-full"
                >
                  <PlaceholderPhoto
                    src={activeStage.image}
                    alt={`${getStageName(activeStage)} construction photograph`}
                    label={getStageName(activeStage)}
                    className="rounded-none"
                  />
                </motion.div>
              </div>

              {/* Stage Information */}
              <motion.div
                key={`${activeStage.id}-content`}
                initial={{
                  opacity: 0,
                  x: 24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="overflow-y-auto p-8"
              >
                <span className="eyebrow">
                  {language === 'te'
                    ? `దశ ${String(activeStage.number).padStart(2, '0')}`
                    : `Stage ${String(activeStage.number).padStart(2, '0')}`}
                </span>

                <h3 className="mt-2 font-display text-3xl text-ivory">
                  {getStageName(activeStage)}
                </h3>

                <p className="mt-1 text-sm text-beige/60">
                  {activeStage.date}
                </p>

                <p
                  className={`mt-3 inline-flex items-center gap-1 text-xs ${
                    getStatusMeta(activeStage.status).color
                  }`}
                >
                  {getStatusMeta(activeStage.status).icon}
                  {getStatusMeta(activeStage.status).label}
                </p>

                <p className="mt-6 leading-relaxed text-beige/90">
                  {getStageDescription(activeStage)}
                </p>

                {/* Previous / Next */}
                <div className="mt-8 flex justify-between text-sm">
                  <button
                    disabled={activeStage.number <= 1}
                    onClick={() =>
                      setActiveId(
                        constructionStages[
                          activeStage.number - 2
                        ]?.id ?? null,
                      )
                    }
                    className="text-gold-light disabled:opacity-30"
                  >
                    ← {t.construction.previous}
                  </button>

                  <button
                    disabled={
                      activeStage.number >= constructionStages.length
                    }
                    onClick={() =>
                      setActiveId(
                        constructionStages[
                          activeStage.number
                        ]?.id ?? null,
                      )
                    }
                    className="text-gold-light disabled:opacity-30"
                  >
                    {t.construction.next} →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}