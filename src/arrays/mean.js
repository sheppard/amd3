//>>excludeStart("amd", pragmas.amd)
define(["base","../math/number"], function(d3) {
//>>excludeEnd("amd")

d3.mean = function(array, f) {
  var n = array.length,
      a,
      m = 0,
      i = -1,
      j = 0;
  if (arguments.length === 1) {
    while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
  } else {
    while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
  }
  return j ? m : undefined;
};

//>>excludeStart("amd", pragmas.amd)
return d3.mean;
});
//>>excludeEnd("amd")