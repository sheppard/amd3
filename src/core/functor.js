//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
}

d3.functor = d3_functor;

//>>excludeStart("amd", pragmas.amd)
return d3.functor;
});
//>>excludeEnd("amd")