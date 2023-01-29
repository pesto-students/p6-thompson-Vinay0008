import { badRequest, ok } from "../handlers/responseHandler.js";

import dotenv from "dotenv";
import fetch from "node-fetch";
import { getQueryParam } from "../helperFunctions.js";

dotenv.config();

const appKey = process.env.APP_KEY;
const apiURL = process.env.API_URL;

const appendAppKey = (url) => {
  return `${url}?key=${appKey}`;
};

const weatherApiURL = appendAppKey(apiURL);

export const getCurrentCityWeather = async (req, res) => {
  const cityName = getQueryParam(req.url, "q");

  if (!cityName) return badRequest(res, "city query param is required");
  const response = await fetch(`${weatherApiURL}&aqi=no&q=${cityName}`);
  const data = await response.json();
  ok(res, data);
};

export const getForecast = async (req, res) => {
  const [cityName, days] = [
    getQueryParam(req.url, "q"),
    getQueryParam(req.url, "days"),
  ];

  if (!cityName) return badRequest(res, "city query param is required");
  if (!days) return badRequest(res, "days query param is required");
  if (days < 0 || days > 10)
    return badRequest(res, "days query param is not valid");

  const response = await fetch(
    `${weatherApiURL}&aqi=no&q=${cityName}&days=${days}`
  );
  const data = await response.json();
  ok(res, data);
};
