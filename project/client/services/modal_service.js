'use strict';
angular.module('templateApp')
  .factory('ModalService', function ($uibModal) {
    var modalService = {
      open: function (options) {
        var modalOptions = {
          templateUrl: options.templateUrl,
          controller: options.controller,
          backdrop:  'static',
          keyboard: (options.keyboardDisabled) ? false : true
        };
        
        if (options.size) {
          modalOptions.size = options.size;
        }

        var modalInstance = $uibModal.open(modalOptions);
        return modalInstance;
      }
    };

    return modalService;
  });
