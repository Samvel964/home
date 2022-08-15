import axios from "axios";
import { key } from './key';

export const getCurrentWeather = async (lat, lon) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key.key}`)
}

// export const getweatherOfFiveDay = async (lat, lon) => {
//     return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key.key}`)
// }
