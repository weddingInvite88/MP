import React, { useState } from "react";

import "./timer.css";
import { Typography } from "@mui/material";

const MyTimer = ({ millisecond }) => {
  const getFormatedRemaningTime = (millisecond) => {
    let total_sec = parseInt(Math.floor(millisecond / 1000));
    let total_min = parseInt(Math.floor(total_sec / 60));
    let total_hou = parseInt(Math.floor(total_min / 60));
    let day = parseInt(Math.floor(total_hou / 24));

    let sec = parseInt(total_sec % 60);
    let min = parseInt(total_min % 60);
    let hou = parseInt(total_hou % 24);

    return `${day} : ${hou} : ${min} : ${
      sec.toString().length === 2 ? sec : "0" + sec
    }`;
  };
  return (
    <div className="timer">
      <div>
        <Typography
          variant="caption"
          my={0}
        >{`\xa0\xa0\xa0\xa0\xa0\xa0 Day \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Hour \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Min `}</Typography>
      </div>
      <div>
        <Typography
          variant="h3"
          my={0}
          // style={{
          //   color: "#FFFFFF",
          //   textShadow:
          //     "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18",
          // }}
          style={{
            color: "#FFFFFF",
            textShadow:
              "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px",
          }}
        >
          {getFormatedRemaningTime(millisecond)}
        </Typography>
      </div>
      {/* <h2>{getFormatedRemaningTime(millisecond)}</h2> */}
    </div>
  );
};

export default MyTimer;
