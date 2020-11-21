const Ujs = require("./Ujs");

const withDuplicatedNumbers = [1, 5, 3, 2, 5, 4];
const withoutDuplicatedNumbers = [1, 5, 3, 2, 4];
const sortedAscendingNumbers = [1, 2, 3, 4, 5, 5];
const withDuplicatedStrings = ["A", "D", "C", "E", "F", "D", "C", "B"];
const withoutDuplicatedStrings = ["A", "B", "C", "C", "D", "D", "E", "F"];

// Test _sortAscending function
test("Should return an ascending sorted array", () => {
  expect(withDuplicatedNumbers._sortAscending()).toEqual(
    sortedAscendingNumbers
  );
  expect(withDuplicatedStrings._sortAscending()).toEqual(
    withoutDuplicatedStrings
  );
});

// Test __removeDuplicates function
test("Should return an array without duplicated values", () => {
  expect(withDuplicatedNumbers._removeDuplicates()).toEqual(
    withoutDuplicatedNumbers
  );
});
