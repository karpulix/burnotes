"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { decrypt } from "@/lib/cryptolib";
import { Spinner } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { Hint } from "./Hint";
import {} from "next/navigation";

interface DecryptProps {
  id: string;
}

async function fetchData(id: string, setContent: any, setError: any) {
  try {
    console.log(window);
    const hash = window.location.hash.replace("#", "");
    const response = await fetch("/api/secret/?id=" + id);
    const data = await response.json();
    const decrypted = decrypt(data.encrypted, hash);
    console.log("decripte", decrypted);
    setContent(decrypted);
  } catch (error) {
    setError(true);
  }
}
export const Decrypt: React.FC<DecryptProps> = function ({ id }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const t = useTranslations("Common");
  useEffect(() => {
    fetchData(id, setContent, setError);
  }, []);
  return (
    <section className="Decrypt">
      {!error ? (
        <>
          {content ? (
            <>
              <Hint color="success" text={t("block_hint_decrypt")}></Hint>
              <Snippet
                symbol=""
                className="bg-slate-200 dark:bg-slate-900 rounded-md p-2 min-w-full items-start"
              >
                {content}
              </Snippet>
            </>
          ) : (
            <>
              <Hint color="warning" text={t("block_hint_try_decrypt")}></Hint>
              <div className="rounded-md text-center">
                <Spinner
                  color="default"
                  size="lg"
                  label={t("decrypting") + "..."}
                />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <Hint color="danger" text={t("block_hint_error_decrypt")}></Hint>
        </>
      )}
    </section>
  );
};
