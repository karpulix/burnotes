"use client";

import React from "react";

export const BinaryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M16 14 H16 A2 2 0 0 1 18 16 V18 A2 2 0 0 1 16 20 H16 A2 2 0 0 1 14 18 V16 A2 2 0 0 1 16 14 z" />
    <path d="M8 4 H8 A2 2 0 0 1 10 6 V8 A2 2 0 0 1 8 10 H8 A2 2 0 0 1 6 8 V6 A2 2 0 0 1 8 4 z" />
    <path d="M6 20h4M14 10h4M6 14h2v6M14 4h2v6" />
  </svg>
);
