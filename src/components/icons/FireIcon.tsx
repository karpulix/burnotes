"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export const FireIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <DotLottieReact
      className="lottie-inline"
      autoResizeCanvas={true}
      src="/lottie/fire.json"
      loop
      autoplay
    />
  );
};
