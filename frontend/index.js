fetch("http://localhost:8000/usuarios").then(res => {
    if (!res.ok) {
        throw new Error("Erro ao buscar usuário");
    }

    return res.json();
}).then(usuarios => {
    const listaUsuarios = document.getElementById("lista-usuarios");
    usuarios.forEach(usuario => {
        listaUsuarios.innerHTML +=
            `<li class="list-group-item">
        <div class="d-flex justify-content-between">
            <h5>${usuario.nome} - ${usuario.idade}</h5>
            <a href="editarUsuario/index.html?id=${usuario.id}" class="btn btn-info">Atualizar</a>
        </div>
        
        </li>`
    });
})
    .catch(err => {
        console.log(err);
    });
