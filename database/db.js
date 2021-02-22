const Sequelize = require('sequelize');

const connection = new Sequelize('aluno', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql' ,
  //logging: false
  })

connection.authenticate() 
.then(function(){
  console.log('Conexão realizada com sucesso ao Banco de Dados');
})
.catch(function(erro){
  console.log('Erro ao tentar se conectar ao Banco de dados: '+ erro);
})
module.exports = connection;