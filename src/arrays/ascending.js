//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.ascending = function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

//>>excludeStart("amd", pragmas.amd)
return d3.ascending;
});
//>>excludeEnd("amd")