const request = require('request');

const weatherStackToken = '60266219577ed2341baa752243552833';

const forecast = (lat, long, callback) => {
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=' + weatherStackToken + '&query=' + lat + ',' + long + '&units=m';
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
}

module.exports = forecast;