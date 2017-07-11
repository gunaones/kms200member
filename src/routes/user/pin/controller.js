module.exports = function pin($scope, $window, $http) {
	$("#formGantipin").submit(function(event) {
		event.preventDefault();
		console.log('axios gantipin');

		$scope.loading = true;
		$http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.getItem('token');
		// $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};

		var config = {}
			// console.log($http.defaults.headers);
		$http.get('/api/gantipin.json', config).then(successCallback, errorCallback);

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
			if (response.status == -1) {
				param.message = 'Lose Connection!';
				$.notify(param, {
					type: 'danger',
					animate: {
						enter: 'animated bounceIn',
						exit: 'animated bounceOut'
					}
				});
			} else {
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