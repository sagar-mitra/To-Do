import React from "react";

const HeroHeader = () => {
  const today = new Date();
  let date = today.getDate();
  let day = today.getDay();
  let month = today.getMonth();
  let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];


  return (
    <div className="flex items-center gap-5">
      <h1 className="text-5xl font-bold tracking-wide ">Today</h1>
      <span className="text-3xl font-semibold pt-2">({`${monthName[month]} ${date},   ${dayName[day]}`})</span>
    </div>
  );
};

export default HeroHeader;
