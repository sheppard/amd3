define(["d3/base","./xhr"], function(d3) {

d3.xml = d3_xhrType(function(request) {
  return request.responseXML;
});

return d3.xml;
});
