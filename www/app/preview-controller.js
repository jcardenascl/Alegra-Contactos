angular.module('vardyger')
.controller('PreviewController',
  function(
    $scope,  // inject the $scope service
    post     // inject the resolved post data
  ) {
    $scope.item = posts;
  });