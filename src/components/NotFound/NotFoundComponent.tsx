"use client";
import React from "react";
import { useTranslations } from "next-intl";
import "./style.css";

export const NotFoundComponent = function () {
  const t = useTranslations("Common");

  return (
    <div className="NotFoundDivWrap">
      {/* <div className="font-bold text-left">{`<page>`}</div> */}
      <div className="NotFoundDiv" title="404">
        404
      </div>
      <div className="font-bold NotFoundDiv" title="Page Not Found">
        Page Not Found
      </div>
      {/* <div className="font-bold text-right">{`</page>`}</div> */}
    </div>
  );
};
