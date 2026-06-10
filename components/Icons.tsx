"use client";

import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export function ProductIcon({ name, ...props }: IconProps) {
  switch (name) {
    case "car":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l3-3h8l3 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
          <circle cx="7.5" cy="17.5" r="2.5" />
          <circle cx="16.5" cy="17.5" r="2.5" />
        </svg>
      );
    case "timer":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2 2" />
          <path d="M9 3h6" />
          <path d="M12 3v2" />
        </svg>
      );
    case "bookmark":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
}

