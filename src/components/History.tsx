import GlassCard from './GlassCard'
import GoldDivider from './GoldDivider'
import { aboutContent } from '../data/temple'
import { useLanguage } from '../i18n/LanguageContext'

export default function History() {
  const { language, t } = useLanguage()

  const historyText =
    language === 'te'
      ? 'పోలిరెడ్డిపాలెం గ్రామంలోని శ్రీ వెంకటేశ్వర స్వామి ఆలయానికి గొప్ప ఆధ్యాత్మిక వారసత్వం ఉంది. చెన్నైకి చెందిన స్వర్గీయ తంబిరెడ్డి రమణ రెడ్డి గారు 1960 సంవత్సరంలో అసలు ఆలయాన్ని నిర్మించారు. ఆ ఆలయం అనేక దశాబ్దాలుగా గ్రామ ప్రజలకు మరియు భక్తులకు ఆరాధనా స్థలంగా సేవలందించింది. కాలక్రమేణా కొత్త ఆలయ అవసరం ఏర్పడటంతో, శ్రీ వెంకటేశ్వర స్వామి వారి ఆశీస్సులతో మరియు గ్రామ ప్రజల సమిష్టి సహకారంతో కొత్త ఆలయ నిర్మాణం ప్రారంభమైంది. పాత ఆలయ భక్తి మరియు సంప్రదాయాలను కొనసాగిస్తూ, ఈ కొత్త ఆలయం భవిష్యత్ తరాలకు ఆధ్యాత్మిక వారసత్వాన్ని అందించడానికి నిర్మించబడుతోంది.'
      : aboutContent.history

  return (
    <section
      id="history"
      className="relative mx-auto max-w-7xl bg-midnight-deep px-5 py-28 md:px-8"
    >
      {/* Header */}
      <div className="text-center">
        <span className="eyebrow">
          {language === 'te'
            ? 'ఆధ్యాత్మిక వారసత్వం'
            : 'Heritage Archive'}
        </span>

        <h2 className="section-title mt-3">
          {t.temple.history}
        </h2>

        <GoldDivider />
      </div>

      {/* Old Temple + Founder */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">

        {/* Old Temple */}
        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20">
            <img
              src="/images/temple/old-temple/oldtemple.webp"
              alt={
                language === 'te'
                  ? 'పాత శ్రీ వెంకటేశ్వర స్వామి ఆలయం'
                  : 'Old Sri Venkateshwara Swami Temple'
              }
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mt-4 text-center">
            <h3 className="font-display text-xl font-semibold text-gold-light">
              {language === 'te'
                ? 'పాత ఆలయం'
                : 'Original Temple'}
            </h3>

            <p className="mt-1 text-sm text-beige/60">
              {language === 'te'
                ? '1960లో నిర్మించబడిన అసలు ఆలయం'
                : 'The original temple built in 1960'}
            </p>
          </div>
        </div>

        {/* Founder */}
        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20">
            <img
              src="/images/temple/old-temple/founder.webp"
              alt={
                language === 'te'
                  ? 'ఆలయ వ్యవస్థాపకులు స్వర్గీయ తంబిరెడ్డి రమణ రెడ్డి'
                  : 'Temple founder Late Thambireddy Ramana Reddy'
              }
              className="h-full w-full object-contain"
            />
          </div>

          <div className="mt-4 text-center">
            <h3 className="font-display text-xl font-semibold text-gold-light">
              {language === 'te'
                ? 'ఆలయ వ్యవస్థాపకులు'
                : 'Temple Founder'}
            </h3>

            <p className="mt-1 text-sm text-beige/70">
              {language === 'te'
                ? 'స్వర్గీయ తంబిరెడ్డి రమణ రెడ్డి గారు'
                : 'Thambireddy Ramana Reddy'}
            </p>

            <p className="mt-1 text-xs text-beige/50">
              {language === 'te'
                ? 'చెన్నై'
                : 'Chennai'}
            </p>
          </div>
        </div>
      </div>

      {/* History Content */}
      <GlassCard className="mt-10 p-8">
        <p
          className="leading-relaxed text-beige/90"
          style={{ fontFamily: 'inherit' }}
        >
          {historyText}
        </p>
      </GlassCard>
    </section>
  )
}