///estruturasequencial 
//1
let name = prompt("Digite seu nome");
alert("Seu nome e " + name);
console.log(name)

//2
let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite outro número"));

console.log(number1 + number2);

//3
let nota1 = parseInt(prompt("Digite sua nota"));
let nota2 = parseInt(prompt("Digite sua outra nota"))

console.log((nota1 + nota2)/2);

//4
let nascimento = parseInt(prompt("Digite o ano de seu nascimento"));
const anoAtual = 2022;

console.log (anoAtual-nascimento)

//5
let horas1 = parseInt(prompt("Digite qaundo voce ganha por hora "));
let horas2= parseInt(prompt( "Digite qauntas horas voce trabalha por mes"))

console.log (horas1*horas2)

//6
let grausF= parseInt(prompt("Digite a temperatura em graus Fahrenheit"));

console.log ( 5 * ((grausF-32)/9))




//EstruturaDeDecisao
//1
let Valor1=parseInt(prompt("Digite um numero"))
let Valor2=parseInt(prompt("Digite outro numero"))
if( Valor1>Valor2){
    console.log (Valor1)
} else{
    console.log (Valor2)
}

//2
let Numero1=parseInt(prompt("Digite um número negativo ou positivo"))
if (Numero1 <0){
    console.log("negativo")
} else {
    console.log ("positivo")
}

//3
let Sexo=parseInt(prompt("Digite seu sexo"))
if (Sexo="F"){
    console.log("Feminino")
}
if (Sexo="M"){
    console.log("Masculino")
}
else {
    console.log ("Sexo Inválido")
}

//4
let numero1 = parseInt(prompt("Digite um número"));
let numero2 = parseInt(prompt("Digite outro número"));

console.log(numero1 + numero2);

let média = parseInt(prompt("Digite sua média"));
if (média >7){
    console.log("Aprovado");
}
if (média <6,99){
    console.log("Reprovado");
}
if (média = 10)
    console.log ("Aprovado com distinção");

    //5
var numero01 = prompt("Informe o primeiro número");
var numero02 = prompt("Informe o segundo número");
var numero03 = prompt("Informe o terceiro número");
if ((numero01 > numero02) && (numero01 > numero03)) mensagem = "O primeiro número informado é maior!"
else
if ((numero02 > numero01) && (numero02 > numero03)) mensagem = "O segundo número informado é maior!"
else
if ((numero03 > numero01) && (numero03 > numero02)) mensagem = "O terceiro número informado é maior!"
else
mensagem = "Os números são iguais ou nada foi informado";
alert(mensagem);

//6
    
let numero10 = parseInt(prompt("Digite o primeiro número"));
let numero11 = parseInt(prompt("Digite o segundo número"));

if (numero10 % 2 === 0 && numero11 % 2 === 0) {
  console.log("Os números " + numero10 + " e " + numero11 + " são pares");
} else if (numero10 % 2 === 0 && numero11 % 2 !== 0){
    console.log("O número " + numero10 + " é par e o número " + numero11 + " é ímpar");
} else if (numero10 % 2 !== 0 && numero11 % 2 === 0){
    console.log("O número " + numero10 + " é ímpar e o número " + numero11 + " é par");
} else {
  console.log("Os dois números são ímpares");
}



//EstruturaDeRepetição
// 1. 

while (true) {
    let nota = parseFloat(prompt("Digite sua nota"));
  
    if (nota >= 0 && nota <= 10) {
      console.log(nota);
      break;
    } else {
      console.log("Nota inválida");
    }
  }
  
  
  // 3  
  do {
    var nome = prompt("Escreva seu nome");
    var senha = prompt("Escreva uma senha");
  
    if (nome == senha) {
      alert("Nome e senha devem ser distintos");
    }
  } while (nome == senha);

  
  // 4

  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  
  
  // 5
  
  let maior = 0;
  
  for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número"));
  
    if (numero > maior) {
      maior = numero;
    }
  }
  
  console.log(maior);
  
  
  // 6

  var soma = 0;
  let mdia = 0;
  
  for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número"));
  
    soma += numero;
  }
  
  mdia = soma / 5;
  
  console.log("A soma dos números é: " + soma);
  console.log("A media dos números é: " + mdia);
  
  
  // 7

  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
  
  
  
  // 8

      // Tabuada de 5:
      // 5 X 1 = 5
      // 5 X 2 = 10
      // ...
      // 5 X 10 = 50
  
      var numeroTabuada = parseInt(prompt("Digite um número para ver sua tabuada"))
  
  
  for (let i = 1; i <= 10; i++) {
      console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada*i));
  }



