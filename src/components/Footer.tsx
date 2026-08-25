import { templeInfo } from '../data/temple'

const links = [
  { href: '#/about', label: 'About Temple' },
  { href: '#/construction', label: 'Construction' },
  { href: '#/gallery', label: 'Gallery' },
  { href: '#/donors', label: 'Donors' },
  { href: '#/donation', label: 'Donate' },
  { href: '#/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-midnight-deep" aria-hidden={false}>
      <div className="mx-auto max-w-7xl px-5 py-10 text-center md:px-8">
        <p className="font-display text-xl italic text-gold-light md:text-2xl">
          || Om Namo Venkatesaya ||
        </p>
        <p className="mt-2 text-sm text-beige/80">
          May the blessings of {templeInfo.deity} be with you always.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-6 text-xs">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-beige/70 transition-colors hover:text-gold-light">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="gold-divider mt-6" />
        <p className="mt-4 text-xs text-beige/40">
          © {new Date().getFullYear()} {templeInfo.name}. All Rights Reserve    DEVELOPED BY DIVITH
        </p>
      </div>
    </footer>
  )
}
