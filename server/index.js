const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
    response.send('Hello Home!')
});

app.listen(port, (err) => {
    if (err) {
        return console.log('err', err);
    }

    console.log(`listening on ${port}`);
});
