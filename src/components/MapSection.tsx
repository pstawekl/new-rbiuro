import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { motion, useInView } from 'framer-motion'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const MapSection = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Coordinates for Zduńska Wola
  const position: [number, number] = [51.5992, 18.9397]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Znajdź nas
          </h2>
          <p className="text-xl text-gray-600">
            ul. Stefana Żeromskiego 7/9, 98-220 Zduńska Wola
          </p>
          <p className="text-lg text-gray-500 mt-2">
            (Wejście od ul. Przejazd)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: '500px', width: '100%' }}
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
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection

