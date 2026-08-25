import { motion } from 'framer-motion'
import {
  HardHat,
  Landmark,
  CalendarDays,
  MapPin,
} from 'lucide-react'
import { templeInfo } from '../data/temple'
import { useLanguage } from '../i18n/LanguageContext'

export default function StatsBar() {
  const { language } = useLanguage()

  const stats = [
    {
      icon: HardHat,
      value: '60%',
      label:
        language === 'te'
          ? 'ఆలయ నిర్మాణ పురోగతి'
          : 'Construction Progress',
    },
    {
      icon: Landmark,
      value:
        language === 'te'
          ? 'భజన మండపం నిర్మాణం'
          : 'BAJANA MANDAPAM CONSTRUCTION',
      label:
        language === 'te'
          ? 'ప్రస్తుత నిర్మాణ దశ'
          : 'Current Stage',
    },
    {
      icon: CalendarDays,
      value: '20/02/2026',
      label:
        language === 'te'
          ? 'నిర్మాణం ప్రారంభమైన తేదీ'
          : 'Construction Began',
    },
    {
      icon: MapPin,
      value:
        language === 'te'
          ? 'పోలిరెడ్డిపాలెం'
          : templeInfo.village,
      label:
        language === 'te'
          ? 'తిరుపతి జిల్లా, ఆంధ్రప్రదేశ్'
          : `${templeInfo.district}, ${templeInfo.state}`,
    },
  ]

  return (
    <section className="section-cream relative border-b border-gold-dim/15">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-10 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
            }}
            className="card-light flex items-center gap-3 p-4 md:p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dim">
              <s.icon size={20} />
            </span>

            <span>
              <span className="block font-display text-lg font-semibold leading-tight text-ink md:text-xl">
                {s.value}
              </span>

              <span className="block text-xs text-ink-soft/80">
                {s.label}
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}