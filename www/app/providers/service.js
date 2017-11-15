alegra.service('contactService', function($http, ApiConnect) {
    var URL = 'https://app.alegra.com/api/v1/contacts/';
    var config = {
      'headers': {
        'accept' : 'application/json',
        'content-type' : 'application/json',
        'Authorization': 'Basic ' + btoa(ApiConnect.email+':'+ApiConnect.token)
      }
    }

    this.Getall = function() {
      return $http.get(URL, config).then(function(response) {
          var ContactosString = response.data;
          if(ContactosString.length !== 0) {
            return (angular.fromJson(ContactosString));
          }
          return ({error: 'No existen contactos'});
        }, function(response) {
          return response.data || 'Request failed';
        });
    };
    this.GetOne = function(id) {
      return $http.get(URL+id, config).then(function(response) {
        var ContactNew = response.data;
        return (angular.fromJson(ContactNew));
      }, function(response) {
        return response.data || 'Request failed';
      });
    };
    this.save = function(NewContact) {
      return $http.post(URL, NewContact, config).then(function(response) {
        var ContactNew = response.data;
        return (angular.fromJson(ContactNew));
      }, function(response) {
        return response.data || 'Request failed';
      });
    };
    this.remove = function(id) {
      return $http.delete(URL+id, config).then(function(response) {
        var ContactNew = response.data;
        return (angular.fromJson(ContactNew));
      }, function(response) {
        return response.data || 'Request failed';
      });
    };

    // Funcion para para editar el contacto.
    // this.put = function(params) {
    // };

});
