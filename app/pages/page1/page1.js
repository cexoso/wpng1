import angular from "angular";


angular.module('app').controller("AccordionDemoCtrl", ["$scope", "$uibModal",($scope,$uibModal) => {
    $scope.oneAtATime = true;
    $scope.groups = [{
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
    }, {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
    }];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function () {
        const newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
	console.log($uibModal)
	$scope.open = function () {
		$uibModal.open({
			animation: true,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: '<h1>hello</h1>',
			controller: 'ModalInstanceCtrl',
			size: "small",
			resolve: {
				items() {
					return 111;
				}
			}
		})
	}
}]).controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
	console.log(123123123)
  const $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
