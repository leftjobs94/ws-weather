import {DOMAIN_OPEN_WEATHER} from "../utils/constant.js";

function CurrentForecast({data, country}) {
    return (
        <div className={'current-forecast'}>
            <div>
                <div className={'city-weather'}>
                    <div className={'city-name'}>{country}</div>
                    <div className={'weather'}>{`Weather: ${data?.weather[0].main}`}</div>
                </div>
                <div className={'temperature'}>{data?.temp}</div>
            </div>
            <div className={'icon-weather'}>
                <img src={`${DOMAIN_OPEN_WEATHER}/${data?.weather[0].icon}@2x.png`} width={'100%'} height={'100%'}/>
            </div>
        </div>
    );
}

export default CurrentForecast;