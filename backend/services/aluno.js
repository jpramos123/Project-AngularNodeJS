const { Aluno}= require('../models/index');

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
}

//const update = (req) => {
//	
//}

const post = (req) => {
	const {body} = req;
	return Aluno.create(body)
		.then(result => result)
		.catch(error => console.log(error));
};

const deleteObj = (req) => {
	const {id} = req.params;
	return Aluno.destroy({
		where: {id:id}
	})
}
const remove = (req) => {
	console.log("IM DELETING!!!!");
	return deleteObj(req)
		.then(result => result)
		.catch(error => console.log(error));
	
}
module.exports = {
	get,
	post,
	getById,
	remove,
}
