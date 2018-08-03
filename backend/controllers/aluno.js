const HttpStatus = require('http-status-codes');
const service = require('../services/aluno');

const get = (req, resp) => {
	return service.get(req)
		.then(result => {
			res.send(result);
		})
};

const post = (req, res) => {
	return service.post(req)
		.then(result => {
			res.send(result);
		})
		.catch(error => res.send(error));
}

module.exports = {
	get,
	post,
}
