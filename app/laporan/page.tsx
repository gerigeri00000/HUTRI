"use client";

import { useState } from "react";
import ChartCard from "@/components/ChartCard";
import { FileText, Download, Calendar, Filter, FileBarChart } from "lucide-react";
import { kpiData, formatRupiah, formatAngka } from "@/lib/data";

export default function LaporanPage() {
  const [periodeMulai, setPeriodeMulai] = useState("");
  const [periodeAkhir, setPeriodeAkhir] = useState("");

  const handleExport = () => {
    alert("Export laporan (Demo Mode - Fitur akan diaktifkan pada fase backend)");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Laporan</h1>
        <p className="mt-2 font-body text-muted-foreground">
          Export dan ringkasan laporan monitoring ekonomi
        </p>
      </div>

      <ChartCard title="Filter Periode Laporan">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block font-body text-sm font-medium text-foreground">
              Periode Mulai
            </label>
            <input
              type="date"
              value={periodeMulai}
              onChange={(e) => setPeriodeMulai(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <div>
            <label className="mb-2 block font-body text-sm font-medium text-foreground">
              Periode Akhir
            </label>
            <input
              type="date"
              value={periodeAkhir}
              onChange={(e) => setPeriodeAkhir(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleExport}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 font-body text-sm font-medium text-on-accent transition-all hover:bg-accent/90"
            >
              <Download className="h-4 w-4" />
              Export Laporan
            </button>
          </div>
        </div>
      </ChartCard>

      <ChartCard title="Preview Laporan" subtitle="Ringkasan Monitoring Ekonomi">
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <FileBarChart className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Ringkasan Monitoring Ekonomi
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  Rangkaian HUT Kabupaten Nunukan 2026
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Periode Kegiatan
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  29 September - 17 Oktober 2026
                </p>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Status Laporan
                </h3>
                <p className="mt-1 font-body text-sm text-accent">Kegiatan Berlangsung</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Hasil Monitoring
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-body text-xs text-muted-foreground">
                    Total Pengunjung
                  </p>
                  <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                    {formatAngka(kpiData.totalPengunjung)}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-muted px-2 py-0.5 font-body text-xs text-muted-foreground">
                    DATA SIMULASI
                  </span>
                </div>

                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-body text-xs text-muted-foreground">
                    Rata-rata Pengeluaran
                  </p>
                  <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                    {formatRupiah(kpiData.rataRataPengeluaran)}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-muted px-2 py-0.5 font-body text-xs text-muted-foreground">
                    DATA SIMULASI
                  </span>
                </div>

                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-body text-xs text-muted-foreground">
                    Estimasi Total Transaksi
                  </p>
                  <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                    {formatRupiah(kpiData.estimasiTotalTransaksi)}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-muted px-2 py-0.5 font-body text-xs text-muted-foreground">
                    DATA SIMULASI
                  </span>
                </div>

                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="font-body text-xs text-muted-foreground">
                    Jumlah Usaha Terpantau
                  </p>
                  <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                    {formatAngka(kpiData.jumlahUsaha)}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-muted px-2 py-0.5 font-body text-xs text-muted-foreground">
                    DATA SIMULASI
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
              <p className="font-body text-xs leading-relaxed text-yellow-400">
                <strong>Catatan:</strong> Nilai transaksi merupakan estimasi berdasarkan
                data lapangan dan bukan nilai kontribusi PDRB. Seluruh data pada laporan
                ini merupakan DATA SIMULASI untuk keperluan demonstrasi sistem.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Export PDF
            </button>
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Export Excel
            </button>
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Export CSV
            </button>
          </div>
        </div>
      </ChartCard>
    </div>
  );
}
