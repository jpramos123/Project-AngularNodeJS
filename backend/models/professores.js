const connection = require('../database/mariadb');
const { INTEGER, STRING, DATE } =  connection.Sequelize;

const schema = {
	id:{
		type: INTEGER,
		field: 'ID',
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: STRING,
		field: 'NAME',
		allowNull: false
	},
	birthday: {
		type: DATE,
		field: 'BIRTHDATE',
		allowNull: false
	}
};

const Professor = connection.define('professor', schema,{tableName:'professor'});

module.exports = exports = Professor;
