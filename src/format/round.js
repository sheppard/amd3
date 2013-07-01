//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.round = function(x, n) {
  return n
      ? Math.round(x * (n = Math.pow(10, n))) / n
      : Math.round(x);
};

//>>excludeStart("amd", pragmas.amd)
return d3.round;
});
//>>excludeEnd("amd")