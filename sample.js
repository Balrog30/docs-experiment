/* global angular */

angular.module("google-chart-sample", ["googlechart", "googlechart-docs"]).value('googleChartApiConfig', {
    version: '1',
    optionalSettings: {
        packages: ['corechart', 'gauge'],
        language: 'fr'
    }
})
.config(['$interpolateProvider', function($interpolateProvider){
    $interpolateProvider.startSymbol('!!');
    $interpolateProvider.endSymbol('!!');
}]);
