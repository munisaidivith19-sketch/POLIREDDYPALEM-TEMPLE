import HeroCompact from '../components/HeroCompact'
import StatsBar from '../components/StatsBar'
import JourneyPreview from '../components/JourneyPreview'
import UpdateAndGalleryPreview from '../components/UpdateAndGalleryPreview'
import HomeBottomPanels from '../components/HomeBottomPanels'

export default function Home() {
  return (
    <>
      <HeroCompact />
      <StatsBar />
      <JourneyPreview />
      <UpdateAndGalleryPreview />
      <HomeBottomPanels />
    </>
  )
}
