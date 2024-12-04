/*Adicionar um ouvinte no formulario*/

document.getElementById("form1").addEventListener("submit",function(event){
    let valido = true
    let mensagem = []

    /* Validar um nome com pelo menos duas palavras*/
    const nome = document.getElementById("nome").value
    if (nome.split(" ").length < 2){
        valido = false
        
        mensagem.push("O nome deve conter pelo menos duas palavras")
         
       
    }
     /* validar o campo sexo */
     const sexomasc = document.getElementById("masculino").checked
     const sexofem = document.getElementById("feminino").checked
     if (!sexomasc && !sexofem){
         valido = false
         mensagem.push("Selecione o campo sexo")
    }

    /* validar o campo estado*/
    const estado = document.querySelector("select[name='Estado']")
    if (!estado.value){
        valido = false
        mensagem.push("Selecione o campo estado")
    }


  /* validar o comentario*/
  const comentario = document.getElementById("Comentario").value
  if (comentario.length < 50){
    valido = false 
    mensagem.push("o comentário deve ter pelo meno 50 caracteres")
  }


    if (valido == false){
        event.preventDefault()   /* impede o envio do formulario*/
        alert(mensagem.join("\n"))
    }

    }
)
