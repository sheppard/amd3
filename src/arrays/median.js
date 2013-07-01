//>>excludeStart("amd", pragmas.amd)
define(["base","../math/number","./ascending","./quantile"], function(d3) {
//>>excludeEnd("amd")

d3.median = function(array, f) {
  if (arguments.length > 1) array = array.map(f);
  array = array.filter(d3_number);
  return array.length ? d3.quantile(array.sort(d3.ascending), .5) : undefined;
};

//>>excludeStart("amd", pragmas.amd)
return d3.median;
});
//>>excludeEnd("amd")