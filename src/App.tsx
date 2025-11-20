import { useEffect, useState } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Offer from './pages/Offer'

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <Router>
        <ScrollToTopOnRouteChange />
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Navbar isScrolled={isScrolled} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </GoogleReCaptchaProvider>
  )
}

export default App
