app.controller('OneCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
