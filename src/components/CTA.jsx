import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-[#0e182c]">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to feel the Gs?</h2>
            <p className="mt-3 text-white/70">Book an exclusive track session with a performance specialist. Limited slots weekly.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Full name" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
              <input type="email" placeholder="Email address" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
              <input type="text" placeholder="Preferred model" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40 sm:col-span-2" />
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-sky-50 transition sm:col-span-2">Request test drive</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
