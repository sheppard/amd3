define(["d3/base"], function(d3) {
d3.entries = function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
};

return d3.entries;
});
