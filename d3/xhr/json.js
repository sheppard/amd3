define(["d3/base","./xhr"], function(d3) {

d3.json = function(url, callback) {
  return d3_xhr(url, "application/json", d3_json, callback);
};

function d3_json(request) {
  return JSON.parse(request.responseText);
}

return d3.json;
});
