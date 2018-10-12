const express = require('express');
const app = express();
const port = 8000;

const START_DATE = new Date().getTime();

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

    res.send(new Date(diff).toLocaleTimeString('ru-RU', { timeZone: 'UTC'}))
});

app.listen(port, (err) => {
    if (err) {
        return console.log('err', err);
    }

    console.log(`listening on ${port}`);
});
