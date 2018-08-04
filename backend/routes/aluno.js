const router = require('express').Router();
const ctrl = require('../controllers/aluno');


router.get('/', ctrl.get);
router.post('/', ctrl.post);
router.get('/:id', ctrl.getById);
router.delete('/:id', ctrl.remove);

module.exports = router;
