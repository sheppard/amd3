define(["d3/base"], function(d3) {
d3.ascending = function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

return d3.ascending;
});
