angular.module("starter")
.controller('MainCtrl', function($scope, $log, $location) {
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
})
.controller('HomeCtrl', function($scope, $log, API) {

	API.TASK.get(function(response){
        $log.info("PETITIONS RECEIVED:: ", response);
        $scope.petitions = response.Petition;
		console.log(response);
    }, function(error) {
        $log.error(error);
    })
})
.controller('StartCtrl', function($scope, $log, API) {
	$scope.stat = function(){
		console.log("inside scope")
		API.TASK.save({'petitionstartdate':$scope.petitionstartdate, 'petitiontitle':$scope.petitiontitle,'petitionsubtitle':$scope.petitionsubtitle,'petitionbackstory':$scope.petitionbackstory,'petitionwhy':$scope.petitionwhy,'petitionprooflink':$scope.petitionprooflink,'petitionlocation':$scope.petitionlocation,'petitionthreshold':$scope.petitionthreshold}, function(response){
			$log.info("PETITIONS RECEIVED:: ", response);
			$scope.res=response;
		}, function(error) {
        $log.error(error);
		$scope.res=error;
	})
	}
})

.controller('PetitionCtrl', function($scope, $log, API) {

	API.TASK.get(function(response){
        $log.info("PETITIONS RECEIVED:: ", response);
        $scope.petitions = response.Petition;
		console.log(response);
    }, function(error) {
        $log.error(error);
    })
});
