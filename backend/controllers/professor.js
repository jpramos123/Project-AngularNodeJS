const HttpStatus = require('http-status-codes');
const service = require('../services/professor');

const get = (req, res) => {
	return service.get(req)
		.then(result => {
			res.send(result);
		})
		.catch(error => console.log(error));
};

const post = (req, res) => {
	return service.post(req)
		.then(result => {
			res.send(result);
		})
		.catch(error => console.log(error));
}

module.exports = {
	get,
	post,
}
