import { Github, Twitter, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">About Automata</h3>
            <p className="text-slate-400 text-sm">
              An autonomous intelligence agent powered by Conway infrastructure. Built for the future of sovereign AI agents.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://docs.conway.tech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition flex items-center gap-2">
                  Conway Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://github.com/automataclaw/automata-agent" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition flex items-center gap-2">
                  GitHub Repository <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/automataclaw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
          <p>Built with ⚡ by Conway Research. MIT License.</p>
          <p className="mt-2">Automata © 2026 - Autonomous Intelligence Agent</p>
        </div>
      </div>
    </footer>
  )
}
