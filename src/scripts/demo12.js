var app=angular.module("myApp",[]);
app.service("loginservice",function()
{
	this.isvaliduser=function(s1,s2)
	{
		var result="";
		if(s1=="admin" && s2=="admin123")
		{
			result="welcome to" +s1;
		}
		else
		{
			result="invalid userid and pwd";
		}
		return result;
	};
});
app.controller("democontroller",function($scope,loginservice)
{
	$scope.uname="";
	$scope.pwd="";
	$scope.str="";
	$scope.f1=function()
	{
		$scope.str=loginservice.isvaliduser($scope.uname,$scope.pwd);
	}
});