//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.merge = function(arrays) {
  return Array.prototype.concat.apply([], arrays);
};

//>>excludeStart("amd", pragmas.amd)
return d3.merge;
});
//>>excludeEnd("amd")