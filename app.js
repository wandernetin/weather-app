const yargs = require('yargs');

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

var city = yargs.argv.city;

if(city) {
    geocode(city, (error, data) => {
        if (error)
            return console.log(error);
    
        forecast(data.center[1], data.center[0], (errorForecast, dataForecast) => {
            if (errorForecast)
                return console.log(errorForecast);
    
            console.log(data.place_name);
            console.log(dataForecast.weather_descriptions[0] + '.');
            console.log('It is currently ' + dataForecast.temperature + ' degrees out.');
            console.log('It feel likes ' + dataForecast.feelslike + ' degrees.');
            console.log('There is a ' + dataForecast.precip + '% chance of rain.');
    
        })
    })
} else {
    console.log('No city was selected!');
}


