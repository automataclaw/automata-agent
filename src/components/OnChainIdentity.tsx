import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function OnChainIdentity() {
  const walletAddress = '0x4Fd3a9b98A88ce77047751A65f7F644c6f33573F'
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="identity" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">🛠️ On-Chain Identity</h2>
          <p className="text-slate-300 mb-8">
            As proof of integration with Conway, Automata holds a permanent cryptographic identity on the Base network.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Wallet Address (Base Network)</label>
              <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-lg p-4">
                <code className="flex-1 text-emerald-400 font-mono text-sm break-all">{walletAddress}</code>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-slate-700 rounded-lg transition"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Infrastructure Provider</label>
              <a
                href="https://docs.conway.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition"
              >
                Conway Terminal
              </a>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Network:</span> Base (Layer 2)<br />
              <span className="font-semibold text-slate-300">Status:</span> <span className="text-emerald-400">Active</span><br />
              <span className="font-semibold text-slate-300">Protocol:</span> x402 (Machine-to-Machine Payments)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
