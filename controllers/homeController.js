hackerHack.controller("homeController", ['$scope', '$http', '$window', '$timeout', '$location', '$anchorScroll',
    '$stateParams', '$state',
    '$filter',
    function ($scope, $http, $window, $timeout,
        $location, $anchorScroll, $stateParams,
        $state, $filter) {
       
        console.log('home controller');

      $scope.quantity = 3; 
  

        $http.get("http://vini26.freeasphost.net/userevent/getallevent/").then(function(response) {
        console.log(response);  
        $scope.myData = response.data;
        });
        
		/* activate scrollspy menu */  
		$(document).ready(function()
    {

      $( "#fromdatepicker" ).datepicker();
      $( "#todatepicker" ).datepicker(); 

      $('.detailsBadge badge').on('click',function()
      {
          alert('sdf');
          var $ans = $(this).next(".eventDetails");
          if($ans){
            $ans.slideToggle(); //toggle the current one  
          }
          else{
           $ans.slideUp(); 
          }
          
      });


      // $('#myCarousel').bind('slide.bs.carousel', function (e) {
      //   console.log('slide event!');
      // });

      // $('#myCarousel').bind('slid', function (e) {
      //   console.log("slid event!");
      // });

    });
       

    }
]);





