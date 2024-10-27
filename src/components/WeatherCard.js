import React from "react";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { RiContrastDropFill } from "react-icons/ri";
import { WiStrongWind } from "react-icons/wi";

import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import { DateTime } from "luxon";

const now = DateTime.now();

const date = now.toFormat("MMMM dd, yyyy"); // October 23, 2024
const time = now.toFormat("hh:mm a");

// const verticalDetails = [
//   {
//     id: 1,
//     icon: FaTemperatureThreeQuarters,
//     name: "Feels like",
//     value: {feelsLike},
//   },
//   {
//     id: 2,
//     icon: RiContrastDropFill,
//     name: "Humidity",
//     value: "34*C",
//   },
//   {
//     id: 3,
//     icon: WiStrongWind,
//     name: "Wind speed",
//     value: "22 km/h",
//   },
// ];

const horizontalDetails = [
  { id: 1, icon: FiSunrise, name: "Sun rise", value: time, size: 20 },
  { id: 2, icon: FiSunset, name: "Sun set", value: time, size: 20 },
  { id: 3, icon: FaArrowUp, name: "Max Temp.", value: time, size: 15 },
  {
    id: 4,
    icon: FaArrowDown,
    name: "Min Temp.",
    value: time,
    size: 15,
  },
];

function WeatherCard({
  temperature,
  city,
  windSpeed,
  humidity,
  feelsLike,
  weather,
  country,
  icon,
}) {
  const verticalDetails = [
    {
      id: 1,
      icon: FaTemperatureThreeQuarters,
      name: "Feels like",
      value: `${feelsLike} °C`,
    },
    {
      id: 2,
      icon: RiContrastDropFill,
      name: "Humidity",
      value: `${humidity} °C`,
    },
    {
      id: 3,
      icon: WiStrongWind,
      name: "Wind speed",
      value: `${windSpeed} km/h`,
    },
  ];
  return (
    <div className="py-6 relative z-10 ">
      <div className="bg-slate-400/50 md:h-[50vh] h-full  max-w-[950px] mx-auto w-full rounded-md py-5 px-3 shadow-lg shadow-zinc-800">
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="text-center py-3">
            <div className="text-center py-1">
              <p>
                {date} | Local time: {time}
              </p>
            </div>

            <div className="text-center py-1 text-xl font-bold">
              <p>
                {city}, {country}
              </p>
            </div>
          </div>

          <h1 className="text-center font-semibold">{weather}</h1>

          <div className="flex flex-col md:flex-row w-full items-center">
            <div className="max-w-[250px] w-full flex flex-col items-center justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
              />
            </div>
            <div className="w-full">
              <h1 className="text-center font-bold text-4xl">
                {temperature} °C
              </h1>
            </div>
            <div className="max-w-[250px] w-full flex flex-col gap-1">
              {verticalDetails.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex justify-center gap-2 items-center"
                >
                  <item.icon />
                  <p className="font-semibold">{item.name} :</p>

                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex md:gap-0 gap-6 md:pt-3 sm:pt-2 w-full items-center overflow-auto">
            {horizontalDetails.map((item) => (
              <div
                key={item.id}
                className="w-[90%] flex items-center justify-center gap-1"
              >
                <item.icon size={item.size} />
                <p className="w-18 text-center text-sm">{item.name} - </p>
                <p className="text-sm w-18">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
