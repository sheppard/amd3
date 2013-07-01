//>>excludeStart("amd", pragmas.amd)
define(["./selection"], function() {
//>>excludeEnd("amd")

d3_selectionPrototype.datum = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.property("__data__");
};

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")