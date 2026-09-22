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
  X,
} from "lucide-react";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

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

export default function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label="Tutup menu"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-dvh w-[min(18rem,86vw)] border-r border-border bg-card shadow-2xl transition-transform duration-200 lg:z-40 lg:w-64 lg:translate-x-0 lg:shadow-none ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between border-b border-border p-5 lg:p-6">
          <div>
            <h1 className="font-heading text-sm font-semibold leading-tight text-foreground">
              Sistem Monitoring Ekonomi
            </h1>
            <p className="mt-1 font-body text-xs text-muted-foreground">
              HUT Nunukan 2026
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" />
          </button>
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
                    className={`flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm transition-all duration-200 ${
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
    </>
  );
}
