var app=angular.module("myApp",[]);
app.filter("demofilter",function()
{
var f=function(i)
{
var o="";
o=i.toString();
return o;
};
return f;
});
app.filter("gradeFilter",function()
{
var f=function(i)
{
var o="";
if(i==1){o="outstanding"}
if(i==2){o="excellent"}
if(i==3){o="good"}
if(i==4){o="Average"}
if(i==5){o="belowaverage"}
return o;
};
return f;
});
app.controller("democontroller",function($scope)
{
$scope.emp=[{ename:"scott",grade:1},{ename:"sneha",grade:2},{ename:"s",grade:3},{ename:"sss",grade:4},{ename:"cott",grade:5}];
});