angular.module("starter")
.factory('API', function($resource) {
    return {
        TASK: $resource("http://localhost:8000/petition/")
    }
});
