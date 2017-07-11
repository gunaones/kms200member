module.exports = function profile($scope, $window, $http) {
	// console.log('axios get profile');
	$scope.loading = true;
	$http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.getItem('token');
	var config = {}
	// console.log($http.defaults.headers);
	$http.get('/api/profile.json', config).then(successCallback, errorCallback);

	function successCallback(response) {
		$scope.profile = response.data;
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
}