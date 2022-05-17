const router = require('express').Router();
const { } = require('../models');


//render static homepage
router.get('/', (req, res) => {
 res.render('homepage');
});

module.exports = router;