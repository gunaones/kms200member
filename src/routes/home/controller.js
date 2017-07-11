module.exports = function home($scope, $window) {
	console.log('axios dashboard');
	$scope.sessmid = $window.sessionStorage.getItem('sessmid');
}