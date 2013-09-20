define(["d3/base","./dsv"], function(d3) {

d3.csv = d3.dsv(",", "text/csv");

return d3.csv;
});
