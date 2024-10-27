/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { DateTime } from "luxon";

function DailyWeatherCard({ title, forcast }) {
  return (
    <div className="py-[22px] relative z-10">
      <div className="max-w-[950px] bg-slate-400/50 shadow-lg shadow-zinc-800 mx-auto h-full py-2 rounded-md px-3">
        <div>
          <h2 className="font-bold">{title}</h2>
        </div>
        <hr className="my-1" />
        <div className="flex max-w-[950px] gap-12 element overflow-x-auto">
          {forcast && Array.isArray(forcast) && forcast.length > 0 ? (
            forcast.map((item) => {
              const time = item.dt
                ? DateTime.fromSeconds(item.dt).toFormat("h a")
                : "N/A";
              return (
                <div
                  key={item.id}
                  className="flex items-center flex-col justify-between w-full"
                >
                  <p className="text-sm font-semibold">{time}</p>
                  <img
                    src={
                      item.weather && item.weather[0]
                        ? `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                        : ""
                    }
                    alt="image"
                    className="w-16 my-1"
                  />
                  <p className="text-sm font-semibold">
                    {item.main && item.main.temp
                      ? `${item.main.temp}°C`
                      : "N/A"}
                  </p>
                </div>
              );
            })
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DailyWeatherCard;
