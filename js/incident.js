
var app1 = angular.module('app1', ['angular.filter']);

app1.controller('ctrl1', function($scope,$http) {

  $scope.search = function() {
    var loc = $scope.loc;
    var incType = $scope.incType;

    $http.get('https://bikewise.org:443/api/v2/locations/markers?incident_type='+incType+'&proximity='+loc+'&limit=50').then(function(response){
      console.log("success");
      $scope.result = response.data.features;
      //alert($scope.result.type);


    });


    $http.get('https://bikewise.org:443/api/v2/locations?proximity='+loc+'&limit=50').then(function(response){
      console.log("success");
      $scope.summaryResult = response.data.features;
      //alert($scope.summaryResult[0].properties.type);


    });

  };

  $scope.getDate =  function() {

//console.log($scope.summaryResult);
var res = $scope.summaryResult;
var maxDate = res[0].properties.occurred_at;
    for (var i = 0; i < res.length; i++){
    var obj = res[i].properties.occurred_at;
    if(obj>maxDate)
    {
      maxDate = obj;
    }
}
console.log(maxDate);
return maxDate;
  //  var dateArr = a.split(" ");
  //  console.log(dateArr[0]);
  };
});
