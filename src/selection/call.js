//>>excludeStart("amd", pragmas.amd)
define(["../core/array","./selection"], function() {
//>>excludeEnd("amd")

d3_selectionPrototype.call = function(callback) {
  var args = d3_array(arguments);
  callback.apply(args[0] = this, args);
  return this;
};

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")