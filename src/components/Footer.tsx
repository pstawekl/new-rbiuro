import { motion } from 'framer-motion'
import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400 dark:text-purple-400">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 dark:text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    ul. Stefana Żeromskiego 7/9
                    <br />
                    98-220 Zduńska Wola
                    <br />
                    <span className="text-sm text-gray-400">
                      (Wejście od ul. Przejazd)
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 dark:text-purple-400 flex-shrink-0" />
                <a
                  href="tel:+48501668545"
                  className="text-gray-300 hover:text-blue-400 dark:hover:text-purple-400 transition-colors"
                >
                  +48 501 668 545
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 dark:text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:rachunkowe@rbiuro.pl"
                  className="text-gray-300 hover:text-blue-400 dark:hover:text-purple-400 transition-colors"
                >
                  rachunkowe@rbiuro.pl
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400 dark:text-purple-400">Godziny otwarcia</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-400 dark:text-purple-400 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <p>Poniedziałek - Piątek</p>
                <p className="font-semibold text-white">8:00 - 16:00</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400 dark:text-purple-400">Śledź nas</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/BiuroRachunkoweTes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook naszego biura rachunkowego"
                className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-950 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:rachunkowe@rbiuro.pl"
                aria-label="Wyślij e-mail do biura rachunkowego"
                className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-950 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="tel:+48501668545"
                aria-label="Zadzwoń do biura rachunkowego, numer 501 668 545"
                className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-950 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-950 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="font-bold text-white">TES</span> Wszelkie prawa zastrzeżone
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-bold text-white">TES</span> by{' '}
              <a
                href="https://interactive.net.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 dark:text-purple-400 hover:text-blue-300 dark:hover:text-purple-300 transition-colors"
              >
                Interactive
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

