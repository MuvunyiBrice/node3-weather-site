const request = require("request");

const forecast = (lat,long,callback) => {
    const url = `https://api.darksky.net/forecast/f5c28a9674dee67126bf1c57a802040a/${lat},${long}`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("unable to connect to weather service",undefined);
        } else if (body.error) {
            callback("unable to find location",undefined)
        } else {
            callback(undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. The humidity is ${body.daily.data[0].humidity} and
            There is a ${body.currently.precipProbability}% chance of rain`);
        }
    });
};

module.exports = forecast;