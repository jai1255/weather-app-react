import React from 'react';
import { getWeatherIcon, convertkelvinToFarenheit } from '../utils/utils';

const WeatherResult = ({response, cityNotFound}) => {
    return (
    <container>
      {
        response?.main && !cityNotFound && (
            <div className='card-container'>
                <div style={{ minWidth: 275 }}> 
                    <div className='card-background'> 
                        <h5 className= "location"> Today in {response.name}, {response.sys.country} </h5>
                            <div className='card-data'>
                                <img className='weather-icon' src={getWeatherIcon(response.weather[0].icon)} alt="weather_icon"></img>
                                <div className="temp-element">
                                  {convertkelvinToFarenheit(response.main?.temp)}&deg; F
                                </div>
                            </div>
                           <div className='top-margin color-white'>
                               <span className='side-margin'>Min: {convertkelvinToFarenheit(response.main?.temp_min)}&deg; F</span> | <span className='side-margin'>Max: {convertkelvinToFarenheit(response.main?.temp_max)}&deg; F</span>
                            </div>
                            <span className='color-white' style={{fontWeight: '500'}}> {response.weather[0].main}</span>
                    </div>
                </div>
            </div>
      )}
      {
        cityNotFound && (
            <div className="card-container">
                <div sx={{ minWidth: 275 }}>
                    <div className='card-background'>
                        {cityNotFound}
                    </div>
                </div>
            </div>
          )
      }
      </container>
    )
}

export default WeatherResult;