//>>excludeStart("amd", pragmas.amd)
define(["base","./xhr"], function(d3) {
//>>excludeEnd("amd")

d3.json = function(url, callback) {
  return d3_xhr(url, "application/json", d3_json, callback);
};

function d3_json(request) {
  return JSON.parse(request.responseText);
}

//>>excludeStart("amd", pragmas.amd)
return d3.json;
});
//>>excludeEnd("amd")