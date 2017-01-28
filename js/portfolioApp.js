var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'ngAnimate']);

//routes
portfolioApp.config(function($routeProvider) {
	
	$routeProvider
	.when("/nextpage", {
		templateUrl: 'pages/nextpage.html',
		controller: 'nextpageController'
	})

	.when("/",{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

});

//services
//service to share data between the two views
portfolioApp.service('sharedService', ['$scope', function(){

	this.sharedData = "Shared stuff";

}]);

//directives
portfolioApp.directive('setClassWhenAtTop', function ($window) {
  var $win = angular.element($window); // wrap window object as jQuery object

  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
          offsetTop = element.offset().top; // get element's offset top relative to document

      $win.on('scroll', function (e) {
        if ($win.scrollTop() >= offsetTop) {
          element.addClass(topClass);
        } else {
          element.removeClass(topClass);
        }
      });
    }
  };
});

portfolioApp.directive('scrollTo', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {

                var target = $(attrs.scrollTo);
                if (target.length > 0) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    });
                }
            });
        }
    }
});

//controllers
portfolioApp.controller('mainController', ['$scope','sharedService', function($scope, sharedService){
	
	$scope.sharedData = sharedService.sharedData; //pull shared data

	//if data changes update, this is the use of $watch
	$scope.$watch('sharedData', function(){
		sharedService.sharedData = $scope.sharedData;
	});



}]);

portfolioApp.controller('nextpageController', ['$scope','sharedService', function($scope, sharedService){
	
	$scope.sharedData = sharedService.sharedData;
	





}]);




