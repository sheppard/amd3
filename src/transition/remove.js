//>>excludeStart("amd", pragmas.amd)
define(["./transition"], function() {
//>>excludeEnd("amd")

d3_transitionPrototype.remove = function() {
  return this.each("end.transition", function() {
    var p;
    if (!this.__transition__ && (p = this.parentNode)) p.removeChild(this);
  });
};

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")