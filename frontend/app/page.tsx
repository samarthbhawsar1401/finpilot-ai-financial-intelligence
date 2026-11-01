
"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  Target,
  ChartNoAxesCombined,
  BrainCircuit,
  Settings,
  Bell,
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  CreditCard,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const navigation = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Transactions", icon: ArrowLeftRight },
  { name: "Budgets", icon: Wallet },
  { name: "Goals", icon: Target },
  { name: "Analytics", icon: ChartNoAxesCombined },
  { name: "AI Assistant", icon: BrainCircuit },
];

const chartData = [
  { month: "Jan", income: 42000, expenses: 26000 },
  { month: "Feb", income: 48000, expenses: 31000 },
  { month: "Mar", income: 45000, expenses: 28000 },
  { month: "Apr", income: 52000, expenses: 34000 },
  { month: "May", income: 49000, expenses: 29000 },
  { month: "Jun", income: 58000, expenses: 35000 },
  { month: "Jul", income: 55000, expenses: 32000 },
];

const transactions = [
  { name: "Grocery Shopping", category: "Food & Groceries", date: "Today, 10:42 AM", amount: "-₹1,850", icon: "🛒", color: "bg-orange-500/10" },
  { name: "Netflix Subscription", category: "Entertainment", date: "Today, 09:15 AM", amount: "-₹649", icon: "🎬", color: "bg-red-500/10" },
  { name: "Freelance Payment", category: "Income", date: "Yesterday", amount: "+₹12,000", icon: "💻", color: "bg-emerald-500/10" },
  { name: "Electricity Bill", category: "Utilities", date: "Yesterday", amount: "-₹1,200", icon: "⚡", color: "bg-yellow-500/10" },
];

