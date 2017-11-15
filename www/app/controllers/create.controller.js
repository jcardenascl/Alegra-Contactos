alegra.controller('modal', function($scope, $ionicModal, contactService,  $ionicLoading) {
  $ionicModal.fromTemplateUrl('app/templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
      $scope.newTaskModal = modal;
  });

  $scope.openModal = function () {
    $scope.newTaskModal.show();
  }
  $scope.closeModal = function () {
    $scope.newTaskModal.hide();
  }
  $scope.showLoading = function() {
    $ionicLoading.show({
      template: 'Añadiendo Nuevo Contacto...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  $scope.hideLoading = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };

  $scope.new = {};
  $scope.createNew =  function() {
    $scope.showLoading();
    contactService.save($scope.new).then(function(msg) {
      console.log(msg);
      $scope.new = {};
      $scope.newTaskModal.hide();
      $scope.getcontacts();
      $scope.hideLoading();
    });
  }

})