alegra.directive('userContact', [function() {
  return {
    restrict: 'E',
    scope:{
      name: '@',
      img: '@',
      id: '@'
    },
    template:'<a class="item item-avatar" href="#/details/\{{id}}\"> <img src="./img/user-4.png"> <h2>{{name}}</h2></a> '
  };
}]);
