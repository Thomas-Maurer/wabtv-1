app.controller('adminWabTV', ['$scope','$state', '$http', '$q', function($scope, $state, $http, $q) {
  $scope.goToProgAdmin = function () {
    $state.go('adminProg');
  }
}]);
