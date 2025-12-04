import type { LucideIcon } from "lucide-react";
import React from "react";

export type Benefit = {
  icon: LucideIcon;
  label: string;
};

interface IconBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export const IconBadge: React.FC<IconBadgeProps> = ({ icon: Icon, label, className }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 sm:text-sm ${className ?? ""}`}
  >
    <Icon size={16} className="text-emerald-500" />
    {label}
  </span>
);
