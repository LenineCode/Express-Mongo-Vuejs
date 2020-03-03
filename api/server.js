const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        name: 'api',
        version: '1.0.0',
    });
});

app.use('/example', require('./routers/RouterExample'));

app.listen(8080);
