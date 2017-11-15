alegra.controller('DetailsController', function($scope, $ionicModal, contactService, $stateParams, $ionicPopup, $state, $ionicLoading) {
  
  $scope.person = [$stateParams.id];
  $scope.showLoading = function(text) {
    $ionicLoading.show({
      template: text
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  $scope.hideLoading = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };

  $scope.getContact =  function() {
    $scope.showLoading('Cargando...');
    contactService.GetOne($scope.person).then(function(One)  {
      $scope.contact =  One;
      console.log($scope.contact);
      $scope.hideLoading();
    });
  }
  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Eliminar',
      template: 'Esta seguro que desea eliminar a ' + $scope.contact.name + ' ?',
      cancelText: 'Cancelar',
      okText: 'OK'
    });
 
    confirmPopup.then(function(res) {
      if(res) {
        $scope.showLoading('Eliminando...');
        console.log('You are sure');
        contactService.remove($scope.person).then(function(rsp) {
          if(rsp.code === 200){
            $scope.hideLoading();
            $ionicLoading.show({ template: rsp.message, noBackdrop: true, duration: 2000 });
            $state.go('home');
          }else{
            $scope.hideLoading();
            $scope.showAlert('Error Inesperado', rsp.message);
          }
        });
      } else {
        console.log('You are not sure');
      }
    });
  };
  $scope.showAlert = function(Title, template) {
    var alertPopup = $ionicPopup.alert({
      title: Title,
      template: template
    });
  };
});
