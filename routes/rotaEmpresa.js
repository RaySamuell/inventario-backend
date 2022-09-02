const express = require('express');
const router = express.Router();
const empresa = [
    {
        "id":1,
        "nome":"JSON",
        "responsável":"Naiany"
    },
    {
        "id":2,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":3,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":4,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":5,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":6,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":7,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":8,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":9,
        "nome":"Dell",
        "responsável":"Num sei"
    },
    {
        "id":10,
        "nome":"Dell",
        "responsável":"Num sei"
    }     
    
] 

//para consultar todos os dados da empresa

router.get('/',(req, res, next)=>{
    res.status(200).send(
        {
            mensagem: "aqui é a lista de empresas!",
            empresa: empresa
        }
    )
        
});

//para consultar um determinado cadastro

router.get('/:id',(req, res, next)=>{
    const  id = req.params.id;
    let listaempresa = empresa.filter(value=>value.id==id);
    res.status(200).send(
        {
            mensagem: `aqui é a lista de empresas com id:${id}`,
            empresa: listaempresa
        }
    )
        
});

//para enviar dados da empresa para salvar no banco

router.post('/',(req, res, next)=>{

    let msg=[];
    let i=0;
    const empresa ={
        nome : req.body.nome,
        responsavel : req.body.responsavel
    }
    

    if(empresa.responsavel.lenght<3){

        msg.push({mensagem:"campo com menos de 3 caracteres!"})
        i++;

    }


    if(i==0){
        res.status(201).send(
            {
                mensagem: "Dados Inseridos!!!",
                empresaCriado: empresa
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
    let dadosdeletados = empresa.filter(value=>value.id==id);
    let listaempresa = empresa.filter(value=>value.id!=id);

    res.status(201).send(
        {
            mensagem: "Dados deletados com sucesso!",
            dadosnovos: listaempresa,
            deletados: dadosdeletados
        }
    )
});

module.exports = router;