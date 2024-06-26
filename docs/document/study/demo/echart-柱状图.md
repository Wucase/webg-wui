# echart-柱状图

  <div class="echarts-bar">
    <div class="chartClass" id="chartBar" ref=""></div>
  </div>

<script setup>

import * as echarts from "echarts";
import { onMounted } from "vue";

    const initEcharts = () => {
      const dom = window.document.getElementById("chartBar")
      const myChart = echarts.init(dom);
     // 渲染图表
     const renderChart = (myChart) => {
      // legend
      const XArr = ["1#1支架", "2#2支架", "3#3支架", "4#4支架"],
        warnValue = 55;
      let str1 = "<" + 25.2 + "Mpa";
      let str2 = 25.2 + "~" + 40 + "Mpa";
      let str3 = ">=" + 40 + "Mpa";
      let maxData = [60, 60, 60, 60, 60],
        maxValue = 60;
      // 第一条数据
      let data1 = [25, 12, 13, 12];
      let oneData = data1.map((item) => {
        return maxValue - item;
      });
      // 第二条数据
      let data2 = [36, 32, 34, 32];
      let twoData = data2.map((item) => {
        return maxValue - item;
      });
      // 黄色
      const colors = [
        {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#EED743",
            },
            {
              offset: 0.5,
              color: "#D6B628",
            },
            {
              offset: 0.5,
              color: "#B59819",
            },
            {
              offset: 1,
              color: "#DABB35",
            },
          ],
        },
      ];
      // 蓝色
      const colorsPlan = [
        {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#68F4EF",
            },
            {
              offset: 0.5,
              color: "#37D6E5",
            },
            {
              offset: 0.5,
              color: "#19A5B5",
            },
            {
              offset: 1,
              color: "#35C2DA",
            },
          ],
        },
      ];
      //透明背景柱子颜色
      const colorsBg = [
        {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,.12)",
            },
            {
              offset: 0.5,
              color: "rgba(255,255,255,.4)",
            },
            {
              offset: 0.5,
              color: "rgba(255,255,255,.12)",
            },
            {
              offset: 1,
              color: "rgba(255,255,255,.4)",
            },
          ],
        },
      ];
      //透明背景柱子顶部颜色
      const colorsTopBg = "#252f31";
      let barWidth = 16,
        labelXPosition = 1,
        symbolSizeTop = 8,
        symbolOffsetX = 10;
      const options = {
        color: ["#00FEFF", "#E9CB35", "#DB463B"],
        grid: {
          top: 50,
          left: 0,
          right: 0,
          bottom: 15,
          containLabel: true,
        },
        legend: {
          icon: "rect",
          data: [str1, str2, str3],
          show: true,
          selectedMode: false,
          //图例组件，颜色和名字
          top: 15,
          itemGap: 15,
          itemWidth: 12,
          itemHeight: 8,
          textStyle: {
            color: "rgba(255,255,255,0.74)",
            fontStyle: "normal",
            fontSize: 12,
          },
        },
        xAxis: {
          type: "category",
          data: XArr,
          axisLine: {
            //坐标轴线颜色
            lineStyle: {
              color: "#626361",
            },
          },
          splitNumber: 4,
          interval: 4,
          boundaryGap: ["8%", "8%"],
          axisLabel: {
            color: "rgba(255,255,255,.9)", //坐标的字体颜色
            fontSize: 12,
          },
          axisTick: {
            //坐标轴刻度颜色
            show: false,
          },
        },
        yAxis: {
          min: 0,
          type: "value",
          //设置网格线颜色
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.3)",
              type: [3, 3],
              dashOffset: 2,
              width: 1,
            },
          },
          axisTick: {
            //坐标轴刻度颜色
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: "rgba(255,255,255,.9)", //坐标的字体颜色
            fontSize: 12,
          },
        },
        series: [
          // 第一条数据进度柱子
          {
            type: "bar",
            barWidth: barWidth,
            stack: "1",
            itemStyle: {
              color: colorsPlan[0],
              borderRadius: 0,
            },
            label: {
              show: true,
              position: [labelXPosition, -20],
              color: "#00f8ff", //蓝色
              fontSize: 12,
            },
            data: data1,
          },
          // 第一条数据上面正方形：颜色
          {
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [-symbolOffsetX, -symbolSizeTop / 2],
            symbolPosition: "end",
            z: 12,
            color: "#37DAE5",
            data: data1,
          },
          //  第一条数据底部正方形：颜色
          {
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [-symbolOffsetX, symbolSizeTop / 2],
            z: 12,
            color: colorsPlan[0],
            data: data1,
          },
          // 第一条数据上部正方形:透明背景
          {
            data: maxData,
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [-symbolOffsetX, -symbolSizeTop / 2],
            color: colorsTopBg,
            symbolPosition: "end",
          },
          // 第一条数据底部柱子:透明背景
          {
            data: oneData,
            type: "bar",
            barWidth: barWidth,
            stack: "1",
            zlevel: -1,
            itemStyle: {
              opacity: 0.7,
              color: colorsBg[0],
              borderRadius: 0,
            },
          },
          // 第二条数据进度柱子
          {
            type: "bar",
            stack: "2",
            barWidth: barWidth,
            itemStyle: {
              color: colors[0],
            },
            label: {
              show: true,
              position: [labelXPosition, -20],
              color: "#E9CB35", //黄色
              fontSize: 12,
            },
            data: data2,
          },
          // 第二条数据中间正方形:颜色
          {
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [symbolOffsetX, -symbolSizeTop / 2],
            symbolPosition: "end",
            z: 12,
            color: "#E5CD37",
            data: data2,
          },
          // 第二条数据底部正方形
          {
            name: "",
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [symbolOffsetX, symbolSizeTop / 2],
            color: colors[0],
            z: 12,
            data: data2,
          },
          // 第二条数据上部正方形:透明背景
          {
            data: maxData,
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [symbolOffsetX, -symbolSizeTop / 2],
            color: colorsTopBg,
            symbolPosition: "end",
          },
          // 第二条数据底部柱子:透明背景
          {
            data: twoData,
            type: "bar",
            barWidth: barWidth,
            stack: "2",
            zlevel: -1,
            itemStyle: {
              opacity: 0.5,
              color: colorsBg[0],
              borderRadius: 0,
            },
          },
          {
            // 临界值-超标线
            name: str1,
            markLine: {
              silent: true,
              symbol: false,
              label: {
                fontSize: 12,
                position: "insideEndTop",
                fontWeight: 200,
                color: "#FF5757",
              },
              data: [
                {
                  yAxis: warnValue,
                  lineStyle: {
                    color: "#FF5757",
                    type: [3, 3],
                    dashOffset: 2,
                    width: 1,
                  },
                },
              ],
            },
            type: "line",
            smooth: true,
            animationDuration: 2000,
          },
          {
            // 临界值-超标线
            name: str2,
            markLine: {
              silent: true,
              symbol: false,
              label: {
                fontSize: 12,
                position: "insideEndTop",
                fontWeight: 200,
                color: "#FF5757",
              },
              data: [
                {
                  yAxis: warnValue,
                  lineStyle: {
                    color: "#FF5757",
                    type: [3, 3],
                    dashOffset: 2,
                    width: 1,
                  },
                },
              ],
            },
            type: "line",
            smooth: true,
            animationDuration: 2000,
          },
          {
            // 临界值-超标线
            name: str3,
            markLine: {
              silent: true,
              symbol: false,
              label: {
                fontSize: 12,
                position: "insideEndTop",
                fontWeight: 200,
                color: "#FF5757",
              },
              data: [
                {
                  yAxis: warnValue,
                  lineStyle: {
                    color: "#FF5757",
                    type: [3, 3],
                    dashOffset: 2,
                    width: 1,
                  },
                },
              ],
            },
            type: "line",
            smooth: true,
            animationDuration: 2000,
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
.echarts-bar {
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

## demo代码

```vue
 <div class="echarts-bar">
    <div class="chartClass" id="chartBar" ref=""></div>
  </div>

<script setup>

import * as echarts from "echarts";
import { onMounted } from "vue";

    const initEcharts = () => {
      const dom = window.document.getElementById("chartBar")
      const myChart = echarts.init(dom);
     // 渲染图表
     const renderChart = (myChart) => {
      // legend
      const XArr = ["1#1支架", "2#2支架", "3#3支架", "4#4支架"],
        warnValue = 55;
      let str1 = "<" + 25.2 + "Mpa";
      let str2 = 25.2 + "~" + 40 + "Mpa";
      let str3 = ">=" + 40 + "Mpa";
      let maxData = [60, 60, 60, 60, 60],
        maxValue = 60;
      // 第一条数据
      let data1 = [25, 12, 13, 12];
      let oneData = data1.map((item) => {
        return maxValue - item;
      });
      // 第二条数据
      let data2 = [36, 32, 34, 32];
      let twoData = data2.map((item) => {
        return maxValue - item;
      });
      // 黄色
      const colors = [
        {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#EED743",
            },
            {
              offset: 0.5,
              color: "#D6B628",
            },
            {
              offset: 0.5,
              color: "#B59819",
            },
            {
              offset: 1,
              color: "#DABB35",
            },
          ],
        },
      ];
      // 蓝色
      const colorsPlan = [
        {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#68F4EF",
            },
            {
              offset: 0.5,
              color: "#37D6E5",
            },
            {
              offset: 0.5,
              color: "#19A5B5",
            },
            {
              offset: 1,
              color: "#35C2DA",
            },
          ],
        },
      ];
      //透明背景柱子颜色
      const colorsBg = [
        {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,.12)",
            },
            {
              offset: 0.5,
              color: "rgba(255,255,255,.4)",
            },
            {
              offset: 0.5,
              color: "rgba(255,255,255,.12)",
            },
            {
              offset: 1,
              color: "rgba(255,255,255,.4)",
            },
          ],
        },
      ];
      //透明背景柱子顶部颜色
      const colorsTopBg = "#252f31";
      let barWidth = 16,
        labelXPosition = 1,
        symbolSizeTop = 8,
        symbolOffsetX = 10;
      const options = {
        color: ["#00FEFF", "#E9CB35", "#DB463B"],
        grid: {
          top: 50,
          left: 0,
          right: 0,
          bottom: 15,
          containLabel: true,
        },
        legend: {
          icon: "rect",
          data: [str1, str2, str3],
          show: true,
          selectedMode: false,
          //图例组件，颜色和名字
          top: 15,
          itemGap: 15,
          itemWidth: 12,
          itemHeight: 8,
          textStyle: {
            color: "rgba(255,255,255,0.74)",
            fontStyle: "normal",
            fontSize: 12,
          },
        },
        xAxis: {
          type: "category",
          data: XArr,
          axisLine: {
            //坐标轴线颜色
            lineStyle: {
              color: "#626361",
            },
          },
          splitNumber: 4,
          interval: 4,
          boundaryGap: ["8%", "8%"],
          axisLabel: {
            color: "rgba(255,255,255,.9)", //坐标的字体颜色
            fontSize: 12,
          },
          axisTick: {
            //坐标轴刻度颜色
            show: false,
          },
        },
        yAxis: {
          min: 0,
          type: "value",
          //设置网格线颜色
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.3)",
              type: [3, 3],
              dashOffset: 2,
              width: 1,
            },
          },
          axisTick: {
            //坐标轴刻度颜色
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: "rgba(255,255,255,.9)", //坐标的字体颜色
            fontSize: 12,
          },
        },
        series: [
          // 第一条数据进度柱子
          {
            type: "bar",
            barWidth: barWidth,
            stack: "1",
            itemStyle: {
              color: colorsPlan[0],
              borderRadius: 0,
            },
            label: {
              show: true,
              position: [labelXPosition, -20],
              color: "#00f8ff", //蓝色
              fontSize: 12,
            },
            data: data1,
          },
          // 第一条数据上面正方形：颜色
          {
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [-symbolOffsetX, -symbolSizeTop / 2],
            symbolPosition: "end",
            z: 12,
            color: "#37DAE5",
            data: data1,
          },
          //  第一条数据底部正方形：颜色
          {
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [-symbolOffsetX, symbolSizeTop / 2],
            z: 12,
            color: colorsPlan[0],
            data: data1,
          },
          // 第一条数据上部正方形:透明背景
          {
            data: maxData,
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [-symbolOffsetX, -symbolSizeTop / 2],
            color: colorsTopBg,
            symbolPosition: "end",
          },
          // 第一条数据底部柱子:透明背景
          {
            data: oneData,
            type: "bar",
            barWidth: barWidth,
            stack: "1",
            zlevel: -1,
            itemStyle: {
              opacity: 0.7,
              color: colorsBg[0],
              borderRadius: 0,
            },
          },
          // 第二条数据进度柱子
          {
            type: "bar",
            stack: "2",
            barWidth: barWidth,
            itemStyle: {
              color: colors[0],
            },
            label: {
              show: true,
              position: [labelXPosition, -20],
              color: "#E9CB35", //黄色
              fontSize: 12,
            },
            data: data2,
          },
          // 第二条数据中间正方形:颜色
          {
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [symbolOffsetX, -symbolSizeTop / 2],
            symbolPosition: "end",
            z: 12,
            color: "#E5CD37",
            data: data2,
          },
          // 第二条数据底部正方形
          {
            name: "",
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [symbolOffsetX, symbolSizeTop / 2],
            color: colors[0],
            z: 12,
            data: data2,
          },
          // 第二条数据上部正方形:透明背景
          {
            data: maxData,
            type: "pictorialBar",
            symbol: "diamond",
            symbolSize: [barWidth, symbolSizeTop],
            symbolOffset: [symbolOffsetX, -symbolSizeTop / 2],
            color: colorsTopBg,
            symbolPosition: "end",
          },
          // 第二条数据底部柱子:透明背景
          {
            data: twoData,
            type: "bar",
            barWidth: barWidth,
            stack: "2",
            zlevel: -1,
            itemStyle: {
              opacity: 0.5,
              color: colorsBg[0],
              borderRadius: 0,
            },
          },
          {
            // 临界值-超标线
            name: str1,
            markLine: {
              silent: true,
              symbol: false,
              label: {
                fontSize: 12,
                position: "insideEndTop",
                fontWeight: 200,
                color: "#FF5757",
              },
              data: [
                {
                  yAxis: warnValue,
                  lineStyle: {
                    color: "#FF5757",
                    type: [3, 3],
                    dashOffset: 2,
                    width: 1,
                  },
                },
              ],
            },
            type: "line",
            smooth: true,
            animationDuration: 2000,
          },
          {
            // 临界值-超标线
            name: str2,
            markLine: {
              silent: true,
              symbol: false,
              label: {
                fontSize: 12,
                position: "insideEndTop",
                fontWeight: 200,
                color: "#FF5757",
              },
              data: [
                {
                  yAxis: warnValue,
                  lineStyle: {
                    color: "#FF5757",
                    type: [3, 3],
                    dashOffset: 2,
                    width: 1,
                  },
                },
              ],
            },
            type: "line",
            smooth: true,
            animationDuration: 2000,
          },
          {
            // 临界值-超标线
            name: str3,
            markLine: {
              silent: true,
              symbol: false,
              label: {
                fontSize: 12,
                position: "insideEndTop",
                fontWeight: 200,
                color: "#FF5757",
              },
              data: [
                {
                  yAxis: warnValue,
                  lineStyle: {
                    color: "#FF5757",
                    type: [3, 3],
                    dashOffset: 2,
                    width: 1,
                  },
                },
              ],
            },
            type: "line",
            smooth: true,
            animationDuration: 2000,
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
.echarts-bar {
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

```
