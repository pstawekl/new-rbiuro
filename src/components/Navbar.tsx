import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext'

interface NavbarProps {
    isScrolled: boolean
}

interface NavItem {
    name: string
    href: string
    path: string
}

const Navbar = ({ isScrolled }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const location = useLocation()
    const { isDark, toggleDarkMode } = useDarkMode()

    const navItems: NavItem[] = [
        { name: 'Home', href: '#home', path: '/' },
        { name: 'O nas', href: '#about', path: '/about' },
        { name: 'Oferta', href: '#offer', path: '/offer' },
        { name: 'Certyfikaty', href: '#certificates', path: '/certificates' },
        { name: 'Kontakt', href: '#contact', path: '/contact' },
    ]

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const handleLinkClick = (item: NavItem) => {
        setIsMobileMenuOpen(false)
        // Jeśli jesteśmy na stronie głównej i klikamy link z hash, scrolluj do sekcji
        if (location.pathname === '/' && item.href.startsWith('#')) {
            const element = document.querySelector(item.href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    // Determine navbar background: white if mobile menu is open, otherwise based on scroll state
    const getNavbarBg = () => {
        if (isMobileMenuOpen) {
            return 'bg-white dark:bg-gray-900 shadow-lg'
        }
        return isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBg()}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2"
                    >
                        <motion.span
                            className={`text-2xl font-bold ${isMobileMenuOpen || isScrolled || location.pathname === '/'
                                ? 'bg-gradient-to-r from-blue-600 dark:from-purple-600 to-cyan-500 dark:to-purple-500 bg-clip-text text-transparent'
                                : 'bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-md text-blue-600 dark:text-purple-400'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            TES
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {(() => {
                            const isHomePage = location.pathname === '/'
                            const textColorClass = isHomePage
                                ? `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400`
                                : isScrolled
                                    ? `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400`
                                    : `text-white hover:text-blue-200 dark:hover:text-purple-300`

                            return (
                                <>
                                    {navItems.map((item, index) => {
                                        const isActive = location.pathname === item.path
                                        const itemTextColorClass = `${textColorClass} ${isActive ? (isHomePage || isScrolled ? 'text-blue-600 dark:text-purple-400' : 'text-blue-200 dark:text-purple-300') : ''}`
                                        const underlineColorClass = (isHomePage || isScrolled) ? 'bg-blue-600 dark:bg-purple-600' : 'bg-white dark:bg-gray-800'

                                        return (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                {item.name === 'Home' ? (
                                                    <Link
                                                        to={item.path}
                                                        className={`${itemTextColorClass} font-medium transition-colors relative group`}
                                                    >
                                                        {item.name}
                                                        <span className={`absolute bottom-0 left-0 h-0.5 ${underlineColorClass} transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                            }`}></span>
                                                    </Link>
                                                ) : item.path === '/' && item.href.startsWith('#') ? (
                                                    <a
                                                        href={item.href}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleLinkClick(item)
                                                        }}
                                                        className={`${itemTextColorClass} font-medium transition-colors relative group`}
                                                    >
                                                        {item.name}
                                                        <span className={`absolute bottom-0 left-0 h-0.5 ${underlineColorClass} transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                            }`}></span>
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={item.path}
                                                        className={`${itemTextColorClass} font-medium transition-colors relative group`}
                                                    >
                                                        {item.name}
                                                        <span className={`absolute bottom-0 left-0 h-0.5 ${underlineColorClass} transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                            }`}></span>
                                                    </Link>
                                                )}
                                            </motion.div>
                                        )
                                    })}

                                    {/* Dark Mode Toggle */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: navItems.length * 0.1 }}
                                    >
                                        <motion.button
                                            onClick={toggleDarkMode}
                                            className={`${textColorClass} font-medium transition-colors relative group p-2`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={isDark ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
                                        >
                                            {isDark ? (
                                                <Sun className="w-5 h-5" />
                                            ) : (
                                                <Moon className="w-5 h-5" />
                                            )}
                                        </motion.button>
                                    </motion.div>
                                </>
                            )
                        })()}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            className={`p-2 rounded-lg transition-colors ${isMobileMenuOpen || location.pathname === '/' || isScrolled
                                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                : 'text-white hover:bg-white/20'
                                }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={isMobileMenuOpen ? 'open' : 'closed'}
                                className="w-6 h-6 flex flex-col justify-center space-y-1.5"
                            >
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 8 },
                                    }}
                                    className={`w-full h-0.5 rounded ${isMobileMenuOpen || location.pathname === '/' || isScrolled ? 'bg-gray-700' : 'bg-white'
                                        }`}
                                />
                                <motion.span
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 },
                                    }}
                                    className={`w-full h-0.5 rounded ${isMobileMenuOpen || location.pathname === '/' || isScrolled ? 'bg-gray-700' : 'bg-white'
                                        }`}
                                />
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -8 },
                                    }}
                                    className={`w-full h-0.5 rounded ${isMobileMenuOpen || location.pathname === '/' || isScrolled ? 'bg-gray-700' : 'bg-white'
                                        }`}
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="px-4 py-4 space-y-4">
                            {navItems.map((item, index) => {
                                const isActive = location.pathname === item.path
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item.name === 'Home' ? (
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 font-medium py-2 transition-colors ${isActive ? 'text-blue-600 dark:text-purple-400' : ''
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        ) : item.path === '/' && item.href.startsWith('#') ? (
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleLinkClick(item)
                                                }}
                                                className={`block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 font-medium py-2 transition-colors ${isActive ? 'text-blue-600 dark:text-purple-400' : ''
                                                    }`}
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 font-medium py-2 transition-colors ${isActive ? 'text-blue-600 dark:text-purple-400' : ''
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                )
                            })}

                            {/* Dark Mode Toggle in Mobile Menu */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.05 }}
                            >
                                <motion.button
                                    onClick={toggleDarkMode}
                                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 font-medium py-2 transition-colors flex items-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    aria-label={isDark ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
                                >
                                    {isDark ? (
                                        <>
                                            <Sun className="w-5 h-5" />
                                            <span>Tryb jasny</span>
                                        </>
                                    ) : (
                                        <>
                                            <Moon className="w-5 h-5" />
                                            <span>Tryb ciemny</span>
                                        </>
                                    )}
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
