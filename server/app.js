const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const START_DATE = new Date().getTime();

const database = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const types = new Set(
  database.events.map(event => event.type)
);

app.get('/', (req, res) => {
    res.send('Hello Home!');
});

app.get('/status', (req, res) => {
    const now = new Date().getTime();
    const diff = now - START_DATE;

    res.send(new Date(diff).toLocaleTimeString('ru-RU', {timeZone: 'UTC'}))
});

app.post('/api/events', (req, res) => {
    let events = database.events;
    let page = req.body.page || 1;
    let limit = req.body.limit || database.events.length;
    let requestedTypes = req.body.type ? new Set(req.body.type.split(':')) : false;

    if (requestedTypes) {
        let unknownTypes = new Set(
            requestedTypes
                .filter(type => !types.has(type))
        );

        if (unknownTypes.size) {
            res.status(400).send(
                `Incorrect types: [${Array.from(unknownTypes)}].
                 Supported ones [${Array.from(types)}]`
            );
            return;
        }

        events = database.events
            .filter((event) => requestedTypes.has(event.type));
    }

    res.json({
        events: events.slice(limit * (page - 1), (limit * page))
    });
});

app.use((req, res, next) =>{
    res
      .type('text/html')
      .status(404)
      .send('<h1>Page not found</h1>');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('err', err);
    }

    console.log(`listening on ${port}`);
});
