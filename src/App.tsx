import { Suspense, lazy, useEffect, useState } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import CookieBanner from './components/CookieBanner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { DarkModeProvider } from './contexts/DarkModeContext'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Offer = lazy(() => import('./pages/Offer'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

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
    <DarkModeProvider>
      <GoogleReCaptchaProvider
        reCaptchaKey={recaptchaSiteKey}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        <Router>
          <ScrollToTopOnRouteChange />
          <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
          <Navbar isScrolled={isScrolled} />
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-600 dark:border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollToTop />
          <CookieBanner />
          </div>
        </Router>
      </GoogleReCaptchaProvider>
    </DarkModeProvider>
  )
}

export default App
