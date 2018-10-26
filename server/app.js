const express = require('express');
const app = express();
const port = 8000;

const statusRouter = require('./status');
const eventsRouter = require('./events');

app.use('/status', statusRouter);
app.use('/api/events', eventsRouter);

app.use((req, res, next) =>{
    res
      .type('text/html')
      .status(404)
      .send('<h1>Page not found</h1>');
});

app.use(function (err, req, res, next) {
  process.stdout.write(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
