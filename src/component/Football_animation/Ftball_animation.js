import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Ftball_animation() {
  const ftball = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: ftball.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("./Ftball_animation.json"),
    });
  }, []);
  return (
    <div>
      <div
     className="BSadminwebsite_loader"
        id="lottie"
        ref={ftball}
      ></div>
    </div>
  );
}

export default Ftball_animation;
