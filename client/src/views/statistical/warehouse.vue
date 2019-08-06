<template>
  <!-- 仓储统计 -->
  <div class="transport-box">
    <!-- 头部 -->
    <header style="height: 100%">
      <thehead :Thehead="Thehead" @clicktimedata="clicktimedata"></thehead>
    </header>
    <!-- 导航条（锚记） -->
    <ul id="anchornavigation">
      <li
        v-for="(nav, index) in navBox"
        :key="index"
        v-on:click="addClass(index)"
        v-bind:class="{ active:index==current}"
      >
        <a :href="'#'+nav.id">{{nav.name}}</a>
      </li>
      <!-- <li><a href="#inventory">库存量</a></li>
			<li><a href="#storage">入库量</a></li>
			<li><a href="#outbound">出库量</a></li>
      <li><a href="#longlibrary">长库商品车</a></li>-->
    </ul>
    <!-- 内容 -->
    <div class="containBox">
      <div id="inventory">
        <!-- 库存量 -->
        <div class="mod-demo-echarts margintop10">
          <LineChart
            :brokenlineData="inventoryamount"
            @clicktypes="clickinventoryamountnum"
            :successData="inventoryamountDataSuccess"
            @twochangeselect="clickinventoryamountnum"
            @changeselect="clickinventoryamountnum"
          ></LineChart>
        </div>
        <!-- 库存量同期对比(辆) -->
        <div class="mod-demo-echarts margintop10">
          <LineChart
            :brokenlineData="inventoryamountdb"
            @clicktypes="clickinventoryamountdbnum"
            @changeselect="clickinventoryamountdbnum"
            @twochangeselect="clickinventoryamountdbnum"
            :successData="inventoryamountdbDataSuccess"
          ></LineChart>
        </div>
      </div>

      <div id="storage">
        <!-- 入库量 -->
        <div class="mod-demo-echarts margintop10">
          <LineChart
            :brokenlineData="receipt"
            @changeselect="clickreceiptnum"
            @clicktypes="clickreceiptnum"
            @twochangeselect="clickreceiptnum"
            :successData="receiptDataSuccess"
          ></LineChart>
        </div>
        <!-- 入库量同期对比(辆) getSlects-->
        <div class="mod-demo-echarts margintop10">
          <LineChart
            :brokenlineData="receiptdb"
            @changeselect="clickreceiptdbnum"
            @clicktypes="clickreceiptdbnum"
            @twochangeselect="clickreceiptdbnum"
            :successData="receiptdbDataSuccess"
          ></LineChart>
        </div>
      </div>

      <div id="outbound">
        <!-- 出库量 -->
        <div class="mod-demo-echarts margintop10">
          <LineChart
            :brokenlineData="outboundquantity"
            @changeselect="clickoutboundquantitynum"
            @clicktypes="clickoutboundquantitynum"
            @twochangeselect="clickoutboundquantitynum"
            :successData="outboundquantityDataSuccess"
          ></LineChart>
        </div>
        <!-- 出库量同期对比 -->
        <div class="mod-demo-echarts margintop10">
          <LineChart
            :brokenlineData="outboundquantitydb"
            @changeselect="clickoutboundquantitydbnum"
            @clicktypes="clickoutboundquantitydbnum"
            @twochangeselect="clickoutboundquantitydbnum"
            :successData="outboundquantitydbDataSuccess"
          ></LineChart>
        </div>
      </div>
      <!-- 长库龄商品车数量 -->
      <div id="longlibrary">
        <div class="mod-demo-echarts margintop10">
          <LineColumnar
            :columnarData="longoflibrary"
            @changeselect="clicklongoflibrarynum"
            @twochangeselect="clicklongoflibrarynum"
            @clicktypes="clicklongoflibrarynum"
            :successData="longoflibraryDataSuccess"
          ></LineColumnar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getWare,
  getInWare,
  getOutWare,
  getLongTimeWare,
  gettrastWare,
  gettrastInWare,
  gettrastOutWare,
  gettrastLongTimeWare,
  getSelect
} from "../../api/tubiao/warehouse";
import thehead from "@/components/statistical/the-head";
import LineChart from "@/components/statistical/line-templets";
import LineColumnar from "@/components/statistical/templte";
import StandardColumnar from "@/components/statistical/standard-histogram-template";
// import { setTimeout } from "timers";
// import { constants } from "zlib";
export default {
  name: "",
  components: {
    thehead,
    LineChart,
    StandardColumnar,
    LineColumnar
  },
  data() {
    return {
      getSlectss: [],
      //条件删选
      inventoryamountnum: 1, //库存量type
      inventoryamountval: "投资企业", //库存量第一下拉框

      inventoryamountdbval: "投资企业", //库存量同期对比(辆)第一下拉框
      inventoryamountdbnum: 1, //库存量同期对比(辆)type
      inventoryamountdborg: "商贸物流", //库存量同期对比(辆)投资企业

      receiptnum: 1, //入库量type
      receiptnumval: "投资企业", //入库量第一下拉框

      receiptdbnum: 1, //入库量同期对比(辆)type
      receiptdbval: "投资企业", //入库量同期对比(辆)第一下拉框
      receiptdborg: "商贸物流", //入库量同期对比(辆)投资企业

      outboundquantityval: "投资企业", //出库量第一下拉框
      outboundquantitynum: 1, //出库量type

      outboundquantitydbval: "投资企业", //出库量同期对比第一下拉框
      outboundquantitydbnum: 1, //出库量同期对比type
      outboundquantitydborg: "商贸物流", //出库量同期对比投资企业

      longoflibraryval: "投资企业", //长库龄商品车数量第一下拉框
      longoflibrarynum: 1, //长库龄商品车数量type
      endTime: "", //结束时间
      startTime: "", //起始时间

      // 描点
      current: 0,
      navBox: [
        {
          name: "库存量",
          id: "inventory"
        },
        {
          name: "入库量",
          id: "storage"
        },
        {
          name: "出库量",
          id: "outbound"
        },
        {
          name: "长库龄商品车",
          id: "longlibrary"
        }
      ],
      timedata: "",
      Thehead: "仓储统计",
      // 库存量
      inventoryamount: {
        title: "库存量(辆)",
        showicon: true, //i图标是否显示
        explain: "仓库中在库的商品车数量",
        thiscolor: ["yellow", "red", "green", "#98199171", "#8796fc", "orange"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [
          //下拉框数据
          {
            value: "factory_city_code",
            label: "客户(城市)"
          },
          {
            value: "factory_code",
            label: "客户"
          },
          {
            value: "car_brand_code",
            label: "商品车品牌"
          },
          {
            value: "org_code",
            label: "投资企业"
          }
        ],
        thisnum: " ",
        thisxAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        datavalue: [
          {
            name: "富田日捆",
            smooth: true,
            
            type: "line",
            data: [300, 121, 201, 154, 190, 200, 440]
          },
          {
            name: "富田日",
            smooth: true,
            
            type: "line",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      inventoryamountDataSuccess: false,
      // 库存量同期对比
      inventoryamountdb: {
        title: "库存量同期对比(辆)",
        showicon: false, //i图标是否显示
        showselect: true, //是否显示第二个下拉框筛选
        thiscolor: ["yellow", "red"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [
          //下拉框数据
          {
            value: "factory_city_code",
            label: "客户(城市)"
          },
          {
            value: "factory_code",
            label: "客户"
          },
          {
            value: "car_brand_code",
            label: "商品车品牌"
          },
          {
            value: "org_code",
            label: "投资企业"
          }
        ],
        twooutrates: [
          //第二个下拉框数据
          {
            value: "GNL",
            label: "商贸日邮"
          },
          {
            value: "FNL",
            label: "富田日捆"
          },
          {
            value: "GRTL",
            label: "商铁物流"
          },
          {
            value: "GTT",
            label: "广丰物流"
          },
          {
            value: "GBL",
            label: "商贸物流"
          },
          {
            value: "HSL",
            label: "顺捷物流"
          }
        ],
        thisnum: "辆",
        thisxAxis: ["今年","去年"],
        datavalue: [
          {
            name: "最高气温",
            smooth: true,
            type: "line",
            value: [300, 121, 201, 154, 190, 200, 440]
            // data: [300, 121, 201, 154, 190, 200, 440]
          },
          {
            name: "视频广告",
            smooth: true,
            type: "line",
            value: [150, 232, 201, 154, 190, 330, 410]
            // data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      inventoryamountdbDataSuccess: false,
      // 入库量
      receipt: {
        title: "入库量(辆)",
        showicon: true, //i图标是否显示
        explain: "已入库的商品车数量",
        thiscolor: ["yellow", "red", "green", "#98199171", "#8796fc", "orange"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [
          //下拉框数据
          {
            value: "factory_city_code",
            label: "客户(城市)"
          },
          {
            value: "factory_code",
            label: "客户"
          },
          {
            value: "car_brand_code",
            label: "商品车品牌"
          },
          {
            value: "org_code",
            label: "投资企业"
          }
        ],
        thisnum: "辆",
        thisxAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        datavalue: [
          {
            name: "最高气温",
             smooth: true,
            type: "line",
            // value: [300, 121, 201, 154, 190, 200, 440]
            data: [300, 121, 201, 154, 190, 200, 440]
          },
          {
            name: "视频广告",
             smooth: true,
            type: "line",
            // value: [150, 232, 201, 154, 190, 330, 410]
            data: [150, 232, 201, 154, 190, 330, 410]
            
          }
        ]
      },
      receiptDataSuccess: true,
      // 入库量同期对比
      receiptdb: {
        title: "入库量同期对比(辆)",
        showicon: false, //i图标是否显示
        showselect: true, //是否显示第二个下拉框筛选
        thiscolor: ["yellow", "green"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [
          //下拉框数据
          {
            value: "factory_city_code",
            label: "客户(城市)"
          },
          {
            value: "factory_code",
            label: "客户"
          },
          {
            value: "car_brand_code",
            label: "商品车品牌"
          },
          {
            value: "org_code",
            label: "投资企业"
          }
        ],
        twooutrates: [
          //第二个下拉框数据
          {
            value: "GNL",
            label: "商贸日邮"
          },
          {
            value: "FNL",
            label: "富田日捆"
          },
          {
            value: "GRTL",
            label: "商铁物流"
          },
          {
            value: "GTT",
            label: "广丰物流"
          },
          {
            value: "GBL",
            label: "商贸物流"
          },
          {
            value: "HSL",
            label: "顺捷物流"
          }
        ],
        thiscolor: ["yellow", "green"],
        thisnum: "辆",
        thisxAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        datavalue: [
          {
             smooth: true,
            type: "line",
            name: "最高气温",
            // value: [300, 121, 201, 154, 190, 200, 440]
            data: [300, 121, 201, 154, 190, 200, 440]
          },
          {
            name: "视频广告",
             smooth: true,
            type: "line",
            // value: [150, 232, 201, 154, 190, 330, 410]
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      receiptdbDataSuccess: true,
      // 出库量
      outboundquantity: {
        title: "出库量(辆)",
        showicon: true, //i图标是否显示
        explain: "已出库的商品车数量",
        thiscolor: ["yellow", "red", "green", "#98199171", "#8796fc", "orange"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [
          //下拉框数据
          {
            value: "factory_city_code",
            label: "客户(城市)"
          },
          {
            value: "factory_code",
            label: "客户"
          },
          {
            value: "car_brand_code",
            label: "商品车品牌"
          },
          {
            value: "org_code",
            label: "投资企业"
          }
        ],
        thisnum: "辆",
        thisxAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        datavalue: [
          {
            name: "最高气温",
             smooth: true,
            type: "line",
            // value: [300, 121, 201, 154, 190, 200, 440]
            data: [300, 121, 201, 154, 190, 200, 440]
          },
          {
            name: "视频广告",
             smooth: true,
            type: "line",
            // value: [150, 232, 201, 154, 190, 330, 410]
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      outboundquantityDataSuccess: true,
      // 出库量同期对比
      outboundquantitydb: {
        title: "出库量同期对比(辆)",
        showicon: false, //i图标是否显示
        showselect: true, //是否显示第二个下拉框筛选
        thiscolor: ["yellow", "green"], //折线图颜色
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [
          //下拉框数据
          {
            value: "factory_city_code",
            label: "客户(城市)"
          },
          {
            value: "factory_code",
            label: "客户"
          },
          {
            value: "car_brand_code",
            label: "商品车品牌"
          },
          {
            value: "org_code",
            label: "投资企业"
          }
        ],
        twooutrates: [
          //第二个下拉框数据
          {
            value: "GNL",
            label: "商贸日邮"
          },
          {
            value: "FNL",
            label: "富田日捆"
          },
          {
            value: "GRTL",
            label: "商铁物流"
          },
          {
            value: "GTT",
            label: "广丰物流"
          },
          {
            value: "GBL",
            label: "商贸物流"
          },
          {
            value: "HSL",
            label: "顺捷物流"
          }
        ],
        thiscolor: ["yellow", "green"],
        thisnum: "辆",
        thisxAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        datavalue: [
          {
            name: "最高气温",
             smooth: true,
            type: "line",
            // value: [300, 121, 201, 154, 190, 200, 440]
            data: [300, 121, 201, 154, 190, 200, 440]
          },
          {
            name: "视频广告",
             smooth: true,
            type: "line",
            // value: [150, 232, 201, 154, 190, 330, 410]
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      outboundquantitydbDataSuccess: true,
      //长库龄商品车数量
      longoflibrary: {
        //公铁水运量占比
        title: "长库龄商品车数量(辆)",
        showicon: true, //i图标是否显示
        explain: "超过规定(业务系统规定)在库时间的商品车数量",
        
        brushchoose: ["按日", "按周", "按月"], //筛选值
        outrates: [
          {
            value: "factory_city_code",
            label: "客户(城市)"
          },
          {
            value: "factory_code",
            label: "客户"
          },
          {
            value: "car_brand_code",
            label: "商品车品牌"
          },
          {
            value: "org_code",
            label: "投资企业"
          }
        ],
        thiscolor: ["yellow", "red", "green", "#98199171", "#8796fc", "orange"],
        thisnum: "辆",
        thisxAxis: [
          "2019年04月25日",
          "2019年04月25日",
          "2019年04月26日",
          "2019年04月27日",
          "2019年04月28日"
        ],
        data: [
          {
            barWidth: 20,
            data: [0, 0, 0, 0, 0, 0, 0],
            name: "陆运",
            smooth: false,
            type: "bar"
          },
          {
            barWidth: 20,
            data: [0, 23, 0, 3, 0, 0, 0],
            name: "水运",
            smooth: false,
            type: "bar"
          }
        ]
      },
      longoflibraryDataSuccess: false
    };
  },
  created() {
    this.getSlects();
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    },
    //下拉
    getSlects() {
      getSelect().then(res => {
        console.log(res)
        if (res.data.msg === "success") {
          let arr = res.data.data;
          this.getSlects = arr;
        }
      });
    },

    //头部日期改变之后
    clicktimedata(valuetime) {
      this.startTime = valuetime.startData;
      this.endTime = valuetime.endData;
      //参数： 第一个下拉框值   日月周   结束时间  开时时间
      this.getinventoryamount(
        this.inventoryamountval,
        this.inventoryamountnum,
        this.endTime,
        this.startTime
      );
      //参数： 第一个下拉框值   日月周   第二下拉框  开时时间    结束时间
      this.getinventoryamountdb(
        this.inventoryamountdbval,
        this.inventoryamountdbnum,
        this.inventoryamountdborg,
        this.endTime,
        this.startTime
      );
      this.getreceipt(
        this.receiptnumval,
        this.receiptnum,
        this.endTime,
        this.startTime
      );
      this.getreceiptdb(
        this.receiptdbval,
        this.receiptdbnum,
        this.receiptdborg,
        this.endTime,
        this.startTime
      );
      this.getoutboundquantity(
        this.outboundquantityval,
        this.outboundquantitynum,
        this.endTime,
        this.startTime
      );
      this.getoutboundquantitydb(
        this.outboundquantitydbval,
        this.outboundquantitydbnum,
        this.outboundquantitydborg,
        this.endTime,
        this.startTime
      );
      this.getlongoflibrary(
        this.longoflibraryval,
        this.longoflibrarynum,
        this.endTime,
        this.startTime
      );
    },

    //获取库存量
    getinventoryamount(type, timeType, endTime, startTime) {
      getWare({ type, timeType, endTime, startTime }).then(res => {
       
        if (res.data.code === 0) {
          let datas = res.data.data;
          let arr = [];
          let arrs = [];
          if (timeType === 1) {
            //日
            arr = [];
            this.inventoryamount.thisxAxis = [];
            this.inventoryamount.datavalue = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.inventoryamount.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.inventoryamount.thisxAxis.push(datas[i].date);
            }
            //data复制
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].warehouse_car_num === null
                        ? 0
                        : datas[i].warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                   
                    type: "line"
                  };
                  obj.data = [
                    datas[i].warehouse_car_num === null
                      ? 0
                      : datas[i].warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                 
                  type: "line"
                };
                obj.data = [
                  datas[i].warehouse_car_num === null
                    ? 0
                    : datas[i].warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.inventoryamount.datavalue = arr;
          } else if (timeType === 2) {
            //周
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.inventoryamount.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.inventoryamount.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.inventoryamount.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].warehouse_car_num === null
                        ? 0
                        : datas[i].warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                   
                    type: "line"
                  };
                  obj.data = [
                    datas[i].warehouse_car_num === null
                      ? 0
                      : datas[i].warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                 
                  type: "line"
                };
                obj.data = [
                  datas[i].warehouse_car_num === null
                    ? 0
                    : datas[i].warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.inventoryamount.datavalue = arr;
          } else if (timeType === 3) {
            //月
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.inventoryamount.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.inventoryamount.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.inventoryamount.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].warehouse_car_num === null
                        ? 0
                        : datas[i].warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                   
                    type: "line"
                  };
                  obj.data = [
                    datas[i].warehouse_car_num === null
                      ? 0
                      : datas[i].warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                 
                  type: "line"
                };
                obj.data = [
                  datas[i].warehouse_car_num === null
                    ? 0
                    : datas[i].warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.inventoryamount.datavalue = arr;
          }
          this.inventoryamountDataSuccess = true;
        }
      });
    },
    //库存量同期对比(辆)
    getinventoryamountdb(type, timeType, orgType, endTime, startTime) {
      getWare({ type, timeType, orgType, endTime, startTime }).then(res => {
         console.log('库存量')
        console.log(res)
        if (res.data.code === 0) {
          let datas = res.data.data;
          let arr = [];
          let arrs = [];
          if (timeType === 1) {
            //日
            arr = [];
            this.inventoryamountdb.thisxAxis = [];
            this.inventoryamountdb.datavalue = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.inventoryamountdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.inventoryamountdb.thisxAxis.push(datas[i].date);
            }
            //data复制
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].warehouse_car_num === null
                        ? 0
                        : datas[i].warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].warehouse_car_num === null
                      ? 0
                      : datas[i].warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].warehouse_car_num === null
                    ? 0
                    : datas[i].warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.inventoryamountdb.datavalue = arr;
          } else if (timeType === 2) {
            //周
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.inventoryamountdb.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.inventoryamountdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.inventoryamountdb.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].warehouse_car_num === null
                        ? 0
                        : datas[i].warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].warehouse_car_num === null
                      ? 0
                      : datas[i].warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].warehouse_car_num === null
                    ? 0
                    : datas[i].warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.inventoryamountdb.datavalue = arr;
          } else if (timeType === 3) {
            //月
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.inventoryamountdb.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.inventoryamountdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.inventoryamountdb.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].warehouse_car_num === null
                        ? 0
                        : datas[i].warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].warehouse_car_num === null
                      ? 0
                      : datas[i].warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].warehouse_car_num === null
                    ? 0
                    : datas[i].warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.inventoryamountdb.datavalue = arr;
          }
          this.inventoryamountdbDataSuccess = true;
          //去年
          gettrastWare({ type, timeType, orgType, endTime, startTime }).then(
            res => {
           
              if (res.data.code === 0) {
                let datas = res.data.data;
                let arrs=[]
               
                if (timeType === 1) {
                  //日
                  // arr = [];
                  // this.inventoryamountdb.thisxAxis = [];
                  // this.inventoryamountdb.datavalue = [];
                  let obj = {};
                  arrs = [];
                  datas.forEach(item => {
                    if (obj[item.code_name + item.date]) {
                      let numbers =
                        obj[item.code_name + item.date].warehouse_car_num ===
                        null
                          ? 0
                          : obj[item.code_name + item.date].warehouse_car_num;
                      let objnumbers =
                        item.warehouse_car_num === null
                          ? 0
                          : item.warehouse_car_num;
                      obj[item.code_name + item.date].warehouse_car_num =
                        numbers + objnumbers;
                    } else {
                      obj[item.code_name + item.date] = item;
                    }
                  });
                  for (let key in obj) {
                    arrs.push(obj[key]);
                  }
                  datas = arrs;
            
                  for (var i = 0; i < datas.length; i++) {
                    if (
                      this.inventoryamountdb.thisxAxis.includes(datas[i].date)||datas[i].date===null
                    ) {
                      continue;
                    }
                    this.inventoryamountdb.thisxAxis.push(datas[i].date);
                  }
                  //data复制
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_warehouse_car_num === null
                              ? 0
                              : datas[i].lastyear_warehouse_car_num
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_warehouse_car_num === null
                            ? 0
                            : datas[i].lastyear_warehouse_car_num
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_warehouse_car_num === null
                          ? 0
                          : datas[i].lastyear_warehouse_car_num
                      ];
                      arr.push(obj);
                    }
                  }
                  this.inventoryamountdb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.inventoryamountdb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                            console.log('库存量')
        console.log(this.inventoryamountdb)
                } else if (timeType === 2) {
                  //周
                  // arr = [];
                  // this.inventoryamountdb.thisxAxis = [];
                  for (var i = 0; i < datas.length; i++) {
                    if (
                      this.inventoryamountdb.thisxAxis.includes(datas[i].date)||datas[i].date===null
                    ) {
                      continue;
                    }
                    this.inventoryamountdb.thisxAxis.push(datas[i].date);
                  }
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_warehouse_car_num === null
                              ? 0
                              : datas[i].lastyear_warehouse_car_num
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_warehouse_car_num === null
                            ? 0
                            : datas[i].lastyear_warehouse_car_num
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_warehouse_car_num === null
                          ? 0
                          : datas[i].lastyear_warehouse_car_num
                      ];
                      arr.push(obj);
                    }
                  }
                  this.inventoryamountdb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.inventoryamountdb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                 
                } else if (timeType === 3) {
                  //月
                  // arr = [];
                  // this.inventoryamountdb.thisxAxis = [];
                  for (var i = 0; i < datas.length; i++) {
                    if (
                      this.inventoryamountdb.thisxAxis.includes(datas[i].date)||datas[i].date===null
                    ) {
                      continue;
                    }
                    this.inventoryamountdb.thisxAxis.push(datas[i].date);
                  }
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_warehouse_car_num === null
                              ? 0
                              : datas[i].lastyear_warehouse_car_num
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_warehouse_car_num === null
                            ? 0
                            : datas[i].lastyear_warehouse_car_num
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_warehouse_car_num === null
                          ? 0
                          : datas[i].lastyear_warehouse_car_num
                      ];
                      arr.push(obj);
                    }
                  }
                  this.inventoryamountdb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.inventoryamountdb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                }
              }
            }
          );
          
        }
      });
    },
    //获取入库量
    getreceipt(type, timeType, endTime, startTime) {
      getInWare({ type, timeType, endTime, startTime }).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          let datas = res.data.data;
          let arrs = [];
          let arr = [];
          if (timeType === 1) {
            //日
            arr = [];
            this.receipt.thisxAxis = [];
            this.receipt.datavalue = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.receipt.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.receipt.thisxAxis.push(datas[i].date);
            }
            //data复制
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_inwarehouse_car === null
                        ? 0
                        : datas[i].start_inwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_inwarehouse_car === null
                      ? 0
                      : datas[i].start_inwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_inwarehouse_car === null
                    ? 0
                    : datas[i].start_inwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.receipt.datavalue = arr;
          } else if (timeType === 2) {
            //周
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.receipt.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.receipt.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.receipt.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_inwarehouse_car === null
                        ? 0
                        : datas[i].start_inwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_inwarehouse_car === null
                      ? 0
                      : datas[i].start_inwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_inwarehouse_car === null
                    ? 0
                    : datas[i].start_inwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.receipt.datavalue = arr;
          } else if (timeType === 3) {
            //月
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.receipt.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.receipt.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.receipt.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_inwarehouse_car === null
                        ? 0
                        : datas[i].start_inwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_inwarehouse_car === null
                      ? 0
                      : datas[i].start_inwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_inwarehouse_car === null
                    ? 0
                    : datas[i].start_inwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.receipt.datavalue = arr;
          }

          this.receiptDataSuccess = true;
        }
      });
    },
    //获取入库量同期对比(辆)
    getreceiptdb(type, timeType, orgType, endTime, startTime) {
      getInWare({ type, timeType, orgType, endTime, startTime }).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          let datas = res.data.data;
          let arrs = [];
          let arr = [];
          if (timeType === 1) {
            //日
            arr = [];
            this.receiptdb.thisxAxis = [];
            this.receiptdb.datavalue = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.receiptdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.receiptdb.thisxAxis.push(datas[i].date);
            }
            //data复制
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_inwarehouse_car === null
                        ? 0
                        : datas[i].start_inwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_inwarehouse_car === null
                      ? 0
                      : datas[i].start_inwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_inwarehouse_car === null
                    ? 0
                    : datas[i].start_inwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.receiptdb.datavalue = arr;
          } else if (timeType === 2) {
            //周
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.receiptdb.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.receiptdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.receiptdb.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_inwarehouse_car === null
                        ? 0
                        : datas[i].start_inwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_inwarehouse_car === null
                      ? 0
                      : datas[i].start_inwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_inwarehouse_car === null
                    ? 0
                    : datas[i].start_inwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.receiptdb.datavalue = arr;
          } else if (timeType === 3) {
            //月
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.receiptdb.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.receiptdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.receiptdb.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_inwarehouse_car === null
                        ? 0
                        : datas[i].start_inwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_inwarehouse_car === null
                      ? 0
                      : datas[i].start_inwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_inwarehouse_car === null
                    ? 0
                    : datas[i].start_inwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.receiptdb.datavalue = arr;
          }

          this.receiptdbDataSuccess = true;
          //去年
          gettrastInWare({ type, timeType, orgType, endTime, startTime }).then(
            res => {
              console.log(res)
              if (res.data.code === 0) {
                let datas = res.data.data;
                if (timeType === 1) {
                  //日
                  // arr=[]
                  // this.receiptdb.thisxAxis = [];
                  // this.receiptdb.datavalue = [];
                  for (var i = 0; i < datas.length; i++) {
                    if (this.receiptdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                      continue;
                    }
                    this.receiptdb.thisxAxis.push(datas[i].date);
                  }
                  //data复制
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_start_inwarehouse_car === null
                              ? 0
                              : datas[i].lastyear_start_inwarehouse_car
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_start_inwarehouse_car === null
                            ? 0
                            : datas[i].lastyear_start_inwarehouse_car
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_start_inwarehouse_car === null
                          ? 0
                          : datas[i].lastyear_start_inwarehouse_car
                      ];
                      arr.push(obj);
                    }
                  }
                  this.receiptdb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.receiptdb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                } else if (timeType === 2) {
                  //周
                  // arr = []
                  // this.receiptdb.thisxAxis = [];
                  for (var i = 0; i < datas.length; i++) {
                    if (this.receiptdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                      continue;
                    }
                    this.receiptdb.thisxAxis.push(datas[i].date);
                  }
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_start_inwarehouse_car === null
                              ? 0
                              : datas[i].lastyear_start_inwarehouse_car
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_start_inwarehouse_car === null
                            ? 0
                            : datas[i].lastyear_start_inwarehouse_car
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_start_inwarehouse_car === null
                          ? 0
                          : datas[i].lastyear_start_inwarehouse_car
                      ];
                      arr.push(obj);
                    }
                  }
                  this.receiptdb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.receiptdb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                } else if (timeType === 3) {
                  //月
                  // arr=[]
                  // this.receiptdb.thisxAxis = [];
                  for (var i = 0; i < datas.length; i++) {
                    if (this.receiptdb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                      continue;
                    }
                    this.receiptdb.thisxAxis.push(datas[i].date);
                  }
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_start_inwarehouse_car === null
                              ? 0
                              : datas[i].lastyear_start_inwarehouse_car
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_start_inwarehouse_car === null
                            ? 0
                            : datas[i].lastyear_start_inwarehouse_car
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_start_inwarehouse_car === null
                          ? 0
                          : datas[i].lastyear_start_inwarehouse_car
                      ];
                      arr.push(obj);
                    }
                  }
                  this.receiptdb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.receiptdb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                }
              }
            }
          );
        }
      });
    },
    //获取出库量
    getoutboundquantity(type, timeType, endTime, startTime) {
      getOutWare({ type, timeType, endTime, startTime }).then(res => {
         console.log(res)
        if (res.data.code === 0) {
          let datas = res.data.data;
          let arr = [];
          let arrs = [];
          if (timeType === 1) {
            //日
            arr = [];
            this.outboundquantity.thisxAxis = [];
            this.outboundquantity.datavalue = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.outboundquantity.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.outboundquantity.thisxAxis.push(datas[i].date);
            }
            //data复制

            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_outwarehouse_car === null
                        ? 0
                        : datas[i].start_outwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_outwarehouse_car === null
                      ? 0
                      : datas[i].start_outwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_outwarehouse_car === null
                    ? 0
                    : datas[i].start_outwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.outboundquantity.datavalue = arr;
          } else if (timeType === 2) {
            //周
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
           
            datas = arrs;
            this.outboundquantity.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.outboundquantity.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.outboundquantity.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_outwarehouse_car === null
                        ? 0
                        : datas[i].start_outwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_outwarehouse_car === null
                      ? 0
                      : datas[i].start_outwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_outwarehouse_car === null
                    ? 0
                    : datas[i].start_outwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.outboundquantity.datavalue = arr;
          } else if (timeType === 3) {
            //月
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.outboundquantity.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.outboundquantity.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.outboundquantity.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_outwarehouse_car === null
                        ? 0
                        : datas[i].start_outwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_outwarehouse_car === null
                      ? 0
                      : datas[i].start_outwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_outwarehouse_car === null
                    ? 0
                    : datas[i].start_outwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.outboundquantity.datavalue = arr;
          }

          this.outboundquantityDataSuccess = true;
        }
      });
    },
    //出库量同期对比
    getoutboundquantitydb(type, timeType, orgType, endTime, startTime) {
      getOutWare({ type, timeType, orgType, endTime, startTime }).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          let datas = res.data.data;
          let arr = [];
          let arrs = [];
          if (timeType === 1) {
            //日
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.outboundquantitydb.thisxAxis = [];
            this.outboundquantitydb.datavalue = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.outboundquantitydb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.outboundquantitydb.thisxAxis.push(datas[i].date);
            }
            //data复制

            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_outwarehouse_car === null
                        ? 0
                        : datas[i].start_outwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_outwarehouse_car === null
                      ? 0
                      : datas[i].start_outwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_outwarehouse_car === null
                    ? 0
                    : datas[i].start_outwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.outboundquantitydb.datavalue = arr;
          } else if (timeType === 2) {
            //周
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.outboundquantitydb.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.outboundquantitydb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.outboundquantitydb.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_outwarehouse_car === null
                        ? 0
                        : datas[i].start_outwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_outwarehouse_car === null
                      ? 0
                      : datas[i].start_outwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_outwarehouse_car === null
                    ? 0
                    : datas[i].start_outwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.outboundquantitydb.datavalue = arr;
          } else if (timeType === 3) {
            //月
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.outboundquantitydb.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.outboundquantitydb.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.outboundquantitydb.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === "今年" + datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].start_outwarehouse_car === null
                        ? 0
                        : datas[i].start_outwarehouse_car
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: "今年" + datas[i].code_name,
                    smooth: true,
                    
                    type: "line"
                  };
                  obj.data = [
                    datas[i].start_outwarehouse_car === null
                      ? 0
                      : datas[i].start_outwarehouse_car
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: "今年" + datas[i].code_name,
                  smooth: true,
                  
                  type: "line"
                };
                obj.data = [
                  datas[i].start_outwarehouse_car === null
                    ? 0
                    : datas[i].start_outwarehouse_car
                ];
                arr.push(obj);
              }
            }
            this.outboundquantitydb.datavalue = arr;
          }
          this.outboundquantitydbDataSuccess = true;
          //去年
          gettrastOutWare({ type, timeType, orgType, endTime, startTime }).then(
            res => {
              console.log(res)
              if (res.data.code === 0) {
                let datas = res.data.data;
                if (timeType === 1) {
                  //日
                  // arr=[]
                  // this.outboundquantitydb.thisxAxis = [];
                  // this.outboundquantitydb.datavalue = [];
                  for (var i = 0; i < datas.length; i++) {
                    if (
                      this.outboundquantitydb.thisxAxis.includes(datas[i].date)||datas[i].date===null
                    ) {
                      continue;
                    }
                    this.outboundquantitydb.thisxAxis.push(datas[i].date);
                  }
                  //data复制

                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_start_outwarehouse_car === null
                              ? 0
                              : datas[i].lastyear_start_outwarehouse_car
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_start_outwarehouse_car === null
                            ? 0
                            : datas[i].lastyear_start_outwarehouse_car
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_start_outwarehouse_car === null
                          ? 0
                          : datas[i].lastyear_start_outwarehouse_car
                      ];
                      arr.push(obj);
                    }
                  }
                  this.outboundquantitydb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.outboundquantitydb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                } else if (timeType === 2) {
                  //周
                  // arr = []
                  // this.outboundquantitydb.thisxAxis = [];
                  let obj = {};
                  arrs = [];
                  datas.forEach(item => {
                    if (obj[item.code_name + item.date]) {
                      let numbers =
                        obj[item.code_name + item.date].warehouse_car_num ===
                        null
                          ? 0
                          : obj[item.code_name + item.date].warehouse_car_num;
                      let objnumbers =
                        item.warehouse_car_num === null
                          ? 0
                          : item.warehouse_car_num;
                      obj[item.code_name + item.date].warehouse_car_num =
                        numbers + objnumbers;
                    } else {
                      obj[item.code_name + item.date] = item;
                    }
                  });
                  for (let key in obj) {
                    arrs.push(obj[key]);
                  }
                  datas = arrs;
                  for (var i = 0; i < datas.length; i++) {
                    if (
                      this.outboundquantitydb.thisxAxis.includes(datas[i].date)||datas[i].date===null
                    ) {
                      continue;
                    }
                    this.outboundquantitydb.thisxAxis.push(datas[i].date);
                  }
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_start_outwarehouse_car === null
                              ? 0
                              : datas[i].lastyear_start_outwarehouse_car
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_start_outwarehouse_car === null
                            ? 0
                            : datas[i].lastyear_start_outwarehouse_car
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_start_outwarehouse_car === null
                          ? 0
                          : datas[i].lastyear_start_outwarehouse_car
                      ];
                      arr.push(obj);
                    }
                  }
                  this.outboundquantitydb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.outboundquantitydb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                } else if (timeType === 3) {
                  //月
                  // arr=[]
                  // this.outboundquantitydb.thisxAxis = [];
                  for (var i = 0; i < datas.length; i++) {
                    if (
                      this.outboundquantitydb.thisxAxis.includes(datas[i].date)||datas[i].date===null
                    ) {
                      continue;
                    }
                    this.outboundquantitydb.thisxAxis.push(datas[i].date);
                  }
                  for (var i = 0; i < datas.length; i++) {
                    if (arr.length > 0) {
                      let off = arr.some((item, index) => {
                        if (item.name === "去年" + datas[i].code_name) {
                          arr[index].data.push(
                            datas[i].lastyear_start_outwarehouse_car === null
                              ? 0
                              : datas[i].lastyear_start_outwarehouse_car
                          );
                          return true;
                        } else {
                          return false;
                        }
                      });
                      if (!off) {
                        let obj = {
                          name: "去年" + datas[i].code_name,
                          smooth: true,
                          
                          type: "line"
                        };
                        obj.data = [
                          datas[i].lastyear_start_outwarehouse_car === null
                            ? 0
                            : datas[i].lastyear_start_outwarehouse_car
                        ];
                        arr.push(obj);
                      }
                    } else {
                      let obj = {
                        name: "去年" + datas[i].code_name,
                        smooth: true,
                        
                        type: "line"
                      };
                      obj.data = [
                        datas[i].lastyear_start_outwarehouse_car === null
                          ? 0
                          : datas[i].lastyear_start_outwarehouse_car
                      ];
                      arr.push(obj);
                    }
                  }
                  this.outboundquantitydb.datavalue=arr.map(item=>{
                    if(item.name.includes('去年')&&item.data.length<=1){
                      let ainit=[]
                       this.outboundquantitydb.thisxAxis.forEach((it,index)=>{
                                ainit.push(0) 
                       })
                       item.data=ainit
                    }
                    return item
                  })
                }
              }
            }
          );
        }
      });
    },
    //获取长库龄商品车数量
    getlongoflibrary(type, timeType, endTime, startTime) {
      getLongTimeWare({ type, timeType, endTime, startTime }).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          let datas = res.data.data;
          let arrs = [];
          let arr = [];
          if (timeType === 1) {
            //日
            arr = [];
            this.longoflibrary.thisxAxis = [];
            this.longoflibrary.data = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.longoflibrary.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.longoflibrary.thisxAxis.push(datas[i].date);
            }
            //data复制
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].longtime_warehouse_car_num === null
                        ? 0
                        : datas[i].longtime_warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: false,
                    stack: "总量",
                    type: "bar",
                    barWidth: 20
                  };
                  obj.data = [
                    datas[i].longtime_warehouse_car_num === null
                      ? 0
                      : datas[i].longtime_warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: false,
                    stack: "总量",
                  type: "bar",
                  barWidth: 20
                };
                obj.data = [
                  datas[i].longtime_warehouse_car_num === null
                    ? 0
                    : datas[i].longtime_warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            
            this.longoflibrary.data = arr;
            
          } else if (timeType === 2) {
            //周
       
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.longoflibrary.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.longoflibrary.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.longoflibrary.thisxAxis.push(datas[i].date);
            }
            // '陈凯')
            // this.longoflibrary.thisxAxis)
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].longtime_warehouse_car_num === null
                        ? 0
                        : datas[i].longtime_warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: false,
                      stack: "总量",
                    type: "bar",
                    barWidth: 20
                  };
                  obj.data = [
                    datas[i].longtime_warehouse_car_num === null
                      ? 0
                      : datas[i].longtime_warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: false,
                    stack: "总量",
                  type: "bar",
                  barWidth: 20
                };
                obj.data = [
                  datas[i].longtime_warehouse_car_num === null
                    ? 0
                    : datas[i].longtime_warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.longoflibrary.data = arr;
           
          } else if (timeType === 3) {
            //月
            arr = [];
            let obj = {};
            arrs = [];
            datas.forEach(item => {
              if (obj[item.code_name + item.date]) {
                let numbers =
                  obj[item.code_name + item.date].warehouse_car_num === null
                    ? 0
                    : obj[item.code_name + item.date].warehouse_car_num;
                let objnumbers =
                  item.warehouse_car_num === null ? 0 : item.warehouse_car_num;
                obj[item.code_name + item.date].warehouse_car_num =
                  numbers + objnumbers;
              } else {
                obj[item.code_name + item.date] = item;
              }
            });
            for (let key in obj) {
              arrs.push(obj[key]);
            }
            datas = arrs;
            this.longoflibrary.thisxAxis = [];
            for (var i = 0; i < datas.length; i++) {
              if (this.longoflibrary.thisxAxis.includes(datas[i].date)||datas[i].date===null) {
                continue;
              }
              this.longoflibrary.thisxAxis.push(datas[i].date);
            }
            for (var i = 0; i < datas.length; i++) {
              if (arr.length > 0) {
                let off = arr.some((item, index) => {
                  if (item.name === datas[i].code_name) {
                    arr[index].data.push(
                      datas[i].longtime_warehouse_car_num === null
                        ? 0
                        : datas[i].longtime_warehouse_car_num
                    );
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!off) {
                  let obj = {
                    name: datas[i].code_name,
                    smooth: false,
                      stack: "总量",
                    type: "bar",
                    barWidth: 20
                  };
                  obj.data = [
                    datas[i].longtime_warehouse_car_num === null
                      ? 0
                      : datas[i].longtime_warehouse_car_num
                  ];
                  arr.push(obj);
                }
              } else {
                let obj = {
                  name: datas[i].code_name,
                  smooth: false,
                    stack: "总量",
                  type: "bar",
                  barWidth: 20
                };
                obj.data = [
                  datas[i].longtime_warehouse_car_num === null
                    ? 0
                    : datas[i].longtime_warehouse_car_num
                ];
                arr.push(obj);
              }
            }
            this.longoflibrary.data = arr;
           
          }

          this.longoflibraryDataSuccess = true;
        }
      });
    },
    // // gettrastLongTimeWare
    // 	//获取长库龄商品车数量
    //   getlongoflibrary(type,timeType,endTime,startTime) {
    //     gettrastLongTimeWare({type,timeType, endTime, startTime}).then(res => {
    //       res);
    // });
    // },

    //库存量 日月周事件
    clickinventoryamountnum(valuetype) {
      this.inventoryamountnum = valuetype.current || this.inventoryamountnum;
      this.inventoryamountval = valuetype.type || this.inventoryamountval;
      this.getinventoryamount(
        this.inventoryamountval,
        this.inventoryamountnum,
        this.endTime,
        this.startTime
      );
    },
    //库存量同期对比(辆) 日月周事件
    clickinventoryamountdbnum(valuetype) {
      this.inventoryamountdbnum =
        valuetype.current || this.inventoryamountdbnum;
      this.inventoryamountdbval = valuetype.type || this.inventoryamountdbval;
      this.inventoryamountdborg =
        valuetype.org_type || this.inventoryamountdborg;
     
      this.getinventoryamountdb(
        this.inventoryamountdbval,
        this.inventoryamountdbnum,
        this.inventoryamountdborg,
        this.endTime,
        this.startTime
      );
    },
    //入库量 日月周事件
    clickreceiptnum(valuetype) {
      this.receiptnum = valuetype.current || this.receiptnum;
      this.receiptnumval = valuetype.type || this.receiptnumval;
      this.getreceipt(
        this.receiptnumval,
        this.receiptnum,
        this.endTime,
        this.startTime
      );
    },
    //入库量同期对比(辆) 日月周事件
    clickreceiptdbnum(valuetype) {
      this.receiptdbnum = valuetype.current || this.receiptdbnum; //日 月 周
      this.receiptdborg = valuetype.org_type || this.receiptdborg; //第二个下拉框
      this.receiptdbval = valuetype.type || this.receiptdbval; //第一个下拉框
      this.getreceiptdb(
        this.receiptdbval,
        this.receiptdbnum,
        this.receiptdborg,
        this.endTime,
        this.startTime
      );
    },
    //出库量 日月周事件
    clickoutboundquantitynum(valuetype) {
      this.outboundquantitynum = valuetype.current || this.outboundquantitynum;
      this.outboundquantityval = valuetype.type || this.outboundquantityval;
      this.getoutboundquantity(
        this.outboundquantityval,
        this.outboundquantitynum,
        this.endTime,
        this.startTime
      );
    },
    //出库量同期对比 日月周事件
    clickoutboundquantitydbnum(valuetype) {
      this.outboundquantitydbnum =
        valuetype.current || this.outboundquantitydbnum;
      this.outboundquantitydborg =
        valuetype.org_type || this.outboundquantitydborg;
      this.outboundquantitydbval = valuetype.type || this.outboundquantitydbval;
      this.getoutboundquantitydb(
        this.outboundquantitydbval,
        this.outboundquantitydbnum,
        this.outboundquantitydborg,
        this.endTime,
        this.startTime
      );
    },
    //长库龄商品车数量 日月周事件
    clicklongoflibrarynum(valuetype) {
      this.longoflibrarynum = valuetype.current || this.longoflibrarynum;
      this.longoflibraryval = valuetype.type || this.longoflibraryval;
      this.getlongoflibrary(
        this.longoflibraryval,
        this.longoflibrarynum,
        this.endTime,
        this.startTime
      );
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.inventoryamountDataSuccess = true;
    //   this.inventoryamount.title = "kkkkkk";
    // }, 5000);
    //参数： 第一个下拉框值   日月周   结束时间  开时时间
    this.getinventoryamount(
      this.inventoryamountval,
      this.inventoryamountnum,
      this.endTime,
      this.startTime
    );
    //参数： 第一个下拉框值   日月周   第二下拉框  开时时间    结束时间
    this.getinventoryamountdb(
      this.inventoryamountdbval,
      this.inventoryamountdbnum,
      this.inventoryamountdborg,
      this.endTime,
      this.startTime
    );
    this.getreceipt(
      this.receiptnumval,
      this.receiptnum,
      this.endTime,
      this.startTime
    );
    this.getreceiptdb(
      this.receiptdbval,
      this.receiptdbnum,
      this.receiptdborg,
      this.endTime,
      this.startTime
    );
    this.getoutboundquantity(
      this.outboundquantityval,
      this.outboundquantitynum,
      this.endTime,
      this.startTime
    );
    this.getoutboundquantitydb(
      this.outboundquantitydbval,
      this.outboundquantitydbnum,
      this.outboundquantitydborg,
      this.endTime,
      this.startTime
    );
    this.getlongoflibrary(
      this.longoflibraryval,
      this.longoflibrarynum,
      this.endTime,
      this.startTime
    );
  }
};
</script>
<style lang="scss">
// .contain{margin-left: 10%;position: absolute;left: 0;right: 0;top: 90px;overflow: auto;bottom: 1px;}
@import url("../../../public/css/css/style.css");

