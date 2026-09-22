"use client";

import ChartCard from "@/components/ChartCard";
import KPICard from "@/components/KPICard";
import { TrendingUp, Utensils, Hotel, Car, ShoppingBag, Music, AlertCircle } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { analisisEkonomi, formatRupiah } from "@/lib/data";

const COLORS = ["#22C55E", "#3B82F6", "#F59E0B", "#EF4444", "#A855F7"];
const icons = [Utensils, Hotel, Car, ShoppingBag, Music];

export default function AnalisisEkonomiPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Analisis Ekonomi
        </h1>
        <p className="mt-2 font-body text-muted-foreground">
          Analisis dampak ekonomi rangkaian HUT Kabupaten Nunukan 2026
        </p>
      </div>

      <div className="max-w-2xl">
        <KPICard
          title="Estimasi Nilai Transaksi Ekonomi"
          value="Rp4,38 Miliar"
          icon={TrendingUp}
          badge="DATA SIMULASI"
          trend={{ value: "15.7%", positive: true }}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {analisisEkonomi.komponen.map((komponen, index) => {
          const Icon = icons[index];
          return (
            <div
              key={komponen.nama}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="mb-3 inline-flex rounded-lg bg-muted p-2">
                <Icon className="h-5 w-5" style={{ color: COLORS[index] }} />
              </div>
              <p className="font-body text-sm text-muted-foreground">{komponen.nama}</p>
              <p className="mt-1 font-heading text-xl font-bold text-foreground">
                {formatRupiah(komponen.nilai)}
              </p>
              <span className="mt-3 inline-flex rounded-full bg-muted px-2 py-0.5 font-body text-xs text-muted-foreground">
                SIMULASI
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Distribusi Nilai Transaksi" subtitle="Komposisi per sektor">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={analisisEkonomi.komponen}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ nama, percent }) => `${nama} ${(percent * 100).toFixed(0)}%`}
                outerRadius={110}
                dataKey="nilai"
              >
                {analisisEkonomi.komponen.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1B2336",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
                formatter={(value: number) => formatRupiah(value)}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Perbandingan Sektor" subtitle="Nilai transaksi per kategori">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={analisisEkonomi.komponen} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis
                type="number"
                stroke="#94A3B8"
                style={{ fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000000000).toFixed(1)}M`}
              />
              <YAxis
                dataKey="nama"
                type="category"
                stroke="#94A3B8"
                style={{ fontSize: 12 }}
                width={100}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1B2336",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
                formatter={(value: number) => formatRupiah(value)}
              />
              <Bar dataKey="nilai" fill="#22C55E" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 flex-shrink-0 text-yellow-400" />
          <div>
            <h3 className="font-heading text-base font-semibold text-yellow-400">
              Catatan Penting
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-yellow-400/90">
              {analisisEkonomi.catatan}
            </p>
            <p className="mt-2 font-body text-xs text-yellow-400/70">
              Seluruh data pada halaman ini merupakan DATA SIMULASI untuk keperluan
              demonstrasi sistem dan bukan data resmi Pemerintah Kabupaten Nunukan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
