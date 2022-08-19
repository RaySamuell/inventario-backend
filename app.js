const express = require('express');
const app = express();

app.use("/listausuarios",(req, res, next)=>{

    res.status(200).send({
            mensagem: "Lista de Usuarios",
        })

});

app.use("/listaempresas",(req, res, next)=>{
   
        res.status(200).send({
            mensagem: "Lista de Empresas"     
        })

});

app.use("/somar",(req,res,next)=>{
    let a=2;
    let b=5;
    let total=0;
    total=a+b;
    c+
        res.status(200).send({
            resultado:total
        })
});

app.use((req,res,next)=>{
    const erro = new Error("Não encontrado!");
    erro.status(404);
    next(erro);
});

app.use((error,req,res,next)=>{
    req.status(error.status || 500);
    return res.json({
        erro:{
            mensagem:mesagem
        }
    })
})

module.exports = app