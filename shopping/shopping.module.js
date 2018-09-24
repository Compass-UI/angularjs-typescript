angular.module('shopping', [])
    .component('shoppingComponent', {
    templateUrl: "./shopping/shopping.tmpl.html",
    controllerAs: 'shopping',
    controller: function ($rootScope) {
        this.showState = function () {
            console.log($rootScope.state);
        };
        this.setState = function (_a) {
            var value = _a.key;
            // TODO: destruct this object
            // Object.asssign - does not work in TS
            // $rootScope.state.key = value
            $rootScope.state.name = 'David Shams';
        };
        this.getState = function (key) {
            // return `${$rootScope.state}.${key}`
            console.log($rootScope.state);
        };
    }
});