const formatRupees = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0D14] text-white">
      <div className="flex min-h-screen">

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/[0.07] bg-[#10121C] px-5 py-7 transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/25">
                <Wallet size={21} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">FinPilot</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Financial Intelligence</p>
              </div>
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-gray-400 lg:hidden">
              <X size={21} />
            </button>
          </div>

          <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            Workspace
          </p>

          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const selected = active === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setMobileOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all ${
                    selected
                      ? "bg-violet-600/15 font-medium text-violet-300 ring-1 ring-violet-500/20"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                  {item.name === "AI Assistant" && (
                    <Sparkles size={13} className="ml-auto text-violet-400" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto">
            <div className="mb-5 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/15 to-transparent p-4">
              <Sparkles size={20} className="mb-3 text-violet-400" />
              <p className="text-sm font-semibold">Meet FinPilot AI</p>
              <p className="mt-1 text-xs leading-5 text-gray-400">
                Understand your money and make smarter financial decisions.
              </p>
              <button
                onClick={() => setActive("AI Assistant")}
                className="mt-4 text-xs font-semibold text-violet-300 hover:text-violet-200"
              >
                Explore intelligence →
              </button>
            </div>

            <button
              onClick={() => setActive("Settings")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-white/[0.04]"
            >
              <Settings size={19} />
              Settings
            </button>

            <div className="mt-4 flex items-center gap-3 border-t border-white/[0.07] pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-700 font-bold">
                S
              </div>
              <div>
                <p className="text-sm font-medium">Samarth</p>
                <p className="text-xs text-gray-500">Personal Account</p>
              </div>
              <MoreHorizontal size={20} className="ml-auto text-gray-500" />
            </div>
          </div>
        </aside>

        {/* Main content */}
        <section className="min-w-0 flex-1 px-5 py-6 sm:px-8 lg:px-10 lg:py-9">

          {/* Header */}
          <header className="mb-9 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-lg border border-white/10 p-2 text-gray-300 lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div>
                <p className="text-sm text-gray-500">Saturday, November 1, 2026</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  Financial Overview
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Here's what's happening with your money.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-gray-400 md:flex">
                <Search size={16} />
                Search
                <span className="text-xs text-gray-600">⌘ K</span>
              </button>
              <button className="relative rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-300 hover:bg-white/[0.07]">
                <Bell size={18} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500" />
              </button>
              <button className="hidden items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 sm:flex">
                <Plus size={17} />
                Add Transaction
              </button>
            </div>
          </header>

          {/* Welcome banner */}
          <div className="relative mb-8 overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-r from-[#21183D] via-[#17182D] to-[#121827] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-28 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="relative">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-violet-300">
                <Sparkles size={14} />
                Your financial intelligence
              </div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Welcome back, Samarth 👋
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                Your finances are looking organized. Keep tracking your
                spending to build better financial habits.
              </p>
            </div>
          </div>

          {/* Financial cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Total Balance", amount: "₹84,250", change: "+12.8%", icon: Wallet, positive: true },
              { title: "Monthly Income", amount: "₹58,000", change: "+8.2%", icon: ArrowDownRight, positive: true },
              { title: "Monthly Expenses", amount: "₹32,450", change: "-4.6%", icon: ArrowUpRight, positive: true },
              { title: "Total Savings", amount: "₹25,550", change: "+18.4%", icon: Target, positive: true },
            ].map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-white/[0.07] bg-[#121520] p-5 transition hover:border-violet-500/30"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm text-gray-400">{card.title}</span>
                    <div className="rounded-xl bg-violet-500/10 p-2.5 text-violet-400">
                      <Icon size={19} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{card.amount}</h3>
                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <span className="flex items-center gap-1 font-semibold text-emerald-400">
                      <ArrowUpRight size={13} />
                      {card.change}
                    </span>
                    <span className="text-gray-500">vs last month</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Charts and insights */}
          <div className="mb-8 grid gap-5 xl:grid-cols-3">

            {/* Cash flow chart */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#121520] p-5 sm:p-6 xl:col-span-2">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-semibold">Cash Flow Overview</h3>
                  <p className="mt-1 text-xs text-gray-500">Income vs expenses</p>
                </div>
                <select className="rounded-lg border border-white/10 bg-[#1A1D2A] px-3 py-2 text-xs text-gray-300 outline-none">
                  <option>Last 7 months</option>
                  <option>Last 6 months</option>
                </select>
              </div>

              <div className="mb-5 flex gap-5 text-xs">
                <span className="flex items-center gap-2 text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  Income
                </span>
                <span className="flex items-center gap-2 text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Expenses
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#34D399" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ffffff" strokeOpacity={0.06} vertical={false} />
                    <XAxis dataKey="month" stroke="#73788C" tickLine={false} axisLine={false} fontSize={12} />
                    <YAxis
                      stroke="#73788C"
                      tickLine={false}
                      axisLine={false}
                      fontSize={11}
                      tickFormatter={(value) => `₹${value / 1000}k`}
                    />
                    <Tooltip
                      formatter={(value) => formatRupees(Number(value))}
                      contentStyle={{
                        background: "#1A1D2A",
                        border: "1px solid #343748",
                        borderRadius: "12px",
                        color: "#fff",
                      }}
                    />
                    <Area type="monotone" dataKey="income" stroke="#8B5CF6" strokeWidth={2.5} fill="url(#incomeGradient)" />
                    <Area type="monotone" dataKey="expenses" stroke="#34D399" strokeWidth={2.5} fill="url(#expenseGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* AI Insight */}
            <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-b from-[#21183D] to-[#121520] p-6">
              <div className="mb-5 flex items-center gap-2">
                <div className="rounded-lg bg-violet-500/20 p-2 text-violet-300">
                  <BrainCircuit size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">FinPilot Intelligence</h3>
                  <p className="text-[10px] text-violet-300">SAMPLE INSIGHT</p>
                </div>
              </div>

              <div className="mb-5 rounded-xl border border-violet-400/10 bg-black/20 p-4">
                <Sparkles size={18} className="mb-3 text-violet-400" />
                <h4 className="text-sm font-semibold">Your savings are growing!</h4>
                <p className="mt-2 text-xs leading-6 text-gray-400">
                  Based on this sample data, you saved approximately 44% of
                  your monthly income. Maintaining this pattern could help
                  you reach your financial goals faster.
                </p>
              </div>

              <div className="mb-5">
                <p className="mb-2 text-xs text-gray-400">Monthly savings rate</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold">44.1%</span>
                  <span className="text-xs text-emerald-400">+5.2%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[44.1%] rounded-full bg-gradient-to-r from-violet-600 to-emerald-400" />
                </div>
              </div>

              <button
                onClick={() => setActive("AI Assistant")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-xs font-semibold transition hover:bg-violet-500"
              >
                Explore AI insights
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* Recent transactions */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#121520] p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Recent Transactions</h3>
                <p className="mt-1 text-xs text-gray-500">Your latest financial activity</p>
              </div>
              <button
                onClick={() => setActive("Transactions")}
                className="text-xs font-semibold text-violet-400 hover:text-violet-300"
              >
                View all →
              </button>
            </div>

            <div className="space-y-5">
              {transactions.map((transaction) => (
                <div key={transaction.name} className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${transaction.color}`}>
                    {transaction.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{transaction.name}</p>
                    <p className="mt-1 text-xs text-gray-500">{transaction.category} · {transaction.date}</p>
                  </div>
                  <p className={`shrink-0 text-sm font-semibold ${
                    transaction.amount.startsWith("+") ? "text-emerald-400" : "text-gray-200"
                  }`}>
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <footer className="mt-8 text-center text-xs text-gray-600">
            FinPilot © 2026 · Your money. Your intelligence. Your control.
          </footer>
        </section>
      </div>
    </main>
  );
}
