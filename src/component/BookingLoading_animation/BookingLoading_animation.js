import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function BookingLoading() {

  const BookingLoading = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: BookingLoading.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("./BookingLoading.json")
    });
  }, []);
  return (
    <div>
      <div className="BSadminwebsite_loader" id="lottie" ref={BookingLoading}></div>
    </div>
  );
}

export default BookingLoading;