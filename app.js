const express = require('express');
const app = express();

app.use("/listausuarios",(req, res, next)=>{

    console.log("passei aqui")
        res.status(200).send({
            mensagem: "Deu certo !!"
        })

});

module.exports = app