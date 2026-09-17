"use client";

import { useState } from "react";
import {
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";

export default function WalletPage() {
  const [active, setActive] = useState("deposit");
  const [copied, setCopied] = useState(false);

  // This is a placeholder until a real wallet/payment provider is connected.
  const depositAddress = "Connect real wallet provider";

  function copyAddress() {
    if (depositAddress.startsWith("Connect")) return;

    navigator.clipboard.writeText(depositAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-6 text-white">
      <div className="mx-auto max-w-3xl">

        {/* HEADER */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/20">
            <Wallet className="text-red-500" size={25} />
          </div>

          <div>
            <h1 className="text-2xl font-black">
              METROPOLY WALLET
            </h1>

            <p className="text-sm text-gray-500">
              Manage your digital assets
            </p>
          </div>
        </div>

        {/* BALANCE */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-gray-500">
            Total Balance
          </p>

          <h2 className="mt-2 text-4xl font-black">
            $0.00
          </h2>

          <p className="mt-2 text-xs text-gray-600">
            Available balance
          </p>
        </section>

        {/* TABS */}
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-white/[0.03] p-1">
          <button
            onClick={() => setActive("deposit")}
            className={`flex items-center justify-center gap-2 rounded-lg py-3 font-bold ${
              active === "deposit"
                ? "bg-red-600 text-white"
                : "text-gray-500"
            }`}
          >
            <ArrowDownToLine size={18} />
            Deposit
          </button>

          <button
            onClick={() => setActive("withdraw")}
            className={`flex items-center justify-center gap-2 rounded-lg py-3 font-bold ${
              active === "withdraw"
                ? "bg-red-600 text-white"
                : "text-gray-500"
            }`}
          >
            <ArrowUpFromLine size={18} />
            Withdraw
          </button>
        </div>

        {/* DEPOSIT */}
        {active === "deposit" && (
          <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold">
              Deposit Crypto
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your deposit address will appear here after a
              legitimate wallet provider is connected.
            </p>

            <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
              <p className="text-sm text-yellow-400">
                Wallet connection required
              </p>

              <p className="mt-1 text-xs text-gray-500">
                No real deposit address is generated yet.
                Never send funds to an unverified address.
              </p>
            </div>

            <div className="mt-5">
              <label className="text-xs text-gray-500">
                Deposit Address
              </label>

              <div className="mt-2 flex gap-2">
                <input
                  value={depositAddress}
                  readOnly
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-gray-500 outline-none"
                />

                <button
                  onClick={copyAddress}
                  disabled={depositAddress.startsWith("Connect")}
                  className="rounded-xl border border-white/10 px-4 text-gray-500"
                >
                  {copied ? (
                    <Check size={19} />
                  ) : (
                    <Copy size={19} />
                  )}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* WITHDRAW */}
        {active === "withdraw" && (
          <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold">
              Withdraw
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Withdrawals will become available after a
              legitimate payment/wallet provider is connected.
            </p>

            <div className="mt-6 space-y-4">

              <div>
                <label className="text-xs text-gray-500">
                  Network
                </label>

                <select className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none">
                  <option>Select network</option>
                  <option>Bitcoin</option>
                  <option>Ethereum</option>
                  <option>BNB Smart Chain</option>
                  <option>Solana</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  Wallet Address
                </label>

                <input
                  type="text"
                  placeholder="Enter recipient wallet address"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  Amount
                </label>

                <input
                  type="number"
                  placeholder="0.00"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <button
                disabled
                className="w-full rounded-xl bg-red-600/40 py-4 font-bold text-gray-400"
              >
                Withdraw — Provider Required
              </button>

            </div>
          </section>
        )}

        {/* SECURITY */}
        <div className="mt-6 flex gap-3 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
          <ShieldCheck
            className="shrink-0 text-green-500"
            size={22}
          />

          <div>
            <p className="text-sm font-semibold text-green-400">
              Secure Wallet
            </p>

            <p className="mt-1 text-xs text-gray-500">
              METROPOLY will only process real deposits and
              withdrawals through verified services.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-700">
          © 2026 METROPOLY
        </p>

      </div>
    </main>
  );
      }
