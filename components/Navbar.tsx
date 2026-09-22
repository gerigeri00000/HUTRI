"use client";

import { Calendar, Clock, Activity, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-glass">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
            aria-label="Buka menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 md:flex">
            <Calendar className="h-4 w-4 text-accent" />
            <div>
              <p className="font-body text-xs text-muted-foreground">Periode Kegiatan</p>
              <p className="font-body text-sm font-medium text-foreground">
                29 September - 17 Oktober 2026
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <div>
              <p className="font-body text-xs text-muted-foreground">Status Sistem</p>
              <p className="font-body text-sm font-medium text-accent">Aktif Monitoring</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="font-body text-xs text-muted-foreground">Update Terakhir</p>
              <p className="font-body text-sm text-foreground">
                22 September 2026 10:30 WITA
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-2">
            <Activity className="h-5 w-5 text-accent" />
          </div>
        </div>
      </div>
    </header>
  );
}
