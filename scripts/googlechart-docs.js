/* global angular */
(function(){
    angular.module('googlechart-docs', ['ui.bootstrap'])
        .controller('HeaderController', HeaderController);
        
    function HeaderController(){
        var self = this;
        self.collapsed = true;
    }
        
})();