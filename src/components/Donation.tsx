import GlassCard from './GlassCard'
import PlaceholderPhoto from './PlaceholderPhoto'
import { bankDetails } from '../data/contact'

const rows: { label: string; value: string }[] = [
  { label: 'Bank Name', value: bankDetails.bankName },
  { label: 'Account Holder Name', value: bankDetails.accountHolderName },
  { label: 'Account Number', value: bankDetails.accountNumber },
  { label: 'IFSC Code', value: bankDetails.ifscCode },
  { label: 'Branch', value: bankDetails.branch },
  { label: 'UPI ID', value: bankDetails.upiId },
]

export default function Donation() {
  return (
    <section
      id="donate"
      className="relative mx-auto max-w-7xl bg-midnight-deep px-5 py-28 md:px-8"
    >
      <div className="mt-14 grid gap-8 md:grid-cols-[1.3fr_1fr]">
        <GlassCard className="p-8">
          <h3 className="font-display text-2xl text-gold-light">
            Bank Transfer Details
          </h3>

          <dl className="mt-6 divide-y divide-gold/10">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="text-sm text-beige/60">
                  {r.label}
                </dt>

                <dd className="font-medium text-ivory">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 rounded-lg border border-gold/20 bg-charcoal/50 p-4 text-xs text-beige/60">
            Before making a donation, please confirm the bank details with the temple committee to ensure accuracy and avoid any potential issues.
          </p>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center gap-4 p-8 text-center">
          <h3 className="font-display text-xl text-gold-light">
            Scan to Donate
          </h3>

          <div className="aspect-square w-44 overflow-hidden rounded-xl">
            <PlaceholderPhoto
              src={bankDetails.qrCodeImage}
              alt="Official donation QR code"
              label="[Official QR code — public/images/temple/decorative/]"
            />
          </div>

          <p className="text-xs text-beige/60">
            UPI ID: {bankDetails.upiId}
          </p>
        </GlassCard>
      </div>
    </section>
  )
}