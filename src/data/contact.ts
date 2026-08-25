// Replace every [PLACEHOLDER] with official, committee-confirmed information.

export const contactInfo = {
  email: 'polireddypalemtemple@gmail.com',
  phone: [
  {
    name: 'K.MUNI VENKATA RATHNAM',
    number: '+91 9704879200',
  },
  {
    name: 'A.JAYA KRISHNA',
    number: '+91 9959477100',
  },
  {
    name: 'N.RAMESH',
    number: '+91 9989765095',
  },
],  
  address:
    'Polireddypale Village, Doravarisatram Mandal, Tirupati District, Andhra Pradesh, India',
  // Once the temple committee shares the exact Google Maps link for the
  // temple location, paste it here — the Visit page will use it directly.
  googleMapsUrl: 'https://maps.app.goo.gl/ERVC91BgBKz55Fdb6',
  googleMapsDirectionsUrl: 'https://maps.app.goo.gl/ERVC91BgBKz55Fdb6',
}

export const bankDetails = {
  bankName: 'CANARA BANK',
  accountHolderName: 'SRI VENKATESWARA SWAMY DEVASTHANAM TRUST',
  accountNumber: '120033176876',
  ifscCode: 'CNRB0013502',
  branch: 'DORAVARISATRAM',
  upiId: 'COMING SOON',
  qrCodeImage: "/public/images/temple/qrcode.webp",
}

export const galleryCategories = [
  'Old Temple',
  'Template',
  'Latest Updates',
  'Festivals',
  'Temple Events',
  
] as const

export interface GalleryImage {
  src: string | null
  category: (typeof galleryCategories)[number]
  caption: string
}

// Add real photographs to /public/images/temple/gallery/ and list them here.
// Until then, each entry renders as a clearly-marked placeholder tile.
export const galleryImages: GalleryImage[] = [
  { src: "/images/temple/old-temple/oldtemple.webp", category: 'Old Temple', caption: 'Old temple photograph' },
  { src: "/images/temple/gallery/pamplate.webp", category: 'Template', caption: '[Template photograph]' },
  //{ src: null, category: 'Latest Updates', caption: '[Latest update photograph]' },
  //{ src: null, category: 'Festivals', caption: '[Festival photograph]' },
  //{ src: null, category: 'Temple Events', caption: '[Event photograph]' },
]
