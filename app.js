const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=60266219577ed2341baa752243552833&query=37.8267,-122.4233&units=m';

request({ url: url, json: true}, (error, response) => {
    console.log('It is currently '+ response.body.current.temperature + ' degrees out.');
    console.log('It feel likes ' + response.body.current.feelslike + ' degrees.');
    console.log('There is a ' + response.body.current.precip + '% chance of rain.');
});