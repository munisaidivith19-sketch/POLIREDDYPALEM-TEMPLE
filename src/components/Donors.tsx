import GlassCard from './GlassCard'
import { donors } from '../data/donors'
import { useLanguage } from '../i18n/LanguageContext'

export default function Donors() {
  const { language, t } = useLanguage()

  return (
    <section
      id="donors"
      className="relative mx-auto max-w-5xl px-5 py-28 md:px-8"
    >
      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-gold/20 text-xs uppercase tracking-wider text-gold-light/80">
                <th className="px-6 py-4 font-medium">
                  {t.donors.donorName}
                </th>

                <th className="px-6 py-4 font-medium">
                  {t.donors.donationDate}
                </th>

                <th className="px-6 py-4 font-medium">
                  {t.donors.amount}
                </th>
              </tr>
            </thead>

            <tbody>
              {donors.map((donor, index) => (
                <tr
                  key={`${donor.name}-${donor.date}-${index}`}
                  className="border-b border-gold/10 last:border-0 hover:bg-gold/5"
                >
                  <td className="px-6 py-4 text-ivory">
                    {language === 'te'
                      ? donor.nameTe
                      : donor.name}
                  </td>

                  <td className="px-6 py-4 text-beige/70">
                    {donor.date}
                  </td>

                  <td className="px-6 py-4 text-gold-light">
                    {donor.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </section>
  )
}