"use client";

import { Calendar, Clock, Activity, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-glass">
      <div className="flex h-16 items-center justify-between gap-3 px-4 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
            aria-label="Buka menu"
            aria-haspopup="dialog"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0 md:hidden">
            <p className="truncate font-heading text-xs font-semibold text-foreground">Monitoring Ekonomi</p>
            <p className="truncate font-body text-[11px] text-muted-foreground">HUT Nunukan 2026</p>
          </div>
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

        <div className="flex flex-shrink-0 items-center gap-2 lg:gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <div className="hidden sm:block">
              <p className="font-body text-xs text-muted-foreground">Status Sistem</p>
              <p className="font-body text-sm font-medium text-accent">Aktif Monitoring</p>
            </div>
            <span className="font-body text-xs font-medium text-accent sm:hidden">Aktif</span>
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

          <div className="hidden rounded-lg bg-muted p-2 sm:block">
            <Activity className="h-5 w-5 text-accent" />
          </div>
        </div>
      </div>
    </header>
  );
}
