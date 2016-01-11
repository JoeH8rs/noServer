angular.module('dojoApp')
.controller('basketballerCtrl', function($scope, $stateParams, basketballService){

var currentPlayerID = $stateParams.playerID;
$scope.removePlayer = currentPlayerID;

$scope.player = basketballService.getPlayer(currentPlayerID);
console.log($scope.player);




$scope.removeOldPlayer = function(removePlayer) {
    basketballService.deletePlayer(removePlayer);
    console.log('HOLA');
  }
  
  
  
  
  
})
