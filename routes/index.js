var router = require('express').Router();

router.get('/', require('./home/index'));
router.get('/aboutme'), require('./aboutme/index')

module.exports = router;