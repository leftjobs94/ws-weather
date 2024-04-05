import './App.css'
import SplashScreen from "./screens/SplashScreen.jsx";
import {useEffect, useState} from "react";
import WeatherScreen from "./screens/WeatherScreen.jsx";

function App() {

    const [gotoWeather, setGotoWeather] = useState(false);

    useEffect(() => {
        const to = setTimeout(() => {
            clearTimeout(to);
            setGotoWeather(true);
        }, 5000)
    }, [])

    return (
    <>
        <div style={{display: gotoWeather ? 'none' : ''}}>
            <SplashScreen/>
        </div>
        <div style={{display: gotoWeather ? '' : 'none'}}>
            <WeatherScreen/>
        </div>
    </>
    )
}

export default App
