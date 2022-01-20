import React from 'react';
import { useState } from 'react';

const WeatherForm = ({formSubmitHandler}) => {

const [cityName, setCityName] = useState('');

return(
    <container>
        <form onSubmit={(event) => formSubmitHandler(event, cityName)}>
            <div className="container">
                <div className="search-box">
                    <input type="text" className="search-input" onChange={e => setCityName(e.target.value)} placeholder="Enter a city name" required/>
                    <button className="search-button" aria-label="search">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </container>
);
}

export default WeatherForm;