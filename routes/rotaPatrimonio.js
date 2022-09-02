const express = require('express');
const router = express.Router();
const patrimonio = [
    {
        "id":1,
        "nome":"Moto"
    },
    {
        "id":2,
        "nome":"Casa"
    },
    {
        "id":3,
        "nome":"Vida"
    },
    {
        "id":4,
        "nome":"Direitos"
    },
    {
        "id":5,
        "nome":"Bike"
    },
    {
        "id":6,
        "nome":"Piscina"
    },
    {
        "id":7,
        "nome":"Pc"
    },
    {
        "id":8,
        "nome":"Dados"
    },
    {
        "id":9,
        "nome":"Joia"
    },
    {
        "id":10,
        "nome":"Produto"
    }
    
] 

//para consultar todos os dados da empresa

router.get('/',(req, res, next)=>{
    res.status(200).send(
        {
            mensagem: "aqui é a lista de empresas!",
            patrimonio: patrimonio
        }
    )
        
});

//para consultar um determinado cadastro

router.get('/:id',(req, res, next)=>{
    const  id = req.params.id;
    let listapatrimonio = patrimonio.filter(value=>value.id==id);
    res.status(200).send(
        {
            mensagem: `aqui é a lista de empresas com id:${id}`,
            patrimonio: listapatrimonio
        }
    )
        
});

//para enviar dados da empresa para salvar no banco

router.post('/',(req, res, next)=>{

    let msg=[];
    let i=0;
    const patrimonio ={
        nome : req.body.nome
    }

    if(patrimonio.lenght<3){

        msg.push({mensagem:"campo com menos de 3 caracteres!"})
        i++;

    }

    // if(validacaoEmail(usuario.email)==false){

    //     msg.push({mensagem:"Email inválido!"})
    //     i++;

    // }

    // if(usuario.senha.lenght==0){

    //     msg.push({mensagem:"Senha inválida!"})
    //     i++;

    // }

    if(i==0){
        res.status(201).send(
            {
                mensagem: "Dados Inseridos!!!",
                patrimonioCriado: patrimonio
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


    

    // let dadosdeletados=usuario.map((item)=>{
    //     if(item.id==id){
    //         item.nome=nome;
    //         item.email=email;
    //         item.senha=senha;
    //     }
    // })
    

    if(nome.length<3){
        msg.push({mensagem:"campo com menos de 3 caracteres!"})
        i++;
    }

    // if(validacaoEmail(email)==false){
    //     msg.push({mensagem:"Email inválido!"})
    //     i++;
    // }

    // if(senha.length==0){
    //     msg.push({mensagem:"senha inválido!"})
    //     i++;
    // }

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
    let dadosdeletados = patrimonio.filter(value=>value.id==id);
    let listapatrimonio = patrimonio.filter(value=>value.id!=id);

    res.status(201).send(
        {
            mensagem: "Dados deletados com sucesso!",
            dadosnovos: listapatrimonio,
            deletados: dadosdeletados
        }
    )
});

module.exports = router;