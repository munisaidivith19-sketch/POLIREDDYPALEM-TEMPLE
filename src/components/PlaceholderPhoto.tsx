interface Props {
  src?: string | null
  alt: string
  label?: string
  className?: string
}

// Renders a real photo when `src` is supplied; otherwise a clearly-marked
// placeholder so it's obvious which assets still need to be supplied.
export default function PlaceholderPhoto({ src, alt, label, className = '' }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }
  return (
    <div className={`placeholder-photo h-full w-full min-h-[160px] p-4 ${className}`} role="img" aria-label={alt}>
      <span>{label ?? alt}</span>
    </div>
  )
}
