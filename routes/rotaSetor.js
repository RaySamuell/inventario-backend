const express = require('express');
const router = express.Router();
const setor = [
    {
        "id":1,
        "nome":"H"
    },
    {
        "id":2,
        "nome":"X"
    },
    {
        "id":3,
        "nome":"T"
    },
    {
        "id":4,
        "nome":"V"
    } ,
    {
        "id":5,
        "nome":"D"
    } ,
    {
        "id":6,
        "nome":"S"
    } ,
    {
        "id":7,
        "nome":"I"
    } ,
    {
        "id":8,
        "nome":"L"
    } ,
    {
        "id":9,
        "nome":"M"
    } ,
    {
        "id":10,
        "nome":"A"
    }  
    
] 

//para consultar todos os dados da empresa

router.get('/',(req, res, next)=>{
    res.status(200).send(
        {
            mensagem: "aqui é a lista de setor!",
            setor: setor
        }
    )
        
});

//para consultar um determinado cadastro

router.get('/:id',(req, res, next)=>{
    const  id = req.params.id;
    let listasetor = setor.filter(value=>value.id==id);
    res.status(200).send(
        {
            mensagem: `aqui é a lista de setor com id:${id}`,
            setor: listasetor
        }
    )
        
});

//para enviar dados da empresa para salvar no banco

router.post('/',(req, res, next)=>{

    let msg=[];
    let i=0;
    const empresa={
        nome : req.body.nome
    }

    if(setor.nome.lenght<3){

        msg.push({mensagem:"campo com menos de 3 caracteres!"})
        i++;

    }

    if(i==0){
        res.status(201).send(
            {
                mensagem: "Dados Inseridos!!!",
                setorCriado: setor
            }
        )
    }else{
        res.status(400).send(
            {
                mensagem: msg,
            }
        )
    }

  

}); 

//alterar dados novos da empresa no banco

router.patch('/',(req, res, next)=>{


    if(nome.length<3){
        msg.push({mensagem:"campo com menos de 3 caracteres!"})
        i++;
    }

    if(i==0){
        res.status(201).send({
            mensagem:"Dados inseridos!",
            //dados:dadosalterados
        })
    }else{
        res.status(400).send({
            mensagem:msg
        })
    }

    res.status(201).send({
        mensagem:"Dados alterados com sucesso!"
    })
});

//para apagar dados da empresa do banco

router.delete('/:id',(req, res, next)=>{

    const {id} = req.params;
    let dadosdeletados = setor.filter(value=>value.id==id);
    let listasetor = setor.filter(value=>value.id!=id);

    res.status(201).send(
        {
            mensagem: "Dados deletados com sucesso!",
            dadosnovos: listasetor,
            deletados: dadosdeletados
        }
    )
});

module.exports = router;