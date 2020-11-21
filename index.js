const Ujs = require("./Ujs");

const arrayWithDuplicatedNumbers = [1, 5, 3, 2, 5, 4];
const arrayWithDuplicatedStrings = ["A", "D", "C", "E", "F", "D", "C", "B"];
const arrayOfObjects = [
  { char: "A", irrelevant: "eofksf" },
  { char: "C", irrelevant: "dfdfdf" },
  { char: "D", irrelevant: "f3ff" },
  { char: "B", irrelevant: "eofksf" },
];

console.log("Started...");
console.log(
  "Removed Duplicates: ",
  arrayWithDuplicatedNumbers._removeDuplicates()
);
//console.log("Sort Ascending: ", arrayWithDuplicatedStrings._sortAscending());
//console.log("Sort Descending: ", arrayWithDuplicatedStrings._sortDescending());
//console.log("Sort Ascending: ", arrayOfObjects._sortAscendingBy("char"));
console.log("Done!");
