import './style.scss';
import { getCurrentWeather } from '../../api/weather';
import cities from './zip/current.city.list.json';
import { useState } from 'react';
import { desk } from './zip/descriptions';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// import { getweatherOfFiveDay } from '../../api/weather';


export const Weather = () => {
    const [data, setData] = useState();
    // const [dataFive, setDataFive] = useState();
    let background
    
    if (data) {
        background = desk.filter(item => item.name === data?.weather[0].description)[0].image
    }
    
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const coord = cities.filter(city => city.name.toLowerCase().trim() 
        === e.target[0].value.toLowerCase().trim())[0].coord;
        
        const res = await getCurrentWeather(coord.lat, coord.lon);
        setData(res.data);

        e.target[0].value = '';

        // const res5 = await getweatherOfFiveDay(coord.lat, coord.lon);
        // console.log(res5);
        
    }

    const kelvinToCelsius = (temp) => {
        return Math.floor(temp - 273.15);
    }

    const hpaToMmhg = (pres) => {
        return Math.floor(pres / 1.333);
    }

    const sunrise = (sunrise) => {
        const sunriseDate = new Date(sunrise * 1000);
        const hours = sunriseDate.getHours();
        const minute = sunriseDate.getMinutes();
        const second = sunriseDate.getSeconds();
        return '0' + hours + ':' 
        + (minute < 10 ? '0' + minute : minute)  
        + ':' + (second < 10 ? '0' + second : second)
    }

    const sunset = (sunset) => {
        const sunsetDate = new Date(sunset * 1000);
        const hours = sunsetDate.getHours();
        const minute = sunsetDate.getMinutes();
        const second = sunsetDate.getSeconds();
        return hours + ':' 
        + (minute < 10 ? '0' + minute : minute) 
        + ':' + (second < 10 ? '0' + second : second)
    }

    const getDate = () => {
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const date = new Date();
        const month = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();
        return (day < 10 ? '0' + day : day) + ' ' + months[month] + ' ' + year
    }
    

    return(
        <div className='container'>
            <p className='text-center title'>On this page you can search for any city and see the weather</p>
            <div className='form'>
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <input type="text" placeholder='Enter City'/>
                    <input type="submit" className='btn btn-success' value='GO'/>
                </form>
            </div>
            <div className='row'>
            {data &&
                <div 
                className='weather col-md-6' 
                style={{backgroundImage:`url(${background})`}} 
                >
                    <div className='city'>
                        <div className='city-left'>
                            <p className='city-left-name'>Weather in {data?.name}</p>
                            <p className='city-left-date'>{getDate()}</p>
                        </div>
                        <div className='city-right'>
                            <p>sunrise <span className='sunrise'>{sunrise(data?.sys.sunrise)}</span></p>
                            <p>sunset <span className='sunset'>{sunset(data?.sys.sunset)}</span></p>
                        </div>
                        
                    </div>
                    <div className='main-temp'>
                        <p className='temp'>{kelvinToCelsius(data?.main.temp)}°</p>
                        <div className='icon'>
                            <img
                            src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} 
                            alt="icon" 
                            />
                        </div>                        
                        <div className='feels'>
                            <p className='description'>{data?.weather[0].description}</p>
                            <p className='feels-text'>feels like <span className='feels-temp'>{kelvinToCelsius(data?.main.feels_like)} °C</span></p>
                        </div>
                    </div>
                    <div className='secondary-info'>
                        <p className='wind'> <AirIcon /> {data?.wind.speed} m/s</p>
                        <p className='humidity'><InvertColorsIcon/> {data?.main.humidity} %</p>
                        <p className='pressure'><CompareArrowsIcon />{hpaToMmhg(data?.main.pressure)} mmhg</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}
