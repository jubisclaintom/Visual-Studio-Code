
// função para manipulação do DOM - Document Obkect Model
function imc(){

    // variáveis locais para o botão e o resultado 
    let botaoImc = document.querySelector("#calcularImc")
    let resultadoImc = document.querySelector("#resultadoImc")
    botaoImc.addEventListener("click", function(){
        // recupera os valores dos campos de texto
        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value
        let resultado = calcularIMC(altura, peso)

        //Mostra resultaddo para o usuário
        resultadoImc.innerHTML = resultado.classificao

        // Aplicar as classes do CSS de acordo com a váriavel cor 
        resultadoImc.classList.remove("alertaVermelho", "alertaAmarelo", "alertaVerde")
        resultadoImc.classList.add(resultado.cor)
        

    })
}

function calcularIMC(altura, peso){
    let valorIMC
    let classificao
    let cor

    //Aplica a formúla o IMC
    valorIMC = peso/(altura * altura)

    // Interpretar o resultado do IMC
    if(valorIMC < 18.5)
    {
        classificao = "Magreza"
        cor = "alertaVermelho"
    }
    else if(valorIMC < 24.9)
    {
        classificao = "Normal"
        cor = "alertaVerde"
    }
    else if(valorIMC < 29.9)
    {
        classificao = "Sobrepeso"
        cor = "alertaAmarelo"
    }
    else 
    {
        classificao = "Obesidade"
        cor = "alertaVermelho"
    }

    return {classificao, cor}
}

imc()