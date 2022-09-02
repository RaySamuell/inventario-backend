const express = require('express');
const router = express.Router();
const lotacao = [
    {
        "id":1,
        "idemp":1,
        "idpat":1,
        "idset":1,
        "idusu":1,
        "lotacao" : "2022-08-31"
    },
    {
        "id":2,
        "idemp":2,
        "idpat":2,
        "idset":2,
        "idusu":2,
        "lotacao" : "2022-08-31"
    },
    {
        "id":3,
        "idemp":3,
        "idpat":3,
        "idset":3,
        "idusu":3,
        "lotacao" : "2022-08-31"
    },
    {
        "id":4,
        "idemp":4,
        "idpat":4,
        "idset":4,
        "idusu":4,
        "lotacao" : "2022-08-31"
    },
    {
        "id":5,
        "idemp":5,
        "idpat":5,
        "idset":5,
        "idusu":5,
        "lotacao" : "2022-08-31"
    },
    {
        "id":6,
        "idemp":6,
        "idpat":6,
        "idset":6,
        "idusu":6,
        "lotacao" : "2022-08-31"
    },
    {
        "id":7,
        "idemp":7,
        "idpat":7,
        "idset":7,
        "idusu":7,
        "lotacao" : "2022-08-31"
    },
    {
        "id":8,
        "idemp":8,
        "idpat":8,
        "idset":8,
        "idusu":8,
        "lotacao" : "2022-08-31"
    },
    {
        "id":9,
        "idemp":9,
        "idpat":9,
        "idset":9,
        "idusu":9,
        "lotacao" : "2022-08-31"
    },
    {
        "id":10,
        "idemp":10,
        "idpat":10,
        "idset":10,
        "idusu":10,
        "lotacao" : "2022-08-31" 
    }
    
] 

//para consultar todos os dados

router.get('/',(req, res, next)=>{
    res.status(200).send(
        {
            mensagem: "aqui é a lista de lotações!!!",
            lotacao: lotacao
        }
    )
        
});

//para consultar um determinado cadastro

router.get('/:id',(req, res, next)=>{
    const  id = req.params.id;
    let listalotacao = lotacao.filter(value=>value.id==id);
    res.status(200).send(
        {
            mensagem: `aqui é a lista de usuários com id:${id}`,
            lotacao: listalotacao
        }
    )
        
});

//para enviar dados para salvar no banco

router.post('/',(req, res, next)=>{

    let msg=[];
    let i=0;
    const lotacao={
        nome : req.body.nome,
        email : req.body.email,
        senha : req.body.senha
    }

    if(lotacao.nome.lenght<3){

        msg.push({mensagem:"campo com menos de 3 caracteres!"})
        i++;

    }

    if(i==0){
        res.status(201).send(
            {
                mensagem: "Dados Inseridos!!!",
                usuarioCriado: usuario
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

//alterar dados novos no banco

router.patch('/',(req, res, next)=>{

    let msg=[];
    let i=0;
    const {id,nome,email,senha}=req.body;
    let lista = usuario.map(item=>{
        return(
            item.nome=nome,
            item.email=email,
            item.senha=senha
        )
    })
    

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

    if(validacaoEmail(email)==false){
        msg.push({mensagem:"Email inválido!"})
        i++;
    }

    if(senha.length==0){
        msg.push({mensagem:"senha inválido!"})
        i++;
    }

    if(i==0){
        res.status(201).send({
            mensagem:"Dados inseridos!",
            dados:dadosalterados
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

//para apagar dados do banco

router.delete('/:id',(req, res, next)=>{

    const {id} = req.params;
    let dadosdeletados = usuario.filter(value=>value.id==id);
    let listausuario = usuario.filter(value=>value.id!=id);

    res.status(201).send(
        {
            mensagem: "Dados deletados com sucesso!",
            dadosnovos: listausuario,
            deletados: dadosdeletados
        }
    )
});

module.exports = router;