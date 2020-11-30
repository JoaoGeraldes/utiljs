interface Array<T> extends IUjs {}

type ArrayOfAny = Array<string | number | object>;
type ArrayOfStringOrNumber = Array<string | number>;
type ArrayOfObjects = Array<object>;

interface IUjs {
  _removeDuplicates(): ArrayOfStringOrNumber;
  _sortAscending(): ArrayOfStringOrNumber;
  _sortDescending(): ArrayOfStringOrNumber;
  _sortAscendingByKey(key: string): ArrayOfObjects;
  _sortDescendingByKey(key: string): ArrayOfObjects;
  _sortAscendingByKeyLength(key: string): ArrayOfObjects;
  _sortDescendingByKeyLength(key: string): ArrayOfObjects;
}

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
  const isObjectArray = (array: ArrayOfAny) => typeof array[0] === "object";
  const isStringArray = (array: ArrayOfAny) => typeof array[0] === "string";
  const isNumberArray = (array: ArrayOfAny) => typeof array[0] === "number";

  /* ----------------------------- */
  /* ---- THROW ERROR HANDLER ---- */
  /* ----------------------------- */
  function throwErrorWhen(condition: boolean, message: string) {
    if (condition) {
      throw new Error(message);
    }
  }

  /* ----------------------------------------------------------- */
  /* ---- Returns a clone of an array of numbers or strings ---- */
  /* ----------------------------------------------------------- */
  function cloneArray(
    originalArray: ArrayOfStringOrNumber
  ): ArrayOfStringOrNumber {
    return [...originalArray];
  }

  /* ------------------------------------------------ */
  /* ---- Returns a clone of an array of objects ---- */
  /* ------------------------------------------------ */
  function cloneArrayObjects(originalArray: ArrayOfObjects): ArrayOfObjects {
    return [...originalArray];
  }

  /* -------------------------------------------------------- */
  /* ---- Returns a cloned array with duplicates removed ---- */
  /* -------------------------------------------------------- */
  function removeDuplicates(): ArrayOfStringOrNumber {
    return Array.from(new Set(this));
  }

  /* ---------------------------------------------------------------------------------------- */
  /* ---- Returns a cloned array (typeof 'number' or 'string') sorted in ascending order ---- */
  /* ---------------------------------------------------------------------------------------- */
  function sortAscending(): ArrayOfStringOrNumber {
    const clonedArray = cloneArray(this);

    if (isNumberArray) clonedArray.sort((a: any, b: any) => a - b);
    if (isStringArray) clonedArray.sort();

    return clonedArray;
  }

  /* ----------------------------------------------------------------------------------------- */
  /* ---- Returns a cloned array (typeof 'number' or 'string') sorted in descending order ---- */
  /* ----------------------------------------------------------------------------------------- */
  function sortDescending(): ArrayOfStringOrNumber {
    const clonedArray = cloneArray(this);

    if (isNumberArray) clonedArray.sort((a: any, b: any) => b - a);

    if (isStringArray) clonedArray.sort().reverse();

    return clonedArray;
  }

  /* ---------------------------------------------------------------------------------------- */
  /* ---- Returns an array of objects sorted on ascending order by a specified key/value ---- */
  /* ---------------------------------------------------------------------------------------- */
  function sortAscendingByKey(key: string): ArrayOfObjects {
    throwErrorWhen(
      !isObjectArray(this),
      `Expected an array of objects. Was given an array of ${typeof this[0]}s`
    );
    throwErrorWhen(!key, "Must have a key (object property) as parameter");
    const clonedArray = cloneArrayObjects(this);

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
  function sortDescendingByKey(key: string): ArrayOfObjects {
    const clonedArray = cloneArrayObjects(this);

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
  function sortAscendingByKeyLength(key: string): ArrayOfObjects {
    throwErrorWhen(
      !isObjectArray(this),
      `Expected an array of objects. Was given an array of ${typeof this[0]}s`
    );
    throwErrorWhen(!key, "Must have a key (object property) as parameter");
    const clonedArray = cloneArrayObjects(this);

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
  function sortDescendingByKeyLength(key: string): ArrayOfObjects {
    throwErrorWhen(
      !isObjectArray(this),
      `Expected an array of objects. Was given an array of ${typeof this[0]}s`
    );
    throwErrorWhen(!key, "Must have a key (object property) as parameter");
    const clonedArray = cloneArrayObjects(this);

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
