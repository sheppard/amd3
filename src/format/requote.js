//>>excludeStart("amd", pragmas.amd)
define(["base"], function(d3) {
//>>excludeEnd("amd")
d3.requote = function(s) {
  return s.replace(d3_requote_re, "\\$&");
};

var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

//>>excludeStart("amd", pragmas.amd)
return d3.requote;
});
//>>excludeEnd("amd")