//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.keys = function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
};

//>>excludeStart("amd", pragmas.amd)
return d3.keys;
});
//>>excludeEnd("amd")