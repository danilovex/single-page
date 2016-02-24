/*global app*/
'use strict';

app.controller('FourCtrl', ['$rootScope', '$location', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
}]);
