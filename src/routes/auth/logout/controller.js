module.exports = function login($scope, $window) {
	// clear token
	console.log('axios delete token');
	console.log("clear Token");
	// Remove saved data from sessionStorage
	$window.sessionStorage.removeItem('token');
	location.hash = "auth/login";
}