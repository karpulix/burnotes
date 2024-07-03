"use client";
import React from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { FireIcon } from "@/components/icons/FireIcon";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Header = function (props: any) {
  const t = useTranslations("Common");

  return (
    <header className="mb-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">
          <FireIcon />
          <b>
            <Link href="/">{t("application_name")}</Link>
          </b>
        </h1>
        <div className="text-sm font-medium grow"></div>
        <div className="shrink text-sm font-medium">
          <ThemeSwitcher></ThemeSwitcher>
        </div>
        <div className="shrink text-sm font-medium">
          <LocaleSwitcher></LocaleSwitcher>
        </div>
      </div>
    </header>
  );
};