//DesafioFizzBuzz
var n = 1;

while (n <= 100) {
    if ((n % 3) == 0 || (n % 5) == 0) {
        if ((n % 3) == 0 && (n % 5) == 0) {
            console.log("FizzBuzz");
        }
        else if (n % 3 == 0 && (n % 5) !== 0) {
            console.log("Fizz");
        }
        else if ((n % 5) == 0 && (n % 3) !== 0) {
            console.log("Buzz");
        }
    }
    else {
        console.log(n);
    }
n = n + 1;
}





//Listas
// 1

let minhaLista = [1, 5, 3, 2, 10];

for (let i = 0; i < minhaLista.length; i++) {
  console.log(minhaLista[i]);
}

// 2

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var inverso = [];

for (let i = numeros.length - 1; i >= 0; i--) {
  inverso.push(numeros[i]);
}

console.log(inverso);

// 3

var notas = [];
var soma = 0;
var media = 0;

for (let i = 0; i < 4; i++) {
  notas.push(parseFloat(prompt("Digite uma nota")));
  soma += notas[i];
}

media = soma / 4;

alert("As notas são: " + notas + " e a média das notas é: " + media);


//5

var pares = []
var impares = []
var inteiros = []

for(let i = 0; i < 20; i++){

  inteiros.push(parseInt(prompt("Digite um número")))

  if(inteiros[i] % 2 === 0){
    pares.push(inteiros[i])
  } else{
    impares.push(inteiros[i])
  }
}
console.log("Vetor original: " + inteiros)
console.log("Vetor pares: " + pares)
console.log("Vetor impares3: " + impares)

// 7

var vetor = [1, 2, 3, 4, 5]
var soma = 0;
var multiplicacao = 1;

for (let i = 0; i < vetor.length; i++){
    soma += vetor[i]
    multiplicacao *= vetor[i]
}
console.log("A soma dos números do vetor é: " + soma)
console.log("A multiplicação dos números do vetor é: " + multiplicacao)
console.log("Os números do vetor são: " + vetor)

// 9

var nomes = [];
var i = 0;

while (true) {
  nomes.push(prompt("Digite um nome ou 0 para parar"));
  
  if (parseInt(nomes[i]) === 0) {
    nomes.pop(nomes[i]);
    break;
  }
  i++;
}
i = Math.floor(Math.random() * nomes.length);
console.log(nomes[i] + " foi sorteada para pagar o churrasco!");

// 10

var nomesPresente = [];
var i = 0;
let num1 = 0
let num2 = 0

while (true) {
  nomesPresente.push(prompt("Digite um nome ou 0 para parar"));
  
  if (parseInt(nomesPresente[i]) === 0) {
    nomesPresente.pop(nomesPresente[i]);
    break;
  }
  i++;
}
num1 = Math.floor(Math.random() * nomesPresente.length);
nomesPresente.pop(nomesPresente[num1]);
num2 = Math.floor(Math.random() * nomesPresente.length);
console.log(nomesPresente[num1] + " e "+ nomesPresente[num2] + " foram sorteados para te dar um presente!");




//Funções
// 1

function parOuImpar(numero) {
    if (parseInt(numero) % 2 === 0) {
      console.log("O número " + numero + " é par");
    } else {
      console.log("O número " + numero + " é ímpar");
    }
  }
  parOuImpar(10);
  parOuImpar("3");
  parOuImpar(5);
  
  // 2

  function soma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  
  let resultado = soma(3, 7);
  console.log("A soma dos dois números é: " + resultado);
  
  // 3
  
  function oposto(numero) {
    if (parseInt(numero) > 0) {
      return (numero += -2 * numero);
    } else {
      return (numero -= 2 * numero);
    }
  }
  console.log(oposto(2));
  console.log(oposto(-20));
  console.log(oposto(0));
  
  // 4
  
  function somaPositivos(numeros) {
    let soma = 0;
  
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) > 0) {
        soma += parseInt(numeros[i]);
      }
    }
    return ("A soma dos números é: " + soma);
  }
  console.log(somaPositivos([1, -4, 7, 12]));
  
  // 5

  function menorNumero(numeros){
    let menor = numeros[0];
  
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) < menor) {
        menor = parseInt(numeros[i]);
      }
    }
    return ("O menor número do array é: " + menor);
  }
  console.log(menorNumero([34, 15, 88, -2]));
  console.log(menorNumero([34, -500, -1, 100]));

