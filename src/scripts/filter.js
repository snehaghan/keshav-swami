var app=angular.module("myApp",[]);
app.filter("demofilter",function()
{
var fn_filter=function(input)
{
var output="";
output=input.toUpperCase();
return output;
};
return fn_filter;
});
app.filter("genderFilter",function()
{
var fn_filter=function(input)
{
var output="";
if(input=='m'){output="male"}
if(input=='f'){output='female'}
return output;
};
return fn_filter;
});
app.controller("democontroller",function($scope)
{
$scope.s1={sname:"scott",gender:"m"};
$scope.s2={sname:"sneha",gender:"f"};
});