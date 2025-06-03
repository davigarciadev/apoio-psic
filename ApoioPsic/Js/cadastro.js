const usuarios = [];

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagemCadastro");

    if (nome && email && senha) {
        if (senha.length < 6) {
            mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
            mensagem.style.color = "#c0392b";
            return;
        }

        const novoUsuario = { nome, email, senha };
        usuarios.push(novoUsuario);

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "#2d6a4f";

        document.getElementById("formCadastro").reset();
        console.log("Usuários cadastrados:", usuarios);
    } else {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "#c0392b";
    }
});
