'use strict';
angular.module('templateApp').controller('addProjectModalCtrl', function($scope, $http,$uibModalInstance,Notification) {
    console.log("Inside addProjectModalCtrl controller");

    //new project object.
    $scope.newProject = {
        name: "",
        url:"",
        description: "",
        skills:[]
    };

    //Skill object.
    $scope.newSkill = {
        name: "",
    };

    // function to cancel and close the modal.
    $scope.cancel = function(){
        $uibModalInstance.close();
    }

    //function to add a new project skill.
    $scope.addNewSkill = function(){
        console.log("Inside $scope.addNewSkill function");
        if($scope.newSkill.name){
            $scope.newProject.skills.push($scope.newSkill.name);

            //reset again.
            $scope.newSkill.name = "";
        }   
    }

    $scope.addNewProject = function(){
        console.log("Inside addNewProject function");
        console.log("projectinfo: " , $scope.newProject);

        if( $scope.newProject.name && $scope.newProject.description ){
            console.log("$scope.newProject: " , $scope.newProject)
            $http.post('/admin/addNewProject' , $scope.newProject).then(function(response){
                //notification.
                if(response.data.success){
                    Notification.success("New Project added Successfully");
                    $scope.cancel();
                }else{
                    Notification.error("Error happened in the server side")
                }
                
            },function(err){
                //notification.
                Notification.error("Error happened in the server side")
                console.error(err);
            })
        }else{
            //notifications.
            Notification.warning("There are some missing project information");
        }



    }

});