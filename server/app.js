const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');
// const cors = require('cors');

let bundler = new Bundler('./index.html');
let app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let videoOptions = {
    target: 'http://localhost:9191',
    changeOrigin: true,
    pathRewrite: {
        '^/videos' : ''
    },
};

let streamsOptions = {
    target: 'http://localhost:3102',
    changeOrigin: true,
    pathRewrite: {
        '^/streams' : ''
    },
};

let videoProxy = proxy(videoOptions);
let streamsProxy = proxy(streamsOptions);

// app.use(cors);
app.use('/videos', videoProxy);
app.use('/stream', streamsProxy);
app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));
