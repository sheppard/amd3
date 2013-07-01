//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.entries = function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
};

//>>excludeStart("amd", pragmas.amd)
return d3.entries;
});
//>>excludeEnd("amd")