define(["d3/base"], function(d3) {
function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
}

d3.functor = d3_functor;

return d3.functor;
});
