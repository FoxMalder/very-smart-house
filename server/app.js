const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

const START_DATE = new Date().getTime();
let database = {};

app.get('/', (req, res) => {
    res.send('Hello Home!');
});

app.get('/status', (req, res) => {
    const now = new Date().getTime();
    const diff = now - START_DATE;

    /* Развёрнутое решение */

    // const hours = Math.floor(diff / 3.6e6);
    // const minutes = Math.floor((diff % 3.6e6) / 6e4);
    // const seconds = Math.floor((diff % 6e4) / 1000);
    //
    // res.send(
    //     `<div>
    //         ${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}
    //     </div>`
    // );

    /* Короткое решение */

    res.send(new Date(diff).toLocaleTimeString('ru-RU', {timeZone: 'UTC'}))
});

app.get('/api/events', (req, res) => {
    database = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
    let limitedData = {};
    let filteredData = {};
    let page = req.query.page || 1;
    let limit = req.query.limit || database.events.length;
    let requestedTypes = req.query.type ? new Set(req.query.type.split(':')) : false;

    if (requestedTypes) {
        let types = new Set(database.events.map(event => event.type));
        let unknownTypes = new Set([...requestedTypes].filter(type => !types.has(type)));
        filteredData.events = database.events.filter((event) => requestedTypes.has(event.type));

        if (unknownTypes.size) {
            res.status(400).send(`Incorrect types: [${Array.from(unknownTypes)}]. Supported ones [${Array.from(types)}]`);
        }
    }

    let events = filteredData.events || database.events;

    limitedData.events = events.slice(((limit * page) - limit), (limit * page));
    res.json(limitedData);
});

app.get('*', (req, res) =>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('err', err);
    }

    console.log(`listening on ${port}`);
});
