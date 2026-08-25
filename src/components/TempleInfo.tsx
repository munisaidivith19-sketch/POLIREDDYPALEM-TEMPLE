import GlassCard from './GlassCard'
import { templeInfo, aboutContent, festivals, traditions } from '../data/temple'
import { useLanguage } from '../i18n/LanguageContext'

export default function TempleInfo() {
  const { language, t } = useLanguage()

  const intro =
    language === 'te'
      ? ' పోలిరెడ్డిపాలెం గ్రామం నందు శ్రీ వెంకటేశ్వర స్వామి ఆలయం భక్తి, విశ్వాసం మరియు సమాజ ఐక్యతకు ప్రతీకగా నిలుస్తోంది. అసలు ఆలయం 1960 సంవత్సరం చెన్నైకి చెందిన స్వర్గీయ తంబిరెడ్డి రమణ రెడ్డి గారిచే నిర్మించబడింది. అనేక దశాబ్దాలుగా ఈ ఆలయం గ్రామ ప్రజలకు ఆధ్యాత్మిక కేంద్రంగా సేవలందించింది. ప్రస్తుతం భక్తులు మరియు గ్రామ ప్రజల సహకారంతో కొత్త ఆలయ నిర్మాణం కొనసాగుతోంది.'
      : aboutContent.intro

  const culturalImportance =
    language === 'te'
      ? 'శ్రీ వెంకటేశ్వర స్వామి ఆలయం పోలిరెడ్డిపాలెం గ్రామ ప్రజల ఆధ్యాత్మిక మరియు సాంస్కృతిక జీవితంలో ముఖ్యమైన స్థానాన్ని కలిగి ఉంది. ఈ ఆలయం అనేక సంవత్సరాలుగా భక్తి, ప్రార్థన మరియు సమాజ ఐక్యతకు కేంద్రంగా నిలిచింది.'
      : aboutContent.culturalImportance

  const villageSignificance =
    language === 'te'
      ? 'ఈ ఆలయం అనేక దశాబ్దాలుగా పోలిరెడ్డిపాలెం గ్రామంతో విడదీయరాని అనుబంధాన్ని కలిగి ఉంది. పాత ఆలయం తరతరాలుగా గ్రామ ప్రజలకు ఆరాధనా స్థలంగా సేవలందించింది. కొత్త ఆలయ నిర్మాణం ఈ ఆధ్యాత్మిక వారసత్వాన్ని భవిష్యత్ తరాలకు కొనసాగిస్తోంది.'
      : aboutContent.villageSignificance

  return (
    <section
      id="temple"
      className="relative mx-auto max-w-7xl bg-midnight-deep px-5 py-28 md:px-8"
    >
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {/* Introduction & Cultural Importance */}
        <GlassCard className="p-8 md:col-span-2">
          <h3 className="font-display text-2xl text-gold-light">
            {t.temple.introduction}
          </h3>

          <p className="mt-4 leading-relaxed text-beige/90">
            {intro}
          </p>

          <h3 className="mt-8 font-display text-2xl text-gold-light">
            {t.temple.culturalImportance}
          </h3>

          <p className="mt-4 leading-relaxed text-beige/90">
            {culturalImportance}
          </p>
        </GlassCard>

        {/* At a Glance */}
        <GlassCard className="p-8">
          <h3 className="font-display text-2xl text-gold-light">
            {t.temple.atAGlance}
          </h3>

          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-beige/60">
                {t.temple.deity}
              </dt>

              <dd className="text-ivory">
                {templeInfo.deity}
              </dd>
            </div>

            <div>
              <dt className="text-beige/60">
                {t.temple.village}
              </dt>

              <dd className="text-ivory">
                {templeInfo.village}
              </dd>
            </div>

            <div>
              <dt className="text-beige/60">
                {t.temple.mandal}
              </dt>

              <dd className="text-ivory">
                {templeInfo.mandal}
              </dd>
            </div>

            <div>
              <dt className="text-beige/60">
                {t.temple.district}
              </dt>

              <dd className="text-ivory">
                {templeInfo.district}, {templeInfo.state}
              </dd>
            </div>
          </dl>
        </GlassCard>
      </div>

      {/* Village Significance & Festivals */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <GlassCard className="p-8">
          <h3 className="font-display text-2xl text-gold-light">
            {t.temple.villageSignificance}
          </h3>

          <p className="mt-4 leading-relaxed text-beige/90">
            {villageSignificance}
          </p>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="font-display text-2xl text-gold-light">
            {t.temple.festivals}
          </h3>

          <ul className="mt-4 space-y-4">
            {festivals.map((f) => (
              <li key={f.name}>
                <p className="font-medium text-ivory">
                  {language === 'te'
                    ? 'తిరుమల శనివారం'
                    : f.name}
                </p>

                <p className="text-sm text-beige/80">
                  {language === 'te'
                    ? 'మా గ్రామంలో తిరుమల శనివారం ఉత్సవం ప్రతి సంవత్సరం మూడవ వారంలో రెండు రోజుల పాటు భక్తిశ్రద్ధలతో నిర్వహించబడుతుంది.'
                    : f.description}
                </p>
              </li>
            ))}
          </ul>

          <ul className="mt-4 space-y-1 border-t border-gold/15 pt-4 text-sm text-beige/80">
            {traditions.map((tradition, i) => (
              <li key={i}>
                •{' '}
                {language === 'te'
                  ? i === 0
                    ? 'ఉత్సవం గ్రామ ప్రజలను భక్తి మరియు ఐక్యతతో ఒకచోట చేర్చుతుంది.'
                    : 'రెండు రోజుల పాటు భక్తిశ్రద్ధలతో సంప్రదాయ కార్యక్రమాలు నిర్వహించబడతాయి.'
                  : tradition}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}