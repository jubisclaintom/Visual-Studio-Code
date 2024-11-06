// alert("Oi")
// console.log("Oi para o console")

function galeria(){
    var miniaturas = document.querySelectorAll(".galeria_miniatura img")
    // console.log(miniaturas)

    miniaturas.forEach(
        function(imagemIndividual){
            imagemIndividual.addEventListener("click",
                function(){
                    console.log(this.src)
                    document.getElementById("foto_grande").src = this.src
                }
            )
        }
    )
}

function TesteEvento(){
    const testeJs = document.getElementById("teste")
    const teste2Js = document.getElementById("teste2")
    
    testeJs.addEventListener("click", 
        function (){
            teste2Js.innerHTML = "text alterado pelo JavaScript"
        }
    )
}

galeria()