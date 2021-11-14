(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.inputMessage = "";
  $scope.msg = "";

  $scope.sayMessage = function() {
      if ($scope.inputMessage!== ""){
          if ($scope.inputMessage.split(',').length > 3) {
          $scope.msg = "too much brotha";
      }
          else {
              $scope.msg = "bon appetit";
          }
      }
      else {
          $scope.msg = "please input something";
      }
      
    return $scope.msg;
  }
}

})();
