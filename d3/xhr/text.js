define(["d3/base","./xhr"], function(d3) {

d3.text = d3_xhrType(function(request) {
  return request.responseText;
});

return d3.text;
});
