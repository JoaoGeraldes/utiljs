const Ujs = (function () {
  /* ---------------------------------------------------------------- */
  /* ---- Add new property methods to the Array object prototype ---- */
  /* ---------------------------------------------------------------- */
  Array.prototype._removeDuplicates = removeDuplicates;
  Array.prototype._sortAscending = sortAscending;
  Array.prototype._sortDescending = sortDescending;
  Array.prototype._sortAscendingByKey = sortAscendingByKey;
  Array.prototype._sortDescendingByKey = sortDescendingByKey;
  Array.prototype._sortAscendingByKeyLength = sortAscendingByKeyLength;
  Array.prototype._sortDescendingByKeyLength = sortDescendingByKeyLength;

  /* ------------------------------ */
  /* ---- TYPE OF ARRAY CHECK  ---- */
  /* ------------------------------ */
  const isObjectArray = (array) => typeof array[0] === "object";
  const isStringArray = (array) => typeof array[0] === "string";
  const isNumberArray = (array) => typeof array[0] === "number";

  /* ----------------------------- */
  /* ---- THROW ERROR HANDLER ---- */
  /* ----------------------------- */
  function throwErrorWhen(condition, message) {
    if (condition === true) {
      throw new Error(message);
    }
  }

  function cloneArray(originalArray) {
    return [...originalArray];
  }

  /* -------------------------------------------------------- */
  /* ---- Returns a cloned array with duplicates removed ---- */
  /* -------------------------------------------------------- */
  function removeDuplicates() {
    return Array.from(new Set(this));
  }

  /* ---------------------------------------------------------------------------------------- */
  /* ---- Returns a cloned array (typeof 'number' or 'string') sorted in ascending order ---- */
  /* ---------------------------------------------------------------------------------------- */
  function sortAscending() {
    const clonedArray = cloneArray(this);

    if (isNumberArray) clonedArray.sort((a, b) => a - b);
    if (isStringArray) clonedArray.sort();

    return clonedArray;
  }

  /* ----------------------------------------------------------------------------------------- */
  /* ---- Returns a cloned array (typeof 'number' or 'string') sorted in descending order ---- */
  /* ----------------------------------------------------------------------------------------- */
  function sortDescending() {
    const clonedArray = cloneArray(this);

    if (isNumberArray) clonedArray.sort((a, b) => b - a);

    if (isStringArray) clonedArray.sort().reverse();

    return clonedArray;
  }

  /* ---------------------------------------------------------------------------------------- */
  /* ---- Returns an array of objects sorted on ascending order by a specified key/value ---- */
  /* ---------------------------------------------------------------------------------------- */
  function sortAscendingByKey(key) {
    throwErrorWhen(
      !isObjectArray(this),
      `Expected an array of objects. Was given an array of ${typeof this[0]}s`
    );
    throwErrorWhen(!key, "Must have a key (object property) as parameter");
    const clonedArray = cloneArray(this);

    clonedArray.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      // if equal return 0
      return 0;
    });

    return clonedArray;
  }

  /* ----------------------------------------------------------------------------------------- */
  /* ---- Returns an array of objects sorted on descending order by a specified key/value ---- */
  /* ----------------------------------------------------------------------------------------- */
  function sortDescendingByKey(key) {
    const clonedArray = cloneArray(this);

    clonedArray.sort((a, b) => {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      // if equal return 0
      return 0;
    });

    return clonedArray;
  }

  /* ----------------------------------------------------------------------------------------------- */
  /* ---- Returns an array of objects sorted on ascending order by a specified key/value length ---- */
  /* ----------------------------------------------------------------------------------------------- */
  function sortAscendingByKeyLength(key) {
    throwErrorWhen(
      !isObjectArray(this),
      `Expected an array of objects. Was given an array of ${typeof this[0]}s`
    );
    throwErrorWhen(!key, "Must have a key (object property) as parameter");
    const clonedArray = cloneArray(this);

    clonedArray.sort((a, b) => {
      if (a[key].toString().length < b[key].toString().length) return -1;
      if (a[key].toString().length > b[key].toString().length) return 1;
      // if equal return 0
      return 0;
    });

    return clonedArray;
  }

  /* ------------------------------------------------------------------------------------------------ */
  /* ---- Returns an array of objects sorted on descending order by a specified key/value length ---- */
  /* ------------------------------------------------------------------------------------------------ */
  function sortDescendingByKeyLength(key) {
    throwErrorWhen(
      !isObjectArray(this),
      `Expected an array of objects. Was given an array of ${typeof this[0]}s`
    );
    throwErrorWhen(!key, "Must have a key (object property) as parameter");
    const clonedArray = cloneArray(this);

    clonedArray.sort((a, b) => {
      if (a[key].toString().length > b[key].toString().length) return -1;
      if (a[key].toString().length < b[key].toString().length) return 1;
      // if equal return 0
      return 0;
    });

    return clonedArray;
  }
})();

module.exports = Ujs;
