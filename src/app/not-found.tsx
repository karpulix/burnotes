"use client";
import { NotFoundComponent } from "@/components/NotFound/NotFoundComponent";
import { Spacer } from "@nextui-org/react";
export async function getStaticProps() {
  // Пример получения данных (может быть запрос к API, базе данных и т.д.)
  const staticData = "Это статически сгенерированные данные";

  return {
    props: {
      staticData,
    },
  };
}
export default function NotFound() {
  return (
    <div>
      <Spacer y={20} />
      <NotFoundComponent />
    </div>
  );
}
