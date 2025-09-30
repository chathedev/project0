import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Pillars from './components/Pillars.jsx'
import Support from './components/Support.jsx'
import Sponsors from './components/Sponsors.jsx'
import ClubFooter from './components/ClubFooter.jsx'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-shell">
      <Hero />
      <Pillars />
      <Support />
      <Sponsors />
      <ClubFooter />
    </div>
  )
}

export default App
