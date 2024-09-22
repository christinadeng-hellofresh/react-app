import React from "react";
import officeImg from "../../assets/office-background.png";

const ParallaxSection = () => {
  const parallaxStyle = {
    backgroundImage: `url(${officeImg})`, // Replace with your image path
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "40vh",
    position: "relative",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
  };

  return (
    <section style={parallaxStyle}>
      <div style={contentStyle} className="flex flex-col items-center"></div>
    </section>
  );
};

export default ParallaxSection;
