const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')

geocode('Brisbane', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        forecast(data.center[1], data.center[0], (errorForecast, dataForecast) => {
            if (errorForecast) {
                console.log(error);
            } else {
                console.log(dataForecast.weather_descriptions[0] + '.');
                console.log('It is currently ' + dataForecast.temperature + ' degrees out.');
                console.log('It feel likes ' + dataForecast.feelslike + ' degrees.');
                console.log('There is a ' + dataForecast.precip + '% chance of rain.');
            }
        })
    }
})

