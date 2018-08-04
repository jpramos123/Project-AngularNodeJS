const router = require('express').Router();
const ctrl = require('../controllers/professor');

router.get('/', ctrl.get);
router.post('/', ctrl.post);

module.exports = router;
