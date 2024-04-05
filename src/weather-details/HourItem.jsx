import {DOMAIN_OPEN_WEATHER} from "../utils/constant.js";

function HourItem({data}) {
    return (
        <>
            <div className={'hour-item__hour'}>{`${data?.dt}:00`}</div>
            <div className={'hour-item__icon'}>
                <img src={`${DOMAIN_OPEN_WEATHER}/${data?.weather[0].icon}.png`} width={90} height={90}/>
            </div>
            <div className={'hour-item__temp'}>{data.temp}</div>
        </>
    );
}

export default HourItem;