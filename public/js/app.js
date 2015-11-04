'use strict';

/**
 * App
 */

angular.module('myApp', [
    'ngRoute',
    
    'myApp.controllers',
    'myApp.services'
])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home',
        controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
        
    $locationProvider.html5Mode(true);
});