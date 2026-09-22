import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
}

export default function ChartCard({ title, subtitle, children, action }: ChartCardProps) {
  return (
    <div className="min-w-0 rounded-lg border border-border bg-card p-4 backdrop-blur-glass sm:p-6">
      <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:mb-6 sm:flex-row">
        <div className="min-w-0">
          <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">{title}</h3>
          {subtitle && (
            <p className="mt-1 font-body text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}
