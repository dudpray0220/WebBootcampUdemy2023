const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
Math.max(nums); //NaN
Math.max(...nums); //53456

console.log(..."hello"); // h e l l o

// SPREAD IN ARRAYS
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs, "Speedy"];

// SPREAD IN OBJECTS
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine }; // {legs: 4, family: 'Caninae', isFurry: true}
const dogCat = { ...canine, ...feline }; // {isFurry: true, family: 'Felidae', legs: 4}
const stringNew = { ..."hello" }; // {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'} 인덱스가 key

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
