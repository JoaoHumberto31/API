function cadastroUsuario(event) {
    event.preventDefault();

    let nome = event.target.nome.value;
    let idade = event.target.idade.value;
    let senha = event.target.senha.value;

    fetch('http://localhost:8000/usuarios', {  // !fetch put

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            "nome": nome,
            "idade": idade,
            "senha": senha
        })

    })

        .then(response => response.json())

        .then(dados => {
            console.log(dados)
            alert("Usuário Cadastrado")
            window.location.href = "../index.html"
        })

        .catch(error => console.log(error));

}

