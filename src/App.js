import Loader from "./component/BSAdminLoader/Loader";
import EnturfBooking_animation from "./component/EnturfBooking_animation/Booking_aimation";
import Football_animation from "./component/Football_animation/Ftball_animation";
import FtballKick_animation from "./component/FtballKick_animation/FtballKick_animation";
import BookingZoom_animation from "./component/BookingZoom_animation/BookingZoom_animation";
import BookingLoading_animation from "./component/BookingLoading_animation/BookingLoading_animation";
function App() {
  return (
    <div>
      <Loader></Loader>
      <EnturfBooking_animation></EnturfBooking_animation>
      <BookingZoom_animation></BookingZoom_animation>
      <BookingLoading_animation></BookingLoading_animation>
      <Football_animation></Football_animation>
      <FtballKick_animation></FtballKick_animation>
      
    </div>
  );
}

export default App;
