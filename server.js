const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const porta  = 5000;
const cors = require('cors');
const morgan = require('morgan');
const server = express();

//const connection = require('./database/db');
const Aluno = require('./model/Aluno')

server.use('/public',express.static(path.join(__dirname,'public')));

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use(cors());
server.use(morgan('dev'));


server.get('/',function(req,res){
    Aluno.findAll({raw: true}).then(alunos =>{
        console.log(alunos);
    })
   //res.send('Seja bem-vindo a página inicial!')
});

server.post('/add',(req,res)=>{
    var nome = req.body.nome;
    var matricula = req.body.matricula;
    var curso = req.body.curso;

    Aluno.create({
        nome:nome,
        matricula:matricula,
        curso:curso
    }).then(()=>{
        res.redirect("/");
    }).catch((erro)=>{
        console.log('Erro ao receber dados do formulario'+console.erro)
    })
})


server.listen(porta,function(){
    console.log(`Aplicação sendo executado em http://localhost:${porta}`)
});


module.exports = server;
