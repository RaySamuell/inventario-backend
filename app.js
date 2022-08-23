const express = require('express');
const morgan = require('morgan');
const app = express();
const rotaUsuario = require('./routes/rotaUsuario');
const bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/usuario", rotaUsuario);

app.use((req,res,next)=>{
    const erro = new Error("Não encontrado!");
    erro.status(404);
    next(erro);
});

app.use((error,req,res,next)=>{
    req.status(error.status || 500);
    return res.json({
        erro:{
            mensagem:error.mensagem
        }
    })
});

module.exports = app