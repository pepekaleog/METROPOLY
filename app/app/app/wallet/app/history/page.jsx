"use client";

import { useState } from "react";
import {
  History,
  ArrowDownToLine,
  ArrowUpFromLine,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const demoTransactions = [
  {
    id: "DEMO-001",
    type: "Deposit",
    amount: "1,000",
    currency: "TZS",
    method: "M-Pesa",
    status: "Pending",
    date: "Demo transaction",
  },
];

export default function HistoryPage() {
  const [transactions] = useState(demoTransactions);

  function statusIcon(status) {
    if (status === "Completed") {
      return <CheckCircle2 size={18} className="text-green-400" />;
    }

    if (status === "Failed") {
      return <XCircle size={18} className="text-red-400" />;
    }

    return <Clock3 size={18} className="text-yellow-400" />;
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-6 text-white">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/20">
            <History className="text-red-500" size={25} />
          </div>

          <div>
            <h1 className="text-2xl font-black">
              TRANSACTION HISTORY
            </h1>

            <p className="text-sm text-gray-500">
              Your wallet activity
            </p>
          </div>
        </div>

        {/* TABLE */}
        <section className="overflow-hidden rounded-2xl border border-white/10">

          {/* DESKTOP HEADER */}
          <div className="hidden grid-cols-6 gap-4 border-b border-white/10 bg-white/[0.04] p-4 text-xs font-bold text-gray-500 md:grid">
            <span>TYPE</span>
            <span>AMOUNT</span>
            <span>METHOD</span>
            <span>STATUS</span>
            <span>DATE</span>
            <span>ID</span>
          </div>

          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="border-b border-white/10 bg-white/[0.02] p-4 last:border-0"
            >

              {/* DESKTOP */}
              <div className="hidden grid-cols-6 items-center gap-4 md:grid">

                <div className="flex items-center gap-2">
                  <ArrowDownToLine
                    size={18}
                    className="text-green-400"
                  />
                  <span>{transaction.type}</span>
                </div>

                <span>
                  {transaction.amount} {transaction.currency}
                </span>

                <span className="text-gray-400">
                  {transaction.method}
                </span>

                <div className="flex items-center gap-2">
                  {statusIcon(transaction.status)}
                  <span>{transaction.status}</span>
                </div>

                <span className="text-gray-500">
                  {transaction.date}
                </span>

                <span className="truncate text-xs text-gray-600">
                  {transaction.id}
                </span>

              </div>

              {/* MOBILE */}
              <div className="space-y-3 md:hidden">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <ArrowDownToLine
                      size={18}
                      className="text-green-400"
                    />

                    <span className="font-bold">
                      {transaction.type}
                    </span>
                  </div>

                  <span className="font-bold">
                    {transaction.amount} {transaction.currency}
                  </span>

                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Method
                  </span>

                  <span>
                    {transaction.method}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Status
                  </span>

                  <span className="flex items-center gap-2">
                    {statusIcon(transaction.status)}
                    {transaction.status}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Date
                  </span>

                  <span>
                    {transaction.date}
                  </span>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <p className="text-xs text-gray-600">
                    Transaction ID
                  </p>

                  <p className="mt-1 break-all text-xs text-gray-500">
                    {transaction.id}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </section>

        {/* NOTICE */}
        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">

          <p className="text-sm font-semibold text-yellow-400">
            Sandbox mode
          </p>

          <p className="mt-1 text-xs text-gray-500">
            The transaction shown above is only a demo record.
            Real transactions will appear here after the payment
            provider and database are connected.
          </p>

        </div>

        <p className="mt-8 text-center text-xs text-gray-700">
          © 2026 METROPOLY
        </p>

      </div>
    </main>
  );
          }
