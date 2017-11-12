
hackerHack.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
			url: '/home',
			controller : 'homeController',
			templateUrl : 'templates/home.html'
		
	})
	$stateProvider.state('login',{
			url: '/login',
			controller : 'loginController',
			templateUrl : 'templates/login.html'
		
	});
	// $stateProvider.state('languages',{
	// 		url: '/languages',
	// 		// controller : 'languagesController',
	// 		controller : 'userController',
	// 		templateUrl : 'templates/languages.html'
		
	// });
	
	$urlRouterProvider.otherwise('/login');
 });


	// $(document).ready(function(){
	// 	$('.userProfile').click(function(){
	// 		$('.arrowBox').slideToggle("slow");
	// 	});
	// });

	
