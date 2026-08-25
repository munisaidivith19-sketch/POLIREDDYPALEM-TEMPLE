import PageHeader from '../components/PageHeader'
import TempleInfo from '../components/TempleInfo'
import History from '../components/History'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Sri Venkateshwara Swami"
        title="About the Temple"
        subtitle="The story, significance, and traditions of the temple being built in Polireddypale."
      />
      <TempleInfo />
      <History />
    </>
  )
}
