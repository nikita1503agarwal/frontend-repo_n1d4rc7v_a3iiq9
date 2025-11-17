import { motion } from 'framer-motion'

const cars = [
  {
    name: 'VeloX R',
    tag: 'Track Focused',
    img: 'https://images.unsplash.com/photo-1542367597-8849eb928a0e?q=80&w=1200&auto=format&fit=crop',
    specs: ['2.9s 0-100', '310 km/h', 'AWD']
  },
  {
    name: 'VeloX GT',
    tag: 'Grand Tourer',
    img: 'https://images.unsplash.com/photo-1517710977110-58f3c4560a6b?q=80&w=1200&auto=format&fit=crop',
    specs: ['3.4s 0-100', '290 km/h', 'RWD']
  },
  {
    name: 'VeloX E',
    tag: 'Urban Electric',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    specs: ['4.2s 0-100', '220 km/h', 'FWD']
  }
]

export default function Models() {
  return (
    <section id="models" className="relative py-24 bg-gradient-to-b from-[#0B1220] to-[#0e182c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Choose your machine</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Three personalities. One relentless pursuit of speed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <motion.a
              key={car.name}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center text-xs text-sky-300/90 bg-sky-300/10 rounded-full px-2 py-1">{car.tag}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{car.name}</h3>
                <div className="mt-3 flex items-center gap-3 text-sm text-white/70">
                  {car.specs.map(s => (
                    <span key={s} className="px-2 py-1 rounded-md bg-white/5 border border-white/10">{s}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
