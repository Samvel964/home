import './style.scss';
import { useState, useEffect } from 'react';
import { desk, kelvinToCelsius, hpaToMmhg, sunrise, sunset, getDate } from './zip/config';
import { getCurrentWeather } from '../../api/weather';
import { getweatherOfFiveDay } from '../../api/weather';
import cities from './zip/current.city.list.json';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CheckIcon from '@mui/icons-material/Check';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

export const Weather = () => {
    const [data, setData] = useState();
    const [dataFive, setDataFive] = useState();
    const [myData, setMyData] = useState([])

    let background;
    
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

        const res5 = await getweatherOfFiveDay(coord.lat, coord.lon);
        setDataFive(res5?.data.list.filter(item => {
            return (item.dt_txt.substring(11,13) === '15' || 
                    item.dt_txt.substring(11,13) === '03')
        }))
    }


    useEffect(() => {
        const filtered = dataFive?.filter(data => 
            data.dt_txt.substring(8,10) !== 
            getDate().substring(0,3))

        setMyData(filtered?.map(item => {
            return(
                {
                    date: item.dt_txt.substring(5,10),
                    time: item.dt_txt.substring(11,13),
                    temperature: item.main.temp,
                    humidity: item.main.humidity
                }
            )
        }))
    },[dataFive])
   

    return(
        <div className='container'>
            <p className='text-center title'>
                On this page you can search for any city and see the weather
            </p>
            <div className='form'>
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <input type="text" placeholder='Enter City'/>
                    <button type='submit' className='btn btn-outline-secondary'>
                        <CheckIcon />
                    </button>
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
                            <p>sunrise 
                                <span className='sunrise'>{sunrise(data?.sys.sunrise)}</span>
                            </p>
                            <p>sunset 
                                <span className='sunset'>{sunset(data?.sys.sunset)}</span>
                            </p>
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
                            <p className='feels-text'>feels like 
                                <span className='feels-temp'>
                                    {kelvinToCelsius(data?.main.feels_like)} °C
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='secondary-info'>
                        <p className='wind'> <AirIcon /> {data?.wind.speed} m/s</p>
                        <p className='humidity'><InvertColorsIcon/> {data?.main.humidity} %</p>
                        <p className='pressure'>
                            <CompareArrowsIcon />{hpaToMmhg(data?.main.pressure)} mmhg
                        </p>
                    </div>
                    {myData && 
                    <div className='info-for-five-day'>
                       {myData?.map((data, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div className='one-day' key={data.date.toString() + index.toString()}>
                                    <p className='one-day-date'>{data.date}</p>
                                    {myData?.map((item, index) => {
                                        if (item.date === 
                                            data.date) {
                                            return(
                                                <div key={item.date.toString() + index.toString()}>
                                                    <p className='one-day-temp'>
                                                        {+item.time < 10
                                                        ? <NightlightRoundIcon />
                                                        : <LightModeIcon style={{color: '#f7f822'}} />
                                                    } {kelvinToCelsius(item.temperature)}°</p>
                                                    {index % 2 === 0 
                                                    ? <p className='one-day-humidity'>
                                                        <InvertColorsIcon sx={{fontSize:'medium'}} /> 
                                                        {item.humidity}%
                                                      </p>
                                                    : null}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            )
                        }
                       })}
                    </div>}
                </div>}
            </div>
        </div>
    )
}
