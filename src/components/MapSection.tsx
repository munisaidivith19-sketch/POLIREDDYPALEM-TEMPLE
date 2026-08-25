import { MapPin, Navigation } from 'lucide-react'
import GlassCard from './GlassCard'
import GoldDivider from './GoldDivider'
import { contactInfo } from '../data/contact'

const hasRealMapLink = !contactInfo.googleMapsUrl.startsWith('[')
const hasRealDirectionsLink = !contactInfo.googleMapsDirectionsUrl.startsWith('[')

export default function MapSection() {
  return (
    <section  className="relative mx-auto max-w-7xl bg-midnight-deep px-5 py-28 md:px-8">
      <div className="text-center">
        <span className="eyebrow">Come With Devotion</span>
        <h2 className="section-title mt-3">Visit the Temple</h2>
        <GoldDivider />
      </div>

      <GlassCard className="mt-12 flex flex-col items-center gap-6 p-10 text-center">
        <MapPin className="text-gold-light" size={32} aria-hidden="true" />
        <p className="max-w-md text-beige/90">{contactInfo.address}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={hasRealMapLink ? contactInfo.googleMapsUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasRealMapLink}
            className={`btn-primary ${!hasRealMapLink ? 'pointer-events-none opacity-50' : ''}`}
          >
            <MapPin size={16} /> View on Google Maps
          </a>
          <a
            href={hasRealDirectionsLink ? contactInfo.googleMapsDirectionsUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasRealDirectionsLink}
            className={`btn-secondary ${!hasRealDirectionsLink ? 'pointer-events-none opacity-50' : ''}`}
          >
            <Navigation size={16} /> Get Directions
          </a>
        </div>

        {!hasRealMapLink && (
          <p className="text-xs text-beige/50">
            Map links will activate once the official Google Maps URL is added to{' '}
            <code>src/data/contact.ts</code>.
          </p>
        )}
      </GlassCard>
    </section>
  )
}
