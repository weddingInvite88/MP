import { useEffect, useState } from "react";
import "./App.css";
import Baloons from "./Components/Baloons/Baloons";
import Heart from "./Components/Heart/Heart";
import PhotoSlide from "./Components/PhotoSlide/PhotoSlide";

import ActionButtons from "./Components/ActionButton/ActionButtons";

import MyTimer from "./MyTimer/Timer";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function App() {
  const { width, height } = useWindowSize();

  const [HeartDelay, setHeartDelay] = useState(false);
  const [Photo, setPhoto] = useState(false);

  const [BaloonView, setBaloonView] = useState(true);

  const [ShowTimer, setShowTimer] = useState(false);

  // const finalDate = new Date("Apr 25, 2024 19:00:00").getTime();
  // const now = new Date().getTime();
  // const gap = finalDate - now;

  // const [Timer, setTimer] = useState(finalDate - now);
  // console.log(gap);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimer(finalDate - now);
  //   }, 1000);
  // }, [Timer, finalDate, now]);

  // console.log(Timer);

  useEffect(() => {
    setTimeout(() => {
      setHeartDelay(true);
    }, 5380);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPhoto(true);
    }, 6000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBaloonView(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowTimer(true);
    }, 6000);
  }, []);

  return (
    <div className="App">
      {BaloonView && <Baloons />}

      {HeartDelay && <Heart />}
      {Photo && <PhotoSlide />}

      {ShowTimer && <MyTimer />}

      <ActionButtons />

      <Confetti
        width={width}
        height={height}
        gravity={0.03}
        numberOfPieces={70}
      />
    </div>
  );
}

export default App;
