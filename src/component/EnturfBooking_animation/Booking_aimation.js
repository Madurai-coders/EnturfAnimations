import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function EnturfBooking_animation() {
  const EnturfBooking = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: EnturfBooking.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("./Booking_animation.json"),
    });
  }, []);
  return (
    <div>
      <div
        className="BSadminwebsite_loader"
        id="lottie"
        ref={EnturfBooking}
      ></div>
    </div>
  );
}

export default EnturfBooking_animation;
