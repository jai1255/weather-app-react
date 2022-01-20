export const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`
}
 export const convertkelvinToFarenheit = (k) => {
     return Math.round(((k - 273.15) * 1.8 ) + 32)
 }