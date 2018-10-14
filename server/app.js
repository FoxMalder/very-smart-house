const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const START_DATE = new Date().getTime();

let database = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

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

app.post('/api/events', (req, res) => {
    let result = {
        events: database.events
    };
    let page = req.body.page || 1;
    let limit = req.body.limit || database.events.length;
    let requestedTypes = req.body.type ? new Set(req.body.type.split(':')) : false;

    if (requestedTypes) {
        let types = new Set(
            database.events.map(event => event.type)
        );
        let unknownTypes = new Set(
            [...requestedTypes]
                .filter(type => !types.has(type))
        );

        if (unknownTypes.size) {
            res.status(400).send(
                `Incorrect types: [${Array.from(unknownTypes)}].
                 Supported ones [${Array.from(types)}]`
            );
            return;
        }

        result.events = database.events
            .filter((event) => requestedTypes.has(event.type));
    }

    res.json({
        events: result.events.slice(((limit * page) - limit), (limit * page))
    });
});

app.get('*', (req, res) =>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.post('*', (req, res) =>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('err', err);
    }

    console.log(`listening on ${port}`);
});
