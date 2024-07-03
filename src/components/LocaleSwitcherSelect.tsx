"use client";

import React from "react";
import { useTransition } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { Locale } from "@/configs/locales";
import { setUserLocale } from "@/services/locale";

type Props = {
  defaultValue: string;
  items: Array<{ key: string; label: string }>;
  // label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, items }: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(select: any) {
    console.log(select);
    const locale = select as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          size="sm"
          className="min-w-1 h-6 bg-default-100 hover:bg-default-200 rounded-md "
        >
          {defaultValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        items={items}
        onAction={(select) => onChange(select)}
      >
        {(item) => (
          <DropdownItem
            className="min-w-1"
            key={item.key}
            value={item.key}
            shortcut={item.key}
            // color={item.key === "delete" ? "danger" : "default"}
            // className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
