"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ToCreateButton from "@/components/ToCreateButton";
import FormZod from "@/components/FormZod";
import { FormResult } from "@/components/FormResult";
import { z } from "zod";

export default function Page() {
  const [formSubmitProcess, setFormSubmitProcess] = useState("form");
  const [resultUrl, setResultUrl] = useState("");
  const t = useTranslations("Common");

  return (
    <>
      {resultUrl === "" && (
        <>
          <FormZod setResultUrl={setResultUrl}></FormZod>
        </>
      )}
      {resultUrl.length > 1 && (
        <>
          <FormResult resultUrl={resultUrl}></FormResult>
          <ToCreateButton></ToCreateButton>
        </>
      )}
    </>
  );
}

// "use client";
// import LocaleSwitcher from "@/components/LocaleSwitcher";
// import { useTranslations } from "next-intl";

// export default function Index() {
//   const t = useTranslations("Common");
//   return <div></div>;
// }
