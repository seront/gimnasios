angular
  .module('app')
  .component('app', {
    templateUrl: './app/main.html',
    controller: mainCtrl
  });

function mainCtrl($mdMedia, $scope){
    var $ctrl = this;
    
    $ctrl.listVisible = true;
    
    var chechSize = function(){
        if ($mdMedia("gt-xs")) {
        $ctrl.mapVisible = true;
        $ctrl.listVisible = true;
    }else if ($mdMedia("xs")){
        $ctrl.mapVisible = false;
        $ctrl.listVisible = true;
    }else if($mdMedia('lg') === true || $mdMedia('gt-lg')){
        $ctrl.mapVisible = true;
        $ctrl.listVisible = true;
    }
    };
    
    $scope.$watch(function() { return $mdMedia('lg'); }, function(big) {
       chechSize();
  });
    $scope.$watch(function() { return $mdMedia('xs'); }, function(big) {
       chechSize();
  });
    $scope.$watch(function() { return $mdMedia('gt-xs'); }, function(big) {
       chechSize();
  });
  
    $ctrl.toogleMap = function(){
        if ($ctrl.mapVisible === true) {
            $ctrl.mapVisible = false;
            $ctrl.listVisible = true;
        }else{
            $ctrl.mapVisible = true;
            $ctrl.listVisible = false;
        }        
    };

    
}