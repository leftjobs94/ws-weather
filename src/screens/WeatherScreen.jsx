import './WeatherScreen.scss'
import Search from '../weather-details/Search.jsx'
import CurrentForecast from "../weather-details/CurrentForecast.jsx";
import HourForecast from "../weather-details/HourForecast.jsx";
import AirConditions from "../weather-details/AirConditions.jsx";
import DaysForecast from "../weather-details/DaysForecast.jsx";
import {useEffect, useState} from "react";
import {fetchData} from "../fakeData/fakaData.js";

function WeatherScreen() {
    const [dataWeather, setDataWeather] = useState({})
    useEffect(() => {
        const data = fetchData('Ha Noi');
        setDataWeather(data);
    }, [])

    const onChangeCountry = (countryName) => {
        const data = fetchData(countryName);
        setDataWeather(data);
    }

    return (
        <div className={'weather-screen'}>
            <div className={'today-forecast'}>
                <div>
                    <Search onChangeCountry={onChangeCountry}/>
                </div>
                <div className={'detail-forecast'}>
                    <CurrentForecast data={dataWeather?.current} country={dataWeather?.timezone}/>
                    <HourForecast data={dataWeather?.hourly}/>
                    <AirConditions data={dataWeather?.current}/>
                </div>
            </div>
            <div className={'days-forecast'}>
                <DaysForecast data={dataWeather?.daily}/>
            </div>
        </div>
    );
}

export default WeatherScreen;