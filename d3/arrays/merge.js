define(["d3/base"], function(d3) {
d3.merge = function(arrays) {
  return Array.prototype.concat.apply([], arrays);
};

return d3.merge;
});
