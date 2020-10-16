angular.module('ceShop').
config(['$routeProvider', function config($routeProvider) {
    $routeProvider.when('/', {
            template: '<hybrid-app></hybrid-app>'
        }).otherwise('/');
    }
]);