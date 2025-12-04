import { motion, useInView } from 'framer-motion'
import { Shield } from 'lucide-react'
import { useRef } from 'react'
import StructuredData from '../components/StructuredData'

const PrivacyPolicy = () => {
    const headerRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLElement>(null)
    const isHeaderInView = useInView(headerRef, { once: true })
    const isContentInView = useInView(contentRef, { once: true, margin: '-100px' })

    const sections = [
        {
            title: '1. Informacje ogólne',
            content: `Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług świadczonych przez TES - Biuro Rachunkowe (zwane dalej "Biurem") za pośrednictwem strony internetowej.

Administratorem danych osobowych jest TES - Biuro Rachunkowe z siedzibą przy ul. Stefana Żeromskiego 7/9, 98-220 Zduńska Wola.`,
        },
        {
            title: '2. Rodzaje przetwarzanych danych',
            content: `Biuro przetwarza następujące kategorie danych osobowych:
- Dane identyfikacyjne (imię, nazwisko)
- Dane kontaktowe (adres e-mail, numer telefonu)
- Dane dotyczące komunikacji (treść wiadomości przesłanych przez formularz kontaktowy)
- Dane techniczne (adres IP, typ przeglądarki, informacje o urządzeniu)`,
        },
        {
            title: '3. Cel i podstawa prawna przetwarzania danych',
            content: `Dane osobowe są przetwarzane w następujących celach:
- Realizacja usług księgowych i rachunkowych (podstawa: wykonanie umowy)
- Obsługa zapytań i komunikacja z klientami (podstawa: zgoda lub wykonanie umowy)
- Wypełnienie obowiązków prawnych ciążących na Administratorze (podstawa: obowiązek prawny)
- Marketing własnych usług (podstawa: zgoda)
- Zabezpieczenie i rozwój strony internetowej (podstawa: prawnie uzasadniony interes)`,
        },
        {
            title: '4. Okres przechowywania danych',
            content: `Dane osobowe będą przechowywane przez okres:
- Niezbędny do realizacji celów, dla których zostały zebrane
- Wymagany przepisami prawa (w szczególności przepisami podatkowymi i rachunkowymi)
- Do momentu wycofania zgody (w przypadku przetwarzania na podstawie zgody)
- Do momentu wniesienia skutecznego sprzeciwu wobec przetwarzania danych`,
        },
        {
            title: '5. Pliki cookies',
            content: `Strona internetowa wykorzystuje pliki cookies, które są małymi plikami tekstowymi zapisywanymi na urządzeniu użytkownika. Pliki cookies są wykorzystywane w celu:
- Zapewnienia prawidłowego działania strony internetowej
- Analizy ruchu na stronie
- Personalizacji treści

Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.`,
        },
        {
            title: '6. Prawa użytkownika',
            content: `Użytkownik ma prawo do:
- Dostępu do swoich danych osobowych
- Sprostowania (poprawiania) danych osobowych
- Usunięcia danych osobowych
- Ograniczenia przetwarzania danych osobowych
- Przenoszenia danych osobowych
- Wniesienia sprzeciwu wobec przetwarzania danych osobowych
- Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych)`,
        },
        {
            title: '7. Udostępnianie danych osobowych',
            content: `Dane osobowe mogą być udostępniane:
- Podmiotom świadczącym usługi IT i hostingowe
- Organom państwowym na podstawie obowiązujących przepisów prawa
- Innym podmiotom wyłącznie za wyraźną zgodą użytkownika

Biuro nie przekazuje danych osobowych do państw trzecich ani organizacji międzynarodowych.`,
        },
        {
            title: '8. Bezpieczeństwo danych',
            content: `Biuro stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę danych osobowych przed nieuprawnionym dostępem, utratą, zniszczeniem lub modyfikacją. Wszystkie dane są przechowywane na bezpiecznych serwerach z odpowiednimi zabezpieczeniami.`,
        },
        {
            title: '9. Zmiany w polityce prywatności',
            content: `Biuro zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Wszelkie zmiany będą publikowane na tej stronie. Zalecamy regularne zapoznawanie się z treścią Polityki Prywatności.`,
        },
        {
            title: '10. Kontakt',
            content: `W sprawach dotyczących przetwarzania danych osobowych oraz realizacji praw użytkownika, można skontaktować się z Administratorem:
- E-mail: rachunkowe@rbiuro.pl
- Telefon: +48 501 668 545
- Adres: ul. Stefana Żeromskiego 7/9, 98-220 Zduńska Wola`,
        },
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <StructuredData />
            {/* Hero Header */}
            <section
                ref={headerRef}
                className="relative py-32 md:py-40 bg-gradient-to-br from-blue-600 dark:from-purple-700 via-blue-500 dark:via-purple-600 to-cyan-500 dark:to-purple-500 overflow-x-hidden overflow-y-auto"
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
                            <Shield className="w-10 h-10 text-white" />
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Polityka Prywatności
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
                            Ochrona Twoich danych osobowych jest dla nas priorytetem
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
            </section>

            {/* Content Section */}
            <section ref={contentRef} className="py-20 md:py-32 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                            <strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Szanujemy Twoją prywatność i zobowiązujemy się do ochrony Twoich danych osobowych.
                            Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy
                            informacje przekazane nam podczas korzystania z naszej strony internetowej.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 rounded-2xl p-8 md:p-10 shadow-lg border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-purple-500 transition-all duration-300"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 bg-gradient-to-r from-blue-600 dark:from-purple-600 to-cyan-500 dark:to-purple-400 bg-clip-text text-transparent">
                                    {section.title}
                                </h2>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: sections.length * 0.1 }}
                        className="mt-12 p-6 bg-gradient-to-r from-blue-50 dark:from-purple-900/30 to-cyan-50 dark:to-purple-800/30 rounded-2xl border-2 border-blue-200 dark:border-purple-700"
                    >
                        <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                            Jeśli masz jakiekolwiek pytania dotyczące naszej Polityki Prywatności,
                            skontaktuj się z nami korzystając z{' '}
                            <a href="/contact" className="text-blue-600 dark:text-purple-400 hover:text-blue-700 dark:hover:text-purple-300 underline font-semibold">
                                formularza kontaktowego
                            </a>
                            {' '}lub bezpośrednio pod adresem: rachunkowe@rbiuro.pl
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy



