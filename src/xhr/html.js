//>>excludeStart("amd", pragmas.amd)
define(["base","../core/document","./xhr"], function(d3) {
//>>excludeEnd("amd")

d3.html = function(url, callback) {
  return d3_xhr(url, "text/html", d3_html, callback);
};

function d3_html(request) {
  var range = d3_document.createRange();
  range.selectNode(d3_document.body);
  return range.createContextualFragment(request.responseText);
}

//>>excludeStart("amd", pragmas.amd)
return d3.html;
});
//>>excludeEnd("amd")