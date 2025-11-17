import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Models from './components/Models'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black text-white">
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Models />
      <CTA />
      <footer className="bg-[#0e182c] py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} VeloX Motors. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
