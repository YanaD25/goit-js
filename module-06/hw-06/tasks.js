import { users } from "./users.js";

// TASK-01
const getUserNames = (users) => users.map((user) => user.name);
// твой код

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// TASK-02
const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => color === user.eyeColor);
// твой код

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// TASK-03
const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => gender === user.gender)
    .map((user) => user.name);
  // твой код
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
