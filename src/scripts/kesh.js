var app=angular.module("myApp",["ngRoute"]);
app.controller("HomeController",function($scope)
{
$scope.home="This is home page";
});
app.controller("ContactController",function($scope)
{
$scope.c=[{"name":"Shreenivas Dande","phoneno":'020231552',"mobileno":'9848809000'}];
});
app.config(function($routeProvider)
{
$routeProvider
.when("/hom",
{
templateUrl:"hom.html",
controller:"HomeController"
})
.when("/cont",
{
templateUrl:"cont.html",
controller:"ContactController"
})
.when("/Map",
{
templateUrl:"map.html",
controller:""
})
.when("/Aboutus",
{
templateUrl:"Aboutus.html",
controller:""
})
.otherwise
({
redirectTo:"/cont"
});
});