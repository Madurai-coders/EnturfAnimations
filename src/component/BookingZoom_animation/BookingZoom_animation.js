import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function BookingZoom_animation() {
  const BookingZoom= useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: BookingZoom.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("./BookingZoom_animation.json"),
    });
  }, []);
  return (
    <div>
      <div
        className="BSadminwebsite_loader"
        id="lottie"
        ref={BookingZoom}
      ></div>
    </div>
  );
}

export default BookingZoom_animation;
