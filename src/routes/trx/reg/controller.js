module.exports = function reg($scope, $window, $http) {
  $("#formReg").submit(function(event) {
    // console.log('axios registrasi');
    event.preventDefault();
    $scope.loading = true;
    $http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.getItem('token');
    var config = {}
    // console.log($http.defaults.headers);
    $http.get('/api/trxreg.json', config).then(successCallback, errorCallback);

    function successCallback(response) {
      var param = {};
      param.message = response.data.msg;
      $.notify(param, {
          type: 'success',
          animate: {
            enter: 'animated flipInY',
            exit: 'animated flipOutX'
          }
        });
      $scope.loading = true;
    }

    function errorCallback(response) {
      var param = {};
      console.log(response);
      if(response.status == -1){
        param.message = 'Lose Connection!';
        $.notify(param, {
          type: 'danger',
          animate: {
            enter: 'animated bounceIn',
            exit: 'animated bounceOut'
          }
        });
      } else{
        param.message = response.statusText
        $.notify(param, {
          type: 'danger',
          animate: {
            enter: 'animated bounceIn',
            exit: 'animated bounceOut'
          }
        });
      }
    }
    return false;
  });
}