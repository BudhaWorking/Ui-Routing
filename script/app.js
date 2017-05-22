var app= angular.module('myApp', ['ui.router']);

app.config(['$locationProvider',function($locationProvider) {
	$locationProvider.hashPrefix('')
}])
app.config(['$stateProvider',function($stateProvider) {

	$stateProvider
			.state('home',{

				url: "/home/:ID",
				templateUrl: "pages/home.html",
				controller: 'myHomeController',
				caseInsensitiveMatch: true

			})
			.state('register',{
				url: "/register",
				templateUrl: "pages/register.html",
				controller: 'myRegController',
				caseInsensitiveMatch: true		
				
			})
			.state('login',{
				url:"/login/{UserName}/{Password}",
				templateUrl: "pages/login.html",
				controller: 'myLoginController',
				caseInsensitiveMatch: true
			})
	
}])

app.controller('myHomeController', ['$scope','$stateParams', function($scope,$stateParams){
			$scope.ID1="This is the id =" + $stateParams.ID;
	
}])
app.controller('myRegController', ['$scope', function($scope){
			$scope.Name="This is the name=";
}])

app.controller('myLoginController', ['$scope','$stateParams', function($scope,$stateParams){
			$scope.userName="This is the username=" + $stateParams.UserName;
			$scope.Pass="This is the password=" + $stateParams.Password;
}])