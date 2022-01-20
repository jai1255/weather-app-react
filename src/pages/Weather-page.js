import React , { useState } from 'react';
import WeatherForm from '../components/Weather-form';
import WeatherResult from '../components/Weather-result';

const API_KEY = '0b9f534ec8956a7d8dd290fa878850dc'; // before deploying, it can be moved to .env file
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const WeatherPage = () => {
    const [apiData, setApiData] = useState('');
    const [cityNotFound, setCityNotFound] = useState('');

    const formSubmitHandler = async (event, cityName) => {
        event.preventDefault();
        try {
            let response = await fetch(`${BASE_URL}weather?q=${cityName}&appid=${API_KEY}`);
            response = await response.json();
            setApiData(response);
            if (response.cod === '404') {
                setCityNotFound(response.message);
            }
            else {
                setCityNotFound(null);
            }
        } catch (error) {
            console.error('error while fetching data', error);
        }
    }
    return (
        <>
         <WeatherForm formSubmitHandler={formSubmitHandler}/>
         <WeatherResult response={apiData} cityNotFound={cityNotFound}/>
        </>
    )
}

export default WeatherPage;