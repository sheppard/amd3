//>>excludeStart("amd", pragmas.amd)
define(["./selection"], function() {
//>>excludeEnd("amd")

d3_selectionPrototype.size = function() {
  var n = 0;
  this.each(function() { ++n; });
  return n;
};

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")