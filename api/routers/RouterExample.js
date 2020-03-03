const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        code: 200,
        type: 'resource',
        example: {
            id: -1,
        },
    });
});

// Add here your routes
module.exports = router;
