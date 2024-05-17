const express = require('express');
const router = express.Router();

const usersRouter = express.Router();

router.use('/users', usersRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
