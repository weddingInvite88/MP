import React, { useState, useEffect } from "react";
import MovingText from "react-moving-text";
import MovingComponent from "react-moving-text";
import "./textdetails.css";
import dateCountdown from "date-countdown";

const TextDetails = () => {
  // console.log(daysLeft * 24 * 60 * 60 * 1000);

  const [SwitchT2, setSwitchT2] = useState(false);
  const [SwitchT3, setSwitchT3] = useState(false);
  const [SwitchT4, setSwitchT4] = useState(false);

  const [SwitchT5, setSwitchT5] = useState(false);
  const [SwitchT6, setSwitchT6] = useState(false);
  const [SwitchT7, setSwitchT7] = useState(false);

  const [SwitchT8, setSwitchT8] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSwitchT2(true);
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSwitchT3(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSwitchT4(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSwitchT5(true);
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSwitchT6(true);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSwitchT7(true);
    }, 6000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSwitchT8(true);
    }, 6500);
  }, []);

  const Letters = "Reception";
  const Letterss = ["R", "e", "c", "e", "p", "t", "i", "o", "n"];
  const T1 = "you are invited to the wedding";

  const T2 = "Reception";
  const T3 = "25 04 2024";
  // const T4 = "7 pm on wards";
  const T4 = "7";

  const T5 = "Muhurtham";
  const T6 = "26 04 2024";
  // const T7 = "9:20 to 10:20 am";
  const T7 = "9:20-10:20\xa0";

  const Address =
    "Sri Devamma Kari Gowda Convention Hall, Mahalakshmi Layout, Bangalore";

  return (
    <>
      <div className="text-continair">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {T1.split(" ").map((word, i) => (
            <div className="word-continair">
              {word.split("").map((letter, index) => (
                <MovingText
                  type="squeezeMix"
                  duration="1000ms"
                  delay={index * 100 + "ms"}
                  direction="normal"
                  timing="ease-in-out"
                  iteration="infinite"
                  fillMode="none"
                >
                  {letter}
                </MovingText>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "45%" }}
          >
            {SwitchT2 && (
              <span className="T2">
                <MovingText
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  {T2}
                </MovingText>
              </span>
            )}

            {SwitchT3 && (
              <span className="T2">
                <MovingText
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  {T3}
                </MovingText>
              </span>
            )}

            {SwitchT4 && (
              <span className="T2">
                <MovingText
                  type="fadeInFromBottom"
                  duration="1000ms"
                  delay="0s"
                  direction="alternate"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  {`${T4}\xa0`}
                </MovingText>
                <MovingText
                  type="fadeInFromBottom"
                  duration="1000ms"
                  delay="0s"
                  direction="alternate"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  <small>on wards</small>
                </MovingText>
                {/* {`${T4} <strong>on</strong>`} */}
              </span>
            )}
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "45%" }}
          >
            {SwitchT5 && (
              <span className="T2">
                <MovingText
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  {T5}
                </MovingText>
              </span>
            )}

            {SwitchT6 && (
              <span className="T2">
                <MovingText
                  type="fadeInFromTop"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  {T6}
                </MovingText>
              </span>
            )}

            {SwitchT7 && (
              <span className="T2">
                <MovingText
                  type="fadeInFromBottom"
                  duration="1000ms"
                  delay="0s"
                  direction="alternate"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  {T7}
                </MovingText>
                <MovingText
                  type="fadeInFromBottom"
                  duration="1000ms"
                  delay="0s"
                  direction="alternate"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  <small>am</small>
                </MovingText>
              </span>
            )}
          </div>
        </div>
        {SwitchT8 && (
          <span
            className="T8"
            onClick={() =>
              window.open("https://maps.app.goo.gl/4FsU6AWiY3W8bLHQ8")
            }
          >
            <MovingText
              type="shakeVertical"
              duration="3000ms"
              delay="0s"
              direction="alternate"
              timing="ease-in-out"
              iteration="1"
              fillMode="forwards"
            >
              {Address}
            </MovingText>
          </span>
        )}
      </div>
      {/* <h6 style={{ position: "fixed", zIndex: 100 }}>
        {getFormatedRemaningTime(Timer)}
      </h6> */}
    </>
  );
};

export default TextDetails;
