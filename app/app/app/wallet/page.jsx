"use client";

import { useState } from "react";
import {
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  ShieldCheck,
  Copy,
  Check,
  Loader2,
} from "lucide-react";

export default function WalletPage() {
  const [active, setActive] = useState("deposit");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [operator, setOperator] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function createDeposit() {
    setStatus("");

    if (!phone || !amount || !operator) {
      setStatus("Please fill in all deposit fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          amount,
          operator,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Deposit request failed.");
        return;
      }

      setStatus(
        `Sandbox request created. Transaction ID: ${data.transaction.id}`
      );
    } catch (error) {
      setStatus("Unable to connect to METROPOLY server.");
    } finally {
      setLoading(false);
    }
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
              Deposit TZS
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Create a sandbox deposit request using
              Tanzania mobile money.
            </p>

            {/* OPERATOR */}
            <div className="mt-6">
              <label className="text-xs text-gray-500">
                Mobile Money
              </label>

              <select
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
              >
                <option value="">
                  Select operator
                </option>

                <option value="mpesa">
                  M-Pesa
                </option>

                <option value="airtel">
                  Airtel Money
                </option>

                <option value="mixx">
                  Mixx by Yas
                </option>

                <option value="halopesa">
                  HaloPesa
                </option>
              </select>
            </div>

            {/* PHONE */}
            <div className="mt-4">
              <label className="text-xs text-gray-500">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07XXXXXXXX"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
              />
            </div>

            {/* AMOUNT */}
            <div className="mt-4">
              <label className="text-xs text-gray-500">
                Amount (TZS)
              </label>

              <input
                type="number"
                min="100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={createDeposit}
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold transition hover:bg-red-500 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <ArrowDownToLine size={20} />
                  Create Deposit Request
                </>
              )}
            </button>

            {/* STATUS */}
            {status && (
              <div className="mt-4 rounded-xl border border-white/10 bg-black p-4 text-sm text-gray-300 break-all">
                {status}
              </div>
            )}

          </section>
        )}

        {/* WITHDRAW */}
        {active === "withdraw" && (
          <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-bold">
              Withdraw
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Withdrawals will be enabled after the
              legitimate payment provider is connected.
            </p>

            <div className="mt-6 space-y-4">

              <div>
                <label className="text-xs text-gray-500">
                  Mobile Money
                </label>

                <select className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none">
                  <option>Select operator</option>
                  <option>M-Pesa</option>
                  <option>Airtel Money</option>
                  <option>Mixx by Yas</option>
                  <option>HaloPesa</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="07XXXXXXXX"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  Amount (TZS)
                </label>

                <input
                  type="number"
                  placeholder="0"
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
              Deposits are currently in sandbox mode.
              No real money is moved by this page.
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
