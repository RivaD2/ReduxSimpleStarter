import axios from 'axios';

const API_KEY = 'adf3ca26fccf527a5369622029784017';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type:FETCH_WEATHER,
    payload: request.data
  }
};