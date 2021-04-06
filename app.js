const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=60266219577ed2341baa752243552833&query=33.20,-112&units=m';

request({ url: url, json: true}, (error, response) => {
    if(!error) {
        if(!response.body.error) {
            console.log(response.body.current.weather_descriptions[0] + '.');
            console.log('It is currently '+ response.body.current.temperature + ' degrees out.');
            console.log('It feel likes ' + response.body.current.feelslike + ' degrees.');
            console.log('There is a ' + response.body.current.precip + '% chance of rain.');
        } else {
            console.log('Error - Unable to find location');
        }
    } else {
        console.log('Unable to connect to weather service!');
    }
});

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/brisbane.json?access_token=pk.eyJ1IjoibmV0aW5iaCIsImEiOiJja241b2E5N3AwNjVtMndyZzF2dTF4cWJ0In0.PK38HNFf7X55qpt-Wj0JmQ&limit=1';

request({ url: mapBoxUrl, json: true}, (error, response) => {
    if(!error) {
        if (response.body.features.length > 0) {
            console.log('Lat is ' + response.body.features[0].center[1]);
            console.log('Long is ' + response.body.features[0].center[0]);
        } else {
            console.log('No location was found!');
        }
    } else {
        console.log('Unable to connect to location service!');
    }
});



