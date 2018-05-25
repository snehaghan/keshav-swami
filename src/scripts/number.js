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
$scope.x=10;
$scope.y=100;
$scope.arr=[10,50,55,45,64,78,32,31,89,90,89,98,64,9,76,34,43,55,66,88,33,22,11];
});