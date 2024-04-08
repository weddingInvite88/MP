import React, { useState } from "react";

import "./timer.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Typography, colors } from "@mui/material";

const MyTimer = () => {
  // const [Completeds, setCompleteds] = useState(false);

  return (
    <div className="timer">
      <FlipClockCountdown
        to={new Date("Apr 25, 2024 19:00:00").getTime()}
        // onComplete={() => setCompleteds(true)}
        showSeparators={false}
        separatorStyle={{ width: "25px" }}
        digitBlockStyle={{
          color: "#ffffff",
          width: "0.5em",
          margin: "1px",
          height: "1em",
          // backgroundColor: "#785e2b",
          background: "#c9a969" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to bottom, #c29e56, #d0b47c)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to bottom, #c29e56, #d0b47c)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
        labelStyle={{ fontSize: "7pt", bottom: "7.6em" }}
      >
        <Typography
          style={{
            color: "#FFFFFF",
            textShadow:
              "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px",
          }}
          variant="h4"
        >
          Thanks for your wishes
        </Typography>
      </FlipClockCountdown>
      {/* {Completeds && (
        <Typography
          style={{
            color: "#FFFFFF",
            textShadow:
              "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px",
          }}
          variant="h4"
        >
          Thanks for your wishes
        </Typography>
      )} */}
    </div>
  );
};

export default MyTimer;
