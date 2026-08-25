import { useMemo, useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import GoldDivider from './GoldDivider'
import PlaceholderPhoto from './PlaceholderPhoto'
import { galleryCategories, galleryImages } from '../data/contact'
import { useLanguage } from '../i18n/LanguageContext'

export default function Gallery() {
  const { language, t } = useLanguage()

  const [filter, setFilter] = useState<
    'All' | (typeof galleryCategories)[number]
  >('All')

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? galleryImages
        : galleryImages.filter((g) => g.category === filter),
    [filter],
  )

  const close = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i + 1) % filtered.length,
      ),
    [filtered.length],
  )

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null
          ? i
          : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  )

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }

    window.addEventListener('keydown', onKey)

    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, close, next, prev])

  const getCategoryName = (category: string) => {
    if (language !== 'te') {
      return category
    }

    const translations: Record<string, string> = {
      'Temple Construction': 'ఆలయ నిర్మాణం',
      'Old Temple': 'పాత ఆలయం',
      'Temple Events': 'ఆలయ కార్యక్రమాలు',
      Festivals: 'పండుగలు',
      'Devotees & Community': 'భక్తులు & గ్రామ ప్రజలు',
      'Material Donations': 'సామగ్రి విరాళాలు',
    }

    return translations[category] ?? category
  }

  return (
    <section
      id="gallery"
      className="relative mx-auto max-w-7xl px-5 py-28 md:px-8"
    >

      {/* Gallery Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {(['All', ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat)
              setLightboxIndex(null)
            }}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors ${
              filter === cat
                ? 'border-gold bg-gold/15 text-gold-light'
                : 'border-gold/20 text-beige/70 hover:border-gold/40 hover:text-ivory'
            }`}
          >
            {cat === 'All'
              ? t.gallery.all
              : getCategoryName(cat)}
          </button>
        ))}
      </div>

      {/* Gallery Images */}
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group mb-4 block w-full overflow-hidden rounded-xl border border-gold/15 text-left"
          >
            {/* Image keeps its natural aspect ratio */}
            <div className="w-full overflow-hidden">
              <PlaceholderPhoto
                src={img.src}
                alt={img.caption}
                label={img.caption}
                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Category */}
            <p className="border-t border-gold/10 bg-charcoal/60 px-3 py-2 text-xs text-beige/70">
              {getCategoryName(img.category)}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight-deep/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={
              language === 'te'
                ? 'చిత్ర వీక్షణ'
                : 'Image viewer'
            }
          >

            {/* Close */}
            <button
              className="absolute right-5 top-5 rounded-full border border-gold/30 p-2 text-ivory"
              onClick={close}
              aria-label={t.common.close}
            >
              <X size={20} />
            </button>

            {/* Previous */}
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 p-2 text-ivory md:left-8"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label={t.common.previous}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 p-2 text-ivory md:right-8"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label={t.common.next}
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Lightbox */}
            <motion.div
              key={lightboxIndex}
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="max-h-[90vh] w-auto max-w-[90vw] overflow-hidden rounded-2xl border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Natural image size */}
              <div className="max-h-[80vh] max-w-[90vw] overflow-auto">
                <PlaceholderPhoto
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].caption}
                  label={filtered[lightboxIndex].caption}
                  className="h-auto max-h-[80vh] w-auto max-w-[90vw] object-contain"
                />
              </div>

              <p className="bg-charcoal/80 px-4 py-3 text-sm text-beige/80">
                {filtered[lightboxIndex].caption}
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}