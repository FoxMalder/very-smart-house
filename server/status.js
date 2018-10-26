const express = require('express');
const router = express.Router();

const START_TIME = new Date().getTime();

const getUptime = () => {
    const now = new Date().getTime();
    const diff = now - START_TIME;

    return (new Date(diff).toLocaleTimeString('ru-RU', {timeZone: 'UTC'}));
};

router.get('/', (req, res) => {
    res.status(200).send(getUptime())
});

module.exports = router;
