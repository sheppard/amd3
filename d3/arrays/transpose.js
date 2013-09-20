define(["d3/base","./zip"], function(d3) {

d3.transpose = function(matrix) {
  return d3.zip.apply(d3, matrix);
};

return d3.transpose;
});
