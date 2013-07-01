//>>excludeStart("amd", pragmas.amd)
define(["./geo","./projection"], function() {
//>>excludeEnd("amd")

function d3_geo_equirectangular(λ, φ) {
  return [λ, φ];
}

(d3.geo.equirectangular = function() {
  return d3_geo_projection(d3_geo_equirectangular);
}).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;

//>>excludeStart("amd", pragmas.amd)
});
//>>excludeEnd("amd")