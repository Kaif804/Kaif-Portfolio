import React from 'react';
import { useMedia } from '../context/MediaContext';

interface BrandLogoProps {
  variant?: 'full' | 'icon-only' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  forceSvg?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  forceSvg = false,
}) => {
  const { logoImage } = useMedia();

  // Dimension mappings
  const dimensions = {
    sm: { height: 28, scale: 0.7 },
    md: { height: 36, scale: 0.9 },
    lg: { height: 44, scale: 1.1 },
    xl: { height: 56, scale: 1.4 },
  }[size];

  // If a real logo image has been provided and we're not forcing SVG, display the user's exact file!
  if (logoImage && !forceSvg) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={logoImage}
          alt="Kaif Qaiser - WordPress Developer"
          style={{ height: `${dimensions.height}px`, width: 'auto' }}
          className="object-contain max-w-full"
        />
      </div>
    );
  }

  // SVG Unique Gradient ID to prevent conflicts
  const gradId = 'kq-brand-orange-red';

  if (variant === 'icon-only') {
    return (
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${dimensions.height}px`, width: 'auto' }}
        className={`inline-block select-none overflow-visible ${className}`}
        aria-label="Kaif Qaiser KQ Logo"
      >
        <defs>
          <linearGradient id={`${gradId}-icon`} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FF7020" />
            <stop offset="45%" stopColor="#FF5500" />
            <stop offset="100%" stopColor="#E61E00" />
          </linearGradient>
          <filter id="kq-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FF5500" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Letter K: Crisp White block letter */}
        <g id="letter-k" fill="#FFFFFF">
          {/* Vertical stem */}
          <path d="M 16 12 L 31 12 L 31 88 L 16 88 Z" />
          {/* Upper diagonal arm */}
          <path d="M 28 54 L 56 12 L 74 12 L 42 56 Z" />
          {/* Lower diagonal arm */}
          <path d="M 37 48 L 74 88 L 56 88 L 26 58 Z" />
        </g>

        {/* Letter Q with Wrench Jaw Tail: Orange-Red Gradient */}
        <g id="letter-q" filter="url(#kq-glow)">
          {/* Main Ring of Q */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 76 14 C 95.88 14 112 30.12 112 50 C 112 60.1 107.8 69.2 101.1 75.7 L 91.8 66.4 C 95.6 62.3 98 56.8 98 50 C 98 37.85 88.15 28 76 28 C 63.85 28 54 37.85 54 50 C 54 62.15 63.85 72 76 72 C 80.2 72 84.1 70.8 87.4 68.8 L 94.2 75.6 C 89 81.3 82.9 84.8 76 86 C 56.12 86 40 69.88 40 50 C 40 30.12 56.12 14 76 14 Z"
            fill={`url(#${gradId}-icon)`}
          />
          {/* Wrench head tail extending at 45 degrees */}
          <path
            d="M 88 64 
               L 106 82 
               L 115 77 
               L 105 67 
               L 113 59 
               L 100 50 
               Z"
            fill={`url(#${gradId}-icon)`}
          />
          {/* Wrench cutout/jaws definition */}
          <path
            d="M 92 73 
               L 108 89 
               L 120 77 
               L 113 70 
               L 106 77 
               L 99 70 
               Z"
            fill={`url(#${gradId}-icon)`}
          />
        </g>
      </svg>
    );
  }

  // Full Brand Logo with "KAIF QAISER" + "— WORDPRESS DEVELOPER —"
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Monogram */}
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${dimensions.height}px`, width: 'auto' }}
        className="flex-shrink-0 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${gradId}-full`} x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#FF7A1A" />
            <stop offset="50%" stopColor="#FF5500" />
            <stop offset="100%" stopColor="#E61E00" />
          </linearGradient>
          <filter id={`${gradId}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#FF5500" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Letter K: Pure White with geometric crisp lines */}
        <g id="letter-k" fill="#FFFFFF">
          <path d="M 16 12 L 31 12 L 31 88 L 16 88 Z" />
          <path d="M 28 54 L 56 12 L 74 12 L 42 56 Z" />
          <path d="M 37 48 L 74 88 L 56 88 L 26 58 Z" />
        </g>

        {/* Letter Q: Vibrant orange-red gradient with wrench head tail */}
        <g id="letter-q" filter={`url(#${gradId}-shadow)`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 76 14 C 95.88 14 112 30.12 112 50 C 112 60.1 107.8 69.2 101.1 75.7 L 91.8 66.4 C 95.6 62.3 98 56.8 98 50 C 98 37.85 88.15 28 76 28 C 63.85 28 54 37.85 54 50 C 54 62.15 63.85 72 76 72 C 80.2 72 84.1 70.8 87.4 68.8 L 94.2 75.6 C 89 81.3 82.9 84.8 76 86 C 56.12 86 40 69.88 40 50 C 40 30.12 56.12 14 76 14 Z"
            fill={`url(#${gradId}-full)`}
          />
          {/* Wrench jaws tail */}
          <path
            d="M 91 67 L 109 85 L 119 75 L 109 65 L 100 74 L 95 69 Z"
            fill={`url(#${gradId}-full)`}
          />
          <path
            d="M 104 80 L 118 94 L 126 86 L 116 76 L 111 81 Z"
            fill={`url(#${gradId}-full)`}
          />
        </g>
      </svg>

      {/* Brand Typography matching official logo */}
      <div className="flex flex-col justify-center leading-none">
        {/* Main Name: KAIF in White, QAISER in Orange-Red Gradient */}
        <div className="flex items-center tracking-tight font-black font-sans uppercase">
          <span
            className="text-white"
            style={{
              fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.25rem' : size === 'lg' ? '1.5rem' : '1.85rem',
              letterSpacing: '0.04em',
              fontWeight: 900,
            }}
          >
            KAIF
          </span>
          <span
            className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] via-[#FF5500] to-[#E61E00]"
            style={{
              fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.25rem' : size === 'lg' ? '1.5rem' : '1.85rem',
              letterSpacing: '0.04em',
              fontWeight: 900,
            }}
          >
            QAISER
          </span>
        </div>

        {/* Subtitle: — WORDPRESS DEVELOPER — */}
        <div className="flex items-center gap-2 mt-1.5 opacity-90">
          <div className="h-[1px] w-3.5 sm:w-5 bg-white/70" />
          <span
            className="text-white uppercase font-semibold tracking-[0.22em] text-[8px] sm:text-[9.5px] whitespace-nowrap"
          >
            WORDPRESS DEVELOPER
          </span>
          <div className="h-[1px] w-3.5 sm:w-5 bg-white/70" />
        </div>
      </div>
    </div>
  );
};
