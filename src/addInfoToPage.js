const address = document.querySelector(".addressHeader span");
const unit = document.querySelector("#unit");
const temp = document.querySelector("#temp");
const timeZone = document.querySelector("#timeZone");
const dateTime = document.querySelector("#dateTime");
const humidity = document.querySelector("#humidity");
const snow = document.querySelector("#snow");
const snowDepth = document.querySelector("#snowDepth");
const windSpeed = document.querySelector("#windSpeed");
const conditions = document.querySelector("#conditions");
const description = document.querySelector("#description");

export const addInfoToPage = (
  addressHeaderValue,
  unitValue,
  tempValue,
  timeZoneValue,
  dateTimeValue,
  humidityValue,
  snowValue,
  snowDepthValue,
  windSpeedValue,
  conditionsValue,
  descriptionValue,
) => {
  address.textContent = `${addressHeaderValue}`;
  unit.textContent = `${unitValue}`;
  temp.textContent = `${tempValue}`;
  timeZone.textContent = `${timeZoneValue}`;
  dateTime.textContent = `${dateTimeValue}`;
  humidity.textContent = `${humidityValue}`;
  snow.textContent = `${snowValue}`;
  snowDepth.textContent = `${snowDepthValue}`;
  windSpeed.textContent = `${windSpeedValue}`;
  conditions.textContent = `${conditionsValue}`;
  description.textContent = `${descriptionValue}`;
};
