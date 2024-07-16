"use client";
import { useTranslations } from "next-intl";
import { DecryptedNote } from "@/components/DecryptedNote";
import CreateButton from "@/components/CreateButton";
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
          <Hint color="warning" text={t("block_hint_try_open")} />
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
          <DecryptedNote id={params.id} />
          <CreateButton />
        </>
      )}
    </div>
  );
}
