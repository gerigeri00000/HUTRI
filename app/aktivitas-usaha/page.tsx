"use client";

import { useState } from "react";
import KPICard from "@/components/KPICard";
import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Store, Activity, TrendingUp, DollarSign, Filter } from "lucide-react";
import { aktivitasUsahaList, formatRupiah } from "@/lib/data";

export default function AktivitasUsahaPage() {
  const [filterKategori, setFilterKategori] = useState("");
  const [filterLokasi, setFilterLokasi] = useState("");

  const filteredData = aktivitasUsahaList.filter((item) => {
    return (
      (!filterKategori || item.kategori === filterKategori) &&
      (!filterLokasi || item.lokasi === filterLokasi)
    );
  });

  const columns = [
    { key: "namaUsaha", label: "Nama Usaha" },
    {
      key: "kategori",
      label: "Kategori",
      render: (item: any) => <StatusBadge status={item.kategori} variant="info" />,
    },
    { key: "lokasi", label: "Lokasi" },
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
    {
      key: "estimasiTransaksi",
      label: "Estimasi Transaksi",
      render: (item: any) => formatRupiah(item.estimasiTransaksi),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">Aktivitas Usaha</h1>
        <p className="mt-2 font-body text-muted-foreground">
          Monitoring aktivitas dan transaksi tenant selama rangkaian HUT
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Jumlah Tenant" value="185" icon={Store} badge="DATA SIMULASI" />
        <KPICard title="Usaha Aktif" value="142" icon={Activity} badge="DATA SIMULASI" />
        <KPICard
          title="Rata-rata Omzet"
          value="Rp18,5 Juta"
          icon={TrendingUp}
          badge="DATA SIMULASI"
        />
        <KPICard
          title="Total Transaksi Usaha"
          value="Rp2,98 M"
          icon={DollarSign}
          badge="DATA SIMULASI"
        />
      </div>

      <ChartCard title="Filter Data Usaha">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block font-body text-sm font-medium text-foreground">
              Tanggal
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <div>
            <label className="mb-2 block font-body text-sm font-medium text-foreground">
              Kategori Usaha
            </label>
            <select
              value={filterKategori}
              onChange={(e) => setFilterKategori(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Semua Kategori</option>
              <option value="Kuliner">Kuliner</option>
              <option value="UMKM">UMKM</option>
              <option value="Retail">Retail</option>
              <option value="Hiburan">Hiburan</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block font-body text-sm font-medium text-foreground">
              Lokasi
            </label>
            <select
              value={filterLokasi}
              onChange={(e) => setFilterLokasi(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Semua Lokasi</option>
              <option value="Alun-Alun Nunukan">Alun-Alun Nunukan</option>
              <option value="Pantai Sei Pancang">Pantai Sei Pancang</option>
              <option value="Taman Kota">Taman Kota</option>
            </select>
          </div>
        </div>
      </ChartCard>

      <ChartCard
        title="Data Aktivitas Usaha"
        subtitle={`${filteredData.length} usaha ditampilkan`}
      >
        <DataTable columns={columns} data={filteredData} />
      </ChartCard>
    </div>
  );
}
