// Construction journey timeline.
// Only stages that are real and confirmed should have status other than "upcoming".
// Add the matching photograph to /public/images/temple/construction/ and
// reference it in `image` below (or leave null to show a placeholder).

export type StageStatus = 'completed' | 'in-progress' | 'upcoming'

export interface ConstructionStage {
  id: string
  number: number
  name: string
  date: string
  description: string
  image: string | null
  status: StageStatus
}

export const constructionStages: ConstructionStage[] = [
  {
    id: 'old-temple',
    number: 1,
    name: 'OLD TEMPLE',
    date: '1960s',
    description:
      'Thambi Reddy Ramana Reddy From chennai. Built the original temple in the 1960s, which served the community for decades.',
    image:'/images/temple/old-temple/oldtemple.webp',
    status: 'completed',
  },
  {
    id: 'planning',
    number: 2,
    name: 'NEW TEMPLE FOUNDATION CEREMONY',
    date: '20/02/2026',
    description:
      'With the blessings of Lord Sri Venkateshwara  and the collective support of the people of Polireddypalem, the construction of the new temple began. This marked the beginning of a new chapter, carrying forward the devotion and traditions of the old temple into a new temple for future generations.',
    image: "/images/temple/construction/constructionbegin.webp",
    status: 'completed',
  },
  {
    id: 'basement',
    number: 3,
    name: 'BASEMENT CONSTRUCTION',
    date: '17/03/2026',
    description: 'The basement construction marked an important step in the building of the new Venkateshwara Swami Temple. The foundation and base structure were carefully developed to provide a strong and stable foundation for the temple that will rise above it.',
    image: "/images/temple/construction/basement.webp",
    status: 'completed',
  },
  {
    id: 'main-structure',
    number: 4,
    name: 'GARBHALAYAM CONSTRUCTION',
    date: '12/04/2026',
    description: 'The Garbhalayam, the sacred inner sanctum of the new Venkateshwara Swami Temple, is taking shape as an important part of the temple construction. This sacred space is being constructed with care and devotion as the central spiritual area of the temple, where Lord Sri Venkateshwara Swami will be worshipped.',
    image: "/images/temple/construction/restplace.webp",
    status: 'completed',
  },
  {
    id: 'salab',
    number: 5,
    name: 'ROOF CONSTRUCTION',
    date: '29/05/2026',
    description: 'The slab construction marks another important stage in the development of the new Venkateshwara Swami Temple. The concrete slab is being constructed to strengthen and define the upper structure of the temple, bringing the building closer to its planned architectural form.',
    image: "/images/temple/construction/salab.webp",
    status: 'completed',
  },
  {
    id: 'gopuram',
    number: 6,
    name: 'GOPURAM CONSTRUCTION',
    date: '21/06/2024',
    description: 'The construction of the Gopuram will mark a significant stage in the development of the new Venkateshwara Swami Temple. The traditional temple tower will add to the spiritual and architectural identity of the temple and will stand as a visible symbol of the devotion and collective efforts of the community.',
    image: "/images/temple/construction/gopuram.webp",
    status: 'completed',
  },
  {
    id: 'bajana ',
    number: 7,
    name: 'BAJANA MANDAPAM CONSTRUCTION',
    date: '.',
    description: 'The Bhajana Mandapam is being constructed as a sacred space for bhajans, devotional singing, and spiritual gatherings. It will provide devotees with a peaceful place to come together and continue the villages devotional traditions.',
    image: '/images/temple/construction/bajana.webp',
    status: 'upcoming',
  },
 
]
