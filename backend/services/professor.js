const Professor = require('../models/professores');

const get = (req) => {
	return Professor.findAll()
		.then(result => result);
};

const getById = (req) => {
	const options = parseFindOptions(req);
	return Professor.findOne(options)
		.then(result => result);
};

const parseFindOptions = (req) => {
	const {id} = req.params;
	return {where : {
				id:id
		},
	};
}

const post = (req) => {
	const {body}  = req;
	return Aluno.create(body)
		.then(result => result)
		.catch(error => console.log(error));
}


modelu.exports = {
	get,
	getById,
	parseFindOptions,
	post,
}
