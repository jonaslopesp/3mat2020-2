// Características da função abaixo
// - tem apenas um parâmetro (argumento)
// - possui uma única linha de código com return
let quadrado = function(x){
    return x * x
}

// arrow function: sixtaxe simplificada
// - Não usa a palavra-chave function
// - O único argumento não precisa de parênteses
// - Entre o argumento e o corpo da função vem o sinal de =>(arrow, flecha)
// - A única linha de código não precisa nem de {} me, da palavra chave
let quadrado2 = x => x * x

console.log(quadrado(7))
console.log(quadrado2(7))

let potencia = function(base, exp) {
    return base ** exp
}

// Quando o número de argumentos != 0, os parênteses da lista
// de argumentos precisam ser mantidos
let potencia2 = (base, exp) => base ** exp

console.log(potencia(2,5))
console.log(potencia2(2,5))

// Função tradicional sem argumentos
let msgErro = function() {
    console.log('Erro inesperado')
}

// Retorna um número aleatório entre 0 e 99
let aleatório= function() {
    // Math.random(): retorna um número aleatório entre 0 e 1
    // Math.floor(): "corta fora" as  casas decimais de um número
    return Math.floor(Math.random() * 100)
}

msgErro()
console.log(aleatório())

// Arrow functions sem argumentos
// - Os parênteses vazios são obrigatórios.
let msgErro2 = () => console.log('Erro Inesperado 2.')
let aleatório2 = () => Math.floor(Math.random() * 100)

msgErro2()
console.log(aleatório2())

// Função tradicional com 1+ argumentos
let areaTri = function(base, altura) {
    return base * altura / 2   // área de um triângulo
}

// Arrow function com 1+ argumento
// - Os argumentos devem estar obrigatóriamente entre parênteses.
let areaTri2 = (base, altura) => base * altura / 2

console.log(areaTri(4, 2.5))
console.log(areaTri2(4, 2.5))

// Função tradicional com mais de uma linha de corpo
// 5! = 5 * 4 * 3 * 2 * 1 = (120)
let fatorial = function(n) {
    let res = 1
    for (let i = n; i >= 1; i--){
        res *= i
    }
    return res
}

// Arrow Function com mais de uma linha de corpo
let fatorial2 = n => {
    let res = 1
    for(let i = n; i >= 1; i--){
        res *= i
    }
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))