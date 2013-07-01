//>>excludeStart("amd", pragmas.amd)
define(["base","./zip"], function(d3) {
//>>excludeEnd("amd")

d3.transpose = function(matrix) {
  return d3.zip.apply(d3, matrix);
};

//>>excludeStart("amd", pragmas.amd)
return d3.transpose;
});
//>>excludeEnd("amd")