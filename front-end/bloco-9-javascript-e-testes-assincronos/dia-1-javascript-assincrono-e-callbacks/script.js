//1° exercício

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// //1°
// console.log(planetDistanceFromSun(mars)); // A 
// //2°
// console.log(planetDistanceFromSun(venus)); // B
// //3°
// console.log(planetDistanceFromSun(jupiter)); // C


// //2° exercício

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };
// // 1°
// console.log(planetDistanceFromSun(mars)); // A
// // 3°
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// // 2°
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// // exercicio 3

// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     console.log("Returned planet: ", mars);
//   };
  
//   setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos


// exercicio 4

  const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
    setTimeout (() => console.log(`A temperatura de Marte é: ${getMarsTemperature()}°C`), messageDelay());
}; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

sendMarsTemperature();
