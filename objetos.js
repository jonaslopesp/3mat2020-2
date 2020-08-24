// Declaração e inicialização de um objeto vazio

let pessoa1 = {};
let pessoa2 = new Object();

// Inicialização de objeto já com propriedades e valores
let pessoa3 = {
    // nome: atributo ou chave
    // 'Fulano de Souza': valor
    // atributo + valor -> propriedade
    nome: 'Fulado de Souza',
    "data de nascimento": '1998-05-19',
    sexo: "M",
    profissão: "marceneiro"
}

// Exibir o valor de um atributo (nome do atributo SEM espaços)
console.log(pessoa3.nome);   // Sintaxe ponto.

// Exibir o nome de um atributo cujo nome CONTÉM espaços
console.log(pessoa3["data de nascimento"]);    // Sintaxe Colchetes

// A sintaxe dos colchetes funciona sempre, mesmo quando o nome
// do atributo não tem espaços
console.log(pessoa3.profissão) // poderia usar com colchetes também

// Criando uma nova propriedade em um objeto
console.log(pessoa1)  // Antes
pessoa1.nome = "Sicranilson Soares"
pessoa1["data de nascimento"] = '1988-07-31'
console.log(pessoa1)  // Depois

// A criação de novas propriedades pode ser feita inclusive em
// objetos que foram inicializados com propriedades
console.log(pessoa3)  // Antes
pessoa3.altura = 1.73
pessoa3.peso = 87
console.log(pessoa3)  // Depois

// Exclusão de propriedade
delete pessoa3.sexo
console.log(pessoa3)

// Listando os atributos (nomes de propriedades) de um objeto: for..in
for(let atributo in pessoa3) {
    console.log(atributo)
}

// for on (correr vetor de fora a fora)
// for in (correr vetor)

// Listar as propriedades (atributo + valor) de um objeto
for(let atributo in pessoa3) {
    console.log('Atributo: ' + atributo + '; valor: ' + pessoa3[atributo])
}