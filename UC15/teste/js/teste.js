function clicando(){
    var produto1 = document.getElementsByClassName("texto_produto1")
    var produto2 = document.getElementsByClassName("texto_produto2")
    // console.log(miniaturas)

    produto1.forEach(
        function(filho){
            filho.addEventListener("click",
                function(){
                    window.location.href = `http://127.0.0.1:5500/teste/html/Contato.html`;
                }
            )
        }
    )
}

clicando()
