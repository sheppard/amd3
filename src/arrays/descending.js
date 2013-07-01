//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.descending = function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

//>>excludeStart("amd", pragmas.amd)
return d3.descending;
});
//>>excludeEnd("amd")