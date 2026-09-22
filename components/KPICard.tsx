import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  badge?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export default function KPICard({ title, value, icon: Icon, badge, trend }: KPICardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl transition-all duration-300 group-hover:bg-accent/20" />
      
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="font-body text-sm text-muted-foreground">{title}</p>
            <h3 className="mt-2 font-heading text-3xl font-bold text-foreground">{value}</h3>
            {trend && (
              <div className="mt-2 flex items-center gap-1">
                <span className={`font-body text-xs ${trend.positive ? "text-accent" : "text-destructive"}`}>
                  {trend.positive ? "+" : ""}{trend.value}
                </span>
                <span className="font-body text-xs text-muted-foreground">vs kemarin</span>
              </div>
            )}
          </div>
          <div className="rounded-lg bg-accent/10 p-3">
            <Icon className="h-6 w-6 text-accent" />
          </div>
        </div>

        {badge && (
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 font-body text-xs font-medium text-muted-foreground">
              {badge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
