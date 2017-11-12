hackerHack.controller("loginController", ['$scope', '$http', '$window', '$timeout', '$location', '$anchorScroll',
    '$stateParams', '$state',
    '$filter',
    function ($scope, $http, $window, $timeout,
        $location, $anchorScroll, $stateParams,
        $state, $filter) {

        console.log('loading login controller');
		
		 
		$('.signUpBtn').click(function(){
			$('#loginbox').hide();
			$('#signupbox').show();
		})

		$('.signIn').click(function(){
			$('#signupbox').hide();
			$('#loginbox').show();
		});	
        

    }
]);





