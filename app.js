const request = require('request');

const geocode = (address, callback) => {
    const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmV0aW5iaCIsImEiOiJja241b2E5N3AwNjVtMndyZzF2dTF4cWJ0In0.PK38HNFf7X55qpt-Wj0JmQ&limit=1';
    request({ url: mapBoxUrl, json: true }, (error, response) => {
        if (!error) {
            if (response.body.features.length > 0) {
                const lat = response.body.features[0].center[1];
                const long = response.body.features[0].center[0];
                const weatherUrl = 'http://api.weatherstack.com/current?access_key=60266219577ed2341baa752243552833&query=' + lat + ',' + long + '&units=m';
                request({ url: weatherUrl, json: true }, (error, response) => {
                    if (!error) {
                        if (!response.body.error) {
                            callback(null, response.body.current);
                        } else {
                            callback('Error - Unable to find location', null);
                        }
                    } else {
                        callback('Unable to connect to weather service!', null);
                    }
                });
            } else {
                callback('No location was found!', null);
            }
        } else {
            callback('Unable to connect to location service!', null);
        }
    });
}

geocode('Belo Horizonte', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.weather_descriptions[0] + '.');
        console.log('It is currently ' + data.temperature + ' degrees out.');
        console.log('It feel likes ' + data.feelslike + ' degrees.');
        console.log('There is a ' + data.precip + '% chance of rain.');

    }
})

