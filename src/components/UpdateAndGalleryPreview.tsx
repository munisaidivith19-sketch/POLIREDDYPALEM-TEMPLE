import PlaceholderPhoto from './PlaceholderPhoto'
import { constructionStages } from '../data/construction'
import { galleryImages } from '../data/contact'
import { constructionProgress } from '../data/temple'
import { useLanguage } from '../i18n/LanguageContext'

export default function UpdateAndGalleryPreview() {
  const { language } = useLanguage()

  const isTelugu = language === 'te'

  const currentStage =
    constructionStages.find(
      (s) => s.status === 'in-progress',
    ) ?? constructionStages[0]

  const previewImages = galleryImages.slice(0, 5)

  return (
    <section className="section-cream relative pb-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[1fr_2fr] md:px-8">

        {/* Latest Update */}
        <div className="card-light p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <span aria-hidden="true">🛕</span>

            {isTelugu
              ? 'తాజా సమాచారం'
              : 'Latest Update'}
          </h3>

          <div className="mt-4 flex gap-3">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
              <PlaceholderPhoto
                src={currentStage.image}
                alt={currentStage.name}
                label={currentStage.name}
              />
            </div>

            <div>
              <p className="text-sm text-ink">
                {isTelugu
                  ? `${constructionProgress.currentStageName} నిర్మాణం జరుగుతోంది.`
                  : `${constructionProgress.currentStageName} is in progress.`}
              </p>

              <p className="mt-1 text-xs text-ink-soft/60">
                {constructionProgress.lastUpdated}
              </p>
            </div>
          </div>

          <a
            href="#/construction"
            className="mt-4 inline-block text-sm font-semibold text-gold-dim hover:underline"
          >
            {isTelugu
              ? 'అన్ని నిర్మాణ నవీకరణలను చూడండి →'
              : 'View All Updates →'}
          </a>
        </div>

        {/* Gallery */}
        <div className="card-light p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <span aria-hidden="true">🛕</span>

            {isTelugu
              ? 'చిత్రాల గ్యాలరీ'
              : 'Gallery'}
          </h3>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {previewImages.map((img, i) => (
              <a
                key={i}
                href="#/gallery"
                className="aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105"
              >
                <PlaceholderPhoto
                  src={img.src}
                  alt={img.caption}
                  label={img.category}
                />
              </a>
            ))}
          </div>

          <a
            href="#/gallery"
            className="mt-4 inline-block text-sm font-semibold text-gold-dim hover:underline"
          >
            {isTelugu
              ? 'పూర్తి గ్యాలరీని చూడండి →'
              : 'View Full Gallery →'}
          </a>
        </div>

      </div>
    </section>
  )
}