/** @ngInject */
angular.module('app').config(['$mdThemingProvider', '$mdIconProvider', themeConfig]);
function themeConfig($mdThemingProvider) {
  var customPrimary = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#FFFFFF',
        '600': '#f2f2f2',
        '700': '#e6e6e6',
        '800': '#d9d9d9',
        '900': '#cccccc',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#bfbfbf'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);
                        
                        $mdThemingProvider.theme('white')
       .primaryPalette('customPrimary');
}

