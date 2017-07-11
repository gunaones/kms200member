'use strict';

// import angular from 'angular';
// var angular = require("gzip-loader!angular/angular.min.js.gzip");
// import Lazy from 'lazy.js';
// var $ = require("jquery");

var config = {
	appname : "kms"
}

var routes = {};
var defaultRoute = 'home';

require.context('./routes', true, /\.js$/).keys().forEach( function(file, index) {
	if (file.match(/controller\.js$/) !== null) {
		var name = file.replace('/controller.js', '').replace('./', '');
		// console.log(file);
		// console.log(file.replace('./', './routes/'));
		// console.log(name);
		routes[name] = require("./routes/"+name+"/controller.js");
		routes[name+'view'] = require("html-loader!./routes/"+name+"/view.html");
	}
});


window.onhashchange = myonhashchange;



function myonhashchange() {
	// Get saved data from sessionStorage
	var token = window.sessionStorage.getItem('token');
	if(token == null){
		var token = 0;
	}
	$(".sessmid").html(window.sessionStorage.getItem('sessmid'))
	
	// 
	var route = location.hash ? location.hash.replace("#", "") : defaultRoute;
	if(routes.hasOwnProperty(route)==false){
		console.log("Undefined Route!");
		return false;
	}

	if(token === 0){
		$(".navbar").hide();
		route = "auth/login";
		// location.hash = "auth/login";
	}else{
		// window.sessmid = "12345";
		$(".navbar").show();
	}
	$('.loading').show();

	var t = routes[route+"view"];
	$('#container').html('<div id="myModule" ng-controller="myController">' + t + '</div>');

	var app = angular.module('myModule', []);
        app.controller('myController', routes[route] );
    var aElement = angular.element(document.querySelector('#myModule'));
    aElement.ready(function() {
        app.run();
        angular.bootstrap(aElement, ['myModule']);
        $('.loading').hide();
    });
}

myonhashchange();


$('.nav a').click(function(event) {
	$('.nav li').removeClass('active');
	if($(this).parent('li').parents('li').length){
		$(this).parent('li').parents('li').addClass('active');
	}else{
		$(this).parent('li').addClass('active');
	}
});