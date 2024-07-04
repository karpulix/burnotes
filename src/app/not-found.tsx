"use client";
import { NotFoundComponent } from "@/components/NotFound/NotFoundComponent";
import { Spacer } from "@nextui-org/react";
export default function NotFound() {
  return (
    <div>
      <Spacer y={20}></Spacer>

      <NotFoundComponent />
    </div>
  );
}
