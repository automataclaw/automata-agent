import { Activity, Zap, Shield, TrendingUp, Github, Twitter, Cpu } from 'lucide-react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Features from './components/Features'
import OnChainIdentity from './components/OnChainIdentity'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Dashboard />
      <Features />
      <OnChainIdentity />
      <Footer />
    </div>
  )
}

export default App
