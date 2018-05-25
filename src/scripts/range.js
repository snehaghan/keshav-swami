var app=angular.module("myApp",[]);
app.filter("rangeFilter",function()
{
var fn=function(input,min,max)
{
var output=[];
for(var i in input)
{
if(input[i]>=min && input[i]<=max)
{
output.push(input[i]);
}
}
return output;
};
return fn;
});
app.controller("democontroller",function($scope)
{
$scope.x=19999;
$scope.y=10000;
$scope.arr=[{pname:"samsung",price:20000},{pname:"micromax",price:30000},{pname:"sony",price:80000},{pname:"motorola",price:60000},{pname:"nokia",price:90000}];
});