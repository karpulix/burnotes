"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = function () {
  const t = useTranslations("Common");

  return (
    <footer className="mb-5">
      <Link
        href="https://github.com/karpulix/burnotes"
        target="_blank"
        className="flex items-center justify-between text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400"
      >
        <div className="text-sm">{`<OpenSource>`}</div>
        <div className="text-sm font-medium grow"></div>
        <div className="shrink text-sm font-sm">{`<GitHub />`}</div>
        <div className="text-sm font-medium grow"></div>
        <div className="shrink text-sm font-medium">{`</OpenSource>`}</div>
      </Link>
    </footer>
  );
};
