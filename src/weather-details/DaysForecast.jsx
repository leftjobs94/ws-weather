import {DOMAIN_OPEN_WEATHER} from "../utils/constant.js";

function DaysForecast({data}) {
    return (
        <>
            <div className={'title'}>Days Forecast</div>
            <div>
                {
                    data?.map((item, idx) =>
                        <div key={idx} className={'day-item'}>
                            <div className={'day-of-week'}>{item.dt}</div>
                            <div>
                                <img src={`${DOMAIN_OPEN_WEATHER}/${item.weather[0].icon}.png`} width={80} height={80}/>
                            </div>
                            <div>{item.weather[0].main}</div>
                            <div>
                                <span>{`${item.temp.max}/`}</span>
                                <span className={'low-temp'}>{`${item.temp.min}`}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default DaysForecast;