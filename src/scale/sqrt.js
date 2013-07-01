//>>excludeStart("amd", pragmas.amd)
define(["./pow","./scale"], function() {
//>>excludeEnd("amd")

d3.scale.sqrt = function() {
  return d3.scale.pow().exponent(.5);
};

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")