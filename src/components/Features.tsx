import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Clock, Phone, Scale, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  image: string
  align: 'left' | 'right'
}

const features: Feature[] = [
  {
    icon: User,
    title: 'Indywidualne podejście do klienta',
    description: 'Zaufaj naszemu biuru rachunkowemu w Zduńskiej Woli i wypróbuj usługi, a przekonasz się, że Twoje dokumenty są w dobrych rękach doświadczonej księgowej.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    align: 'left',
  },
  {
    icon: Clock,
    title: 'Zawsze na Czas',
    description: 'Oferujemy profesjonalną i rzetelną obsługę, zawsze w terminie.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    align: 'right',
  },
  {
    icon: Phone,
    title: 'Wystarczy Jeden Telefon',
    description: 'Wystarczy jeden telefon +48 501 668 545 i już dziś możesz przestać martwić się o własne dokumenty.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    align: 'left',
  },
  {
    icon: Scale,
    title: 'Odpowiedni Balans',
    description: 'Nasza firma to odpowiednio wyważony balans między rzetelną pracą, jej szybkością oraz ceną.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    align: 'right',
  },
]

interface FeatureCardProps {
  feature: Feature
  index: number
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      id={index === 0 ? 'features' : undefined}
      className={`mb-24 md:mb-32 ${
        feature.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex flex-col md:flex-row items-center gap-8 md:gap-12`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content */}
      <div className="flex-1 space-y-6">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 dark:from-purple-500 to-cyan-500 dark:to-purple-400 text-white shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          {feature.title}
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 dark:from-purple-500 to-cyan-500 dark:to-purple-400 rounded-full"></div>
      </div>

      {/* Image */}
      <motion.div
        className="flex-1 relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 z-10"></div>
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-[300px] md:h-[400px] object-cover"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 50vw"
            width="800"
            height="400"
            fetchPriority={index === 0 ? "high" : "low"}
          />
        </div>
        {/* Decorative element */}
        <div
          className={`absolute -z-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-blue-200 dark:from-purple-600 to-cyan-200 dark:to-purple-500 rounded-full blur-3xl opacity-50 dark:opacity-30 ${
            feature.align === 'left' ? '-left-8 md:-left-16 -top-8 md:-top-16' : '-right-8 md:-right-16 -bottom-8 md:-bottom-16'
          }`}
        ></div>
      </motion.div>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Features

