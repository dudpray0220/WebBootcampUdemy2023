// let randomNum = Math.random();

// if (randomNum < 0.5) {
//   console.log("less than 0.5");
//   console.log(randomNum);
// }

// if (randomNum >= 0.5) {
//   console.log("greater than 0.5");
//   console.log(randomNum);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// for (let i = people.length-1; i >= 0; i--) {
//   console.log(people[i]);
// }

// for (let char of "hello world!") {
//   console.log(char);
// }

// const myMath = {
//   PI : 3.14159,
//   squre(num) {
//     return num*num;
//   },
//   cube(num) {
//     return num*num*num;
//   }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function (el) {
  console.log(el);
})

for (let num of numbers) {
  console.log(num);
}

const fullNames = [
  {first: 'Albus', last: 'Dumbledore'}, 
  {first: 'Harry', last: 'Potter'}, 
  {first: 'Hermione', last: 'Granger'}, 
  {first: 'Ron', last: 'Weasley'}, 
  {first: 'Rubeus', last: 'Hagrid'}, 
  {first: 'Minerva', last: 'McGonagall'}, 
  {first: 'Severus', last: 'Snape'}
];

const firstNames = fullNames.map(function(name){
  return name.first;
})

// const add = (x, y) => {
//   return x + y;
// }

// const cube = (x) => {
//   return x * x * x;
// }

const hi = () => {
  console.log("hello");
}

const add2 = (x, y) => (
  x + y
);

const add = (x, y) => x + y;
