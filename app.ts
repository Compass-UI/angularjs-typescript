
let module = angular.module('ccApp', [
  'shopping',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap'
]);

module.run(function($rootScope){
  $rootScope.state = {}
})


module
.controller('modalController', ['$scope', '$uibModal', function($scope, $uibModal) {
  var that = this;
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
  $scope.openModal = function(){
    var modalInstance = $uibModal.open({
      templateUrl: 'modal.tmpl.html',
      controllerAs: '$ctrl',
      controller: function(){

      },
      resolve: {
        traveler: function(){
          return {
            // that.user
          }
        }
      }
    })
  }
}])
.directive('modalDirective', function() {
  return {
    template: '<button ng-click="openModal()">openModal</button>',
    controller: 'modalController'
    
  };
});


module.component("herosComponent", {
    template: `
      <ul>
        <li ng-repeat="hero in $ctrl.heros">{{ hero.name }}</li>
      </ul>
      <shopping-component />
    `,
    controller: function() {
      this.heros = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ];
    },
    controllerAs: "$ctrl"
  });
  

angular.element(document).ready(function() {
    angular.bootstrap(document, ["ccApp"]);
});
  