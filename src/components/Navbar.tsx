import { useEffect, useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import TempleLogo from './TempleLogo'
import LanguageSwitcher from '../i18n/LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'
import type { Route } from '../hooks/useHashRoute'

export default function Navbar({ route }: { route: Route }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const { t } = useLanguage()

  const links: { href: Route; label: string }[] = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.temple },
    { href: '/construction', label: t.nav.construction },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/donors', label: t.nav.donors },
    { href: '/donation', label: t.nav.donation },
    { href: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || route !== '/'
          ? 'border-b border-gold/20 bg-midnight-deep/90 backdrop-blur-xl'
          : 'bg-gradient-to-b from-midnight-deep/70 to-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <a href="#/" className="flex items-center gap-3">
          <TempleLogo size={150} />

          <span className="font-display text-base font-semibold leading-tight tracking-wide text-ivory md:text-lg">
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={`#${l.href}`}
                className={`text-sm font-medium transition-colors ${
                  route === l.href
                    ? 'text-gold-light'
                    : 'text-beige/90 hover:text-gold-light'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <a
            href="#/donation"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-midnight-deep transition-colors hover:bg-gold-light"
          >
            <Heart size={15} />
            {t.donation.title === 'Support Temple Construction'
              ? 'Support Temple'
              : 'ఆలయానికి సహకరించండి'}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />

          <button
            className="rounded-full border border-gold/30 p-2 text-ivory"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open
            ? 'max-h-[32rem] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-gold/15 bg-midnight-deep/95 px-5 py-4 backdrop-blur-xl">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={`#${l.href}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                  route === l.href
                    ? 'bg-gold/10 text-gold-light'
                    : 'text-ivory hover:bg-gold/10 hover:text-gold-light'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#/donation"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-midnight-deep"
            >
              <Heart size={15} />
              {t.donation.title === 'Support Temple Construction'
                ? 'Support Temple'
                : 'ఆలయానికి సహకరించండి'}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}