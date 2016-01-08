angular.module('dojoApp')
.service('basketballService', function($firebaseObject, $firebaseArray){
var url = 'https://basketballplayers.firebaseio.com/';

this.getPlayers = function(){
    var ref = new Firebase(url+ 'players')
      return $firebaseArray(ref);
  }

  this.getPlayer = function(playerID) {
  var ref = new Firebase(url+ 'players/'+ playerID)
  return $firebaseObject(ref);
}

  this.addPlayer = function(newPlayer) {
      var ref = new Firebase(url+ 'players')
      return $firebaseArray(ref).$add(newPlayer);
    }

this.deletePlayer = function(playerID) {
    var ref = Firebase(url+ 'players/'+ playerID)
}

})
