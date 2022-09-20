import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Loader.css";

function Loader() {
  const EnturfLoader = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: EnturfLoader.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("./EnturfLoading_animation.json"),
    });
  }, []);
  return (
    <div>
      <div className="BSadminwebsite_loader" id="lottie" ref={EnturfLoader}></div>
    </div>
  );
}

export default Loader;
