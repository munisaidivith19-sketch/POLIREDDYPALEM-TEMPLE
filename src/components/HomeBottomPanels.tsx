import {
  Heart,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Users,
} from 'lucide-react'
import { bankDetails, contactInfo } from '../data/contact'
import { templeInfo } from '../data/temple'
import { useLanguage } from '../i18n/LanguageContext'

const hasRealMapLink = !contactInfo.googleMapsUrl.startsWith('[')

export default function HomeBottomPanels() {
  const { language } = useLanguage()

  const isTelugu = language === 'te'

  return (
    <section className="relative bg-midnight-deep py-20">
      <div className="mx-auto grid max-w-9xl gap-8 px-5 md:grid-cols-3 md:px-8">

        {/* Donation & Support */}
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-gold-light">
            <Heart size={30} />

            {isTelugu
              ? 'విరాళం & సహాయం'
              : 'Donation & Support'}
          </h3>

          <p className="mt-3 text-sm text-beige/80">
            {isTelugu
              ? `మీ సహకారం ${templeInfo.deity} వారి ఆలయ నిర్మాణానికి సహాయపడుతుంది.`
              : `Your contribution helps us build the house of ${templeInfo.deity}.`}
          </p>

          <div className="glass mt-2 space-y-2 p-5 text-sm">
            <p className="mb-2 text-xs uppercase tracking-wider text-gold-light/80">
              {isTelugu
                ? 'బ్యాంక్ వివరాలు'
                : 'Bank Details'}
            </p>

            <div className="flex justify-between gap-3">
              <span className="text-beige/60">
                {isTelugu
                  ? 'ఖాతా పేరు'
                  : 'Account Name'}
              </span>

              <span className="text-right text-ivory">
                {bankDetails.accountHolderName}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-beige/60">
                {isTelugu
                  ? 'ఖాతా నంబర్'
                  : 'Account Number'}
              </span>

              <span className="text-right text-ivory">
                {bankDetails.accountNumber}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-beige/60">
                {isTelugu
                  ? 'IFSC కోడ్'
                  : 'IFSC Code'}
              </span>

              <span className="text-right text-ivory">
                {bankDetails.ifscCode}
              </span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-beige/60">
                {isTelugu
                  ? 'బ్యాంక్ పేరు'
                  : 'Bank Name'}
              </span>

              <span className="text-right text-ivory">
                {bankDetails.bankName}
              </span>
            </div>

            <p className="pt-2 text-[11px] text-beige/50">
              {isTelugu
                ? 'విరాళం చేయడానికి ముందు కమిటీ సభ్యులను సంప్రదించండి.'
                : 'Contact Committee Members Before Doing Donation.'}
            </p>
          </div>

          <a
            href="#/donation"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-light hover:underline"
          >
            {isTelugu
              ? 'స్కాన్ చేసి విరాళం ఇవ్వండి'
              : 'Scan & Donate'}

            <ArrowRight size={14} />
          </a>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-gold-light">
            <Users size={40} />

            {isTelugu
              ? 'మమ్మల్ని సంప్రదించండి'
              : 'CONTACT US'}
          </h3>

          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-beige/80">
            <li className="flex items-center gap-2">
              <Mail
                size={15}
                className="text-gold-light"
              />

              {contactInfo.email}
            </li>

            <li className="flex items-center gap-2">
              <Phone
                size={15}
                className="text-gold-light"
              />

              {contactInfo.phone}
            </li>
          </ul>

          <a
            href="#/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-light hover:underline"
          >
            {isTelugu
              ? 'మరింత తెలుసుకోండి'
              : 'Read More'}

            <ArrowRight size={14} />
          </a>
        </div>

        {/* Location */}
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-gold-light">
            <MapPin size={18} />

            {isTelugu
              ? 'సంప్రదింపు & ప్రదేశం'
              : 'Contact & Location'}
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-beige/80">
            <li className="flex items-start gap-2">
              <MapPin
                size={15}
                className="mt-0.5 shrink-0 text-gold-light"
              />

              {templeInfo.fullAddress}
            </li>
          </ul>

          {/* Google Maps */}
          <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.7813945615512!2d79.96835621670185!3d13.781445760319265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d0de51c6885d1%3A0x7d47f3797c47519e!2sVenkateswara%20Swamy%20temple%2Cpolireddy%20palem!5e1!3m2!1sen!2sin!4v1787511914385!5m2!1sen!2sin"
              title={
                isTelugu
                  ? 'వెంకటేశ్వర స్వామి ఆలయ ప్రదేశం'
                  : 'Venkateshwara Swamy Temple Location'
              }
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <a
            href={
              hasRealMapLink
                ? contactInfo.googleMapsUrl
                : '#/contact'
            }
            target={
              hasRealMapLink
                ? '_blank'
                : undefined
            }
            rel={
              hasRealMapLink
                ? 'noopener noreferrer'
                : undefined
            }
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-light hover:underline"
          >
            {isTelugu
              ? 'Google Mapsలో చూడండి'
              : 'View on Google Maps'}

            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}