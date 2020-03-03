const router = require('express').Router();

/* Models */
const Example = require('../models/Example');

router.get('/', (req, res) => {
    Example.find(1, (err, example) => {
        if (err) throw err;

        if (example) {
            res.status(200).json({
                code: 200,
                type: 'resource',
                example,
            });
            return;
        }

        res.status(200).json({
            code: 200,
            type: 'resource',
            example: {
                id: -1,
            },
        });
    });
});

// Add here your routes
module.exports = router;
