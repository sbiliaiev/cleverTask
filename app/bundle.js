'use strict'
var APPLICATION_ID = '126803CF-FA11-0A0F-FF7F-41CBD2BAE200';
var SECRET_KEY = 'A26FE2D3-F016-D321-FF6D-60F332640700';
var VERSION = 'v1';

Backendless.serverURL = "https://api.backendless.com";
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

var app = angular.module('app', [
    'ui.router',
    'app.login',
    'app.register'
])
    .controller('MainCtrl', ['$scope', function($scope) {
        console.log('its main controller');
    }]);

var login = angular.module('app.login', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
    		.state('login', {
    			url: '/login',
    			templateUrl: 'components/login/login.html',
    			controller: 'LoginCtrl'
    		});
    }])
    .controller('LoginCtrl', ['$scope', function($scope) {
        console.log('its login controller');
    }]);

// var registration = angular.module('app.registration', ['ui.router'])
//
//     .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
//         $stateProvider
//             .state('registration', {
//                 url: '/registration',
//                 templateUrl: 'components/registration/registration.html',
//                 controller: 'RegistrationCtrl'
//             });
//     }])
//     .controller('RegistrationCtrl', ['$scope', function($scope) {
//         console.log('its registration controller');
//     }]);


var login = angular.module('app.register', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
    		.state('register', {
    			url: '/register',
    			templateUrl: 'components/register/register.html',
    			controller: 'RegisterCtrl'
    		});
    }])
    .controller('RegisterCtrl', ['$scope', function($scope) {
        console.log('its registration controller');
    }]);
