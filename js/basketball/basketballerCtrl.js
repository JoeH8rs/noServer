angular.module('dojoApp')
.controller('basketballerCtrl', function($scope, $stateParams, basketballService){

var currentPlayerID = $stateParams.playerID;

$scope.player = basketballService.getPlayer(currentPlayerID);
console.log($scope.player);
})
