import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 overflow-x-hidden overflow-y-auto"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nasze biuro rachunkowe jest podmiotem wyspecjalizowanym
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center">
            Prowadzimy podatkowe księgi przychodów i rozchodów (KPiR), ryczałt
            ewidencjonowany oraz pełne księgi rachunkowe. Obsługujemy firmy z całej
            Polski. Na życzenie Klienta odbieramy dokumenty z jego siedziby na terenie
            Zduńskiej Woli i okolic.
            <br />
            <br />
            <span className="font-semibold">
              Dzięki nowym technologiom pracujemy również zdalnie.
            </span>
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
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
      </div>
    </section>
  )
}

export default Services

