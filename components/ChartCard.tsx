import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
}

export default function ChartCard({ title, subtitle, children, action }: ChartCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 backdrop-blur-glass">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
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
