//>>excludeStart("amd", pragmas.amd)
define(function() {
//>>excludeEnd("amd")
function d3_class(ctor, properties) {
  try {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  } catch (e) {
    ctor.prototype = properties;
  }
}

//>>excludeStart("amd", pragmas.amd)
return d3_class;
});
//>>excludeEnd("amd")