const Sequelize = require('sequelize');
const connection = require('../database/db');

const Aluno = connection.define('dadoaluno',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    matricula: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    curso: {
        type: Sequelize.STRING,
        allowNull: false
    },
})



Aluno.sync({force:false})

module.exports = Aluno;