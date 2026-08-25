export default function GoldDivider() {
  return (
    <div className="my-4 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}
