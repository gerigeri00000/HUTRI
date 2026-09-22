"use client";

import KPICard from "@/components/KPICard";
import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Users, MapPin, Clock, Activity } from "lucide-react";
import { monitoringPengunjungList, formatAngka } from "@/lib/data";

export default function MonitoringPengunjungPage() {
  const totalPengunjung = 25430;
  const pengunjungHariIni = 3250;
  const rataDuratsi = "2.5 jam";
  const jumlahTitik = 5;

  const columns = [
    {
      key: "tanggal",
      label: "Tanggal",
    },
    {
      key: "lokasi",
      label: "Lokasi",
    },
    {
      key: "jumlahMasuk",
      label: "Jumlah Masuk",
      render: (item: any) => formatAngka(item.jumlahMasuk),
    },
    {
      key: "jumlahKeluar",
      label: "Jumlah Keluar",
      render: (item: any) => formatAngka(item.jumlahKeluar),
    },
    {
      key: "status",
      label: "Status",
      render: (item: any) => (
        <StatusBadge
          status={item.status}
          variant={item.status === "Aktif" ? "success" : "neutral"}
        />
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Monitoring Pengunjung
        </h1>
        <p className="mt-2 font-body text-muted-foreground">
          Pemantauan jumlah pengunjung di berbagai lokasi kegiatan
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Pengunjung"
          value={formatAngka(totalPengunjung)}
          icon={Users}
          badge="DATA SIMULASI"
        />
        <KPICard
          title="Pengunjung Hari Ini"
          value={formatAngka(pengunjungHariIni)}
          icon={Activity}
          badge="DATA SIMULASI"
        />
        <KPICard
          title="Rata-rata Durasi Kunjungan"
          value={rataDuratsi}
          icon={Clock}
          badge="DATA SIMULASI"
        />
        <KPICard
          title="Jumlah Titik Monitoring"
          value={jumlahTitik.toString()}
          icon={MapPin}
          badge="DATA SIMULASI"
        />
      </div>

      <ChartCard
        title="Data Monitoring Pengunjung"
        subtitle="Catatan masuk dan keluar per lokasi"
      >
        <DataTable columns={columns} data={monitoringPengunjungList} />
      </ChartCard>

      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-500/10 p-2">
            <Activity className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Catatan Sistem
            </h3>
            <p className="mt-1 font-body text-sm text-muted-foreground">
              Data monitoring pengunjung dikumpulkan melalui counter manual dan estimasi
              lapangan. Status &quot;Aktif&quot; menunjukkan kegiatan sedang berlangsung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
