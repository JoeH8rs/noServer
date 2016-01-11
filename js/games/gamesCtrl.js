angular.module('dojoApp')
.controller('gamesCtrl', function($scope){
    
$scope.todos = [
    {'title': 'Things I have to Do', 'Done':false}
    ];
    $scope.addTodo = function(){
        $scope.todos.push({'title': $scope.newTodo, 'done': false})
        $scope.newTodo = ''
    }
    $scope.clearCompleted = function(){
        $scope.todos =$scope.todos.filter(function(item){
            return !item.done
        })
    }
    


});


