const HttpStatus = require('http-status-codes');
const service = require('../services/aluno');

const get = (req, res) => {
	return service.get(req)
		.then(result => {
			res.send(result);
		})
};

const getById = (req, res) => {
	return service.getById(req)
		.then(result => {
			res.send(result);
		});
};
const post = (req, res) => {
	return service.post(req)
		.then(result => {
			res.send(result);
		})
		.catch(error => res.send(error));
}

const remove = (req, res) => {
	return service.remove(req)
		.then(result => {
			return res.sendStatusCode(200);
		})
		.catch(error => res.status(500).send(error));

}
module.exports = {
	get,
	post,
	getById,
	remove,
}
