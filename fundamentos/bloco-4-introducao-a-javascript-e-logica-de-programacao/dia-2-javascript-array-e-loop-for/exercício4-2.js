//exercicio 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     // console.log(numbers[index]);
// }

//exercicio 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// console.log(soma);

//exercicio 3

// let soma = 0;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// let media = soma / numbers.length;
// console.log(media);

//exercicio 4

// let soma = 0;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// let media = soma / numbers.length;

// console.log(media);
// if (media > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

//exercicio 5

let maiorNumero = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
 if (numbers[index] > maiorNumero) {
     maiorNumero = numbers[index];
} 
}
console.log(maiorNumero);

