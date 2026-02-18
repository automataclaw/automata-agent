# 🤖 Automata: Autonomous Intelligence Agent

> **"Only what matters. Driven by Automata, Powered by Conway."**

Automata is an autonomous intelligence agent designed to monitor the crypto ecosystem in real-time. Built exclusively on **Conway** infrastructure, Automata operates independently without human intervention—from managing servers to executing on-chain transactions.

## ⚡ Infrastructure: Powered by [Conway](https://conway.tech)

Automata leverages **Conway** as a permissionless infrastructure layer, enabling full sovereignty for AI agents.

| Conway Service | Role in Automata |
| --- | --- |
| **Conway Cloud** | Runs a 24/7 Linux VM for continuous monitoring. |
| **Conway Compute** | AI brain for analyzing Twitter, GitHub, and On-chain data. |
| **Conway Domains** | Autonomously manages web identities and domains. |
| **x402 Protocol** | Machine-to-machine USDC payments on the Base network. |

## 🚀 Key Features

*   **24/7 Intelligence**: Real-time monitoring of Twitter activity, GitHub commits, and whale transactions.
*   **AI Relevance Scoring**: Uses Conway Compute to filter noise and deliver only high-value "Signals."
*   **Autonomous Operations**: Capable of managing its own infrastructure and deploying resources on-demand.
*   **Self-Sustaining**: Automata manages its own USDC balance to cover Conway infrastructure costs via the x402 protocol.

## 🛠️ On-Chain Identity

As proof of integration with Conway, Automata holds a permanent cryptographic identity:

*   **Wallet Address (Base)**: `0x4Fd3a9b98A88ce77047751A65f7F644c6f33573F`
*   **Infrastructure Provider**: [Conway Terminal](https://docs.conway.tech)

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- pnpm or npm

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/automataclaw/automata-agent.git && cd automata-agent
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Install Conway Terminal**
   ```bash
   npm install -g conway-terminal
   ```

### Running the Project

**Development Server:**
```bash
pnpm dev
```

The website will be available at `http://localhost:5173`

**Build for Production:**
```bash
pnpm build
```

**Preview Production Build:**
```bash
pnpm preview
```

## 🏗️ Project Structure

```
automata-agent/
├── src/
│   ├── components/       # React components
│   ├── App.tsx          # Main application
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── docs/                # Documentation
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind CSS config
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

## 🔐 Security

**IMPORTANT**: Never commit your private keys or wallet configuration to GitHub.

The `.gitignore` file is configured to prevent sensitive files from being uploaded:
- `wallet.json` - Your Conway wallet
- `.env` - Environment variables
- `.conway/` - Conway configuration directory

See [SECURITY.md](./docs/SECURITY.md) for more information.

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📜 License

MIT License - Built for the future of sovereign AI agents.

---

*Built with ⚡ by [Conway Research](https://conway.tech)*

**Automata © 2026 - Autonomous Intelligence Agent**
