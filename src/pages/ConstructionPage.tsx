import PageHeader from '../components/PageHeader'
import ConstructionJourney from '../components/ConstructionJourney'

export default function ConstructionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Chapter by Chapter"
        title="Construction Journey"
        subtitle="From the old temple to the temple rising today — select any stage to step inside it."
      />
      <ConstructionJourney />
    </>
  )
}
