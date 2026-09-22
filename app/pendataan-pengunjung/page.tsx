"use client";

import ChartCard from "@/components/ChartCard";
import { ClipboardList, Users, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function PendataanPengunjungPage() {
  const [formData, setFormData] = useState({
    tanggal: "",
    lokasi: "",
    jenisKelamin: "",
    kelompokUmur: "",
    asalPengunjung: "",
    jumlahRombongan: "",
    transportasi: "",
    estimasiPengeluaran: "",
  });

  const jumlahResponden = 1247;
  const targetResponden = 2000;
  const progress = (jumlahResponden / targetResponden) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Data tersimpan! (Demo Mode - Data tidak benar-benar disimpan)");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Pendataan Pengunjung
        </h1>
        <p className="mt-2 font-body text-muted-foreground">
          Sistem pencacahan digital karakteristik pengunjung
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard title="Form Input Data Pengunjung" subtitle="Isi data responden">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Tanggal Kunjungan
                  </label>
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Lokasi
                  </label>
                  <select
                    value={formData.lokasi}
                    onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Pilih lokasi</option>
                    <option value="Alun-Alun Nunukan">Alun-Alun Nunukan</option>
                    <option value="Pantai Sei Pancang">Pantai Sei Pancang</option>
                    <option value="Taman Kota">Taman Kota</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Jenis Kelamin
                  </label>
                  <select
                    value={formData.jenisKelamin}
                    onChange={(e) => setFormData({ ...formData, jenisKelamin: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Pilih</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Kelompok Umur
                  </label>
                  <select
                    value={formData.kelompokUmur}
                    onChange={(e) => setFormData({ ...formData, kelompokUmur: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Pilih kelompok umur</option>
                    <option value="0-17">0-17 tahun</option>
                    <option value="18-25">18-25 tahun</option>
                    <option value="26-35">26-35 tahun</option>
                    <option value="36-50">36-50 tahun</option>
                    <option value="50+">50+ tahun</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Asal Pengunjung
                  </label>
                  <input
                    type="text"
                    value={formData.asalPengunjung}
                    onChange={(e) => setFormData({ ...formData, asalPengunjung: e.target.value })}
                    placeholder="Contoh: Nunukan, Tarakan, dll"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Jumlah Anggota Rombongan
                  </label>
                  <input
                    type="number"
                    value={formData.jumlahRombongan}
                    onChange={(e) => setFormData({ ...formData, jumlahRombongan: e.target.value })}
                    placeholder="Jumlah orang"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Transportasi
                  </label>
                  <select
                    value={formData.transportasi}
                    onChange={(e) => setFormData({ ...formData, transportasi: e.target.value })}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Pilih transportasi</option>
                    <option value="Motor">Motor</option>
                    <option value="Mobil Pribadi">Mobil Pribadi</option>
                    <option value="Angkutan Umum">Angkutan Umum</option>
                    <option value="Jalan Kaki">Jalan Kaki</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    Estimasi Pengeluaran (Rp)
                  </label>
                  <input
                    type="number"
                    value={formData.estimasiPengeluaran}
                    onChange={(e) => setFormData({ ...formData, estimasiPengeluaran: e.target.value })}
                    placeholder="Contoh: 150000"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-2 font-body text-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3 font-body font-medium text-on-accent transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                Simpan Data
              </button>
            </form>
          </ChartCard>
        </div>

        <div className="space-y-6">
          <ChartCard title="Progress Pengumpulan">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">Responden Terkumpul</span>
                </div>
                <span className="font-heading text-2xl font-bold text-foreground">
                  {jumlahResponden}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-400" />
                  <span className="font-body text-sm text-muted-foreground">Target Responden</span>
                </div>
                <span className="font-heading text-2xl font-bold text-foreground">
                  {targetResponden}
                </span>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">Progress</span>
                  <span className="font-heading text-lg font-bold text-accent">
                    {progress.toFixed(1)}%
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-accent transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-muted/50 p-3">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="font-body text-xs text-muted-foreground">
                    Sisa {targetResponden - jumlahResponden} responden lagi untuk mencapai target
                  </p>
                </div>
              </div>
            </div>
          </ChartCard>

          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
            <h3 className="font-heading text-sm font-semibold text-yellow-400">
              Mode Demo
            </h3>
            <p className="mt-1 font-body text-xs text-yellow-400/80">
              Data yang diinput tidak akan disimpan ke database. Ini adalah versi frontend saja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
