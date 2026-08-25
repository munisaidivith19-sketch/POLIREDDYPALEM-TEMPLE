import { Mail, Phone } from 'lucide-react'
import GlassCard from './GlassCard'
import { contactInfo } from '../data/contact'

export default function Contact() {
  return (
    <section
      id="contact"
       className="relative mx-auto max-w-7xl bg-midnight-deep px-5 py-28 md:px-8"
    >
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <GlassCard className="flex items-center gap-4 p-7">
          <span className="rounded-full bg-gold/15 p-3 text-gold-light">
            <Mail size={20} aria-hidden="true" />
          </span>

          <div>
            <p className="text-xs uppercase tracking-wider text-beige/60">
              Email
            </p>

            <p className="mt-1 text-ivory">
              {contactInfo.email}
            </p>
          </div>
        </GlassCard>

        <GlassCard className="flex items-center gap-4 p-7">
          <span className="rounded-full bg-gold/15 p-3 text-gold-light">
            <Phone size={20} aria-hidden="true" />
          </span>

          <div>
            <p className="text-xs uppercase tracking-wider text-beige/60">
              Phone
            </p>

            <p className="mt-1 text-ivory">
              {contactInfo.phone}
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}