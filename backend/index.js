const app = require('express')();
const port = process.env.PORT || 3000;
const {Aluno} = require('./models/alunos');
const bodyParse = require('body-parser');


app.listen(port, (req,res) => {
	console.log(`Server running on the port ${port}`);

});
