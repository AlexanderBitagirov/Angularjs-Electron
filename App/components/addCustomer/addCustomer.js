function addCustomer($scope, $rootScope, $mdDialog) {
    $scope.showDialogReg = function(ev) {
        $mdDialog.show({
          templateUrl: "./components/addCustomer/addCustomerDialog.html",
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          scope: $scope,
          preserveScope: true
        });
      };
}

angular.module("MyApp").component("customerAdd", {
    templateUrl: "./components/addCustomer/addCustomer.html",
    controller: addCustomer,
    bindings: {
        
    }
});