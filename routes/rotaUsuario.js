const express = require('express');
const router = express.Router();
const usuario = [
    {
        "id":1,
        "nome":"Carlos",
        "email":"sousamacedo18@gmail.com",
        "senha":"123"
    },
    {
        "id":2,
        "nome":"Pedro",
        "email":"pedro@gmail.com",
        "senha":"321"
    },
    {
        "id":3,
        "nome":"João Neto",
        "email":"joaoneto@gmail.com",
        "senha":"123"
    },
    {
        "id":4,
        "nome":"Iarly",
        "email":"iarly@gmail.com",
        "senha":"123"
    },
    {
        "id":5,
        "nome":"Maria Eduarda",
        "email":"mariaeduarda@gmail.com",
        "senha":"123"
    },
    {
        "id":6,
        "nome":"Filipe",
        "email":"filipe@gmail.com",
        "senha":"123"
    },
    {
        "id":7,
        "nome":"Ray",
        "email":"ray@gmail.com",
        "senha":"777"
    },
    {
        "id":8,
        "nome":"Max",
        "email":"max@gmail.com",
        "senha":"123"
    },
    {
        "id":9,
        "nome":"Gabriela",
        "email":"gabriela@gmail.com",
        "senha":"123"
    },
    {
        "id":1000,
        "nome":"Naiany",
        "email":"nay@gmail.com",
        "senha":"7777" 
    }
    
] 

function validacaoEmail(email){
    var re = /\S+@\S+.\S+/;
    return re.test(email);
}

//para consultar todos os dados

router.get('/',(req, res, next)=>{
    res.status(200).send(
        {
            mensagem: "aqui é a lista de usuários!!!",
            usuario: usuario
        }
    )
        
});

//para consultar um determinado cadastro

router.get('/:id',(req, res, next)=>{
    const  id = req.params.id;
    let listausuario = usuario.filter(value=>value.id==id);
    res.status(200).send(
        {
            mensagem: `aqui é a lista de usuários com id:${id}`,
            usuario: listausuario
        }
    )
        
});

//para enviar dados para salvar no banco

router.post('/',(req, res, next)=>{

    let msg=[];
    let i=0;
    const usuario={
        nome : req.body.nome,
        email : req.body.email,
        senha : req.body.senha
    }

    if(usuario.nome.lenght<3){

        msg.push({mensagem:"campo com menos de 3 caracteres!"})
        i++;

    }

    if(validacaoEmail(usuario.email)==false){

        msg.push({mensagem:"Email inválido!"})
        i++;

    }

    if(usuario.senha.lenght==0){

        msg.push({mensagem:"Senha inválida!"})
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







// router.post('/',(req, res, next)=>{

//     const usuario={
//         nome : req.body.nome,
//         email : req.body.email,
//         senha : req.body.senha
//     }

//     if(usuario.nome.length >= 3){

//         res.status(201).send(
//             {
//                 mensagem: "Dados Inseridos!!!",
//                 usuarioCriado: usuario
//             }
//         )

//     }else{

//         res.status(400).send(
//             {
//                 mensagem: "Campo nome com menos de 3 caracteres!",
//             }
//         )

//     }

// }); 






// router.post('/',(req, res, next)=>{

//     const email = req.email;
    
//     const usuario={
//         nome : req.body.nome,
//         email : req.body.email,
//         senha : req.body.senha
//     }

//     if(validacaoEmail(usuario.email)){

//         res.status(201).send(
//             {
//                 mensagem: "Dados Inseridos!!!",
//                 usuarioCriado: usuario
//             }
//         )

//     }else{

//         res.status(400).send(
//             {
//                 mensagem: "E-mail invalido!",
//             }
//         )

//     }

// }); 