"use client";

import { useState } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Bitcoin,
  Menu,
  X,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Markets");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-black/80 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-wider text-red-500">
              METROPOLY
            </h1>
            <p className="text-xs text-gray-500">Digital Asset Platform</p>
          </div>

          <nav className="hidden gap-6 md:flex">
            {["Markets", "Trade", "Wallet", "History"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-sm transition ${
                  activeTab === item
                    ? "font-bold text-red-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-4 max-w-7xl space-y-2 md:hidden">
            {["Markets", "Trade", "Wallet", "History"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setMenuOpen(false);
                }}
                className="block w-full rounded-lg bg-white/5 px-4 py-3 text-left text-gray-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* DASHBOARD */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-400">Wallet Balance</span>
              <Wallet className="text-red-500" size={21} />
            </div>

            <h2 className="text-3xl font-bold">$0.00</h2>
            <p className="mt-1 text-xs text-gray-500">
              Available balance
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-400">Portfolio</span>
              <TrendingUp className="text-green-500" size={21} />
            </div>

            <h2 className="text-3xl font-bold">$0.00</h2>
            <p className="mt-1 text-xs text-gray-500">
              Current portfolio value
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-400">24h Change</span>
              <TrendingDown className="text-gray-500" size={21} />
            </div>

            <h2 className="text-3xl font-bold">0.00%</h2>
            <p className="mt-1 text-xs text-gray-500">
              Live market movement
            </p>
          </div>
        </div>

        {/* WALLET ACTIONS */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 font-bold transition hover:bg-red-500">
            <ArrowDownToLine size={20} />
            Deposit
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-bold transition hover:bg-white/10">
            <ArrowUpFromLine size={20} />
            Withdraw
          </button>
        </div>

        {/* MARKETS */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Crypto Markets</h2>
              <p className="text-sm text-gray-500">
                Live market data will appear here
              </p>
            </div>

            <Bitcoin className="text-orange-400" size={28} />
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            {[
              ["Bitcoin", "BTC", "$0.00"],
              ["Ethereum", "ETH", "$0.00"],
              ["Solana", "SOL", "$0.00"],
              ["BNB", "BNB", "$0.00"],
            ].map(([name, symbol, price]) => (
              <div
                key={symbol}
                className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] p-4 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold">
                    {symbol[0]}
                  </div>

                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">{symbol}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{price}</p>
                  <p className="text-xs text-gray-500">Loading...</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRADE PANEL */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-xl font-bold">Trade</h2>
          <p className="mt-1 text-sm text-gray-500">
            Trading interface will connect to real market data.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button className="rounded-xl border border-green-500/30 bg-green-500/10 py-4 font-bold text-green-400 hover:bg-green-500/20">
              BUY
            </button>

            <button className="rounded-xl border border-red-500/30 bg-red-500/10 py-4 font-bold text-red-400 hover:bg-red-500/20">
              SELL
            </button>
          </div>
        </section>

        {/* SECURITY NOTICE */}
        <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-sm text-gray-400">
          <strong className="text-yellow-400">Security notice:</strong>{" "}
          Deposits and withdrawals will be connected only to legitimate,
          verifiable payment/crypto services. No fake balances or fake
          transaction confirmations will be used.
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-white/10 px-4 py-6 text-center text-xs text-gray-600">
        © 2026 METROPOLY — Digital Asset Platform
      </footer>
    </main>
  );
}
