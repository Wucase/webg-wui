
  <div class="home">
    <div class="chartClass" id="chartId" ref=""></div>
  </div>


<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";

    const initEcharts = () => {
      const dom = window.document.getElementById("chartId")
      const myChart = echarts.init(dom);
      const xData = [
        "0:00",
        "2:00",
        "4:00",
        "6:00",
        "8:00",
        "12:00",
        "16:00",
        "20:00",
        "24:00",
      ];
      const yData = [111, 600, 255, 344, 333, 555, 111, 999, 0];
      const yData1 = [70, 300, 655, 744, 233, 155, 611, 399, 0];
      let datacoords = [
        {
          coords: [],
        },
        {
          coords: [],
        },
      ];
      for (let i = 0; i < xData.length; i++) {
        datacoords[0].coords.push([xData[i], yData[i]]);
        datacoords[1].coords.push([xData[i], yData1[i]]);
      }
      //渲染图表
      const renderChart = (myChart) => {
        const options = {
          animationDuration: 3000,
          color: ["#ec5d5f", "#f2cb58", "#64a0c8"],
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(0,0,0,.5)",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "rgba(0,0,0,.5)",
              },
            },
            textStyle: {
              color: "#fff",
              fontSize: 14,
            },
          },
          grid: {
            left: "0%", //图表距边框的距离
            right: "3%",
            top: "11%",
            bottom: "2%",
            containLabel: true,
          },
          xAxis: [
            {
              nameGap: 3, //坐标轴名称与轴线之间的距离。
              nameTextStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: 12,
              },
              type: "category",
              data: xData,
              boundaryGap: false, //从0开始
              axisLine: {
                //坐标轴线颜色
                rotate: 30, //坐标轴内容过长旋转
                interval: 0,
                lineStyle: {
                  color: "#636E7C",
                },
              },
              axisLabel: {
                showMaxLabel: true,
                fontSize: 12,
                color: "rgba(255,255,255,.8)", //坐标的字体颜色
              },
              axisTick: {
                //是否显示坐标轴刻度  x和y不交叉
                show: false,
              },
            },
          ],
          yAxis: [
            {
              name: "webg_icon",
              type: "value",
              nameGap: 20,
              min: 0,
              max: function (value) {
                return Math.ceil(value.max / 5) * 5;
              },
              splitNumber: 5,
              nameTextStyle: {
                //坐标轴字体
                color: "rgba(255,255,255,.89)",
                fontSize: 12,
              },
              splitLine: {
                //网格线颜色
                show: true,
                lineStyle: {
                  color: "rgba(255,255,255,.25)",
                  type: "dashed",
                },
              },
              axisTick: {
                //是否显示坐标轴刻度
                show: false,
              },
              axisLine: {
                //坐标轴线颜色
                show: true,
                lineStyle: {
                  color: "#636E7C",
                },
              },
              axisLabel: {
                color: "rgba(255,255,255,.8)", //坐标的字体颜色
                fontSize: 12,
              },
            },
          ],
          series: [
            {
              name: "webg的折线图",
              type: "line",
              smooth: 0, //可设置弧度，0-1
              lineStyle: {
                width: 1.5,
                type: "solid",
                shadowOffsetX: 0, // 折线的X偏移
                shadowOffsetY: 3, // 折线的Y偏移
                shadowBlur: 4, // 折线模糊
                shadowColor: "rgba(220,120,40,0.95)", //阴影色
                color: "#DC7828", //折线颜色
              },
              showSymbol: true,
              symbol: "circle",
              symbolSize: 8,
              itemStyle: {
                color: "#2f334d",
                borderWidth: 1,
                borderColor: "#DC7828",
              },
              areaStyle: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为---右下左上
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 1,
                    color: "rgba(220,120,40,0.3)",
                  },
                  {
                    offset: 0.74,
                    color: "rgba(220,120,40,0.26)",
                  },
                  {
                    offset: 0,
                    color: "rgba(220,120,40,0)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
              data: yData,
            },
            {
              name: "wwm",
              type: "line",
              smooth: 0, //可设置弧度，0-1
              lineStyle: {
                width: 1.5,
                type: "solid",
                shadowOffsetX: 0, // 折线的X偏移
                shadowOffsetY: 3, // 折线的Y偏移
                shadowBlur: 4, // 折线模糊
                shadowColor: "rgba(220,120,40,0.95)", //阴影色
                color: "#DC7828", //折线颜色
              },
              showSymbol: true,
              symbol: "circle",
              symbolSize: 8,
              itemStyle: {
                color: "#2f334d",
                borderWidth: 1,
                borderColor: "#DC7828",
              },
              areaStyle: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为---右下左上
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 1,
                    color: "rgba(220,120,40,0.3)",
                  },
                  {
                    offset: 0.74,
                    color: "rgba(220,120,40,0.26)",
                  },
                  {
                    offset: 0,
                    color: "rgba(220,120,40,0)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
              data: yData1,
            },
            // 以下代码为流光效果-配置项代码
            {
              polyline: true,
              showSymbol: false,
              name: "流动光线",
              type: "lines",
              coordinateSystem: "cartesian2d",
              effect: {
                trailLength: 0.3,
                show: true,
                period: 6,
                symbolSize: 4,
                loop: true,
              },
              lineStyle: {
                color: "#fff",
                width: 0,
                opacity: 0,
                curveness: 0,
                type: "dashed",
              },
              data: datacoords,
            },
            {
              polyline: true,
              showSymbol: false,
              name: "流动光线",
              type: "lines",
              coordinateSystem: "cartesian2d",
              effect: {
                trailLength: 0.3,
                show: true,
                period: 6,
                symbolSize: 4,
                loop: true,
              },
              lineStyle: {
                color: "#fff",
                width: 0,
                opacity: 0,
                curveness: 0,
                type: "dashed",
              },
              data: datacoords,
            },
          ],
        };
        if (options && typeof options === "object") {
          myChart.setOption(options);
        }
      };
      renderChart(myChart);
    }

    onMounted(() => {
      initEcharts()
    })
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  background: linear-gradient(225deg, #2f334d, #383d5c);
  .chartClass {
    width: 600px;
      height: 400px;
  }
}
</style>
