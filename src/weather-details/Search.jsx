import './WeatherDetail.scss'
import {useCallback, useState} from "react";
import {debounce} from "lodash/function.js";

import dataCities from '../assets/city.list.json'

function Search({onChangeCountry}) {
    const [inputValue, setInputValue] = useState("");
    const [cities, setCities] = useState([]);
    const onSearch = (e) => {
        setInputValue(e.target.value)
        delayedSearch(e.target.value)
    }

    const delayedSearch = useCallback(
        debounce((q) => filterCountry(q), 300),[]
    )

    const filterCountry = (q) => {
        let countRes = 0;
        const data = dataCities.filter((item) => {
            if (countRes < 15 && item.name.toLowerCase().includes(q.toLowerCase())) {
                countRes++;
                return true;
            }
            return false;
        })
        setCities(data);
    }
    const onPressSearch = () => {
        onChangeCountry(inputValue)
        setInputValue('')
    }

    const selectedCity = (item) => {
        setInputValue(item.name)
        setCities([])
    }
    return (
        <div style={{position: 'relative'}}>
            <div className={'input-search'}>
                <input type="text" placeholder="Search for cities" value={inputValue}
                    onChange={(e) => onSearch(e)}/>
                <div onClick={() => onPressSearch()}>Search</div>
            </div>
            <div className={'cities'}>
                {
                    cities.map((item) => <div key={item.id}
                                              className={'city-item'}
                                              onClick={() => selectedCity(item)}>{item.name}</div>)
                }
            </div>
        </div>
    );
}

export default Search;