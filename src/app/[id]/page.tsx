"use client";

// import { assert } from "console";
// import { client } from "@/lib/db";
import { useTranslations } from "next-intl";
import { Decrypt } from "@/components/Decrypt";
import ToCreateButton from "@/components/ToCreateButton";
import { useState } from "react";
import { Button, Spacer } from "@nextui-org/react";
import { TextIcon } from "@/components/icons/TextIcon";
import { Hint } from "@/components/Hint";

export default function Page({ params }: { params: { id: string } }) {
  const t = useTranslations("Common");
  const [runDecrypt, setRunDecrypt] = useState(false);

  return (
    <div>
      {!runDecrypt && (
        <>
          <Hint color="warning" text={t("block_hint_try_open")}></Hint>
          <div className="flex gap-4 justify-center mt-5 mb-5">
            <Button
              onPress={() => setRunDecrypt(true)}
              color="warning"
              endContent={<TextIcon />}
            >
              {t("open")}
            </Button>
          </div>
        </>
      )}
      {runDecrypt && (
        <>
          <Decrypt id={params.id}></Decrypt>
          <ToCreateButton></ToCreateButton>
        </>
      )}
    </div>
  );
}
