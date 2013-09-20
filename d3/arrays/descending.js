define(["d3/base"], function(d3) {
d3.descending = function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

return d3.descending;
});
