import { useEffect, useState, useMemo } from 'react'

interface Petal {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  sway: number
  maxOpacity: number
  hue: 'gold' | 'ivory'
  direction: 'cw' | 'ccw'
}

// Falling flower-petal ambience, driven by plain CSS @keyframes (no
// animation-library timing to go wrong). Each petal falls top to bottom,
// swaying and turning at its own speed, and fades in/out at the edges.
// Respects prefers-reduced-motion.
export default function PetalField({ count = 16 }: { count?: number }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const listener = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', listener)
    return () => mq.removeEventListener('change', listener)
  }, [])

  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 10,
      duration: 11 + Math.random() * 9, // slow: 11–20s top to bottom
      delay: Math.random() * 6, // short delay so petals show up quickly
      sway: 20 + Math.random() * 30,
      maxOpacity: 0.4 + Math.random() * 0.35,
      hue: Math.random() > 0.5 ? 'gold' : 'ivory',
      direction: Math.random() > 0.5 ? 'cw' : 'ccw',
    }))
  }, [count])

  if (reducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes petal-fall-cw {
          0%   { transform: translate(0, -10vh) rotate(0deg); opacity: 0; }
          8%   { opacity: var(--petal-opacity, 0.5); }
          30%  { transform: translate(calc(var(--petal-sway, 24) * 1px), 25vh) rotate(120deg); }
          60%  { transform: translate(calc(var(--petal-sway, 24) * -0.7px), 60vh) rotate(220deg); }
          90%  { opacity: var(--petal-opacity, 0.5); }
          100% { transform: translate(0, 110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes petal-fall-ccw {
          0%   { transform: translate(0, -10vh) rotate(0deg); opacity: 0; }
          8%   { opacity: var(--petal-opacity, 0.5); }
          30%  { transform: translate(calc(var(--petal-sway, 24) * -1px), 25vh) rotate(-120deg); }
          60%  { transform: translate(calc(var(--petal-sway, 24) * 0.7px), 60vh) rotate(-220deg); }
          90%  { opacity: var(--petal-opacity, 0.5); }
          100% { transform: translate(0, 110vh) rotate(-360deg); opacity: 0; }
        }
      `}</style>

      {petals.map((p) => {
        const style: React.CSSProperties & Record<string, string | number> = {
          left: `${p.left}%`,
          width: p.size,
          height: p.size * 0.72,
          background:
            p.hue === 'gold'
              ? 'radial-gradient(circle at 30% 30%, #E8C766, #C9A227)'
              : 'radial-gradient(circle at 30% 30%, #F5EFDD, #C4B896)',
          borderRadius: '60% 40% 60% 40%',
          animationName: p.direction === 'cw' ? 'petal-fall-cw' : 'petal-fall-ccw',
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          '--petal-sway': p.sway,
          '--petal-opacity': p.maxOpacity,
        }
        return <span key={p.id} className="absolute top-0 rounded-full" style={style} />
      })}
    </div>
  )
}