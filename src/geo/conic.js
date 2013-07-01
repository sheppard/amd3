//>>excludeStart("amd", pragmas.amd)
define(["../math/trigonometry","./projection"], function() {
//>>excludeEnd("amd")

function d3_geo_conic(projectAt) {
  var φ0 = 0,
      φ1 = π / 3,
      m = d3_geo_projectionMutator(projectAt),
      p = m(φ0, φ1);

  p.parallels = function(_) {
    if (!arguments.length) return [φ0 / π * 180, φ1 / π * 180];
    return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
  };

  return p;
}

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")