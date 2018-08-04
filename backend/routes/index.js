const router = require('express').Router();

router.get('/', (res, req) => {
	res.send('Welcome to the DriveSchool CRUD');
	return;
});

router.use('/alunos', require('./aluno'));
router.use('/professor', require('./professor'));

module.exports = router;
