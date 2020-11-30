const Ujs = require("./Ujs.js");

const arrayWithDuplicatedNumbers = [1, 5, 3, 2, 5, 4];
const arrayWithDuplicatedStrings = ["A", "D", "C", "E", "F", "D", "C", "B"];
const arrayOfObjects = [
  { char: "A", irrelevant: 1 },
  { char: "CCC", irrelevant: 333 },
  { char: "DDDD", irrelevant: 4444 },
  { char: "BB", irrelevant: 22 },
];

console.log("Started...");
/* console.log(
  "Removed Duplicates: ",
  arrayWithDuplicatedNumbers._removeDuplicates()
);
console.log("Sort Ascending: ", arrayWithDuplicatedStrings._sortAscending());
console.log("Sort Descending: ", arrayWithDuplicatedStrings._sortDescending());
console.log(
  "Sort Object Ascending: ",
  arrayOfObjects._sortAscendingByKey("char")
); */
console.log(
  "Sort Object Ascending Length: ",
  arrayOfObjects._sortAscendingByKey("name")
);
/* console.log(
  "Sort Object Descending Length: ",
  arrayOfObjects._sortDescendingByKeyLength("irrelevant")
); */
console.log("Done!");
