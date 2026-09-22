"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Store,
  Hotel,
  MapPin,
  BarChart3,
  FileText,
} from "lucide-react";

const menuItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/monitoring-pengunjung", icon: Users, label: "Monitoring Pengunjung" },
  { href: "/pendataan-pengunjung", icon: ClipboardList, label: "Pendataan Pengunjung" },
  { href: "/aktivitas-usaha", icon: Store, label: "Aktivitas Usaha" },
  { href: "/hotel-akomodasi", icon: Hotel, label: "Hotel & Akomodasi" },
  { href: "/monitoring-lokasi", icon: MapPin, label: "Monitoring Lokasi" },
  { href: "/analisis-ekonomi", icon: BarChart3, label: "Analisis Ekonomi" },
  { href: "/laporan", icon: FileText, label: "Laporan" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card backdrop-blur-glass">
      <div className="flex h-full flex-col">
        <div className="border-b border-border p-6">
          <h1 className="font-heading text-sm font-semibold leading-tight text-foreground">
            Sistem Monitoring Ekonomi
          </h1>
          <p className="mt-1 font-body text-xs text-muted-foreground">
            HUT Nunukan 2026
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-accent text-on-accent font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border p-4">
          <div className="rounded-lg bg-muted p-3">
            <p className="font-body text-xs text-muted-foreground">
              <span className="font-medium text-foreground">DATA SIMULASI</span>
              <br />
              Semua data merupakan data dummy untuk keperluan demo sistem.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
