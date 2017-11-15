alegra.controller('ListController', function($scope, contactService, $ionicLoading, orderByFilter, $ionicScrollDelegate) {
  //initialize the contacts scope with empty array
  $scope.contacts = [];
  $scope.contacts10 = [];
  $scope.sortByName = 'name';
  $scope.NotFound = false; 
  $scope.loading = true;
  $scope.barSearch = false;
  $scope.moredata = false;
  $scope.search ='';

  // Con esta funcion solicitamos a nuestro servicio los Contactos
  $scope.getcontacts =  function() {
      return contactService.Getall().then(function(rsp) {
        if (rsp.error) {
          $scope.NotFound = true;
          $scope.loading = false;
          
        } else {
          $scope.contacts = [];
          $scope.contacts10 = orderByFilter(rsp, 'name', false );
          if ($scope.contacts10.length > 10) {
            for (let c = 0; c < 10 ; c++) {
              $scope.contacts.push($scope.contacts10[c]);
            }
            $scope.moredata = true;
          }else{
            $scope.contacts = $scope.contacts10;
          }
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
  $scope.ToggleBar = function(rsp) {
    ($scope.barSearch) ? $scope.barSearch = false : $scope.barSearch = true;
    $scope.search ='';
  };
  $scope.doRefresh = function(refresher) {
    $scope.getcontacts().then(function(rsp) {
      $scope.$broadcast('scroll.refreshComplete');
    });
  }
  $scope.loadMore = function() {
    var next = $scope.contacts.length;
    var more = parseInt(next)+10;
    for (let c = next; c < more ; c++) {
      if ($scope.contacts10[c]) {
        $scope.contacts.push($scope.contacts10[c]);
      }
      if ($scope.contacts10.length === $scope.contacts.length) {
        $scope.moredata = false;
      }
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
});


