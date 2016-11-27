angular
  .module('app', ['ui.router', 'ngMaterial', 'uiGmapgoogle-maps', 'jkAngularCarousel']);
  
  angular.module('app').config(["uiGmapGoogleMapApiProvider", mapConfig]);

function mapConfig(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}
