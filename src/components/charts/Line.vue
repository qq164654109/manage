<template>
    <div class="lineChart" ref="lineChart"></div>
</template>

<script>
  const echarts = require('echarts/lib/echarts');
  //引入工具，线状图
  require('echarts/lib/chart/line');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/legend');
  export default {
    props: ['lineData'],
    watch: {
      lineData: {
        handler: function(val, oldVal) {
          this.drawChart(val);
        },
        deep: true
      }
    },
    methods: {
      drawChart(data) {
        const lineChart = echarts.init(this.$refs.lineChart);
        lineChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['食物','衣服','电器']
          },
          toolbox: {
            show: true,
            feature: {
              magicType: {show: true, type: ['stack', 'tiled']},
              saveAsImage: {show: true}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.axisX
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '食物',
            type: 'line',
            smooth: true,
            data: data.food
          },
            {
              name: '衣服',
              type: 'line',
              smooth: true,
              data: data.clothes
            },
            {
              name: '电器',
              type: 'line',
              smooth: true,
              data: data.electronics
            }]
        })
        window.addEventListener('resize', function () {
          lineChart.resize();
        })
      }
    }
  }
</script>

<style scoped lang="scss">
    .lineChart{
        width: 100%;
        height: 400px;
    }
</style>