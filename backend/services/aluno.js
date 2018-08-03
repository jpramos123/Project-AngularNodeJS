const Aluno = require('../models/index');

const get = (req) => {
	return Aluno.findAll()
		.then(result => result);
};

const getById = (req) => {
	const options = parseFindOptions(req);
	return Aluno.findOne(options)
		.then(result => result)
		.catch(error => console.log(error));
};

const parseFindOptions = (req) => {
	const {id} = req.params;
	return { where : {
			id:id
		},
	}
	.catch(error => console.log(error));
}

const post = (req) => {
	const {body} = req;
	return Aluno.create(body)
		.then(result => result)
		.catch(error => console.log(error));
};
module.exports = {
	get,
}
