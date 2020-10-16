export const hybridApp = angular.module('ceShop')
.component('hybridApp', {
    template: require('raw-loader!./hybrid-app.component.html').default,
    bindings: { full_name: '@' },
    controller: [function HybridAppController() {
        var vm = this;
        console.log('logged');
    }]
});