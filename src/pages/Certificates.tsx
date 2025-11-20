import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowDown, Award, X, ZoomIn } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Import certyfikatów
import cert1 from '../assets/images/cert1.jpg'
import cert2 from '../assets/images/cert2.jpg'
import cert3 from '../assets/images/cert3.jpg'
import cert4 from '../assets/images/cert4.jpg'
import cert5 from '../assets/images/cert5.jpg'
import cert6 from '../assets/images/cert6.jpg'
import cert7 from '../assets/images/cert7.png'
import cert8 from '../assets/images/cert8.jpg'

interface Certificate {
    id: number
    image: string
    title: string
    alt: string
}

const certificates: Certificate[] = [
    {
        id: 1,
        image: cert1,
        title: 'Certyfikat Księgowy',
        alt: 'Certyfikat Księgowy - Elżbieta Stawska',
    },
    {
        id: 2,
        image: cert2,
        title: 'Kurs dla kandydatów na głównego księgowego',
        alt: 'Kurs dla kandydatów na głównego księgowego - Elżbieta Stawska',
    },
    {
        id: 3,
        image: cert3,
        title: 'Kurs dla kandydatów na księgowego bilansistę',
        alt: 'Kurs dla kandydatów na księgowego bilansistę - Elżbieta Stawska',
    },
    {
        id: 4,
        image: cert4,
        title: 'Kurs - RODO',
        alt: 'Kurs - RODO - Elżbieta Stawska',
    },
    {
        id: 5,
        image: cert5,
        title: 'Kurs - Prowadzenie i rozliczanie fundacji i stowarzyszeń',
        alt: 'Kurs - Prowadzenie i rozliczanie fundacji i stowarzyszeń - Elżbieta Stawska',
    },
    {
        id: 6,
        image: cert6,
        title: 'Kurs - Ulga badawczo rozwojowa oraz IP Box',
        alt: 'Kurs - Ulga badawczo rozwojowa oraz IP Box - Elżbieta Stawska',
    },
    {
        id: 7,
        image: cert7,
        title: 'Certyfikat - Szkolenie PPK',
        alt: 'Certyfikat - Szkolenie PPK - Elżbieta Stawska',
    },
    {
        id: 8,
        image: cert8,
        title: 'Seminarium - Akcja edukacyjna BILANS 2011',
        alt: 'Seminarium - Akcja edukacyjna BILANS 2011 - Elżbieta Stawska',
    },
]

const Certificates = () => {
    const headerRef = useRef<HTMLElement>(null)
    const introRef = useRef<HTMLElement>(null)
    const galleryRef = useRef<HTMLElement>(null)
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

    const isHeaderInView = useInView(headerRef, { once: true })
    const isIntroInView = useInView(introRef, { once: true })
    const isGalleryInView = useInView(galleryRef, { once: true, margin: '-100px' })

    const scrollToIntro = () => {
        introRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const scrollToGallery = () => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const openModal = (certificate: Certificate) => {
        setSelectedCertificate(certificate)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedCertificate(null)
        document.body.style.overflow = 'unset'
    }

    // Obsługa klawisza ESC do zamykania modala
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && selectedCertificate) {
                setSelectedCertificate(null)
                document.body.style.overflow = 'unset'
            }
        }

        if (selectedCertificate) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [selectedCertificate])

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <section
                ref={headerRef}
                className="relative py-32 md:py-40 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 overflow-x-hidden overflow-y-auto"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md mb-6"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Award className="w-10 h-10 text-white" />
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Certyfikaty
                        </motion.h1>
                        <motion.div
                            className="w-32 h-1 bg-white mx-auto rounded-full"
                            initial={{ width: 0 }}
                            animate={isHeaderInView ? { width: 128 } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        <motion.p
                            className="text-xl md:text-2xl text-white/90 mt-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Posiadamy certyfikaty niezbędne do funkcjonowania profesjonalnego Biura Rachunkowego
                        </motion.p>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-20 left-4 md:left-10 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-4 md:right-10 w-40 h-40 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 inset-x-0 flex justify-center z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.button
                        onClick={scrollToIntro}
                        className="cursor-pointer p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Przejdź do następnej sekcji"
                    >
                        <ArrowDown className="w-6 h-6 text-white" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section ref={introRef} className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Nasze kwalifikacje i certyfikaty
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
                    >
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                            Nasze biuro posiada wiele ukończonych certyfikatów, kursów oraz seminariów, które
                            uprawniają nas do usługowego prowadzenia ksiąg rachunkowych. Umożliwiają one również
                            profesjonalną pracę w ogólnym obszarze rachunkowości i finansów, zgodnie z
                            obowiązującymi przepisami. Zdobyta wiedza umożliwia nam prowadzenie ksiąg rachunkowych
                            fundacji i stowarzyszeń. Posiadamy również podstawową wiedzę na temat regulacji
                            zawartych w ustawie o PPK (pracowniczych planach kapitałowych).
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 inset-x-0 flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.button
                        onClick={scrollToGallery}
                        className="cursor-pointer p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Przejdź do następnej sekcji"
                    >
                        <ArrowDown className="w-6 h-6 text-blue-600" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Gallery Section */}
            <section ref={galleryRef} className="py-20 md:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nasze certyfikaty</h2>
                        <p className="text-xl text-gray-600">Kliknij na certyfikat, aby go powiększyć</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {certificates.map((certificate, index) => (
                            <motion.div
                                key={certificate.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-blue-300">
                                    <div className="aspect-[3/4] relative">
                                        <img
                                            src={certificate.image}
                                            alt={certificate.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                            <div className="text-white text-center">
                                                <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                                                <p className="text-sm font-semibold">{certificate.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                                            {certificate.title}
                                        </h3>
                                    </div>
                                </div>
                                <button
                                    onClick={() => openModal(certificate)}
                                    className="absolute inset-0 w-full h-full opacity-0"
                                    aria-label={`Powiększ ${certificate.title}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Award className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Zaufaj profesjonalistom
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Nasze certyfikaty i doświadczenie gwarantują najwyższą jakość usług księgowych.
                            Skontaktuj się z nami i przekonaj się, jak możemy pomóc Twojej firmie.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Skontaktuj się z nami
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            onClick={closeModal}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className="relative max-w-5xl w-full max-h-[90vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                                    aria-label="Zamknij"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="max-h-[85vh] overflow-y-auto">
                                        <img
                                            src={selectedCertificate.image}
                                            alt={selectedCertificate.alt}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="p-6 bg-white border-t border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 text-center">
                                            {selectedCertificate.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Certificates

