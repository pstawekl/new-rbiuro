import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToNext = (): void => {
    const nextSection = document.getElementById('features')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gradient-to-br from-blue-50 dark:from-gray-900 via-white dark:via-gray-900 to-cyan-50 dark:to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-200 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'tween',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-200 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'tween',
          }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'tween',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold mb-6 px-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 dark:from-purple-600 via-blue-500 dark:via-purple-500 to-cyan-500 dark:to-purple-400 bg-clip-text text-transparent block mb-2">
              TES
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200 block">
              Biuro rachunkowe w Zduńskiej Woli
            </span>
          </motion.h1>

          {/* <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            TWOJE BIURO RACHUNKOWE
          </motion.p> */}

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Profesjonalna księgowa w Zduńskiej Woli. Obsługa i dbałość o Twoje.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Zaufaj nam, byś mógł skupić się na rozwijaniu swojego biznesu.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Dowiedz się więcej
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 inset-x-0 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          onClick={scrollToNext}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown className="w-8 h-8 text-blue-600 dark:text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