.el-date-editor .el-range-separator {
  width: 10%;
}
.mod-demo-echarts {
  .chart-box {
    min-height: 400px;
  }
}
.transport-box {
   margin-left: 150px;
   margin-top: 40px;
  #anchornavigation {
    width: 80px;
    padding: 10px 0;
    background: #fff;
    margin-left: 2%;
    border: 1px solid #e0e0eb;
    box-shadow: 0 3px 4px 0 rgba(98, 99, 118, 0.08);
    li {
      height: auto;
      line-height: normal;
      padding: 10px 9px;
      box-sizing: border-box;
      a {
        font-size: 13px;
        color: #84849a;
        text-align: center;
        display: block;
      }
    }
    .active a {
      color: #da212d;
    }
  }
  .containBox {
    margin-left: 20%;
    position: absolute;
    left: 0;
    right: 0;
    top: 140px;
    overflow: auto;
    bottom: 1px;
    > div {
      background: #fff;
      padding: 10px 0;
      margin: 0 20px 30px 0;
      border: 1px solid #e0e0eb;
    }
    .height40.linheight40.margintop10 {
      .el-col.el-col-14 {
        float: right;
        .el-row {
          display: flex;
          justify-content: flex-end;
          position: static !important;
          right: 0 !important;
          .el-col.el-col-3 {
            position: static !important;
            right: 0 !important;
          }
        }
      }
    }
  }
}
</style>
