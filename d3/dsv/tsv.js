define(["d3/base","./dsv"], function(d3) {

d3.tsv = d3.dsv("\t", "text/tab-separated-values");

return d3.tsv;
});
