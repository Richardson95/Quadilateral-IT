import {
  BarChart3,
  BrainCircuit,
  ClipboardList,
  Code2,
  Compass,
  Container,
  MailCheck,
  MonitorSmartphone,
  Palette,
  PenTool,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon names live as plain strings in `src/lib/site.ts` so content stays
 * serialisable; this map is the only place that binds them to components.
 */
const registry: Record<string, LucideIcon> = {
  BarChart3,
  BrainCircuit,
  ClipboardList,
  Code2,
  Compass,
  Container,
  MailCheck,
  MonitorSmartphone,
  Palette,
  PenTool,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = registry[name] ?? Sparkles;
  return <Component className={className} aria-hidden />;
}
