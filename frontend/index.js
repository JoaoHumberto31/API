fetch("http://localhost:8000/usuarios").then(res=>{
    if(!res.ok){
        throw new Error("Erro ao buscar usuário");
    }

   return res.json();    
}).then(usuarios=>{
    const listaUsuarios = document.getElementById("lista-usuarios");
    usuarios.forEach(usuario => {
        listaUsuarios.innerHTML += 
        `<li class="list-group-item">${usuario.nome}</li>`
    });
})
.catch(err=>{
    console.log(err);
});
