'use strict';

/**
 * Controllers
 */

angular.module('myApp.controllers', [])
.controller('HomeCtrl', function($scope, socketFactory) {
    
    $scope.testValues = '';
    
    $scope.submitTest = function() {
        
        //send test to server
        socketFactory.emit('test', $scope.testInput);
    }
    
    socketFactory.on('test', function(value) {
        
        console.log('got test from Server');
        
        $scope.testValues += value;
    })
});