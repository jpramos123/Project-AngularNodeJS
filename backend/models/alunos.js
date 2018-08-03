const connection = require('../database/mariadb');
const 

const schema = {
	
	id:{
		type: INTEGER,
		field: 'ID',
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	name: {
		type: STRING,
		field: 'NAME',
		allowNull: false,
	},
	birthday: {
		type: DATE,
		field: 'BIRTHDATE',
		alloNull: false
	}
};

const Aluno = connection.define('aluno', schema, {tableName:'aluno'});

module.exports = exports = Aluno;
