import { Eye, Brain, Zap, Lock } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: '24/7 Intelligence',
      description: 'Real-time monitoring of Twitter activity, GitHub commits, and whale transactions across the crypto ecosystem.',
    },
    {
      icon: Brain,
      title: 'AI Relevance Scoring',
      description: 'Uses Conway Compute to filter noise and deliver only high-value signals that matter to your strategy.',
    },
    {
      icon: Zap,
      title: 'Autonomous Operations',
      description: 'Capable of managing its own infrastructure and deploying resources on-demand without human intervention.',
    },
    {
      icon: Lock,
      title: 'Self-Sustaining',
      description: 'Manages its own USDC balance to cover Conway infrastructure costs via the x402 protocol.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-8 hover:border-emerald-500 transition">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
