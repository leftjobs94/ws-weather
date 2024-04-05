import {DAY_OF_WEEK, WEATHER_HOUR, WEATHER_ICONS} from "./constant.js";

export const fetchData = (countryName) => {
    return todayWeather(countryName)
}

const todayWeather = (country) => {
    return {
        timezone: country,
        current:{
            temp: randomIntBetween(36, 16),
            pressure: randomIntBetween(900, 1150),
            humidity: randomIntBetween(50, 100),
            uvi: randomBetween(5, 0).toFixed(2),
            wind_speed:randomBetween(10, 1).toFixed(2),
            weather: randWeatherDay(1)
        },
        hourly: weatherHourly(),
        daily: weatherDay()
    }
}

const weatherHourly = () => {
    const hourly = []
    for (let i = 0; i < 24; i++) {
        hourly.push({
            dt:i,
            temp: i >= 9 && i <= 18 ? randomIntBetween(36, 28) : randomIntBetween(22, 15),
            weather: randWeatherHour(i)
        })
    }
    return hourly
}

const weatherDay = () => {
    const daily = []
    for (let i = 0; i < 7; i++) {
        daily.push({
            dt: DAY_OF_WEEK[i],
            temp:{
                min: randomIntBetween(22, 15),
                max: randomIntBetween(36, 28),
            },
            weather: randWeatherDay(1)
        })
    }
    return daily
}

const randWeatherDay = (numDay) => {
    const weather = [];
    for (let i = 0; i < numDay; i++) {
        const wth = WEATHER_ICONS[Math.floor(Math.random() * WEATHER_ICONS.length)];
        weather.push({
            main: wth.main,
            icon:wth.icon
        })
    }
    return weather;
}

const randWeatherHour = (hour) => {
    const wth = WEATHER_HOUR[Math.floor(Math.random() * WEATHER_HOUR.length)];
    return [{
        main: wth.main,
        icon: hour >=6 && hour<= 18 ? wth.day : wth.night
    }];
}

const randomBetween = (max, min) => {
    return Math.random() * (max - min) + min
}

const randomIntBetween = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}