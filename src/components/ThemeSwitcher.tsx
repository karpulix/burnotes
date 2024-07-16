"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";

const ThemeSwitcher = () => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch();
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
    }
  }, []);

  if (!mounted)
    return (
      <div className="flex flex-col gap-2">
        <div className="w-6 h-6 flex items-center justify-center rounded-md bg-default-100 hover:bg-default-200 mr-2">
          {" "}
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input
            {...getInputProps()}
            onChange={() => setTheme(theme == "light" ? "dark" : "light")}
          />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            color: "secondary",
            size: "sm",
            class: [
              "w-6 h-6",
              "flex items-center justify-center",
              "rounded-md bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {theme == "light" ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitcher;
