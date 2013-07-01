//>>excludeStart("amd", pragmas.amd)
define(["base","./xhr"], function(d3) {
//>>excludeEnd("amd")

d3.text = d3_xhrType(function(request) {
  return request.responseText;
});

//>>excludeStart("amd", pragmas.amd)
return d3.text;
});
//>>excludeEnd("amd")