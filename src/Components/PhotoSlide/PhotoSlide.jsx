import React, { useEffect, useState } from "react";
import "./photoslide.css";
import TextDetails from "../TextDetails/TextDetails";

const PhotoSlide = () => {
  const [TextData, setTextData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextData(true);
    }, 2500);
  }, []);
  return (
    <>
      <div className="image-container">
        <div className="image-half left"></div>
        <div className="image-half right"></div>
        {TextData && <TextDetails />}
      </div>
    </>
  );
};

export default PhotoSlide;
