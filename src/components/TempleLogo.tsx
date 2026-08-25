interface TempleLogoProps {
  size?: number
}

export default function TempleLogo({ size = 150 }: TempleLogoProps) {
  return (
    <img
      src="/images/temple/hero/logo.webp"
      alt="Lord Venkateshwara"
      width={size}
      height={size}
      className="object-contain"
    />
  )
}
