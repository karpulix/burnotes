import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Spacer, Textarea, Tooltip } from "@nextui-org/react";
import { BinaryIcon } from "@/components/icons/BinaryIcon";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { encrypt, generateRandomString } from "@/lib/cryptolib";
import { useForm } from "react-hook-form";
import { Hint } from "./Hint";
import { SendingOverlay } from "./SendingOverlay";

interface FormZodComponentProps {
  setResultUrl: React.Dispatch<React.SetStateAction<string>>;
}

// TODO: Find out how to use localization here ↓↓↓
const schema = z.object({
  key: z.string().min(0, { message: "Incorrect secret key" }),
  value: z.string().min(5, { message: "Min lenght 5" }),
});

type FormData = z.infer<typeof schema>;

const FormZod: React.FC<FormZodComponentProps> = ({ setResultUrl }) => {
  const t = useTranslations("Common");

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as any,
  });

  const [sending, setSending] = useState(false);

  const [hashValue, setHashValue] = useState("");
  const [serverError, setServerError] = useState("");
  const [sendingProgress, setSendingProgress] = useState(false);

  useEffect(() => {
    const hash = generateRandomString(8);
    setValue("key", hash);
    setHashValue(hash);
  }, [setValue]);

  async function onSubmit(data: FormData) {
    setSendingProgress(true);
    try {
      const value = data.value;
      const key = data.key;
      const encrypted = encrypt(value, key);
      const response = await fetch("/api/secret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          encrypted: encrypted,
        }),
      });
      const result = await response.json();
      if (result.err == 0 && result.id.length > 0) {
        const url = `${window.location.protocol}//${window.location.host}`;
        const resultUrl = url + "/" + result.id + "#" + hashValue;
        setResultUrl(resultUrl);
        setSendingProgress(false);
      } else {
        setServerError(result.message);
        setSendingProgress(false);
      }
    } catch (error) {
      setServerError(t("unexpected_error"));
      setSendingProgress(false);
    }
  }

  return (
    <>
      <form className="FormZod" onSubmit={handleSubmit(onSubmit)}>
        {sendingProgress && <SendingOverlay></SendingOverlay>}
        {serverError && <Hint color="danger" text={serverError}></Hint>}
        <Tooltip
          size="sm"
          delay={500}
          showArrow={true}
          content={t("form_input_tooltip_secret_key")}
        >
          <Input
            {...register("key")}
            label={t("form_input_label_secret_key")}
            placeholder={t("form_input_placeholder_secret_key")}
            errorMessage={errors.key?.message}
            isInvalid={errors.key ? true : false}
            isReadOnly
            value={hashValue}
            startContent={hashValue ? <div className="hashvalue">#</div> : ""}
            endContent={
              <BinaryIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </Tooltip>
        <Spacer y={3} />
        <Textarea
          {...register("value")}
          label={t("form_textarea_label_secret_note")}
          placeholder={t("form_textarea_placeholder_secret_note")}
          errorMessage={errors.value?.message}
          classNames={{
            input: "min-h-[200px]",
          }}
          isInvalid={errors.value ? true : false}
        ></Textarea>
        <Spacer y={3} />
        <Button
          type="submit"
          color={hashValue === "" ? "default" : "primary"}
          variant="solid"
          isDisabled={hashValue === ""}
        >
          {t("save")}
        </Button>
      </form>
      <Hint color="primary" text={t("block_hint_service_describe")}></Hint>
    </>
  );
};

export default FormZod;
