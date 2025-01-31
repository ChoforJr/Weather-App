import "./style.css";

import { addInfoToPage } from "./addInfoToPage.js";
import { changeBackground } from "./changeBackground.js";

const location = document.querySelector("#location");
const button = document.querySelector("button");
const unitSystem = document.querySelector("#unitSystem");

async function weatherData(location, unitSystem) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitSystem}&key=KXWGCHND84TA8YHXMBTNQQN34&contentType=json`,
      { mode: "cors" },
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Success:", result);
    console.log(result.description);
    console.log(result.timezone);
    console.log(result.resolvedAddress);
    console.log(result.currentConditions.temp);
    console.log(result.currentConditions.datetime);
    console.log(result.currentConditions.humidity);
    console.log(result.currentConditions.snow);
    console.log(result.currentConditions.snowdepth);
    console.log(result.currentConditions.windspeed);
    console.log(result.currentConditions.conditions);
    console.log(result.currentConditions.icon);

    addInfoToPage(
      result.resolvedAddress,
      unitSystem,
      result.currentConditions.temp,
      result.timezone,
      result.currentConditions.datetime,
      result.currentConditions.humidity,
      result.currentConditions.snow,
      result.currentConditions.snowdepth,
      result.currentConditions.windspeed,
      result.currentConditions.conditions,
      result.description,
    );

    changeBackground(result.currentConditions.icon);
  } catch (error) {
    console.error("Error:", error);
  }
}

button.addEventListener("click", () => {
  if (location.value.trim() === "") {
    alert("Please provide a location");
    return;
  }
  weatherData(location.value, unitSystem.value);
  location.value = "";
  unitSystem.value = "metric";
});
