//>>excludeStart("amd", pragmas.amd)
define(["base","./xhr"], function(d3) {
//>>excludeEnd("amd")

d3.xml = d3_xhrType(function(request) {
  return request.responseXML;
});

//>>excludeStart("amd", pragmas.amd)
return d3.xml;
});
//>>excludeEnd("amd")