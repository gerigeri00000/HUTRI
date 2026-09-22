"use client";

import KPICard from "@/components/KPICard";
import ChartCard from "@/components/ChartCard";
import {
  Users,
  DollarSign,
  TrendingUp,
  Store,
  MapPin,
  Utensils,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  kpiData,
  trenPengunjungHarian,
  estimasiTransaksiHarian,
  komposisiTransaksi,
  jamKunjungan,
  ringkasanHariIni,
  formatRupiah,
  formatAngka,
} from "@/lib/data";

const COLORS = ["#22C55E", "#3B82F6", "#F59E0B", "#EF4444", "#A855F7"];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Dashboard Monitoring Aktivitas Ekonomi
        </h1>
        <p className="mt-2 font-body text-muted-foreground">
          Rangkaian HUT Kabupaten Nunukan 2026
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Pengunjung"
          value={formatAngka(kpiData.totalPengunjung)}
          icon={Users}
          badge="DATA SIMULASI"
          trend={{ value: "12.5%", positive: true }}
        />
        <KPICard
          title="Rata-rata Pengeluaran Pengunjung"
          value={formatRupiah(kpiData.rataRataPengeluaran)}
          icon={DollarSign}
          badge="DATA SIMULASI"
          trend={{ value: "8.3%", positive: true }}
        />
        <KPICard
          title="Estimasi Total Transaksi"
          value={formatRupiah(kpiData.estimasiTotalTransaksi)}
          icon={TrendingUp}
          badge="DATA SIMULASI"
          trend={{ value: "15.7%", positive: true }}
        />
        <KPICard
          title="Jumlah Usaha Terpantau"
          value={formatAngka(kpiData.jumlahUsaha)}
          icon={Store}
          badge="DATA SIMULASI"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Tren Pengunjung Harian" subtitle="29 September - 11 Oktober 2026">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trenPengunjungHarian}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="tanggal" stroke="#94A3B8" style={{ fontSize: 12 }} />
              <YAxis stroke="#94A3B8" style={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1B2336",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
              />
              <Line
                type="monotone"
                dataKey="jumlah"
                stroke="#22C55E"
                strokeWidth={2}
                dot={{ fill: "#22C55E", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Estimasi Transaksi Harian" subtitle="Dalam Rupiah">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={estimasiTransaksiHarian}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="tanggal" stroke="#94A3B8" style={{ fontSize: 12 }} />
              <YAxis
                stroke="#94A3B8"
                style={{ fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
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
              <Bar dataKey="nilai" fill="#22C55E" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Komposisi Transaksi Ekonomi" subtitle="Berdasarkan Sektor">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={komposisiTransaksi}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ kategori, persen }) => `${kategori} ${persen}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="nilai"
              >
                {komposisiTransaksi.map((entry, index) => (
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

        <ChartCard title="Jam Kunjungan Terbanyak" subtitle="Pola Kunjungan Harian">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={jamKunjungan}>
              <defs>
                <linearGradient id="colorJumlah" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="jam" stroke="#94A3B8" style={{ fontSize: 12 }} />
              <YAxis stroke="#94A3B8" style={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1B2336",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
              />
              <Area
                type="monotone"
                dataKey="jumlah"
                stroke="#22C55E"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorJumlah)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Ringkasan Aktivitas Hari Ini" subtitle="Update Real-time">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 p-3">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">Pengunjung Hari Ini</p>
                <p className="font-heading text-2xl font-bold text-foreground">
                  {formatAngka(ringkasanHariIni.pengunjung)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-3">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">Estimasi Transaksi</p>
                <p className="font-heading text-2xl font-bold text-foreground">
                  {formatRupiah(ringkasanHariIni.estimasiTransaksi)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-yellow-500/10 p-3">
                <MapPin className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">Lokasi Terpadat</p>
                <p className="font-heading text-lg font-bold text-foreground">
                  {ringkasanHariIni.lokasiTerpadat}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500/10 p-3">
                <Store className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">Usaha Aktif</p>
                <p className="font-heading text-2xl font-bold text-foreground">
                  {ringkasanHariIni.usahaAktif}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ChartCard>
    </div>
  );
}
