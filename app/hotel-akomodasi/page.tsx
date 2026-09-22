"use client";

import KPICard from "@/components/KPICard";
import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Hotel, Bed, TrendingUp, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { hotelList, okupansiHotelTren } from "@/lib/data";

export default function HotelAkomodasiPage() {
  const jumlahHotel = 12;
  const tingkatHunian = 89;
  const totalKamarTerisi = 163;
  const rataLamaMenginap = "3.2 malam";

  const columns = [
    { key: "namaHotel", label: "Nama Hotel" },
    { key: "jumlahKamar", label: "Jumlah Kamar" },
    { key: "hunian", label: "Hunian" },
    {
      key: "okupansi",
      label: "Okupansi",
      render: (item: any) => (
        <div className="flex items-center gap-2">
          <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-accent"
              style={{ width: `${item.okupansi}%` }}
            />
          </div>
          <span className="font-heading text-sm font-medium text-foreground">
            {item.okupansi}%
          </span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (item: any) => (
        <StatusBadge
          status={item.status}
          variant={item.status === "Penuh" ? "warning" : "success"}
        />
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Hotel & Akomodasi
        </h1>
        <p className="mt-2 font-body text-muted-foreground">
          Monitoring okupansi dan aktivitas sektor akomodasi
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Jumlah Hotel Dipantau"
          value={jumlahHotel.toString()}
          icon={Hotel}
          badge="DATA SIMULASI"
        />
        <KPICard
          title="Tingkat Hunian"
          value={`${tingkatHunian}%`}
          icon={TrendingUp}
          badge="DATA SIMULASI"
        />
        <KPICard
          title="Jumlah Kamar Terisi"
          value={totalKamarTerisi.toString()}
          icon={Bed}
          badge="DATA SIMULASI"
        />
        <KPICard
          title="Rata-rata Lama Menginap"
          value={rataLamaMenginap}
          icon={Clock}
          badge="DATA SIMULASI"
        />
      </div>

      <ChartCard
        title="Tren Okupansi Hotel"
        subtitle="Tingkat hunian harian (dalam persen)"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={okupansiHotelTren}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis dataKey="tanggal" stroke="#94A3B8" style={{ fontSize: 12 }} />
            <YAxis
              stroke="#94A3B8"
              style={{ fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1B2336",
                border: "1px solid #475569",
                borderRadius: "8px",
                color: "#F8FAFC",
              }}
              formatter={(value: number) => `${value}%`}
            />
            <Line
              type="monotone"
              dataKey="okupansi"
              stroke="#22C55E"
              strokeWidth={2}
              dot={{ fill: "#22C55E", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Daftar Hotel dan Status Hunian">
        <DataTable columns={columns} data={hotelList} />
      </ChartCard>

      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-500/10 p-2">
            <Hotel className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Catatan Okupansi
            </h3>
            <p className="mt-1 font-body text-sm text-muted-foreground">
              Data okupansi dihitung berdasarkan laporan harian dari hotel mitra. Tingkat
              hunian tinggi pada periode puncak acara menunjukkan dampak positif HUT
              Kabupaten Nunukan terhadap sektor akomodasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
