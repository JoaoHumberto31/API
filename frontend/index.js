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
            <h5>${usuario.nome} - ${usuario.idade} - ${usuario.cidade}</h5>

            <div>
                <a href="editarUsuario/index.html?id=${usuario.id}" class="btn btn-info">Atualizar</a>
                <button type="button" class="btn btn-secondary" onclick="deletarUsuario(${usuario.id})">Deletar</button>
            </div>
        </div>
        </li>`
    });
})
    .catch(err => {
        console.log(err);
    });

function deletarUsuario(userId) {
    let confirmar = confirm("Deseja realmente excluir o usuário " + userId + "?");
    console.log(confirmar);
    if (confirmar) {
        fetch(`http://localhost:8000/usuarios/${userId}`, {

            method: 'DELETE',

        })

            .then(response => {
                if(response.ok){
                    alert("Usuário excluido com sucesso!!")
                    window.location.reload()
                    return;
                }
                alert("ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRO");
            })

            .catch(error => console.log(error));
    }
}