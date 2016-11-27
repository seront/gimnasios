angular
        .module('app')
        .component('gymMap', {
            templateUrl: 'app/gym/gym-map.html',
            controller: gymMapCtrl,
            bindings: {
                visible: "<"
            }
        });

function gymMapCtrl(uiGmapGoogleMapApi, uiGmapIsReady, $timeout, $scope) {
    var $ctrl = this;
    $ctrl.control = {};
    
    uiGmapGoogleMapApi.then(function (maps) {
        console.log("El mapa esta listo");
        $timeout(function () {
            console.log("");
        }, 0, true);
    });
    
    $ctrl.mapOptions = {
        center: {latitude: 41.404957,
            longitude: 2.128507},
        zoom: 15
    };
    
    $scope.$watch("$ctrl.visible", function (newValue, oldValue) {
        if (newValue === true) {
            console.log("si entro");
            uiGmapIsReady.promise().then(function (maps) {
                $ctrl.control.refresh();
            });
        }
    });
}
