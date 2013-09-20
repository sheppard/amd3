define(["d3/base"], function(d3) {
d3.values = function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
};

return d3.values;
});
