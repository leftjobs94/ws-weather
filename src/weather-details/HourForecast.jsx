import HourItem from "./HourItem.jsx";

function HourForecast({data}) {
    return (
        <div className={'hour-forecast'}>
            <div className={'hour-forecast__title'}>Today's Forecast</div>
            <div className={'hour-forecast__container'}>
                <div>
                    {
                        data?.map((item, idx) =>
                            <div key={idx} className={'hour-item'}>
                                <HourItem data={item}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HourForecast;