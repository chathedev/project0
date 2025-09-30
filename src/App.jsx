import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import NewsMatches from './components/NewsMatches.jsx'
import TeamsPlayers from './components/TeamsPlayers.jsx'
import Sponsors from './components/Sponsors.jsx'
import Membership from './components/Membership.jsx'
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
      <NewsMatches />
      <TeamsPlayers />
      <Sponsors />
      <Membership />
      <ClubFooter />
    </div>
  )
}

export default App
