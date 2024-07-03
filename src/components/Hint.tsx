"use client";
import React from "react";
import { useTranslations } from "next-intl";

export const Hint = function (props: any) {
  const t = useTranslations("Common");

  return (
    <>
      <blockquote
        className={`border px-4 my-6 py-3 rounded-xl border-${props.color}-200 dark:border-${props.color}-100 bg-${props.color}-200/20`}
      >
        {props.text}
      </blockquote>
    </>
  );
};
