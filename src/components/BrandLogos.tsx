import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

export const OracleLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path
      d="M10.5 8C6.08 8 2.5 11.58 2.5 16s3.58 8 8 8h11c4.42 0 8-3.58 8-8s-3.58-8-8-8h-11zm10.8 13h-10.6c-2.76 0-5-2.24-5-5s2.24-5 5-5h10.6c2.76 0 5 2.24 5 5s-2.24 5-5 5z"
      fill="currentColor"
    />
  </svg>
);

export const SAPLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M2 6h28v20H2z" fill="currentColor" opacity="0.15" rx="2" />
    <text x="16" y="20" textAnchor="middle" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" fill="currentColor" letterSpacing="1">
      SAP
    </text>
  </svg>
);

export const AWSLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M9.2 18.6c0 .3.03.5.08.66.06.16.13.33.23.51.04.06.05.12.05.17 0 .08-.05.15-.15.23l-.5.33c-.07.05-.14.07-.2.07-.08 0-.16-.04-.23-.11a2.4 2.4 0 01-.28-.36 6.3 6.3 0 01-.24-.45c-.6.71-1.36 1.07-2.27 1.07-.65 0-1.17-.19-1.55-.56-.39-.37-.58-.87-.58-1.49 0-.66.23-1.2.7-1.6.47-.41 1.1-.62 1.89-.62.26 0 .53.02.82.06.28.04.58.1.88.17v-.57c0-.59-.12-1-.37-1.25-.25-.24-.67-.36-1.27-.36-.27 0-.55.03-.84.1-.29.07-.57.16-.84.27a2.1 2.1 0 01-.26.1c-.04.01-.07.02-.1.02-.13 0-.2-.1-.2-.3v-.39c0-.15.02-.27.07-.34.05-.08.14-.15.28-.22.27-.14.6-.26.98-.35A4.8 4.8 0 016.46 13c.82 0 1.42.19 1.8.56.37.37.56.94.56 1.7v2.24h.01v.1zm-3.12 1.17c.25 0 .51-.05.79-.14.27-.1.52-.27.72-.51.12-.15.22-.32.27-.52.06-.2.09-.44.09-.72v-.34a6.4 6.4 0 00-.7-.13 5.7 5.7 0 00-.72-.05c-.52 0-.9.1-1.15.31-.25.21-.37.51-.37.9 0 .37.09.64.29.83.19.19.46.28.82.28l-.04.09zm6.17.83c-.17 0-.28-.03-.35-.1-.07-.06-.13-.2-.18-.39l-2.01-6.62a1.7 1.7 0 01-.08-.4c0-.16.08-.25.24-.25h.78c.18 0 .3.03.36.1.07.06.12.2.17.39l1.44 5.67 1.33-5.67c.05-.2.1-.33.17-.39.07-.07.2-.1.37-.1h.64c.18 0 .3.03.37.1.07.07.13.2.17.39l1.35 5.74 1.48-5.74c.05-.2.11-.33.17-.39.07-.07.19-.1.36-.1h.74c.16 0 .25.08.25.25 0 .05-.01.1-.02.16-.02.06-.04.13-.07.22l-2.06 6.62c-.05.2-.11.33-.18.39-.07.07-.19.1-.35.1h-.69c-.18 0-.3-.03-.37-.1-.07-.07-.13-.2-.17-.4l-1.33-5.52-1.31 5.51c-.05.2-.1.33-.17.4-.07.07-.2.1-.37.1h-.69l.01.01zm9.88.26a4.3 4.3 0 01-1.01-.12c-.33-.08-.58-.17-.76-.27-.11-.06-.18-.13-.21-.19a.5.5 0 01-.04-.2v-.4c0-.2.08-.3.22-.3.06 0 .12.01.18.04.06.02.15.07.24.11.33.15.63.27.93.35.31.08.6.12.9.12.48 0 .85-.08 1.1-.25.26-.17.39-.41.39-.73 0-.21-.07-.39-.2-.54-.14-.15-.39-.28-.75-.41l-1.08-.34c-.54-.17-.94-.42-1.18-.75a1.76 1.76 0 01-.37-1.07c0-.31.07-.58.2-.82.13-.24.31-.44.53-.6.22-.16.48-.28.77-.36.29-.08.6-.12.92-.12.16 0 .33.01.5.04.18.03.34.06.5.1.15.05.3.1.43.15.13.06.23.11.3.17.1.07.18.15.22.22.04.08.06.18.06.31v.37c0 .2-.08.3-.22.3-.08 0-.2-.04-.37-.11-.55-.25-1.17-.37-1.85-.37-.43 0-.77.07-1 .22-.23.15-.35.38-.35.7 0 .22.08.41.23.56.16.15.44.3.84.43l1.06.33c.53.17.92.41 1.15.72.23.31.34.66.34 1.05 0 .32-.07.61-.2.87-.14.26-.32.49-.56.67-.24.19-.52.33-.85.43-.35.1-.71.16-1.1.16z"
      fill="currentColor"
    />
    <path d="M24.37 22.73c-2.76 1.63-6.77 2.5-10.22 2.5-4.83 0-9.19-1.43-12.48-3.81-.26-.19-.03-.44.28-.3 3.55 1.66 7.95 2.65 12.49 2.65 3.06 0 6.43-.51 9.53-1.56.47-.16.86.25.4.52z" fill="currentColor" opacity="0.7" />
    <path d="M25.5 21.2c-.35-.36-2.33-.17-3.22-.09-.27.03-.31-.16-.07-.3 1.58-.89 4.16-.63 4.46-.33.3.3-.08 2.38-1.56 3.37-.23.15-.44.07-.34-.13.33-.66 1.08-2.15.73-2.52z" fill="currentColor" opacity="0.7" />
  </svg>
);

