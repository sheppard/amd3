//>>excludeStart("amd", pragmas.amd)
define(["base","../core/array","./event","./mouse"], function(d3) {
//>>excludeEnd("amd")

d3.touches = function(container, touches) {
  if (arguments.length < 2) touches = d3_eventSource().touches;
  return touches ? d3_array(touches).map(function(touch) {
    var point = d3_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
  }) : [];
};

//>>excludeStart("amd", pragmas.amd)
return d3.touches;
});
//>>excludeEnd("amd")