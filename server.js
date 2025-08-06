const express = require('express');
const { request } = require('http');

const app = express();

const port = 3000;

app.use(express.json());

const usuarios = [
    {"id": 1,"nome": "João", "idade": 20, "senha": "123"},
    {"id": 2,"nome": "Admin", "idade": 20, "senha": "1234"}
]

//request - requisição
//response - resposta
app.get("/", (request, response)=>{
    response.send("Primeiro servidor DESI - Malwee");
})

app.get("/usuarios", (req, res)=>{
    res.send(usuarios);
})

app.get("/usuarios/:id", (req, res)=>{
    const id = parseInt(req.params.id);

    const usuario = usuarios.find(usuario => usuario.id == id);

    if(usuario != null){
        res.send(usuario);
    }else{
        res.send(404).send("Usuário não encontrado!");
    }
})

app.post("/usuarios", (req, res) => {
    const novoUsuario = req.body;
    novoUsuario.id = usuarios.length + 1;
    usuarios.push(novoUsuario);

    res.status(201).send(novoUsuario);
})

app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const novoUsuario = req.body;
    novoUsuario.id = id;
    const index = usuarios.findIndex(usuario => usuario.id == id);

    if (index != null){
        usuarios[index] = novoUsuario;
        res.status(204).send(novoUsuario);
    }else{
        res.status(404).send("Usuário não encontrado");
    }
})

app.delete("/usuarios/:id", (req, res)=> {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(usuario => usuario.id == id);

    if(index != null){
        usuarios.splice(index, 1);
        res.status(204).send("Usuário com id: "+ id +" removido com sucesso!")
    }else{
        res.status(404).send("Usuário não encontrado!")
    }
})

app.listen(port, ()=>{
    console.log("Servidor rodando em http://localhost:3000");
})