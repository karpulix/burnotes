"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import CreateButton from "@/components/CreateButton";
import FormZod from "@/components/FormZod";
import { FormResult } from "@/components/FormResult";

export default function Page() {
  const [formSubmitProcess, setFormSubmitProcess] = useState("form");
  const [resultUrl, setResultUrl] = useState("");
  const t = useTranslations("Common");

  return (
    <>
      {resultUrl === "" && (
        <>
          <FormZod setResultUrl={setResultUrl} />
        </>
      )}
      {resultUrl.length > 1 && (
        <>
          <FormResult resultUrl={resultUrl} />
          <CreateButton />
        </>
      )}
    </>
  );
}
