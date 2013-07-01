//>>excludeStart("amd", pragmas.amd)
define(["base","./dsv"], function(d3) {
//>>excludeEnd("amd")

d3.csv = d3.dsv(",", "text/csv");

//>>excludeStart("amd", pragmas.amd)
return d3.csv;
});
//>>excludeEnd("amd")