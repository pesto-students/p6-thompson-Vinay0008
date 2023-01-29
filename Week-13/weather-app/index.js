import {
  getCurrentCityWeather,
  getForecast,
} from "./controllers/weatherController.js";

import { API_URLS } from "./constants.js";
import http from "http";
import { notFound } from "./handlers/responseHandler.js";
import url from "url";

const server = http.createServer(async (req, res) => {
  console.log(req);
  switch (url.parse(req.url).pathname) {
    case API_URLS.WEATHER:
      await getCurrentCityWeather(req, res);
      break;
    case API_URLS.FORECAST:
      await getForecast(req, res);
      break;
    default:
      notFound(res);
      break;
  }
  res.end();
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("Server is running on http://localhost:5000 ", port);
});
