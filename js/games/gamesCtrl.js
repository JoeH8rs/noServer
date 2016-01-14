angular.module('dojoApp')
.controller('gamesCtrl', function($scope){
    
    $scope.todos = [
        {title: 'Sam', done: false}
    ];
    
    $scope.addTodo = function(){
        $scope.todos.push({title: $scope.newTodo, done: false})
        $scope.newTodo = ''
    }
    
    $scope.clearCompleted = function(){
        $scope.todos =$scope.todos.filter(function(item){
            return !item.done
        })
    }
    
    $scope.randomEvent = function() {
        console.log('Running Randomizer')
       	var rand = $scope.todos[Math.floor(Math.random() * $scope.todos.length)];
           console.log(rand.title);
           $scope.randomTodo = rand.title
           return ' ' + rand.title
          
    }


});


