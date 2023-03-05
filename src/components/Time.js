import React, { useEffect, useState } from "react";

const Time = (props) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let time = new Date();

  const [currentTime, setCurrentTime] = useState([
    weekday[time.getDay()],
    time.getDate(),
    time.getHours(),
    time.getMinutes(),
  ]);
  const updateTime = () => {
    let time = new Date();
    setCurrentTime([
      weekday[time.getDay()],
      time.getDate(),
      time.getHours(),
      time.getMinutes(),
    ]);
  };
  setInterval(updateTime, 60000);
  useEffect(() => {
    props.setCount({
      currenTime2: currentTime[2],
      currentTime3: currentTime[3],
    });
  }, [props.state]);
  return (
    <div className="divpicture">
      <div className="divsmall">
        <h1>{currentTime[0]}</h1>
        <h2>{currentTime[1]}</h2>
      </div>
      <div className="divbig">
        <h3>{currentTime[2] % 12 || 12}:</h3>
        <h4>{currentTime[3]}</h4>
        <h5>{currentTime[2] > 12 ? "PM" : "AM"}</h5>
      </div>
    </div>
  );
};

export default Time;
