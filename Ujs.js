const Ujs = (function () {
  // Adds new property methods to the Array object prototypes
  Array.prototype._removeDuplicates = removeDuplicates;
  Array.prototype._sortAscending = sortAscending;
  Array.prototype._sortDescending = sortDescending;
  Array.prototype._sortAscendingBy = sortAscendingBy;
  Array.prototype._sortDescendingBy = sortDescendingBy;

  // Returns a cloned array with duplicates removed
  function removeDuplicates() {
    return Array.from(new Set(this));
  }

  // Returns a cloned array (typeof 'number' or 'string') sorted in ascending order
  function sortAscending() {
    const typeOfArray = typeof this[0];
    const clonedArray = [...this];

    if (typeOfArray === "number")
      clonedArray.sort(function (a, b) {
        return a - b;
      });

    if (typeOfArray === "string") clonedArray.sort();

    return clonedArray;
  }

  // Returns a cloned array (typeof 'number' or 'string') sorted in descending order
  function sortDescending() {
    const typeOfArray = typeof this[0];
    const clonedArray = [...this];

    if (typeOfArray === "number") clonedArray.sort((a, b) => b - a);

    if (typeOfArray === "string") clonedArray.sort().reverse();

    return clonedArray;
  }

  // Returns an array of objects sorted on ascending order by a specified key
  function sortAscendingBy(key) {
    const clonedArray = [...this];

    clonedArray.sort(function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      // if equal return 0
      return 0;
    });

    return clonedArray;
  }

  // Returns an array of objects sorted on descending order by a specified key
  function sortDescendingBy(key) {
    const clonedArray = [...this];

    clonedArray.sort(function (a, b) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      // if equal return 0
      return 0;
    });

    return clonedArray;
  }
})();

module.exports = Ujs;
