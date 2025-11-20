import { motion, useInView } from 'framer-motion'
import {
  ArrowDown,
  Award,
  Briefcase,
  Clock,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

interface AboutSection {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  align: 'left' | 'right'
  color: 'blue' | 'light'
}

const aboutSections: AboutSection[] = [
  {
    icon: Award,
    title: 'Ponad 20 Lat Doświadczenia w Branży Księgowej',
    description: 'Witamy w naszym biurze rachunkowym, sercu finansowej precyzji w Zduńskiej Woli. Od ponad dwóch dekad jesteśmy zaufanym partnerem dla przedsiębiorstw z całej Polski i indywidualnych klientów, dostarczając usługi księgowe na najwyższym poziomie.',
    align: 'left',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Zespół Ekspertów',
    description: 'Nasze biuro z dumą wspiera kilku wykwalifikowanych księgowych, każdy z bogatym doświadczeniem i specjalistyczną wiedzą. Nasz zespół to nie tylko eksperci w swojej dziedzinie, ale także ludzie z pasją, którzy nieustannie podnoszą swoje kwalifikacje, aby świadczyć usługi na najwyższym poziomie.',
    align: 'right',
    color: 'light',
  },
  {
    icon: Zap,
    title: 'Nowoczesne Rozwiązania dla Twojej Firmy',
    description: 'Rozumiemy, jak dynamicznie zmienia się świat biznesu, dlatego nasze biuro łączy tradycję z nowoczesnością. Stosujemy najnowsze technologie księgowe i systemy informatyczne, aby zapewnić naszym klientom efektywność, bezpieczeństwo danych i łatwy dostęp do informacji finansowych.',
    align: 'left',
    color: 'blue',
  },
  {
    icon: Briefcase,
    title: 'Nasze Usługi',
    description: 'Oferujemy kompleksową obsługę księgową, w tym prowadzenie ksiąg rachunkowych, KPiR, ryczałtu ewidencjonowanego, rozliczenia z ZUS, obsługę kadrowo-płacową oraz pomoc w zakresie audytu i kontrolingu finansowego.',
    align: 'right',
    color: 'light',
  },
  {
    icon: Heart,
    title: 'Zaangażowanie i Indywidualne Podejście',
    description: 'Każdy klient jest dla nas ważny. Z zaangażowaniem podchodzimy do indywidualnych potrzeb i oczekiwań, co pozwala nam budować długotrwałe i owocne relacje. Naszym celem jest nie tylko świadczenie usług księgowych, ale także wspieranie rozwoju Twojego biznesu.',
    align: 'left',
    color: 'blue',
  },
]

const stats = [
  { icon: Clock, value: '20+', label: 'Lat Doświadczenia' },
  { icon: Users, value: '500+', label: 'Zadowolonych Klientów' },
  { icon: Target, value: '100%', label: 'Dokładność' },
  { icon: Shield, value: '24/7', label: 'Wsparcie' },
]

const AboutSectionCard = ({ section, index }: { section: AboutSection; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = section.icon

  return (
    <motion.div
      ref={ref}
      className={`mb-16 md:mb-24 ${section.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
        } flex flex-col md:flex-row items-center gap-8 md:gap-12`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content */}
      <div className={`flex-1 p-8 md:p-12 rounded-3xl ${section.color === 'blue'
        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white'
        : 'bg-gray-50 text-gray-900 border-2 border-gray-200'
        } shadow-xl`}>
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{
            backgroundColor: section.color === 'blue' ? 'rgba(255,255,255,0.2)' : 'rgba(59, 130, 246, 0.1)',
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon className={`w-8 h-8 ${section.color === 'blue' ? 'text-white' : 'text-blue-600'}`} />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {section.title}
        </h2>

        <p className="text-lg leading-relaxed opacity-90">
          {section.description}
        </p>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="hidden md:block flex-1 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        <div
          className={`w-full h-64 rounded-3xl ${section.color === 'blue'
            ? 'bg-gradient-to-br from-blue-200 to-cyan-200'
            : 'bg-gradient-to-br from-blue-500 to-cyan-500'
            } opacity-20 blur-3xl`}
        ></div>
      </motion.div>
    </motion.div>
  )
}

const About = () => {
  const headerRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const isStatsInView = useInView(statsRef, { once: true })

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              O NAS
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
              Twoje zaufane biuro rachunkowe z ponad 20-letnim doświadczeniem
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
            onClick={scrollToStats}
            className="cursor-pointer p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Przejdź do następnej sekcji"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <StatIcon className="w-8 h-8" />
                  </motion.div>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
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
            onClick={scrollToContent}
            className="cursor-pointer p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Przejdź do następnej sekcji"
          >
            <ArrowDown className="w-6 h-6 text-blue-600" />
          </motion.button>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <section ref={contentRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {aboutSections.map((section, index) => (
            <AboutSectionCard key={index} section={section} index={index} />
          ))}
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
              Skontaktuj się z nami już dziś i przekonaj się, jak możemy pomóc
              Twojej firmie osiągnąć sukces finansowy.
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

export default About

