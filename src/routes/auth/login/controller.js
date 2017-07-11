module.exports = function login($scope, $window, $http) {
	$("#formLogin").submit(function(event) {
		event.preventDefault();

		console.log('axios login');
		$scope.loading = true;
		// $http.defaults.headers.common.Authorization = 'Bearer ' + $window.sessionStorage.getItem('token');
		var config = {}
			// console.log($http.defaults.headers);
		$http.get('/api/login.json', config).then(successCallback, errorCallback);

		function successCallback(response) {
			$scope.profile = response.data;

			console.log('store token');
			// Save data to sessionStorage
			$window.sessionStorage.setItem('token', response.data.token);

			if ($window.sessionStorage.getItem('token') !== null) {
				$window.sessionStorage.setItem('sessmid', response.data.mid);

				location.hash = "home";
			}
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


		// console.log(config);
		return false;
	});
}