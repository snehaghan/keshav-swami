var app=angular.module("myApp",[]);
app.factory("mathservice",function()
{
this.sum=function(x,y)
{
var z="";
z=x+y;		
return z;
};
});
app.controller("democontroller",function($scope,mathservice)
{
$scope.x="";
$scope.y="";
$scope.result="";
$scope.f1=function()
{
$scope.result=mathservice.sum($scope.x,$scope.y);
}
});