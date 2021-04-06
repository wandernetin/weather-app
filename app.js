const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')

geocode('Brisbane', (error, data) => {
    if (error)
        return console.log(error);

    forecast(data.center[1], data.center[0], (errorForecast, dataForecast) => {
        if (errorForecast)
            return console.log(errorForecast);

        console.log(dataForecast.weather_descriptions[0] + '.');
        console.log('It is currently ' + dataForecast.temperature + ' degrees out.');
        console.log('It feel likes ' + dataForecast.feelslike + ' degrees.');
        console.log('There is a ' + dataForecast.precip + '% chance of rain.');

    })
})

