import React from "react";
import { Button } from "@nextui-org/react";
import { CreateIcon } from "@/components/icons/CreateIcon";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function CreateButton() {
  const t = useTranslations("Common");
  const router = useRouter();
  const onPressAction = () => {
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };
  return (
    <div className="flex gap-4 flex-row-reverse mt-5 mb-5">
      <Button
        onPress={onPressAction}
        color="success"
        endContent={<CreateIcon />}
      >
        {t("create_new")}
      </Button>
    </div>
  );
}
