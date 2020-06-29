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
const getUsersWithGender = (users, gender) =>
  users.filter((user) => gender === user.gender).map((user) => user.name);
// твой код

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// TASK-04
const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
// твой код

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// TASK-05
const getUserWithEmail = (users, email) =>
  // твой код
  users.find((user) => email === user.email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// TASK-06

const getUsersWithAge = (users, min, max) =>
  // твой код
  users.filter((user) => user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// TASK-07
const calculateTotalBalance = (users) =>
  users.reduce((acc, users) => acc + users.balance, 0);
// твой код

console.log(calculateTotalBalance(users)); // 20916

// TASK-08
const getUsersWithFriend = (users, friendName) =>
  users.filter((users) => users.friends.includes(friendName)).map((user) => user.name);
// твой код

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// TASK-09
const getNamesSortedByFriendsCount = (users) =>
  // твой код

  users
    .sort(
      (userPrev, userNext) => userPrev.friends.length - userNext.friends.length
    )
    .map((user) => user.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// TASK-10
const getSortedUniqueSkills = (users) => {
  // твой код
  const allSkills = users.reduce(
    (acc, users) => [...acc, users.skills],
    []
  );
  const nonRepeatSkills = [];
  allSkills.forEach((skill) => {
    if (!nonRepeatSkills.includes(skill)) {
      nonRepeatSkills.push(skill);
    }
  });
  return nonRepeatSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
