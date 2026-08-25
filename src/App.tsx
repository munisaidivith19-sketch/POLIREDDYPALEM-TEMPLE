import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useHashRoute } from './hooks/useHashRoute'
import Home from './pages/Home'
import About from './pages/About'
import ConstructionPage from './pages/ConstructionPage'
import GalleryPage from './pages/GalleryPage'
import DonorsPage from './pages/DonorsPage'
import DonationPage from './pages/DonationPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const { route } = useHashRoute()

  const renderPage = () => {
    switch (route) {
      case '/about':
        return <About />
      case '/construction':
        return <ConstructionPage />
      case '/gallery':
        return <GalleryPage />
      case '/donors':
        return <DonorsPage />
      case '/donation':
        return <DonationPage />
      case '/contact':
        return <ContactPage />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar route={route} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  )
}
