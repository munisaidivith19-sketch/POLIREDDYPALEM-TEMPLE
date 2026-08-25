import PetalField from './PetalField'

export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-midnight-deep pb-14 pt-28 text-center">
      <PetalField count={40} />
      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="section-title mt-3">{title}</h1>
        {subtitle && <p className="mt-3 text-beige/80">{subtitle}</p>}
        <div className="gold-divider mt-5" />
      </div>
    </section>
  )
}
