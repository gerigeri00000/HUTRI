"use client";

import ChartCard from "@/components/ChartCard";
import StatusBadge from "@/components/StatusBadge";
import { MapPin, Users, Activity } from "lucide-react";
import { lokasiMonitoring, formatAngka } from "@/lib/data";

export default function MonitoringLokasiPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Monitoring Lokasi
        </h1>
        <p className="mt-2 font-body text-muted-foreground">
          Peta pemantauan lokasi kegiatan dan titik monitoring
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard title="Peta Lokasi Monitoring">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-16 w-16 text-muted-foreground" />
                  <p className="mt-4 font-body text-sm text-muted-foreground">
                    Peta Interaktif Lokasi Monitoring
                  </p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    (Demo: Integrasi peta akan ditambahkan pada fase backend)
                  </p>
                </div>
              </div>

              <div className="absolute left-4 top-4 rounded-lg border border-border bg-card/95 p-3 backdrop-blur-glass">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <span className="font-body text-xs text-foreground">Lokasi Utama</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-400" />
                  <span className="font-body text-xs text-foreground">Counter Point</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="font-body text-xs text-foreground">Hotel Mitra</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 rounded-lg border border-border bg-card/95 p-3 backdrop-blur-glass">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-accent" />
                  <span className="font-body text-xs font-medium text-foreground">
                    Status: Monitoring Aktif
                  </span>
                </div>
              </div>
            </div>
          </ChartCard>
        </div>

        <div className="space-y-6">
          {lokasiMonitoring
            .filter((lok) => lok.tipe === "utama")
            .map((lokasi) => (
              <div
                key={lokasi.id}
                className="rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">
                        {lokasi.nama}
                      </h3>
                      <p className="mt-1 font-body text-xs text-muted-foreground">
                        {lokasi.lat}, {lokasi.lng}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status="Aktif" variant="success" />
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted/50 p-3">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      Pengunjung Saat Ini
                    </p>
                    <p className="font-heading text-xl font-bold text-foreground">
                      {formatAngka(lokasi.pengunjungSekarang)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <ChartCard title="Daftar Semua Titik Monitoring">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lokasiMonitoring.map((lokasi) => (
            <div
              key={lokasi.id}
              className="rounded-lg border border-border bg-muted/30 p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        lokasi.tipe === "utama" ? "bg-accent" : "bg-blue-400"
                      }`}
                    />
                    <h4 className="font-body text-sm font-medium text-foreground">
                      {lokasi.nama}
                    </h4>
                  </div>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    {lokasi.tipe === "utama" ? "Lokasi Utama" : "Counter Point"}
                  </p>
                </div>
              </div>
              {lokasi.pengunjungSekarang > 0 && (
                <div className="mt-3 flex items-center gap-1">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="font-body text-xs text-foreground">
                    {formatAngka(lokasi.pengunjungSekarang)} orang
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </ChartCard>

      <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
        <h3 className="font-heading text-sm font-semibold text-blue-400">
          Informasi Teknis
        </h3>
        <p className="mt-1 font-body text-xs text-blue-400/80">
          Pada implementasi penuh, halaman ini akan menampilkan peta interaktif
          menggunakan Leaflet atau Google Maps dengan marker real-time untuk setiap
          lokasi monitoring.
        </p>
      </div>
    </div>
  );
}
