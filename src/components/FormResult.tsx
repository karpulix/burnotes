"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Snippet } from "@nextui-org/react";
import { Hint } from "./Hint";

interface FormResultProps {
  resultUrl: string;
}

export const FormResult: React.FC<FormResultProps> = function ({ resultUrl }) {
  const t = useTranslations("Common");

  return (
    <section className="FormResult flex flex-col">
      <Hint color="success" text={t("block_hint_save_note_result_text")} />
      <Snippet
        tooltipProps={{
          content: t("copy"),
        }}
        size="md"
        symbol="🔑"
        color="secondary"
      >
        {resultUrl}
      </Snippet>
    </section>
  );
};
