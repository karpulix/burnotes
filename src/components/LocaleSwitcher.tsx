import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import { locales } from "@/configs/locales";

export default function LocaleSwitcher() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const items: Array<{ key: string; label: string }> = [];

  locales.forEach(function (item) {
    items.push({
      key: item,
      label: t(item),
    });
  });

  return <LocaleSwitcherSelect defaultValue={locale} items={items} />;
}
