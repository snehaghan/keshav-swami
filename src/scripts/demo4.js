var app=angular.module("myApp",[]);
app.directive("demoDirective",function[])
{
var directobj={};
directobj.restrict="EA";
directobj.template="<h2>welcome to {{uname}}</h2>";
return directobj;
});
app.directive("studentlist",function()
{
var directobj={};
directobj.restrict="E";
directobj.templateurl="template1.html";
return directobj;
});
app.controller("democontroller",function($scope)
{
$scope.uname="scott";
$scope.studen=[{sname:"smith",course:"HTML"},{sname:"ssss",course:"css"}];
});
