app.factory('wizard', ['$http', function($http) {
  return $http.get('restrictions.txt')
        .success(function(data) {
              return data;


        })
            .error(function(err) {
              return err;
            });
}]);

app.factory('file', ['$http', function($http){

return $http.get('http://127.0.0.1:8083/generatefile.fodt')
        .success(function(data) {
            return data;


        })
            .error(function(err) {
              return err;
            });


}])
