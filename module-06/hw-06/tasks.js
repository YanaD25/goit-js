import { users } from "./users.js";

// TASK-01
const getUserNames = (users) => users.map((user) => user.name);
// твой код

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// TASK-02
const getUsersWithEyeColor = (users, color) => users.map((user) => user.eyeColor);
    // твой код

  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
