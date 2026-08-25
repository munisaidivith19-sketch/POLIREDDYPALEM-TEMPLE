import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Props {
  percent: number // 0-100
  size?: number
  label?: string
}

// Signature visual: a stylised gopuram (temple tower) built from stacked
// tiers. Tiers fill with gold light from the base upward as construction
// progress increases — the progress indicator IS the temple, not a
// generic bar sitting next to it.
export default function GopuramProgress({ percent, size = 220, label }: Props) {
  const clamped = Math.max(0, Math.min(100, percent))
  const tiers = 7

  const tierData = useMemo(() => {
    const data = []
    for (let i = 0; i < tiers; i++) {
      const tierThreshold = ((i + 1) / tiers) * 100
      const prevThreshold = (i / tiers) * 100
      const fillWithin =
        clamped >= tierThreshold
          ? 1
          : clamped <= prevThreshold
          ? 0
          : (clamped - prevThreshold) / (tierThreshold - prevThreshold)
      data.push(fillWithin)
    }
    return data.reverse() // top tier first for rendering order top->bottom
  }, [clamped])

  const width = 200
  const height = 260
  const baseY = 240
  const tierHeight = 22
  const baseWidth = 150

  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        width={size}
        height={(size * height) / width}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`Temple construction progress: ${clamped}% complete`}
      >
        <defs>
          <linearGradient id="gopuram-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8C766" />
            <stop offset="100%" stopColor="#C9A227" />
          </linearGradient>
        </defs>

        {/* kalasham (finial) */}
        <circle cx={width / 2} cy={20} r={6} fill={clamped >= 98 ? 'url(#gopuram-fill)' : 'none'} stroke="#C9A227" strokeWidth={1.2} />
        <line x1={width / 2} y1={26} x2={width / 2} y2={40} stroke="#C9A227" strokeWidth={1.2} />

        {tierData.map((fill, i) => {
          const tierFromTop = i
          const y = 40 + tierFromTop * tierHeight
          const topWidth = 30 + tierFromTop * ((baseWidth - 30) / (tiers - 1))
          const bottomWidth = 30 + (tierFromTop + 1) * ((baseWidth - 30) / (tiers - 1))
          const x1 = (width - topWidth) / 2
          const x2 = (width + topWidth) / 2
          const x3 = (width + bottomWidth) / 2
          const x4 = (width - bottomWidth) / 2
          const points = `${x1},${y} ${x2},${y} ${x3},${y + tierHeight - 3} ${x4},${y + tierHeight - 3}`
          return (
            <g key={i}>
              <polygon points={points} fill="none" stroke="#8A6E1D" strokeWidth={1} opacity={0.5} />
              <motion.polygon
                points={points}
                fill="url(#gopuram-fill)"
                initial={false}
                animate={{ opacity: fill }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ filter: fill > 0 ? 'drop-shadow(0 0 6px rgba(201,162,39,0.6))' : 'none' }}
              />
            </g>
          )
        })}

        {/* base plinth */}
        <rect x={(width - baseWidth - 16) / 2} y={baseY} width={baseWidth + 16} height={10} fill="#1A140F" stroke="#8A6E1D" strokeWidth={1} />
      </svg>
      <div className="text-center">
        <div className="font-display text-3xl font-semibold text-gold-light">{clamped}%</div>
        {label && <div className="eyebrow mt-1">{label}</div>}
      </div>
    </div>
  )
}
