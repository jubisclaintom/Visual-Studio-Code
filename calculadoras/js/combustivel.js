function NunCompensa(){
    let botaoCalculo = document.querySelector("#calcularCombustivel")
    let mostrarResultado = document.getElementById("resultadoCombustivel")
    botaoCalculo.addEventListener("click", function(){
        const gasosa = document.getElementById("gasolina").value
        const alcu = document.getElementById("alcool").value
        let resultado = (alcu / gasosa) * 100
        // ve se vale a pena a gasolina
        if(resultado >= 70)
        {
            mostrarResultado.innerHTML = "tá valendo a gasolina"
        }

        else if(resultado <= 70)
        {
            mostrarResultado.innerHTML = "tá valendo o alcool"
        }
    })
}

NunCompensa()