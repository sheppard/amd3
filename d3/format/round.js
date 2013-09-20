define(["d3/base"], function(d3) {
d3.round = function(x, n) {
  return n
      ? Math.round(x * (n = Math.pow(10, n))) / n
      : Math.round(x);
};

return d3.round;
});
