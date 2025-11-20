import emailjs from '@emailjs/browser'
import { motion, useInView } from 'framer-motion'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ArrowDown, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useRef, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    href?: string
}

const contactInfo: ContactInfo[] = [
    {
        icon: Phone,
        label: 'Telefon',
        value: '+48 501 668 545',
        href: 'tel:+48501668545',
    },
    {
        icon: Mail,
        label: 'E-mail',
        value: 'rachunkowe@r-biuro.pl',
        href: 'mailto:rachunkowe@r-biuro.pl',
    },
    {
        icon: MapPin,
        label: 'Adres',
        value: 'ul. Stefana Żeromskiego 7/9, 98-220 Zduńska Wola\n(Wejście od ul. Przejazd)',
    },
]

const Contact = () => {
    const headerRef = useRef<HTMLElement>(null)
    const contactInfoRef = useRef<HTMLElement>(null)
    const formRef = useRef<HTMLElement>(null)
    const form = useRef<HTMLFormElement>(null)
    const { executeRecaptcha } = useGoogleReCaptcha()

    const isHeaderInView = useInView(headerRef, { once: true })
    const isContactInfoInView = useInView(contactInfoRef, { once: true })
    const isFormInView = useInView(formRef, { once: true, margin: '-100px' })
    const isMapInView = useInView(formRef, { once: true, margin: '-100px' })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState<string>('')


    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Clear error message when user starts typing
        if (formStatus === 'error') {
            setFormStatus('idle')
            setErrorMessage('')
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus('sending')
        setErrorMessage('')

        // Check if EmailJS is configured
        if (
            EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
            EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
            EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
        ) {
            setFormStatus('error')
            setErrorMessage(
                'EmailJS nie jest skonfigurowany. Skontaktuj się z administratorem strony lub użyj bezpośredniego kontaktu: rachunkowe@r-biuro.pl'
            )
            return
        }

        // Check if reCAPTCHA is available
        if (!executeRecaptcha) {
            setFormStatus('error')
            setErrorMessage(
                'reCAPTCHA nie jest dostępna. Odśwież stronę i spróbuj ponownie.'
            )
            return
        }

        try {
            if (!form.current) {
                throw new Error('Formularz nie jest dostępny')
            }

            // Execute reCAPTCHA v3 before sending the form
            const recaptchaToken = await executeRecaptcha('contact_form')

            if (!recaptchaToken) {
                throw new Error('Nie udało się zweryfikować reCAPTCHA. Spróbuj ponownie.')
            }

            // Send email using EmailJS sendForm
            const result = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            )

            if (result.text === 'OK') {
                setFormStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setFormStatus('idle'), 5000)
            } else {
                throw new Error('Wystąpił błąd podczas wysyłania wiadomości')
            }
        } catch (error) {
            console.error('Form Error:', error)
            setFormStatus('error')
            if (error instanceof Error && error.message.includes('reCAPTCHA')) {
                setErrorMessage(error.message)
            } else {
                setErrorMessage(
                    'Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio: rachunkowe@r-biuro.pl'
                )
            }
        }
    }

    const scrollToContactInfo = () => {
        contactInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // Coordinates for Zduńska Wola
    const position: [number, number] = [51.601739, 18.942516]

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
                            <Mail className="w-10 h-10 text-white" />
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Kontakt
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
                            Skontaktuj się z nami!
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
                        onClick={scrollToContactInfo}
                        className="cursor-pointer p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Przejdź do następnej sekcji"
                    >
                        <ArrowDown className="w-6 h-6 text-white" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Contact Info Section */}
            <section ref={contactInfoRef} className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isContactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Informacje kontaktowe</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isContactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 h-full flex flex-col items-center text-center">
                                        <motion.div
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-6 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Icon className="w-8 h-8" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{info.label}</h3>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-lg text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg text-gray-600 whitespace-pre-line">{info.value}</p>
                                        )}
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
                        onClick={scrollToForm}
                        className="cursor-pointer p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Przejdź do następnej sekcji"
                    >
                        <ArrowDown className="w-6 h-6 text-blue-600" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Contact Form and Map Section */}
            <section ref={formRef} className="py-20 md:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Napisz do nas</h2>
                        <p className="text-xl text-gray-600">Wypełnij formularz, a skontaktujemy się z Tobą</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Map - Left Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isMapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-2 lg:order-1 flex flex-col"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 flex-1 min-h-[500px] lg:min-h-0">
                                <MapContainer
                                    center={position}
                                    zoom={20}
                                    style={{ height: '100%', width: '100%' }}
                                    className="z-0"
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position}>
                                        <Popup>
                                            <div className="text-center">
                                                <strong>TES - Biuro Rachunkowe</strong>
                                                <br />
                                                ul. Stefana Żeromskiego 7/9
                                                <br />
                                                98-220 Zduńska Wola
                                                <br />
                                                <small>(Wejście od ul. Przejazd)</small>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </motion.div>

                        {/* Form - Right Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-100 h-full">
                                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Twoje Imię
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
                                            placeholder="Wprowadź swoje imię"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Twój adres e-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
                                            placeholder="twoj@email.pl"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Twoja wiadomość
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none bg-white"
                                            placeholder="Napisz swoją wiadomość..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                                        whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                                    >
                                        {formStatus === 'sending' ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                />
                                                Wysyłanie...
                                            </>
                                        ) : formStatus === 'success' ? (
                                            <>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-5 h-5 rounded-full bg-white flex items-center justify-center"
                                                >
                                                    <motion.div
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="w-3 h-3 border-2 border-green-500 border-t-transparent border-r-transparent rounded-full"
                                                    />
                                                </motion.div>
                                                Wiadomość wysłana!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Wyślij
                                            </>
                                        )}
                                    </motion.button>

                                    {formStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center text-green-600 font-medium"
                                        >
                                            Dziękujemy! Skontaktujemy się z Tobą wkrótce.
                                        </motion.div>
                                    )}

                                    {formStatus === 'error' && errorMessage && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center text-red-600 font-medium bg-red-50 border-2 border-red-200 rounded-xl p-4"
                                        >
                                            {errorMessage}
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact

