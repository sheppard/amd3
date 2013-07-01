//>>excludeStart("amd", pragmas.amd)
define(function() {
//>>excludeEnd("amd")
function d3_uninterpolateNumber(a, b) {
  b = b - (a = +a) ? 1 / (b - a) : 0;
  return function(x) { return (x - a) * b; };
}

function d3_uninterpolateClamp(a, b) {
  b = b - (a = +a) ? 1 / (b - a) : 0;
  return function(x) { return Math.max(0, Math.min(1, (x - a) * b)); };
}

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")