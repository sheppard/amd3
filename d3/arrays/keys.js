define(["d3/base"], function(d3) {
d3.keys = function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
};

return d3.keys;
});
