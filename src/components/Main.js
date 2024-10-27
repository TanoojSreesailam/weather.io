import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { CiSearch } from "react-icons/ci";
// import HourlyForcast from "./HourlyForcast";
import DailyWeatherCard from "./DailyWeatherCard";
import { DateTime } from "luxon";
// import Background from "../assests/background.png";

function Main() {
  // const API_KEY = "00d310f6a2msh02fec035d53a34fp16c908jsn69e8de83fd07";
  const [input, setInput] = useState("Visakhapatnam");
  const [data, setData] = useState([{}]);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Visakhapatnam");

  // const [coords, setCoords] = useState([]);

  const [forcast, setForcast] = useState([{}]);
  // const [dailyForcast, setDailyForcast] = useState([{}]);
  // const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSearch = () => {
    setCity(input);
  };
  //Weather api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null); // Reset error on new fetch
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=608e494159fd9a05ad9b78a98feb033c`
        );

        if (!response.ok) {
          throw new Error("Location not found");
        }

        const cityData = await response.json();
        setData(cityData);
        // const cityData = await response.json();
        // setCoords({
        //   lat: cityData.coord.lat,
        //   lon: cityData.coord.lon,
        // });
        console.log(cityData);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };

    fetchData();
  }, [city]);

  //Hourly forcast

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setError(null); // Reset error on new fetch
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=608e494159fd9a05ad9b78a98feb033c`
        );

        if (!response.ok) {
          throw new Error("Location not found");
        }

        const data = await response.json();
        const filteredForecast = data.list.filter((forecast) => {
          // Only proceed if `dt` is defined
          if (!forecast.dt) return false;
          const hour = DateTime.fromSeconds(forecast.dt).hour;
          return hour >= 10 && hour <= 22;
        });

        setForcast(filteredForecast);
        console.log(filteredForecast);
      } catch (err) {
        // setError(err.message);
        setForcast(null);
      }
    };

    fetchData();
  }, [city]);

  //Daily forcast

  return (
    <div className="w-full h-full py-12 px-2 relative">
      {/* <div className="w-full h-full object-cover absolute top-0 left-0 z-0">
        <img className="w-full h-full object-cover" src={Background} alt="" />
      </div> */}
      <div className=" max-w-[720px] mx-auto w-full h-full relative items-center flex">
        <input
          className="px-2 py-3 w-full rounded-lg max-w-[600px] mx-auto text-center capitalize"
          name=""
          type="text"
          onChange={handleInputChange}
          placeholder="Search Locations"
        />
        <div className="absolute top-2 sm:left-16 left-2">
          <CiSearch
            onClick={handleSearch}
            size={30}
            className="cursor-pointer"
          />
        </div>

        {/* <div className="flex gap-3 absolute top-2 right-0">
          <button>C</button>
          <span>|</span>
          <button>F</button>
        </div> */}
      </div>

      <div className="">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : data ? (
          <WeatherCard
            className=""
            city={data.name}
            temperature={data.main?.temp}
            humidity={data.main?.humidity}
            feelsLike={data.main?.feels_like}
            windSpeed={data.wind?.speed}
            weather={data.weather ? data.weather[0].main : ""}
            country={data.sys?.country}
            icon={data.weather ? data.weather[0].icon : ""}
          />
        ) : (
          <p className="text-center">Loading...</p>
        )}
        <DailyWeatherCard title="Hourly Forcast" forcast={forcast} />
        {/* <DailyWeatherCard title="Daily Forcast" /> */}
      </div>
    </div>
  );
}

export default Main;
