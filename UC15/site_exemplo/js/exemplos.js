// Variaveis

let nome = "Denilson"       // Pode ter o valor alterado 
const idade = 22            // Não pode ter seu valor alterado
var cidade = "Limeira"      // Uso genérico

// Usando concatenação
console.log(nome + " tem " + idade + " e mora em " + cidade)

// Usando template string
console.log(`${nome} tem ${idade} e mora em ${cidade}`)

// Estruturas condicionais
if (idade>=18){
    console.log("É maior de idade")
}
else{
    console.log("É menor de idade")
}

// Mesmo exemplo, usando operador ternário
let resultado = idade>=18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)

// Estruturas de repetição
const lista_de_pizzas = ["Portuguesa","Frango","Quatro Queijos","Peperone","Americana","Bacon"]

console.log(lista_de_pizzas[4])

// Foreach para iterar sobre array
lista_de_pizzas.forEach(
    function(pizza){
        console.log(pizza)
    }
)

// Tabuada
for(let i = 1;i <= 10; i++){
    console.log(``)
    console.log(`Tabuada do ${i}`)
    console.log(``)
    for(let x = 1;x <= 10; x++){
        let result = i * x
        console.log(`${i} x ${x} = ${result}`)
    }
}

// Usos de funções no javascript 1 - Funções do Javascript 2 - Funções de usuários

const text = "Hoje é segunda-feira, dia de estudar muito."
console.log(text.toUpperCase())
console.log(text.toLowerCase())
let palavras = text.split("-")
console.log(palavras)

const dataUsuario = "04/11/2024"
const itens = dataUsuario.split("/")
console.log(itens)
const dataBanco = `${itens[2]}-${itens[1]}-${itens[0]}`
console.log(dataBanco)
function dataformatada(data, formato){
    
    // alert("a função foi chamada e recebeu como parâmetro: " + data)
    if(formato === "uTOb")
    {
        const items = data.split("/")
        const dataFinal = `${items[2]}-${items[1]}-${items[0]}`
        return dataFinal
    }
    else
    {
        const items = data.split("-")
        const dataFinal = `${items[2]}/${items[1]}/${items[0]}`
        return dataFinal
    }
}

let dataFormatoBanco1 = dataformatada("22/12/2024", "uTOb")
console.log("A data no formato banco é: " + dataFormatoBanco1)

let dataFormatoBanco2 = dataformatada("2024-11-09", "bTOu")
console.log("A data no formato banco é: " + dataFormatoBanco2)

let data1 = dataformatada("22/12/2024", "uTOb")
console.log(data1[0] + data1[1] + data1[2] + data1[3])

const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Limeira"
}

console.log(pessoa.cidade)
console.log(pessoa.idade)
console.log(pessoa.nome)