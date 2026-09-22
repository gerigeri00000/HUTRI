interface StatusBadgeProps {
  status: string;
  variant?: "success" | "warning" | "danger" | "info" | "neutral";
}

export default function StatusBadge({ status, variant = "neutral" }: StatusBadgeProps) {
  const variants = {
    success: "bg-accent/15 text-accent border-accent/30",
    warning: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    danger: "bg-destructive/15 text-destructive border-destructive/30",
    info: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    neutral: "bg-muted text-muted-foreground border-border",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-body text-xs font-medium ${variants[variant]}`}>
      {status}
    </span>
  );
}
