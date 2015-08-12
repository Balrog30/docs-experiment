/* global angular */

angular.module("google-chart-sample", ["googlechart"]).value('googleChartApiConfig', {
            version: '1',
            optionalSettings: {
                packages: ['corechart', 'gauge'],
                language: 'fr'
            }
    });
