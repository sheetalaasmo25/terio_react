import { useState } from "react";


const BannerTask = ({user}) => {
  return (
    <div className="banner-container">
      {/* Welcome Tab */}
      <div className="welcome-tab mt-5">
  {console.log(user, "user")}
  <h2>Welcome, {user?.fullName 
      ? user.fullName
          .split(" ") // Naam ko space se tod diya
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Har word ka first letter capital
          .join(" ") // Wapas ek string bana diya
      : ""}
  </h2>
  <p style={{ color: "black" }}>Your dashboard for Computer Operator tasks</p>
</div>



      {/* Curved Banner */}
      <div className="banner">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="/assets/video/Computeroprator.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default BannerTask;




