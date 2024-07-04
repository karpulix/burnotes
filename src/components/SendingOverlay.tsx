"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Progress } from "@nextui-org/react";

export const SendingOverlay = function (props: any) {
  const t = useTranslations("Common");

  return (
    <div className="SendingOverlay  bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-950">
      <Progress
        size="sm"
        color="secondary"
        isIndeterminate
        label={t("saving")}
        className="w-[70%]"
      />
    </div>
  );
};
