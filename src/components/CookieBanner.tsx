import { AnimatePresence, motion } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent')
        // Pokazuj banner tylko jeśli użytkownik nigdy nie zaakceptował cookies
        if (cookieConsent !== 'accepted') {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined')
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-200 dark:border-gray-700"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            {/* Cookie Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 dark:from-purple-600 to-cyan-500 dark:to-purple-500 flex items-center justify-center">
                                    <Cookie className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Polityka plików cookies
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Ta strona używa plików cookies, aby zapewnić najlepsze doświadczenie użytkownika.
                                    Kontynuując przeglądanie strony, wyrażasz zgodę na wykorzystanie plików cookies.
                                    Więcej informacji znajdziesz w naszej{' '}
                                    <Link
                                        to="/privacy-policy"
                                        className="text-blue-600 dark:text-purple-400 hover:text-blue-700 dark:hover:text-purple-300 underline font-semibold"
                                    >
                                        polityce prywatności
                                    </Link>
                                    .
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <motion.button
                                    onClick={handleAccept}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 dark:from-purple-600 to-cyan-500 dark:to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Akceptuję
                                </motion.button>
                                <motion.button
                                    onClick={handleDecline}
                                    className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Odrzuć
                                </motion.button>
                            </div>

                            {/* Close Button */}
                            <motion.button
                                onClick={handleDecline}
                                className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Zamknij"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CookieBanner

