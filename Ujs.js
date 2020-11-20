// Adds new property methods to the Array object prototype

const Ujs = (function () {
  // Clones and removes any duplicate in the array
  Array.prototype.cloneAndRemoveDuplicate = function () {
    return Array.from(new Set(this));
  };
})();

module.exports = Ujs;
