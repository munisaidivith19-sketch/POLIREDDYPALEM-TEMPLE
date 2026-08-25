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

        {/* Email */}
        <GlassCard className="flex items-center gap-4 p-7">
          <span className="rounded-full bg-gold/15 p-3 text-gold-light">
            <Mail size={20} aria-hidden="true" />
          </span>

          <div>
            <p className="text-xs uppercase tracking-wider text-beige/60">
              Email
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-1 block text-ivory hover:text-gold-light"
            >
              {contactInfo.email}
            </a>
          </div>
        </GlassCard>

        {/* Phone */}
        <GlassCard className="flex items-start gap-4 p-7">
          <span className="rounded-full bg-gold/15 p-3 text-gold-light">
            <Phone size={20} aria-hidden="true" />
          </span>

          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider text-beige/60">
              Phone
            </p>

            <div className="mt-2 space-y-3">
              {contactInfo.phone.map((contact) => (
                <div key={contact.number}>
                  <p className="font-medium text-ivory">
                    {contact.name}
                  </p>

                  <a
                    href={`tel:${contact.number.replace(/\s/g, '')}`}
                    className="text-sm text-beige/70 hover:text-gold-light"
                  >
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  )
}
