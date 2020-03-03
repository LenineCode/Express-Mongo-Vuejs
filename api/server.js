const express = require('express');

const app = express();

/* Routes and routers */

app.get('/', (_req, res) => {
    res.json({
        name: 'api',
        version: '1.0.0',
    });
});

app.get('/error', () => {
    throw new Error('This page is an error');
});

app.use('/example', require('./routers/RouterExample'));


/* Catch undefined routes */
app.all('*', (req, res) => {
    res.status(400).json({
        type: 'error',
        code: 400,
        msg: 'Bad Request',
    });
});

/* Catch error and return 500 error */
app.use((error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({
        type: 'error',
        code: 500,
        msg: 'Internal server error',
    });
});

/* Run api */
app.listen(8080);
