import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0B1220] to-[#0b1b36]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(56,189,248,0.2),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
        >
          Race into the future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/70"
        >
          Dual-motor precision, aerospace-grade materials, and an interface that anticipates your next move. Experience performance redefined.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <a href="#models" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-sky-50 transition">
            Explore models
          </a>
          <a href="#test-drive" className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition">
            Book a test drive
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent" />
    </section>
  )
}
