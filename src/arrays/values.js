//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.values = function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
};

//>>excludeStart("amd", pragmas.amd)
return d3.values;
});
//>>excludeEnd("amd")