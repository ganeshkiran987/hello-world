var LWSSR = angular.module('LWSSRTool', []);

LWSSR.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

LWSSR.controller("DashBoardController", function($scope, $http) {

            $scope.plot_graph_with_user_data = function(data){
                 $('#container_user').highcharts({
                   title: {
                       text: 'No of Users Requested SSR'
                   },

                   subtitle: {
                       text: data.user_dates
                   },

                   yAxis: {
                     title: {
                       text: 'users'
                     }
                   },

                   xAxis: {
                       categories: data.user_string_dates
                   },

                   series: [{
                       name: 'Users',
                       color: 'orange',
                       data: data.graph_user
                   }]
                 });

            }

            $scope.plot_graph_with_execution_data = function(data){
                $('#container_execution').highcharts({
                  title: {
                      text: 'No of Executions'
                  },

                  subtitle: {
                      text: data.exe_dates
                  },

                  yAxis: {
                    title: {
                      text: 'No of execution'
                    }
                  },

                  xAxis: {
                      categories: data.execution_string_dates
                  },

                  series: [{
                      name: 'Executions',
                      color: 'red',
                      data: data.graph_execution
                  }]
                });
               }

           $scope.filter_visualization = function(api_key){
             var filter_id = (api_key == 'user') ? $('#user_filter_id').val() : $('#execution_filter_id').val();
             $http({
               method: "POST",
               url:'/execution-user/status/',
               data: {get_val : 1, key: filter_id, api_key: api_key},
               headers: {'Content-Type': 'application/json'},
               responseType:'json'
             }).then(function(response){
                data = response.data;
                if (api_key == 'user') {
                   $scope.plot_graph_with_user_data(data)
                }
                else {
                   $scope.plot_graph_with_execution_data(data)
                 }
             }, function (error) {
                alert("Failed to fetch data.");
              });
          }

          $scope.plot_data_to_table = function(data){
            var option = '';
            var count=1;
            angular.forEach(data, function(row) {
            	row_no = '<td>'+ count + '</td>'
                user =  '<td class="textellipsis" style="max-width: 125px;" title="'+row.user+'">' + row.user + '</td>'
                feature = '<td>' + row.features + '</td>'
                total_tooltip = '<td><a href="javascript:void(0)" tabindex="0" data-placement="right" \
                                     data-toggle="tooltip" title="' + row.features_mouse_over + '">'
                                     + row.total +
                                '</a></td>'
                option += '<tr>' + row_no + user + feature + total_tooltip + '</tr>'
                count ++;
              });
            $('#id_top_user_feature_data').find('tbody').append(option);
          }

          $scope.top_user_features = function(){
            var filter_id = $('#id_top_user_feature').val();
            $http({
              method: "POST",
              url:'/user/most-executed/features/',
              data: {duration: filter_id},
              headers: {'Content-Type': 'application/json'},
              responseType:'json'
            }).then(function(response){
               data = response.data;
               $('#id_top_user_feature_data tbody tr').remove();
               $scope.plot_data_to_table(data)
               var a = document.getElementById('downloadID'); //or grab it by tagname etc
               a.href = "/user/most-executed/features/csv/?duration=" + filter_id
            }, function (error) {
               alert("Failed to fetch data.");
             });
         }
      });
