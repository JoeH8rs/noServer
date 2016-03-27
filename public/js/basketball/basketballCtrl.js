angular.module('dojoApp')
.controller('basketballCtrl', function($scope, basketballService){

  $scope.players = basketballService.getPlayers();

  $scope.createNewPlayer = function(newPlayer) {
    basketballService.addPlayer(newPlayer);
  }
  });
