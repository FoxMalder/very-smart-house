const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const database = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const types = new Set(
    database.events.map(event => event.type)
);

router.post('/', (req, res) => {
    let events = database.events;
    let page = req.body.page || 1;
    let limit = req.body.limit || database.events.length;
    let requestedTypes = req.body.type ? new Set(req.body.type.split(':')) : false;

    if (requestedTypes) {
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

        events = database.events
            .filter((event) => requestedTypes.has(event.type));
    }

    res.json({
        events: events.slice(limit * (page - 1), (limit * page))
    });
});

module.exports = router;
