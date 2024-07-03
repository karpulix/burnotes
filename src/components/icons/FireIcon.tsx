// import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { Skeleton } from "@nextui-org/react";

export const FireIcon = (props: any) => {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   setLoaded(true);
  // }, []);

  return (
    <DotLottieReact
      className="lottie-inline"
      autoResizeCanvas={true}
      src="/lottie/fire.json"
      loop
      autoplay
    ></DotLottieReact>
  );
};
