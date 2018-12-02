'use strict';

//
angular.module('templateApp').config(function ($stateProvider,$urlRouterProvider) {
  console.log("Inside navigation_tabs_routes");

  $stateProvider
  .state('app', {
    url: '/portfolio', //Give the base state a path. it makes there is no state for bare url so will go to the default starter.
    templateUrl: 'views/header.html',
    // controller: 'homeCallLogsCtrl'
  })

  .state('app.home', {
    url: '/home',
    // template: '<div>samir</div>'
    templateUrl: 'views/home/home.html',
    controller: 'homeCtrl'
  })

  .state('app.admin', {
    url: '/admin',
    templateUrl: 'views/admin/admin.html',
    controller: 'adminCtrl'
  })



  // default starter route of this app.
  $urlRouterProvider.otherwise('/portfolio/home');



});