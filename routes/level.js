var express = require('express');
var router = express.Router();
var GD = require('gd.js');
var level = new GD();

router.get('/', async (req, res, next) => {
	let levelID = Number.parseInt(req.query.id)
	let levelObj = await level.levels.get(levelID)
	if(Number.isInteger(levelID) && levelObj != undefined) {
		res.render('level', {name: levelObj.name, acc: levelObj.getCreator().username});
	} else {
		res.send('Not a valid level ID');
	}
});

module.exports = router
