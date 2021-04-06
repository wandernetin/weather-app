const request = require('request');

const mapBoxToken = 'pk.eyJ1IjoibmV0aW5iaCIsImEiOiJja241b2E5N3AwNjVtMndyZzF2dTF4cWJ0In0.PK38HNFf7X55qpt-Wj0JmQ';

const geocode = (address, callback) => {
    const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + mapBoxToken + '&limit=1';
    request({ url: mapBoxUrl, json: true }, (error, response) => {
        if (!error) {
            if (response.body.features.length > 0) {
                callback(null, response.body.features[0]);
            } else {
                callback('No location was found!', null);
            }
        } else {
            callback('Unable to connect to location service!', null);
        }
    });
}

module.exports = geocode;