import { motion, useInView } from 'framer-motion'
import {
    ArrowDown,
    Briefcase,
    Building2,
    Calculator,
    CheckCircle2,
    FileText,
    HeartHandshake,
    Landmark,
    TrendingUp,
    Users,
    Users2
} from 'lucide-react'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

interface Service {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
}

interface ClientType {
    name: string
    icon: React.ComponentType<{ className?: string }>
}

const services: Service[] = [
    {
        icon: FileText,
        title: 'Księgi Przychodów i Rozchodów',
        description: 'Profesjonalne prowadzenie KPiR dla osób fizycznych prowadzących działalność gospodarczą.',
    },
    {
        icon: Calculator,
        title: 'Ryczałt ewidencjonowany',
        description: 'Obsługa ryczałtu od przychodów ewidencjonowanych dla uprawnionych podatników.',
    },
    {
        icon: Building2,
        title: 'Księgi Rachunkowe',
        description: 'Pełna obsługa księgowości dla spółek i innych podmiotów zobowiązanych do prowadzenia pełnej księgowości.',
    },
    {
        icon: Briefcase,
        title: 'Obsługa Kadrowo Płacowa',
        description: 'Kompleksowa obsługa kadrowa, naliczanie wynagrodzeń, rozliczenia z ZUS i urzędami skarbowymi.',
    },
]

const clientTypes: ClientType[] = [
    { name: 'Osoby fizyczne', icon: Users },
    { name: 'Spółki', icon: Building2 },
    { name: 'Fundacje', icon: HeartHandshake },
    { name: 'Stowarzyszenia', icon: Users2 },
    { name: 'Inne podmioty', icon: Landmark },
]

const Offer = () => {
    const headerRef = useRef<HTMLElement>(null)
    const introRef = useRef<HTMLElement>(null)
    const servicesRef = useRef<HTMLElement>(null)
    const clientsRef = useRef<HTMLElement>(null)

    const isHeaderInView = useInView(headerRef, { once: true })
    const isIntroInView = useInView(introRef, { once: true })
    const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
    const isClientsInView = useInView(clientsRef, { once: true, margin: '-100px' })

    const scrollToIntro = () => {
        introRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const scrollToClients = () => {
        clientsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

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
                            <Briefcase className="w-10 h-10 text-white" />
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Oferta
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
                            Oferujemy pełen zakres usług księgowych
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
            <section
                ref={introRef}
                className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white relative"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Kompleksowa obsługa księgowa
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
                            Nasze biuro rachunkowe oferuje kompleksową obsługę księgową dla firm, obejmującą
                            prowadzenie ksiąg, rozliczenia podatkowe oraz wsparcie w tworzeniu strategii finansowych.
                            Zapewniając profesjonalizm, dokładność i terminowość, pomaga przedsiębiorstwom skupić
                            się na rozwoju biznesu.
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
                        onClick={scrollToServices}
                        className="cursor-pointer p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Przejdź do następnej sekcji"
                    >
                        <ArrowDown className="w-6 h-6 text-blue-600" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Services Section */}
            <section
                ref={servicesRef}
                className="py-20 md:py-32 bg-white relative"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Nasze usługi
                        </h2>
                        <p className="text-xl text-gray-600">
                            Zajmujemy się prowadzeniem
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-transparent hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl">
                                        <motion.div
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-6 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Icon className="w-8 h-8" />
                                        </motion.div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Decorative element */}
                                        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 inset-x-0 flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.button
                        onClick={scrollToClients}
                        className="cursor-pointer p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Przejdź do następnej sekcji"
                    >
                        <ArrowDown className="w-6 h-6 text-blue-600" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Client Types Section */}
            <section
                ref={clientsRef}
                className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isClientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Obsługujemy różne podmioty
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            Nasza oferta obejmuje usługi księgowe dla:
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {clientTypes.map((clientType, index) => {
                            const Icon = clientType.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isClientsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl h-full flex flex-col items-center justify-center">
                                        <motion.div
                                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 flex items-center justify-center"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </motion.div>
                                        <p className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                            {clientType.name}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Additional info for individuals */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isClientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
                    >
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-start gap-4 mb-4">
                                <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                        Osoby fizyczne
                                    </h3>
                                    <p className="text-lg md:text-xl leading-relaxed opacity-90">
                                        Oferujemy kompleksową obsługę dla osób fizycznych prowadzących działalność gospodarczą,
                                        w tym podatkową księgę przychodów i rozchodów, ryczałt ewidencjonowany oraz inne formy
                                        rozliczeń podatkowych.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                        <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Gotowy na współpracę?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Skontaktuj się z nami już dziś i dowiedz się, jak możemy pomóc Twojej firmie
                            w prowadzeniu księgowości.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
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
        </div>
    )
}

export default Offer

