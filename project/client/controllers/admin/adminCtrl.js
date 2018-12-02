'use strict';
angular.module('templateApp').controller('adminCtrl', function($scope, $http, ModalService) {
    console.log("Inside adminCtrl controller");
    
    // function to open a modal to can add new project to your portfolio.
    $scope.openProjectModal = function(){
        console.log("Inside openProjectModal function");


        $scope.projectModalInstance =  ModalService.open({
            templateUrl: 'views/admin/add_project_modal.html' ,
            controller: 'addProjectModalCtrl',
            size: 'lg'
        })


    }

    
});