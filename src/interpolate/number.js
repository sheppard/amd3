//>>excludeStart("amd", pragmas.amd)
define(function() {
//>>excludeEnd("amd")
d3.interpolateNumber = d3_interpolateNumber;

function d3_interpolateNumber(a, b) {
  b -= a = +a;
  return function(t) { return a + b * t; };
}

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")