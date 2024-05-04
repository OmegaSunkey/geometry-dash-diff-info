var express = require('express');
var router = express.Router();

let testDiff = [2,3,2,4,2,6,2,7,6,4];

router.get('/setDiff', (req, res, next) => {
	res.send('Difficulty set for level ID: number');
});

router.get('/getDiff', (req, res, next) => {
	res.send(JSON.stringify(testDiff));
});

module.exports = router