export const AzureLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M13.05 4.24L6.56 18.05l-4.18 3.58h7.4L13.05 4.24z" fill="currentColor" opacity="0.7" />
    <path d="M14.42 5.88l-3.54 10.18 5.59 6.7-10.85 2.07h17.96L14.42 5.88z" fill="currentColor" />
  </svg>
);

export const GCPLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M20.27 10.23h.86l2.45-2.45.12-1.04A11.38 11.38 0 0016 4a11.99 11.99 0 00-10.74 6.63l.89-.12 4.89-.81s.25-.44.38-.41a6.88 6.88 0 018.85.94z" fill="currentColor" opacity="0.8" />
    <path d="M26.55 10.63a12.04 12.04 0 00-3.63-4.4l-3.42 3.42a6.87 6.87 0 012.53 5.46v.69a3.44 3.44 0 010 6.88h-6.88l-.69.7v4.13l.69.69h6.88a8.33 8.33 0 004.52-15.57z" fill="currentColor" />
    <path d="M9.12 28.2h6.88v-5.51H9.12a3.41 3.41 0 01-1.43-.31l-.99.31-2.45 2.45-.24.99A8.3 8.3 0 009.12 28.2z" fill="currentColor" opacity="0.6" />
    <path d="M9.12 11.53A8.33 8.33 0 004.01 26.13l3.68-3.68a3.44 3.44 0 014.31-4.31l3.68-3.68a8.32 8.32 0 00-6.56-2.93z" fill="currentColor" opacity="0.8" />
  </svg>
);

export const SalesforceLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path
      d="M13.3 7.5a5.2 5.2 0 013.82-1.68 5.23 5.23 0 014.83 3.23 4.53 4.53 0 016 4.34 4.53 4.53 0 01-2.3 3.94 4.84 4.84 0 01-5.31 5.38 5.03 5.03 0 01-4.06-2.07 5.72 5.72 0 01-8.16-1.14 5.06 5.06 0 01-3.28-4.73c0-2.3 1.54-4.25 3.64-4.86A5.72 5.72 0 0113.3 7.5z"
      fill="currentColor"
      opacity="0.9"
    />
  </svg>
);

export const DevOpsLogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 4L4 10v12l12 6 12-6V10L16 4z" fill="currentColor" opacity="0.12" />
    <path d="M16 4L4 10l12 6 12-6-12-6z" fill="currentColor" opacity="0.3" />
    <path d="M4 10v12l12 6V16L4 10z" fill="currentColor" opacity="0.5" />
    <path d="M28 10v12l-12 6V16l12-6z" fill="currentColor" opacity="0.7" />
    <circle cx="16" cy="16" r="3.5" fill="currentColor" />
    <path d="M16 4v12M4 10l12 6M28 10l-12 6M16 28V16" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

export const DataBILogo: React.FC<LogoProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <rect x="4" y="18" width="4" height="10" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="10" y="13" width="4" height="15" rx="1" fill="currentColor" opacity="0.6" />
    <rect x="16" y="8" width="4" height="20" rx="1" fill="currentColor" opacity="0.8" />
    <rect x="22" y="4" width="4" height="24" rx="1" fill="currentColor" />
    <path d="M5 17L11 12l6 3 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <circle cx="27" cy="7" r="2" fill="currentColor" opacity="0.5" />
  </svg>
);
