import { useState } from 'react'
import { Menu, X, Car, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Models', href: '#models' },
    { label: 'Technology', href: '#tech' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg flex items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white">
              <Car className="h-5 w-5" />
            </div>
            <span className="text-white font-semibold tracking-wide flex items-center gap-1">
              Velo<span className="text-sky-300">X</span>
              <Sparkles className="h-4 w-4 text-sky-300" />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-white/80 hover:text-white transition">
                {n.label}
              </a>
            ))}
            <a href="#test-drive" className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium px-4 py-2 rounded-xl hover:bg-sky-50 transition">
              Book a drive
            </a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-4">
            <div className="flex flex-col gap-3">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                  {n.label}
                </a>
              ))}
              <a href="#test-drive" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-medium px-4 py-2 rounded-xl hover:bg-sky-50 transition">
                Book a drive
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
