import { motion } from 'framer-motion'
import { Gauge, Zap, Cpu, Shield } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: '0–100 km/h in 2.9s',
    desc: 'Twin electric motors deliver instant torque with precision traction control.'
  },
  {
    icon: Zap,
    title: '800V Fast Charge',
    desc: 'Up to 350kW charging for 10–80% in 18 minutes at compatible stations.'
  },
  {
    icon: Cpu,
    title: 'Neural Drive',
    desc: 'Adaptive AI driving suite with over-the-air performance updates.'
  },
  {
    icon: Shield,
    title: 'Carbon Safety Cell',
    desc: 'Aerospace-grade composite chassis with 5-star global safety rating.'
  }
]

export default function Features() {
  return (
    <section id="tech" className="relative py-24 bg-[#0B1220]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered to thrill</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Every component is tuned for speed, stability, and safety — without compromise.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-400/90 to-blue-600/90 grid place-items-center text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
