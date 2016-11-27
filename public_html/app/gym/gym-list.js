angular
        .module('app')
        .component('gymList', {
            templateUrl: 'app/gym/gym-list.html',
            controller: gymListCtrl
        });

function gymListCtrl() {
    var $ctrl = this;

    $ctrl.arrayData = [
        {src: './app/img/item4.jpg'},
        {src: './app/img/item3.jpg'},
        {src: './app/img/item2.jpg'}
    ];
}

