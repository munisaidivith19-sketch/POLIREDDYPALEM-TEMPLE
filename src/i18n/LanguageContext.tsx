import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { en } from './en'
import { te } from './te'

export type Language = 'en' | 'te'

const translations = {
  en,
  te,
}

type Translation = typeof en

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('temple-language')

    return savedLanguage === 'te' ? 'te' : 'en'
  })

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('temple-language', newLanguage)
  }

  useEffect(() => {
    document.documentElement.lang =
      language === 'te' ? 'te' : 'en'
  }, [language])

  const t = translations[language] as Translation

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider',
    )
  }

  return context
}