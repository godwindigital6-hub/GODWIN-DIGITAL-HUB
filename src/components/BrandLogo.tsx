import type { SVGProps } from 'react';

export type LogoVariant = 'primary' | 'secondary' | 'emblem' | 'social';
export type LogoTheme = 'light' | 'dark' | 'white' | 'monochrome';

interface BrandEmblemProps extends SVGProps<SVGSVGElement> {
  theme?: LogoTheme;
  size?: number;
}

export function BrandEmblem({
  theme = 'light',
  size = 36,
  className = '',
  ...props
}: BrandEmblemProps) {
  const bracketColor =
    theme === 'light'
      ? '#0B192C'
      : theme === 'dark'
        ? '#FFFFFF'
        : theme === 'white'
          ? '#FFFFFF'
          : 'currentColor';

  const keystoneColor =
    theme === 'light'
      ? '#C89B3C'
      : theme === 'dark'
        ? '#D9B15B'
        : theme === 'white'
          ? '#FFFFFF'
          : 'currentColor';

  const keystoneOpacity = theme === 'white' ? 0.85 : 1;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Foundation Architectural Bracket */}
      <path
        d="M6 16H11.5V28.5H24V34H10L6 30V16Z"
        fill={bracketColor}
      />
      {/* Ascending Connected System Bracket */}
      <path
        d="M34 24H28.5V11.5H16V6H30L34 10V24Z"
        fill={bracketColor}
      />
      {/* Focal Growth & Strategy Keystone */}
      <path
        d="M20 13.5L26.5 20L20 26.5L13.5 20L20 13.5Z"
        fill={keystoneColor}
        fillOpacity={keystoneOpacity}
      />
    </svg>
  );
}

interface BrandLogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
}

export function BrandLogo({
  variant = 'primary',
  theme = 'light',
  className = '',
}: BrandLogoProps) {
  if (variant === 'emblem') {
    return <BrandEmblem theme={theme} size={40} className={className} />;
  }

  if (variant === 'social') {
    return (
      <div
        className={`w-24 h-24 rounded-2xl bg-[#0B192C] border border-[#C89B3C]/45 flex items-center justify-center shrink-0 ${className}`}
      >
        <BrandEmblem theme="dark" size={54} />
      </div>
    );
  }

  const primaryTextColor =
    theme === 'light'
      ? 'text-[#0B192C]'
      : theme === 'dark'
        ? 'text-white'
        : theme === 'white'
          ? 'text-white'
          : 'text-current';

  const secondaryTextColor =
    theme === 'light'
      ? 'text-[#9E761F]'
      : theme === 'dark'
        ? 'text-[#D9B15B]'
        : theme === 'white'
          ? 'text-white/85'
          : 'text-current opacity-80';

  if (variant === 'secondary') {
    return (
      <span
        className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}
      >
        <BrandEmblem theme={theme} size={30} />
        <span
          className={`inline-flex items-baseline gap-1.5 leading-none ${primaryTextColor}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="text-[15px] font-bold tracking-[0.06em]">GODWIN</span>
          <span className={`text-[11px] font-semibold tracking-[0.14em] ${secondaryTextColor}`}>
            DIGITAL HUB
          </span>
        </span>
      </span>
    );
  }

  // Primary stacked architectural studio lockup
  return (
    <span
      className={`inline-flex items-center gap-3 whitespace-nowrap shrink-0 select-none ${className}`}
    >
      <BrandEmblem theme={theme} size={34} />
      <span
        className="inline-flex flex-col leading-none"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span className={`text-[17px] font-bold tracking-[0.08em] ${primaryTextColor}`}>
          GODWIN
        </span>
        <span className={`mt-1 text-[9.5px] font-semibold tracking-[0.24em] ${secondaryTextColor}`}>
          DIGITAL HUB
        </span>
      </span>
    </span>
  );
}
