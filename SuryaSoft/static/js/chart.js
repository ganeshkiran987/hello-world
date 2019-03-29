
Highcharts.setOptions({
	lang: {
		thousandsSep: ''
	},
	credits: {
		enabled: false
	}
});

function testbedExecutionChart(divid, FeatureName, Passed, Failed){
//function testbedExecutionChart(divid){
	Highcharts.chart(divid, {
			colors: ['#DD4B39','#00A55A',],
	    chart: {
	        type: 'column'
	    },
	    credits:{
	    		enabled:false
	    },
	    title: {
	        text: ''
	    },
	    xAxis: {
	        //categories: ['Feature1', 'Feature2', 'Feature3', 'Feature4', 'Feature5']
	    	categories:FeatureName
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Total Testcases'
	        },
	        stackLabels: {
	            enabled: true,
	            style: {
	                fontWeight: 'bold',
	                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	            }
	        }
	    },
	    legend: {
			enabled:true,
			align:'center',
			verticalAlign:'top',
			floating:true,
        },
	    tooltip: {
        	shared:true,
        	crosshairs:false,
        	borderColor:'#aaa',
        	useHTML: true,
            headerFormat: 'Feature Name : <b>{point.x}</b><br/>',
            pointFormat: '<span style="color: {series.color}">{series.name}</span> : <b>{point.y}</b><br/>',
            footerFormat: 'Total: <b>{point.total}</b>'
        },
	    plotOptions: {
	        column: {
	            stacking: 'normal',
	            dataLabels: {
	                enabled: false,
	                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	            },
	            animation:false
	        }
	    },
	    series: [{
	        name: 'Fail',
	        //data: [5, 3, 4, 7, 2]
	    	data:Failed
	    }, {
	        name: 'Pass',
	        //data: [2, 2, 3, 2, 1]
	        data:Passed
	    }]
	});
	
}

    function testbedAvailabilityChart(div_id,locations,num_testbeds)
    {
	data = 	{
		  chart: { plotBackgroundColor: null, plotBorderWidth: null, plotShadow: false, type: 'pie' },
    		  title: { text: 'Registered Testbeds' },	
		  tooltip: { pointFormat: '{series.name}: <b>{point.y}</b>' },
    		  plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: false }, showInLegend: true } },
   		  series: [{name: 'Number of Testbeds', colorByPoint: true, data: [] }]
    		} 
    
    	for (i=0;i<locations.length;i++)
	    data['series'][0]['data'].push({'name':locations[i],'y':num_testbeds[i]});
	Highcharts.chart(div_id, data);
    }

   function testbed_virt_Chart(div_id,v2,v4)
    {
	data = 	{
		  chart: { plotBackgroundColor: null, plotBorderWidth: null, plotShadow: false, type: 'pie' },
    		  title: { text: 'Virtualization' },	
		  tooltip: { pointFormat: '{series.name}: <b>{point.y}</b>' },
    		  plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: false }, showInLegend: true } },
   		  series: [{name: 'Number of Testbeds', colorByPoint: true, data: [] }]
    		} 
    
	    data['series'][0]['data'].push({'name':"2V",'y':v2});
		data['series'][0]['data'].push({'name':"4V",'y':v4});
	Highcharts.chart(div_id, data);
    }



