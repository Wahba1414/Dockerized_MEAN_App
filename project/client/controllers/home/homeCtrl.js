'use strict';
angular.module('templateApp').controller('homeCtrl', function($scope, $http,Notification) {
    console.log("Inside homeCtrl controller");

    $scope.projects = [];

    //function to get all projects.
    $scope.getAllProjects = function(){
        console.log("Inside $scope.getAllProjects function");

        $http.get('/admin/getAllProjects').then(function(response){
            //notification.
            if(response.data.success){
                $scope.projects = response.data.projects;
            }else{
                Notification.error("Error happened in the server side")
            }
            
        },function(err){
            //notification.
            Notification.error("Error happened in the server side")
            console.error(err);
        });        
    };

    //Get all projects.
    $scope.getAllProjects();


});