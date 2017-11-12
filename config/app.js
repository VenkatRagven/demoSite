var hackerHack = angular.module("hacker",['ui.router']);

hackerHack.filter('monthFormat', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; } 
        var _date = $filter('date')(new Date(input), 'MMM');
            return _date.toUpperCase();
    };
}); 

hackerHack.filter('dateFormat', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; } 
        var _date = $filter('date')(new Date(input), 'dd');
            return _date.toUpperCase();
    };
}); 

