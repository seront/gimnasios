angular
        .module('app')
        .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
//  $locationProvider.html5Mode(false).hashPrefix('!');
    $urlRouterProvider.otherwise(function () {
        console.log("otherwise");
        return '/';
    });

    $stateProvider
            .state('app', {
                url: '/',
//      component: 'app'
                template: '<app></app>'
            });
}