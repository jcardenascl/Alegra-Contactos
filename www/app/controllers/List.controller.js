alegra.controller('ListController', function($scope, contactService, $ionicLoading, orderByFilter) {
  //initialize the contacts scope with empty array
  $scope.contacts = [];
  $scope.sortByName = 'name';
  $scope.NotFound = false; 
  $scope.loading = true;

  // Con esta funcion solicitamos a nuestro servicio los Contactos
  $scope.getcontacts =  function() {
      contactService.Getall().then(function(rsp) {
        if (rsp.error) {
          $scope.NotFound = true;
          $scope.loading = false;
          
        } else {
          $scope.contacts = orderByFilter(rsp, 'name', false );
          $scope.loading = false;
        }
      });
  }
  // Aqui ordenamos la lista por "name" y por "id"
  $scope.sortToggle = function(rsp) {
    $scope.loading = true;
    var ordenadoPor;
    if ($scope.sortByName === 'name'){
      $scope.sortByName = 'id';
      ordenadoPor = 'Id';
    }else {
      $scope.sortByName = 'name';
      ordenadoPor = 'Nombre';
    }
    var array = $scope.contacts;
    $scope.contacts = orderByFilter(array, $scope.sortByName, false );
    $scope.loading = false;
    $ionicLoading.show({ template: 'Lista ordenada por '+ ordenadoPor, noBackdrop: true, duration: 2000 });
  };
});


