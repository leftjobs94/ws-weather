import AirConditionItem from "./AirConditionItem.jsx";

function AirConditions({data}) {
    return (
        <div className={'air-conditions'}>
            <div className={'air-conditions__title'}>Air Condition</div>
            <div>
                <div className={'row-air'}>
                    <AirConditionItem data={{type: 0, value: data?.pressure}}/>
                    <AirConditionItem data={{type: 1, value: data?.humidity}}/>
                </div>
                <div className={'row-air'}>
                    <AirConditionItem data={{type: 2, value: data?.wind_speed}}/>
                    <AirConditionItem data={{type: 3, value: data?.uvi}}/>
                </div>
            </div>
        </div>
    );
}

export default AirConditions;