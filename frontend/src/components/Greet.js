import React from "react";
import wave from "../assets/wave.png";
import "./Greet.css";

const Greet = () => {
  return (
    <div className="welcome flex">
      <div>
        <img src={wave} alt="wave" />
      </div>
      <span>HELLO</span>
    </div>
  );
};

export default Greet;
