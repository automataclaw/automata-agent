import { Activity, Cloud, Cpu, Globe } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    { label: 'Conway Cloud', value: 'Active', icon: Cloud, status: 'online' },
    { label: 'Conway Compute', value: 'Running', icon: Cpu, status: 'online' },
    { label: 'Monitoring', value: '24/7', icon: Activity, status: 'online' },
    { label: 'On-Chain', value: 'Connected', icon: Globe, status: 'online' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Only What Matters
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Automata is an autonomous intelligence agent that monitors the crypto ecosystem 24/7, powered by Conway infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-emerald-500 transition">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-emerald-400" />
                  <div className={`w-3 h-3 rounded-full ${stat.status === 'online' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></div>
                </div>
                <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
