const yargs = require('yargs');

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

var city = yargs.argv.city;

if (city) {
    geocode(city, (error, { center, place_name }) => {
        if (error)
            return console.log(error);

        forecast(center[1], center[0], (errorForecast, { weather_descriptions, temperature, feelslike, precip }) => {
            if (errorForecast)
                return console.log(errorForecast);

            console.log(place_name);
            console.log(weather_descriptions[0] + '.');
            console.log('It is currently ' + temperature + ' degrees out.');
            console.log('It feel likes ' + feelslike + ' degrees.');
            console.log('There is a ' + precip + '% chance of rain.');

        })
    })
} else {
    console.log('No city was selected!');
}


