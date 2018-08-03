const Sequelize = require('sequelize');
const sequelize = new Sequelize('DriveSchool', 'jramos', 'xD11041997jp!@#',{
	host:'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 1,
		acquire: 30,
		idle: 10000
	},
	operatorsAliases: false,
	define: { timestamps: false }	
});

sequelize.query("SELECT * FROM aluno")
	.then(myTableRows => {
		console.log(myTableRows);
});

module.exports = exports = sequelize;
