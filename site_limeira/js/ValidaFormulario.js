document.getElementById("form1").addEventListener("submit", function(event) {
    let valido = true;
    let mensagem = [];

    // Validar nome
    const nome = document.getElementById("nome").value;
    if (nome.split(" ").length < 2) {
        valido = false;
        mensagem.push("O nome deve conter pelo menos duas palavras.");
    }

    // Validar sexo
    const sexomasc = document.getElementById("masculino").checked;
    const sexofem = document.getElementById("feminino").checked;
    if (!sexomasc && !sexofem) {
        valido = false;
        mensagem.push("Selecione o campo sexo.");
    }

    // Validar estado
    const estado = document.getElementById("estado").value;
    if (!estado) {
        valido = false;
        mensagem.push("Selecione o campo estado.");
    }

    // Validar comentário
    const comentario = document.getElementById("comentario").value;
    if (comentario.length < 50) {
        valido = false;
        mensagem.push("O comentário deve ter pelo menos 50 caracteres.");
    }

    if (!valido) {
        event.preventDefault(); // Impede o envio do formulário
        alert(mensagem.join("\n"));
    }
});