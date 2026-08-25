import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-gold/20 bg-charcoal/40 p-1">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
          language === 'en'
            ? 'bg-gold text-midnight-deep'
            : 'text-beige/70 hover:text-ivory'
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('te')}
        aria-label="తెలుగుకు మార్చండి"
        aria-pressed={language === 'te'}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
          language === 'te'
            ? 'bg-gold text-midnight-deep'
            : 'text-beige/70 hover:text-ivory'
        }`}
      >
        తెలుగు
      </button>
    </div>
  )
}