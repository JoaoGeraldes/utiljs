var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Ujs = (function () {
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
    var isObjectArray = function (array) { return typeof array[0] === "object"; };
    var isStringArray = function (array) { return typeof array[0] === "string"; };
    var isNumberArray = function (array) { return typeof array[0] === "number"; };
    /* ----------------------------- */
    /* ---- THROW ERROR HANDLER ---- */
    /* ----------------------------- */
    function throwErrorWhen(condition, message) {
        if (condition) {
            throw new Error(message);
        }
    }
    /* ----------------------------------------------------------- */
    /* ---- Returns a clone of an array of numbers or strings ---- */
    /* ----------------------------------------------------------- */
    function cloneArray(originalArray) {
        return __spreadArrays(originalArray);
    }
    /* ------------------------------------------------ */
    /* ---- Returns a clone of an array of objects ---- */
    /* ------------------------------------------------ */
    function cloneArrayObjects(originalArray) {
        return __spreadArrays(originalArray);
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
        var clonedArray = cloneArray(this);
        if (isNumberArray)
            clonedArray.sort(function (a, b) { return a - b; });
        if (isStringArray)
            clonedArray.sort();
        return clonedArray;
    }
    /* ----------------------------------------------------------------------------------------- */
    /* ---- Returns a cloned array (typeof 'number' or 'string') sorted in descending order ---- */
    /* ----------------------------------------------------------------------------------------- */
    function sortDescending() {
        var clonedArray = cloneArray(this);
        if (isNumberArray)
            clonedArray.sort(function (a, b) { return b - a; });
        if (isStringArray)
            clonedArray.sort().reverse();
        return clonedArray;
    }
    /* ---------------------------------------------------------------------------------------- */
    /* ---- Returns an array of objects sorted on ascending order by a specified key/value ---- */
    /* ---------------------------------------------------------------------------------------- */
    function sortAscendingByKey(key) {
        throwErrorWhen(!isObjectArray(this), "Expected an array of objects. Was given an array of " + typeof this[0] + "s");
        throwErrorWhen(!key, "Must have a key (object property) as parameter");
        var clonedArray = cloneArrayObjects(this);
        clonedArray.sort(function (a, b) {
            if (a[key] < b[key])
                return -1;
            if (a[key] > b[key])
                return 1;
            // if equal return 0
            return 0;
        });
        return clonedArray;
    }
    /* ----------------------------------------------------------------------------------------- */
    /* ---- Returns an array of objects sorted on descending order by a specified key/value ---- */
    /* ----------------------------------------------------------------------------------------- */
    function sortDescendingByKey(key) {
        var clonedArray = cloneArrayObjects(this);
        clonedArray.sort(function (a, b) {
            if (a[key] > b[key])
                return -1;
            if (a[key] < b[key])
                return 1;
            // if equal return 0
            return 0;
        });
        return clonedArray;
    }
    /* ----------------------------------------------------------------------------------------------- */
    /* ---- Returns an array of objects sorted on ascending order by a specified key/value length ---- */
    /* ----------------------------------------------------------------------------------------------- */
    function sortAscendingByKeyLength(key) {
        throwErrorWhen(!isObjectArray(this), "Expected an array of objects. Was given an array of " + typeof this[0] + "s");
        throwErrorWhen(!key, "Must have a key (object property) as parameter");
        var clonedArray = cloneArrayObjects(this);
        clonedArray.sort(function (a, b) {
            if (a[key].toString().length < b[key].toString().length)
                return -1;
            if (a[key].toString().length > b[key].toString().length)
                return 1;
            // if equal return 0
            return 0;
        });
        return clonedArray;
    }
    /* ------------------------------------------------------------------------------------------------ */
    /* ---- Returns an array of objects sorted on descending order by a specified key/value length ---- */
    /* ------------------------------------------------------------------------------------------------ */
    function sortDescendingByKeyLength(key) {
        throwErrorWhen(!isObjectArray(this), "Expected an array of objects. Was given an array of " + typeof this[0] + "s");
        throwErrorWhen(!key, "Must have a key (object property) as parameter");
        var clonedArray = cloneArrayObjects(this);
        clonedArray.sort(function (a, b) {
            if (a[key].toString().length > b[key].toString().length)
                return -1;
            if (a[key].toString().length < b[key].toString().length)
                return 1;
            // if equal return 0
            return 0;
        });
        return clonedArray;
    }
})();
module.exports = Ujs;
