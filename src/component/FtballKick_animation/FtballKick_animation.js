import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function FtballKickanimation() {
  const FtballKick = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: FtballKick.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("./FtballKick_animation.json"),
    });
  }, []);
  return (
    <div>
      <div
        className="BSadminwebsite_loader"
        id="lottie"
        ref={FtballKick}
      ></div>
    </div>
  );
}

export default FtballKickanimation;
