window.onload = () => {
    var myChart = echarts.init(document.getElementById('Chartbar')); // 柱状图Echarts
    var myCharts = echarts.init(document.getElementById('Chartpie')); // 饼图Echarts
    myChart.setOption({
        title: {
            text: '案件统计',
            textStyle:{
                fontSize: 12
            },
            left: 10,
            top: 10
        },
        grid:{
            x:60,
            y:45,
            x2:60,
            y2:30,
            borderWidth:1
        },
        tooltip: {},
        xAxis: {
            data: ["全部","刑事案件","民事案件","行政案件","赔偿案件","执行案件","其他案件"]
        },
        yAxis: {},
        series: [{
            barWidth : 30,//柱图宽度
            name: '案件统计',
            type: 'bar',
            itemStyle:{
                normal:{
                    color:'#00b7ee'
                }
            },
            data: [3000 , 1000 , 2100 , 3700 , 2300, 2000, 1100]
        }]
    });
   
    option = { // 饼图
        title : {
            text: '案件比例',
            textStyle:{
                fontSize: 12
            },
            left: 10,
            top: 10
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 60,
            top: 60,
            data: ['刑事案件','民事案件','行政案件','赔偿案件','执行案件', '其他案件']
        },
        series : [
            {
                name: '案件比例',
                type: 'pie',
                radius : '70%',
                center: ['40%', '55%'],
                data:[
                    {value:335, name:'刑事案件'},
                    {value:310, name:'民事案件'},
                    {value:234, name:'行政案件'},
                    {value:135, name:'赔偿案件'},
                    {value:312, name:'执行案件'},
                    {value:210, name:'其他案件'},                        
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal : {
                    label : {
                        show : false   //隐藏标示文字
                    },
                    labelLine : {
                        show : false   //隐藏标示线
                    }
                }
                }
            }
        ],
        color: ['#7ecef4','#8f82bc','#8fc31f','#f19149','#448aca','#054a8b']
    };
    myCharts.setOption(option)
}