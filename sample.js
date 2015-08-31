/* global angular */

angular.module("google-chart-sample", ["googlechart"]).value('googleChartApiConfig', {
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
