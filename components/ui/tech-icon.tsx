import { cn } from "@/lib/utils";

interface TechIconProps {
  name: string;
  className?: string;
}

const iconColors: Record<string, string> = {
  python: "#3776AB",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  fastapi: "#009688",
  django: "#092E20",
  nextjs: "#ffffff",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  redis: "#DC382D",
  docker: "#2496ED",
  git: "#F05032",
  aws: "#FF9900",
  gcp: "#4285F4",
};

export function TechIcon({ name, className }: TechIconProps) {
  const color = iconColors[name] || "#06b6d4";

  const icons: Record<string, JSX.Element> = {
    python: (
      <svg viewBox="0 0 24 24" fill="none" className={cn("w-6 h-6", className)}>
        <path
          d="M12 2C6.48 2 6 4.02 6 5.5v2h6v1H5.5C3.02 8.5 2 10.52 2 13s1.02 4.5 3.5 4.5H7v-2.5c0-2.48 2.02-4.5 4.5-4.5h5c1.93 0 3.5-1.57 3.5-3.5v-3C20 2.02 17.52 2 15 2h-3zm-1.5 2a1 1 0 110 2 1 1 0 010-2z"
          fill={color}
        />
        <path
          d="M12 22c5.52 0 6-2.02 6-3.5v-2h-6v-1h6.5c2.48 0 3.5-2.02 3.5-4.5s-1.02-4.5-3.5-4.5H17v2.5c0 2.48-2.02 4.5-4.5 4.5h-5c-1.93 0-3.5 1.57-3.5 3.5v3C4 21.98 6.48 22 9 22h3zm1.5-2a1 1 0 110-2 1 1 0 010 2z"
          fill={color}
          opacity={0.7}
        />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <rect width="24" height="24" rx="2" />
        <path
          d="M14.5 11v1h-3v7h-2v-7h-3v-1h8zm2.5 0h2c1.1 0 2 .9 2 2v1c0 .55-.45 1-1 1h-2v2h3v1h-4v-7zm2 3h1v-1c0-.55-.45-1-1-1h-1v2h1z"
          fill="#fff"
        />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <rect width="24" height="24" rx="2" />
        <path
          d="M12 18c1.1 0 2-.4 2-1.5v-5h-2v5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1h-2v1c0 1.1.9 2 2 2zm5-7h2v4c0 1.1-.9 2-2 2h-1c-1.1 0-2-.9-2-2v-1h2v1h1v-4z"
          fill="#000"
        />
      </svg>
    ),
    fastapi: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L18 8l-6 3-6-3 6-3.5zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" />
      </svg>
    ),
    django: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M7 2v20H5V2h2zm4 0v2c3 0 5 2 5 5v6c0 3-2 5-5 5v2c4.5 0 8-3.5 8-8V10c0-4.5-3.5-8-8-8z" />
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V9l6 4-6 4z" />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M12 2C8 2 5 5 5 9c0 2.5 1.5 4.5 3 6v5c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-5c1.5-1.5 3-3.5 3-6 0-4-3-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 1.8-1 3.3-2 4.5V18h-6v-4.5c-1-1.2-2-2.7-2-4.5 0-2.8 2.2-5 5-5z" />
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M12 2C10 2 9 6 9 10c0 3 1 6 2.5 8 .3.4.5.8.5 1.2V22h2v-2.8c0-.4.2-.8.5-1.2C16 16 17 13 17 10c0-4-1-8-3-8h-2z" />
      </svg>
    ),
    redis: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M12 4L4 8l8 4 8-4-8-4zm-8 6l8 4 8-4m-16 4l8 4 8-4" strokeWidth="2" stroke={color} fill="none" />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M4 11h3v3H4v-3zm4 0h3v3H8v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8-4h3v3H8V7zm4 0h3v3h-3V7zm4 0h3v3h-3V7zm-4-4h3v3h-3V3zM2 14c0 3 2.5 5 6 5h8c4 0 6-2 6-5H2z" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 00-1.78 0L9.26 4.23l2.25 2.25a1.54 1.54 0 011.95 1.95l2.17 2.17a1.54 1.54 0 11-.92.86l-2.02-2.02v5.32a1.54 1.54 0 11-1.27-.07V9.25a1.54 1.54 0 01-.84-2.02L8.34 4.99 2.38 10.95a1.3 1.3 0 000 1.78l8.73 8.73a1.3 1.3 0 001.78 0l8.73-8.73a1.3 1.3 0 000-1.62z" />
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M6.5 12L3 15l3.5 3L8 16.5 5.5 14H12v-4H5.5L8 7.5 6.5 6 3 9l3.5 3zm11 0l3.5-3-3.5-3L16 7.5l2.5 2.5H12v4h6.5L16 16.5l1.5 1.5 3.5-3-3.5-3z" />
      </svg>
    ),
    gcp: (
      <svg viewBox="0 0 24 24" fill={color} className={cn("w-6 h-6", className)}>
        <path d="M12 6L8 12l4 6 4-6-4-6zm-7 6l3-4.5L5.5 12 8 16.5 5 12zm14 0l-3-4.5 2.5 4.5-2.5 4.5 3-4.5z" />
      </svg>
    ),
  };

  return icons[name] || (
    <div
      className={cn("w-6 h-6 rounded bg-accent/20 flex items-center justify-center", className)}
    >
      <span className="text-xs font-bold text-accent">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}
