import pressureIcon from '../assets/pressure.png'
import humidityIcon from '../assets/humidity.png'
import windSpeedIcon from '../assets/windy.png'
import uviIcon from '../assets/uvi.png'
function AirConditionItem({data}) {
    const title = () => {
        switch (data?.type) {
            case 0: return 'Atmospheric pressure';
            case 1: return 'Humidity';
            case 2: return 'Wind speed';
            case 3: return 'Current UV index';
            default: return ''
        }
    }
    const unit = () => {
        switch (data?.type) {
            case 0: return 'hPa';
            case 1: return '%';
            case 2: return 'm/s';
            default: return ''
        }
    }
    const icon = () => {
        switch (data?.type) {
            case 0: return pressureIcon;
            case 1: return humidityIcon;
            case 2: return windSpeedIcon;
            case 3: return uviIcon;
            default: return ''
        }
    }
    return (
        <div>
            <img src={icon()} width={60} height={60}/>
            <div>
                <div className={'air-item__title'}>{title()}</div>
                <div className={'air-item__value'}>{`${data.value} ${unit()}`}</div>
            </div>
        </div>
    );
}

export default AirConditionItem;