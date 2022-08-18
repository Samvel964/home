import sunnySky from '../images/sunnySky.jpg';
import cloudySky from '../images/cloudySky.jpg';
import rain from '../images/rain2.jpg';
import snow from '../images/snow.jpg';
import mist from '../images/mist.jpg';

export const kelvinToCelsius = (temp) => {
    return Math.floor(temp - 273.15);
}

export const hpaToMmhg = (pres) => {
    return Math.floor(pres / 1.333);
}

export const sunrise = (sunrise) => {
    const sunriseDate = new Date(sunrise * 1000);
    const hours = sunriseDate.getHours();
    const minute = sunriseDate.getMinutes();
    const second = sunriseDate.getSeconds();
    return '0' + hours + ':' 
    + (minute < 10 ? '0' + minute : minute)  
    + ':' + (second < 10 ? '0' + second : second)
}

export const sunset = (sunset) => {
    const sunsetDate = new Date(sunset * 1000);
    const hours = sunsetDate.getHours();
    const minute = sunsetDate.getMinutes();
    const second = sunsetDate.getSeconds();
    return hours + ':' 
    + (minute < 10 ? '0' + minute : minute) 
    + ':' + (second < 10 ? '0' + second : second)
}

export const getDate = () => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    return (day < 10 ? '0' + day : day) + ' ' + months[month] + ' ' + year
}


export const desk = [
    {
        name: "clear sky",
        image : sunnySky
    },
    {
        name : "few clouds",
        image : cloudySky
    },
    {
        name: 'overcast clouds',
        image : cloudySky
    },
    {
        name : "scattered clouds",
        image : cloudySky
    },
    {
        name : "broken clouds",
        image : cloudySky
    },
    {
        name : "shower rain",
        image : rain
    },
    {
        name: 'light rain',
        image: rain
    },
    {
        name : "rain",
        image : rain
    },
    {
        name : "thunderstorm",
        image : rain
    },
    {
        name : "snow",
        image : snow
    },
    {
        name : "mist",
        image : mist
    },
]
