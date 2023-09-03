
// atividade 01
let tempo = "dia"

if (tempo == "dia") {
console.log(`está de ${tempo}`)
} else {
 console.log("está de noite")
}

console.log("separação")

// atividade 02
for (let contador = 0; contador <=20; contador +=2){
console.log(contador)
}

// atividade 03
function escreverMensagem(){
console.log("está é uma mensagem")
}
escreverMensagem()

// atividade 04
function escreverMeuNome(nome){
console.log(`Meu nome é ${nome}`)
}
escreverMeuNome("David")

// atividade 05
function apresentação(nome, idade, musica){
console.log(`Eu me chamo ${nome} e
tenho ${idade}, meu estilo de musica preferida é ${musica}`)
}
apresentação("David","20","um pouco de tudo")

// atividade 06
function filmeMusica(filme,musica){
console.log(`Considero o filme entitulado
de ${filme} uma grande obra da netflix
e a música ${musica} do chorão um grande
exemplo de arte sonora`)
}
filmeMusica("O grande truque", "Céu azul")

// atividade 07
function multTriplo(num){
console.log(3 * num)
}
multTriplo(20)

// atividade 08

let javaScriptIsEasy = false

function verificacao(javaScriptIsEasy) {
if (javaScriptIsEasy === true) {
console.log("JavaScript é fácil")
} else (javaScriptIsEasy === false) 
    console.log("JavaScript é difícil")
}
verificacao()

// atividade 09
let items = ["MacBook Pro","BMW X6",
"PC Gamer","PS5","Alter"]
// console.log(items)

// atividade 10
// items.unshift("Supino")
// console.log(items)

// atividade 11
// items.pop()
// console.log(items)

// atividade 12
// items.splice(5,0, "SSD", "Creatina")
// console.log(items)

// atividade 13
// items.shift()
// console.log(items)

// atividade 14
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

// atividade 15
let meuArray = {
nome: "David",
idade: 20,
cidade: "Rio de janeiro" 
}
// console.log(meuArray)

// atividade 16
meuArray.comidaPreferida = "Empadão de frango"
// console.log(meuArray)

// atividade 17
// delete meuArray.idade
// console.log(meuArray)

// atividade 18
console.log(meuArray)


// atividade 19
let cadastro = [
 {
    nome: "Michel",
    idade: 23,
    telefone: 123,
    amigos: ["Savio","Sara","David","iuri","Bruno"]


},
   {
    nome: "Bruno",
    idade: 17,
    telefone: 123,
    amigos: ["Savio","Sara","David","iuri","Michel"]


  },
     {
    nome: "iuri",
    idade: 35,
    telefone: 123,
    amigos: ["Savio","Sara","David","Bruno","Michel"]


  },
    {
    nome: "Sara",
    idade: 27,
    telefone: 123,
    amigos: ["Savio","iuri","David","Bruno","Michel"]


  },
    {
    nome: "Savio",
    idade: 25,
    telefone: 123,
    amigos: ["Sara","iuri","David","Bruno","Michel"]


  }

]

// atividade 20
console.log(`${cadastro[0].nome}, ${cadastro[1].nome}, 
${cadastro[2].nome} ,${cadastro[3].nome}, 
${cadastro[4].nome}.`)
