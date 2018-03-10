angular.module('angular-walk').controller('kylesController', function($scope) {
    
    $scope.count = 0;
    $scope.addOne = function() {
        $scope.count++;
    };
    $scope.minusOne = function() {
        $scope.count--;
    };
    $scope.reset = function() {
        $scope.count=0;
    }
});