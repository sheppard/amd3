//>>excludeStart("amd", pragmas.amd)
define(["./selection"], function() {
//>>excludeEnd("amd")

// TODO remove(selector)?
// TODO remove(node)?
// TODO remove(function)?
d3_selectionPrototype.remove = function() {
  return this.each(function() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  });
};

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")