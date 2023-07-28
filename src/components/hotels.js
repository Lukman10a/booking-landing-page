// import React from "react";
// import vineyard from "../assets/images/vineyard.png";
// import { HiLocationMarker } from "react-icons/hi";
// import star from "../assets/icons/star.svg";
// // import location from "../assets/icons/location.svg";

// const HotelBrand = () => {
//   return (
//     <div>
//       <img src={vineyard} alt="" />
//       <h3>The Vineyard</h3>
//       <div className="card-detail">
//         <div className="location-content">
//           <HiLocationMarker />
//           <p>Berkshire</p>
//         </div>
//         <div>
//           <img src={star} alt="" />
//           <p>5.0</p>
//         </div>
//       </div>
//       <h4>Fully Booked</h4>
//       <p>From 70.0/day</p>
//     </div>
//   );
// };

// export default HotelBrand;

import React from "react";
import vineyard from "../assets/images/vineyard.png";
import { HiLocationMarker } from "react-icons/hi";
import star from "../assets/icons/star.svg";

const HotelBrand = () => {
  return (
    <div className="card">
      <img className="card-image" src={vineyard} alt="" />
      <h3 className="card-title">The Vineyard</h3>
      <div className="card-detail">
        <div className="location-content">
          <HiLocationMarker className="location-icon" />
          <p className="location">Berkshire</p>
        </div>
        <div className="rating-content">
          <img className="star-icon" src={star} alt="" />
          <p className="rating">5.0</p>
        </div>
      </div>
      <h4 className="status">Fully Booked</h4>
      <p className="price">From $70.0/day</p>
    </div>
  );
};

export default HotelBrand;
