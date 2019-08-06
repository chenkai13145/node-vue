<template>
  <div class="app">
    <!-- <p>{{title}}</p> -->
    <div class="city">
      <!-- <input type="text" v-model="citys" placeholder="出发城市" @focus="showCityDialog"> -->
      <el-input style="width:100%;" :placeholder="textVal" @keydown.space="keySearch" @keyup.native="keySearch" @change="pp()"  @blur="hidenn"  v-model="citys" @focus="showCityDialog"  clearable></el-input>
      <div class="city-components" v-show="showCity">
        <!-- 注释头部 -->
        <div v-show="turnoff" style="text-align:left;margin:-10px 0 10px 10px;color:#ccc;">
              支持汉字/拼音/英文字母
        </div>
        <!-- NAV -->
        <ul v-show="turnoff" class="filter-tabar clearfix">
          <li
            v-for="(item,index) in cityListKey"
            :class="{active:upCityListIndex==index}"
            @mouseover="upCityListKey(index)"
            :key="index"
          >{{item}}</li>
        </ul>
        <!-- content -->
        <div v-show="turnoff" class="city-content">
          <ul
            v-for="(item,index) in upCityList"
            v-show="item.ckey=='R'?false:true"
            :key="index"
            :class="upCityListIndex=='0'?'clearfix':'clearfix  rr'"
          >
            <label for v-show="upCityListIndex=='0'?false:true">{{item.ckey}}</label>
            <li
              v-for="(ritem,i) in item.cityList"
              :key="i"
              @click="selectDepCity(ritem.airportName)"
            >{{ritem.airportName}}</li>
          </ul>
        </div>
        <!-- 拼音 -->
        <div class="city-ping" v-show="!turnoff">
          <ul>
            <li v-for="(item,index) in fiterList" :key="index" @click="selectDepCity(item.cityName)" style="text-align: left;padding:0px 4px; cursor: pointer; position: relative;">{{item.cityName}}<span style="position: absolute; right:4px;">{{item.airportName}}</span></li>
          </ul>
        </div>
        <!-- NOFOUND -->
        <div class="city-nofound" v-show="turnoffno" >
           
           <span style="text-algin:left; padding-left:20px">没有相关的内容</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { clearTimeout } from 'timers';

export default {
  name: "app",
  data() {
    return {
      title: "web秀 - VUE开发一个组件——Vue PC城市选择",
      showCity: false,
      fiterList:[],
      tmer:'',
      list: [
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "北京",
          airportName: "beijing",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "上海",
          airportName: "shanghai",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "广州",
          airportName: "guangzhou",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "深圳",
          airportName: "shengzheng",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "成都",
          airportName: "chengdu",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "重庆",
          airportName: "chongqing",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "厦门",
          airportName: "xiamen",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "昆明",
          airportName: "kunming",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "杭州",
          airportName: "hangzhou ",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "西安",
          airportName: "xian",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "武汉",
          airportName: "wuhan",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "长沙",
          airportName: "changsha",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "南京",
          airportName: "nanjing",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "大连",
          airportName: "阿松大",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "郑州",
          airportName: "zhengzhou",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "青岛",
          airportName: "qingdao",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "三亚",
          airportName: "sanya",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "海口",
          airportName: "haikou",
          status: 0
        },
        {
          airportCode: "热门",
          cityInfo: "阿尔玛塔",
          cityName: "乌鲁木齐",
          airportName: "wulumuqi",
          status: 0
        },

        {
          airportCode: "ABCDE",
          cityInfo: "AQ-安庆-ABCDE",
          cityName: "安庆",
          airportName: "anqin",
          status: 1,
          lat: 40.0881944004,
          lng: 116.6033998315
        },
        {
          airportCode: "ABCDE",
          cityInfo: "ALT-阿勒泰-ABCDE",
          cityName: "阿勒泰",
          airportName: "aletai",
          status: 0,
          lat: 47.3155940318,
          lng: 119.9293992017
        },
        {
          airportCode: "ABCDE",
          cityInfo: "AK-安康-ABCDE",
          cityName: "安康",
          airportName: "ankang",
          status: 0,
          lat: 47.3155940318,
          lng: 119.9293992017
        },
        {
          airportCode: "ABCDE",
          cityInfo: "AKS-阿克苏-ABCDE",
          cityName: "阿克苏",
          airportName: "akesu",
          status: 0,
          lat: 47.3155940318,
          lng: 119.9293992017
        },
        {
          airportCode: "ABCDE",
          cityInfo: "AS-安顺-ABCDE",
          cityName: "安顺",
          airportName: "anfu",
          status: 0,
          lat: 47.3155940318,
          lng: 119.9293992017
        },
        {
          airportCode: "BT",
          cityInfo: "BT-包头-BCDE",
          cityName: "包头",
          airportName: "baotou",
          status: 0,
          lat: 41.2657516858,
          lng: 80.3049157658
        },
        {
          airportCode: "BH",
          cityInfo: "BH-北海-BCDE",
          cityName: "北海",
          airportName: "beihai",
          status: 0,
          lat: 41.2657516858,
          lng: 80.3049157658
        },
        {
          airportCode: "BJ",
          cityInfo: "BJ-北京-BCDE",
          cityName: "北京",
          airportName: "beijing",
          status: 0,
          lat: 41.2657516858,
          lng: 80.3049157658
        },
        {
          airportCode: "BS",
          cityInfo: "BS-百色-BCDE",
          cityName: "百色",
          airportName: "baise",
          status: 0,
          lat: 41.2657516858,
          lng: 80.3049157658
        },
        {
          airportCode: "BS",
          cityInfo: "BS-保山-BCDE",
          cityName: "保山",
          airportName: "baoshan",
          status: 0,
          lat: 41.2657516858,
          lng: 80.3049157658
        },
        {
          airportCode: "CZ",
          cityInfo: "CZ-长治-CDE",
          cityName: "长治",
          airportName: "changzhi",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CC",
          cityInfo: "CC-长春-CDE",
          cityName: "长春",
          airportName: "changchun",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CZ",
          cityInfo: "CZ-常州-CDE",
          cityName: "常州",
          airportName: "changzhou",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CD",
          cityInfo: "CD-昌都-CDE",
          cityName: "昌都",
          airportName: "changdu",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CY",
          cityInfo: "CY-朝阳-CDE",
          cityName: "朝阳",
          airportName: "chaoyang",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CD",
          cityInfo: "CD-常德-CDE",
          cityName: "常德",
          airportName: "changde",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CBS",
          cityInfo: "CBS-长白山-CDE",
          cityName: "长白山",
          airportName: "changbaishan",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CD",
          cityInfo: "CD-成都-CDE",
          cityName: "成都",
          airportName: "chengdu",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CQ",
          cityInfo: "CQ-重庆-CDE",
          cityName: "重庆",
          airportName: "chongqing",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CS",
          cityInfo: "CS-长沙-CDE",
          cityName: "长沙",
          airportName: "changsha",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CF",
          cityInfo: "CF-赤峰-CDE",
          cityName: "赤峰",
          airportName: "chifeng",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },
        {
          airportCode: "CZ",
          cityInfo: "CZ-潮州-CDE",
          cityName: "潮州",
          airportName: "chaozhou",
          status: 0,
          lat: 32.1081287447,
          lng: 80.0637591367
        },

        {
          airportCode: "DA",
          cityInfo: "DA-大同-DE",
          cityName: "大同",
          airportName: "datong",
          status: 0
        },
        {
          airportCode: "DL",
          cityInfo: "DL-大连-DE",
          cityName: "大连",
          airportName: "dalian",
          status: 0
        },
        {
          airportCode: "DX",
          cityInfo: "DX-达县-DE",
          cityName: "达县",
          airportName: "daxian",
          status: 0
        },
        {
          airportCode: "DY",
          cityInfo: "DY-东营-DE",
          cityName: "东营",
          airportName: "dongyin",
          status: 0
        },
        {
          airportCode: "DQ",
          cityInfo: "DQ-大庆-DE",
          cityName: "大庆",
          airportName: "daqing",
          status: 0
        },
        {
          airportCode: "DD",
          cityInfo: "DD-丹东-DE",
          cityName: "丹东",
          airportName: "dandong",
          status: 0
        },
        {
          airportCode: "DL",
          cityInfo: "DL-大理-DE",
          cityName: "大理",
          airportName: "dali",
          status: 0
        },
        {
          airportCode: "DH",
          cityInfo: "DH-敦辉-DE",
          cityName: "敦辉",
          airportName: "dunhui",
          status: 0
        },
        {
          airportCode: "DC",
          cityInfo: "DC-稻城-DE",
          cityName: "稻城",
          airportName: "daocheng",
          status: 0
        },
        {
          airportCode: "DLH",
          cityInfo: "DLH-德令哈-DE",
          cityName: "德令哈",
          airportName: "delinha",
          status: 0
        },

        {
          airportCode: "EEDS",
          cityInfo: "EEDS-鄂尔多斯-E",
          cityName: "鄂尔多斯",
          airportName: "eerduosi",
          status: 0,
          lat: 39.2338594871,
          lng: 101.449757309
        },
        {
          airportCode: "ES",
          cityInfo: "ES-恩施-E",
          cityName: "恩施",
          airportName: "enshi",
          status: 0,
          lat: 39.2338594871,
          lng: 101.449757309
        },

        {
          airportCode: "FZ",
          cityInfo: "FZ-福州-FGHJ",
          cityName: "福州",
          airportName: "fuzhou",
          status: 0,
          lat: 29.3464578386,
          lng: 120.0389750211
        },
        {
          airportCode: "FY",
          cityInfo: "FZ-阜阳-FGHJ",
          cityName: "阜阳",
          airportName: "fuyang",
          status: 0,
          lat: 29.3464578386,
          lng: 120.0389750211
        },

        {
          airportCode: "GY",
          cityInfo: "GY-贵阳-GHJ",
          cityName: "贵阳",
          airportName: "guiyang",
          status: 0,
          lat: 40.7461174707,
          lng: 114.9436254875
        },
        {
          airportCode: "GL",
          cityInfo: "GL-桂林-GHJ",
          cityName: "桂林",
          airportName: "guilin",
          status: 0,
          lat: 40.7461174707,
          lng: 114.9436254875
        },
        {
          airportCode: "GZ",
          cityInfo: "GZ-广州-GHJ",
          cityName: "广州",
          airportName: "guangzhou",
          status: 0,
          lat: 40.7461174707,
          lng: 114.9436254875
        },
        {
          airportCode: "GY",
          cityInfo: "GY-广元-GHJ",
          cityName: "广元",
          airportName: "guangyuan",
          status: 0,
          lat: 40.7461174707,
          lng: 114.9436254875
        },
        {
          airportCode: "GRM",
          cityInfo: "GRM-格尔木-GHJ",
          cityName: "格尔木",
          airportName: "geermu",
          status: 0,
          lat: 40.7461174707,
          lng: 114.9436254875
        },
        {
          airportCode: "GY",
          cityInfo: "GY-固原-GHJ",
          cityName: "固原",
          airportName: "guyuan",
          status: 0,
          lat: 40.7461174707,
          lng: 114.9436254875
        },

        {
          airportCode: "HHHT",
          cityInfo: "HHHT-呼和浩特-HJ",
          cityName: "呼和浩特",
          airportName: "huhehaote",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HM",
          cityInfo: "HM-哈密-HJ",
          cityName: "哈密",
          airportName: "hami",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HEL",
          cityInfo: "HEL-海拉尔-HJ",
          cityName: "海拉尔",
          airportName: "hailaer",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HEB",
          cityInfo: "HEB-哈尔滨-HJ",
          cityName: "哈尔滨",
          airportName: "haerbin",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HK",
          cityInfo: "HK-海口-HJ",
          cityName: "海口",
          airportName: "haikou",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HS",
          cityInfo: "HS-黄山-HJ",
          cityName: "黄山",
          airportName: "huangshan",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HZ",
          cityInfo: "HZ-杭州-HJ",
          cityName: "杭州",
          airportName: "hangzhou",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HD",
          cityInfo: "HD-邯郸-HJ",
          cityName: "邯郸",
          airportName: "handan",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HF",
          cityInfo: "HF-合肥-HJ",
          cityName: "合肥",
          airportName: "hefei",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HZ",
          cityInfo: "HZ-汉中-HJ",
          cityName: "汉中",
          airportName: "hanzhong",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HT",
          cityInfo: "HT-和田-HJ",
          cityName: "和田",
          airportName: "hetian",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HA",
          cityInfo: "HA-淮安-HJ",
          cityName: "淮安",
          airportName: "huaian",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },
        {
          airportCode: "HC",
          cityInfo: "HC-河池-HJ",
          cityName: "河池",
          airportName: "hechi",
          status: 0,
          lat: 29.9396135515,
          lng: 122.3683649114
        },

        {
          airportCode: "JJ",
          cityInfo: "JJ-晋江-J",
          cityName: "晋江",
          airportName: "jinjiang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JZG",
          cityInfo: "JZG-九寨沟-J",
          cityName: "九寨沟",
          airportName: "jiuzhaigou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JZ",
          cityInfo: "JZ-锦州-J",
          cityName: "锦州",
          airportName: "jingzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JDZ",
          cityInfo: "JDZ-景德镇-J",
          cityName: "景德镇",
          airportName: "jindezheng",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JGG",
          cityInfo: "JGG-嘉谷关-J",
          cityName: "嘉谷关",
          airportName: "jiaguguan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JGS",
          cityInfo: "JGS-井冈山-J",
          cityName: "井冈山",
          airportName: "jingangshan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JN",
          cityInfo: "JN-济宁-J",
          cityName: "济宁",
          airportName: "jining",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JJ",
          cityInfo: "JJ-九江-J",
          cityName: "九江",
          airportName: "jiujiang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JMI",
          cityInfo: "JMI-佳木斯-J",
          cityName: "佳木斯",
          airportName: "jiamusi",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JN",
          cityInfo: "JN-济南-J",
          cityName: "济南",
          airportName: "jinan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "JY",
          cityInfo: "JY-揭阳-J",
          cityName: "揭阳",
          airportName: "jieyang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },

        {
          airportCode: "KS",
          cityInfo: "KS-碦什-KLMNP",
          cityName: "碦什",
          airportName: "keshen",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "KM",
          cityInfo: "KM-昆明-KLMNP",
          cityName: "昆明",
          airportName: "kunming",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "KLMY",
          cityInfo: "KLMY-克拉玛依-KLMNP",
          cityName: "克拉玛依",
          airportName: "kulamayi",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "KEL",
          cityInfo: "KEL-库尔勒-KLMNP",
          cityName: "库尔勒",
          airportName: "kuerle",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "HC",
          cityInfo: "HC-库车-KLMNP",
          cityName: "库车",
          airportName: "kuche",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LZ",
          cityInfo: "LZ-兰州-LMNP",
          cityName: "兰州",
          airportName: "lanzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LY",
          cityInfo: "LY-洛阳-LMNP",
          cityName: "洛阳",
          airportName: "luoyang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LJ",
          cityInfo: "LJ-丽江-LMNP",
          cityName: "丽江",
          airportName: "lijiang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LS",
          cityInfo: "LS-拉萨-LMNP",
          cityName: "拉萨",
          airportName: "lasa",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LP",
          cityInfo: "LP-黎平-LMNP",
          cityName: "黎平",
          airportName: "liming",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LC",
          cityInfo: "LC-连城-LMNP",
          cityName: "连城",
          airportName: "liancheng",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LYG",
          cityInfo: "LYG-连云港-LMNP",
          cityName: "连云港",
          airportName: "lianyunguang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LC",
          cityInfo: "LC-临沧-LMNP",
          cityName: "临沧",
          airportName: "lincang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LJ",
          cityInfo: "LJ-临斤-LMNP",
          cityName: "临斤",
          airportName: "linjin",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LF",
          cityInfo: "LF-临汾-LMNP",
          cityName: "临汾",
          airportName: "linfen",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LZ",
          cityInfo: "LZ-林芝-LMNP",
          cityName: "林芝",
          airportName: "linzhi",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LPS",
          cityInfo: "LPS-六盘水-LMNP",
          cityName: "六盘水",
          airportName: "liupanshui",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LZ",
          cityInfo: "LZ-柳州-LMNP",
          cityName: "柳州",
          airportName: "liuzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "LZ",
          cityInfo: "LZ-泸州-LMNP",
          cityName: "泸州",
          airportName: "luzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "MDH",
          cityInfo: "MDH-牡丹花-MNP",
          cityName: "牡丹花",
          airportName: "mudanhua",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "MS",
          cityInfo: "MS-芒市-MNP",
          cityName: "芒市",
          airportName: "mangshi",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "MZL",
          cityInfo: "MZL-满洲里-MNP",
          cityName: "满洲里",
          airportName: "manzhouli",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "MY",
          cityInfo: "MY-绵阳-MNP",
          cityName: "绵阳",
          airportName: "manyang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "MX",
          cityInfo: "MX-梅县-MNP",
          cityName: "梅县",
          airportName: "meixian",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "MH",
          cityInfo: "MH-漠河-MNP",
          cityName: "漠河",
          airportName: "mohe",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },

        {
          airportCode: "NJ",
          cityInfo: "NJ-南京-MNP",
          cityName: "南京",
          airportName: "nanjing",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "NC",
          cityInfo: "NC-南充-MNP",
          cityName: "南充",
          airportName: "nanchong",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "NN",
          cityInfo: "NN-南宁-MNP",
          cityName: "南宁",
          airportName: "nanning",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "NY",
          cityInfo: "NY-南阳-MNP",
          cityName: "南阳",
          airportName: "nanyang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "NT",
          cityInfo: "NT-南通-MNP",
          cityName: "南通",
          airportName: "nantong",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "NLT",
          cityInfo: "NLT-那拉提-MNP",
          cityName: "那拉提",
          airportName: "nalati",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "NC",
          cityInfo: "NC-南昌-MNP",
          cityName: "南昌",
          airportName: "nanchang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "NB",
          cityInfo: "NB-宁波-MNP",
          cityName: "宁波",
          airportName: "ningbo",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },

        {
          airportCode: "PZH",
          cityInfo: "PZH-攀枝花-P",
          cityName: "攀枝花",
          airportName: "panzhihua",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },

        {
          airportCode: "QHD",
          cityInfo: "QHD-秦皇岛-QRSTW",
          cityName: "秦皇岛",
          airportName: "qinhuangdao",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "QY",
          cityInfo: "QY-庆阳-QRSTW",
          cityName: "庆阳",
          airportName: "qingyang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "QQHE",
          cityInfo: "QQHE-齐齐哈尔-QRSTW",
          cityName: "齐齐哈尔",
          airportName: "qiqihaer",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "QD",
          cityInfo: "QD-青岛-QRSTW",
          cityName: "青岛",
          airportName: "qindao",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "QZ",
          cityInfo: "QZ-衢州-QRSTW",
          cityName: "衢州",
          airportName: "quezhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },

        {
          airportCode: "SZ",
          cityInfo: "SZ-深圳-STW",
          cityName: "深圳",
          airportName: "shengzheng",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "SJZ",
          cityInfo: "SJZ-石家庄-STW",
          cityName: "石家庄",
          airportName: "shijiazhuang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "SY",
          cityInfo: "SY-三亚-STW",
          cityName: "三亚",
          airportName: "sanya",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "SZ",
          cityInfo: "SZ-沈州-STW",
          cityName: "沈州",
          airportName: "shenzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "SH",
          cityInfo: "SH-上海-STW",
          cityName: "上海",
          airportName: "shanghai",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "SM",
          cityInfo: "SM-思茅-STW",
          cityName: "思茅",
          airportName: "simao",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "SLJ",
          cityInfo: "SLJ-神龙架-STW",
          cityName: "神龙架",
          airportName: "shenlongjia",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "SY",
          cityInfo: "SY-邵阳-STW",
          cityName: "邵阳",
          airportName: "shaoyang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "TR",
          cityInfo: "TR-铜仁-TW",
          cityName: "铜仁",
          airportName: "tongren",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "TC",
          cityInfo: "TC-塔城-TW",
          cityName: "塔城",
          airportName: "tacheng",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "TC",
          cityInfo: "TC-腾冲-TW",
          cityName: "腾冲",
          airportName: "tengchong",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "TZ",
          cityInfo: "TZ-台州-TW",
          cityName: "台州",
          airportName: "taizhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "TZ",
          cityInfo: "TZ-泰州-TW",
          cityName: "泰州",
          airportName: "taizhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "TY",
          cityInfo: "TY-太原-TW",
          cityName: "太原",
          airportName: "taiyuan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "TL",
          cityInfo: "TL-通辽-TW",
          cityName: "通辽",
          airportName: "tongliao",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WH",
          cityInfo: "WH-威海-W",
          cityName: "威海",
          airportName: "weihai",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WH",
          cityInfo: "WH-武汉-W",
          cityName: "武汉",
          airportName: "wuhan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WZ",
          cityInfo: "WZ-梧州-W",
          cityName: "梧州",
          airportName: "wuzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WS",
          cityInfo: "WS-文山-W",
          cityName: "文山",
          airportName: "wenshan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WX",
          cityInfo: "WX-无锡-W",
          cityName: "无锡",
          airportName: "wuxi",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WF",
          cityInfo: "WF-潍坊-W",
          cityName: "潍坊",
          airportName: "weifang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WYS",
          cityInfo: "WYS-武夷山-W",
          cityName: "武夷山",
          airportName: "wuyishan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WLHT",
          cityInfo: "WLHT-乌兰浩特-W",
          cityName: "乌兰浩特",
          airportName: "wulanhaote",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WZ",
          cityInfo: "WZ-温州-W",
          cityName: "温州",
          airportName: "wenzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WLMQ",
          cityInfo: "WLMQ-乌鲁木齐-W",
          cityName: "乌鲁木齐",
          airportName: "wulumuqi",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WZ",
          cityInfo: "WZ-万州-W",
          cityName: "万州",
          airportName: "wanzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "WH",
          cityInfo: "WH-乌海-W",
          cityName: "乌海",
          airportName: "wuhai",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "R",
          cityInfo: "R--RSTW",
          cityName: "",
          airportName: "新郑",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },

        {
          airportCode: "XY",
          cityInfo: "XY-兴义-XYZ",
          cityName: "兴义",
          airportName: "xingyi",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XC",
          cityInfo: "XC-西昌-XYZ",
          cityName: "西昌",
          airportName: "xichang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XM",
          cityInfo: "XM-厦门-XYZ",
          cityName: "厦门",
          airportName: "xiamen",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XA",
          cityInfo: "XA-西安-XYZ",
          cityName: "西安",
          airportName: "xian",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XY",
          cityInfo: "XY-襄阳-XYZ",
          cityName: "襄阳",
          airportName: "xiangyang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XN",
          cityInfo: "XN-西宁-XYZ",
          cityName: "西宁",
          airportName: "xining",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XLHT",
          cityInfo: "XLHT-锡林浩特-XYZ",
          cityName: "锡林浩特",
          airportName: "xilinhaote",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XSBN",
          cityInfo: "XSBN-西双版纳-XYZ",
          cityName: "西双版纳",
          airportName: "xishangbanna",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XZ",
          cityInfo: "XZ-忻州-XYZ",
          cityName: "忻州",
          airportName: "xizhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "XZ",
          cityInfo: "XZ-徐州-XYZ",
          cityName: "徐州",
          airportName: "xuzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YW",
          cityInfo: "YW-义乌-YZ",
          cityName: "义乌",
          airportName: "yiwu",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YZ",
          cityInfo: "YZ-永州-YZ",
          cityName: "永州",
          airportName: "yongzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YL",
          cityInfo: "YL-榆林-YZ",
          cityName: "榆林",
          airportName: "yulin",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YA",
          cityInfo: "YA-延安-YZ",
          cityName: "延安",
          airportName: "yanan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YC",
          cityInfo: "YC-运城-YZ",
          cityName: "运城",
          airportName: "yuncheng",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YT",
          cityInfo: "YT-烟台-YZ",
          cityName: "烟台",
          airportName: "yantai",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YC",
          cityInfo: "YC-银川-YZ",
          cityName: "银川",
          airportName: "yinchuan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YC",
          cityInfo: "YC-宜昌-YZ",
          cityName: "宜昌",
          airportName: "yichang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YB",
          cityInfo: "YB-宜宾-YZ",
          cityName: "宜宾",
          airportName: "yibin",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YC",
          cityInfo: "YC-盐城-YZ",
          cityName: "盐城",
          airportName: "yancheng",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YJ",
          cityInfo: "YJ-延吉-YZ",
          cityName: "延吉",
          airportName: "yanji",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YS",
          cityInfo: "YS-玉树-YZ",
          cityName: "玉树",
          airportName: "yushu",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YN",
          cityInfo: "YN-伊宁-YZ",
          cityName: "伊宁",
          airportName: "yining",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "YZ",
          cityInfo: "YZ-扬州-YZ",
          cityName: "扬州",
          airportName: "yangzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZH",
          cityInfo: "ZH-珠海-Z",
          cityName: "珠海",
          airportName: "zhuhai",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZT",
          cityInfo: "ZT-昭通-Z",
          cityName: "昭通",
          airportName: "shaotong",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZJJ",
          cityInfo: "ZJJ-张家界-Z",
          cityName: "张家界",
          airportName: "zhangjiajie",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZS",
          cityInfo: "ZS-舟山-Z",
          cityName: "舟山",
          airportName: "zhoushan",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZZ",
          cityInfo: "ZZ-郑州-Z",
          cityName: "郑州",
          airportName: "zhengzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZW",
          cityInfo: "ZW-中卫-Z",
          cityName: "中卫",
          airportName: "zhongwei",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZJ",
          cityInfo: "ZJ-芷江-Z",
          cityName: "芷江",
          airportName: "zhijiang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZJ",
          cityInfo: "ZJ-湛江-Z",
          cityName: "湛江",
          airportName: "zhanjiang",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZYXZ",
          cityInfo: "ZYXZ-遵义新舟-Z",
          cityName: "遵义新舟",
          airportName: "zunyixinzhou",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        },
        {
          airportCode: "ZYMT",
          cityInfo: "ZYMT-遵义茅台-Z",
          cityName: "遵义茅台",
          airportName: "zunyimaotai",
          status: 1,
          lat: 34.5308189222,
          lng: 113.8526878594
        }
      ],
      cityListKey: [],
      upCityListIndex: "0",
      upCityList: "",
      result: "",
      citys: ""
    };
  },
  props:['textVal'],
  created() {
    this.sort();
  },
  methods: {
    hidenn(){
     this.tmer= setTimeout(()=>{
        this.showCity = false;
      },500,()=>{
         clearTimeout(this.tmer)
      })
    },
    pp(){
          if(!this.citys){
             this.selectDepCity(this.citys)
          }
    },
    showCityDialog() {
      this.showCity = true;
      this.keySearch()
    },
    //排序
    sort() {
      let map = {}; // 处理过后的数据对象
      let temps = []; // 临时变量
      this.list.map(item => {
        if (item.airportCode) {
          let ekey = item.airportCode.charAt(0).toUpperCase(); // 根据key值的第一个字母分组，并且转换成大写
          temps = map[ekey] || []; // 如果map里面有这个key了，就取，没有就是空数组
          temps.push({
            airportCode: item.airportCode,
            airportName: item.cityName,
            airportPing:item.airportName
          });
          map[ekey] = temps;
        }
      });
      let lists = [];
      // console.log(map);
      for (let gkey in map) {
        if (gkey == "热") {
          // console.log("ppp");
          lists.unshift({
            ckey: gkey + "点城市",
            cityList: map[gkey]
          });
          continue;
        }
        lists.push({
          ckey: gkey,
          cityList: map[gkey]
        });
      }
      // console.log(lists);
      lists = lists.sort((li1, li2) => {
        return li1.ckey.charCodeAt(0) - li2.ckey.charCodeAt(0);
      });
      // console.log(lists);
      // console.log(lists)
      let arr = lists.splice(lists.length - 1, 1);
      //  console.log(arr)
      //  console.log(lists)
      lists.unshift(arr[0]);
      // console.log(lists);
      let chunk = 5;
      let result = [];
      for (var i = 0, j = lists.length; i < j; i += chunk) {
        if (lists[i].ckey == "热点城市") {
          result.unshift(lists.slice(i, 1));
          i = -4;
        } else {
          if (i == 6) {
            chunk = 4;
          } else {
            chunk = 5;
          }
          result.push(lists.slice(i, i + chunk));
        }
      }
      // console.log(result);
      this.result = result;
      this.upCityList = this.result[0];

      let cityListKey = [];
      // console.log(result)
      result.map(item => {
        let ckeys = "";
        item.map(ritem => {
          ckeys += ritem.ckey;
        });
        cityListKey.push(ckeys);
      });
      this.cityListKey = cityListKey;
      // console.log('llllpppp')
      // console.log(this.cityListKey)
    },
    upCityListKey(index) {
      this.upCityListIndex = index;
      this.upCityList = this.result[index];
    },
    selectDepCity(val) {
      this.citys = val
      this.showCity = false;
       this.$emit('parentFn',this.citys)
    },
    //按键搜索
    keySearch(){
     this.fiterList=this.list.filter(item=>{
        return item.airportName.includes(this.citys) || item.cityName.includes(this.citys)
      })
    this.$emit('parentFn',this.citys)
    },
    //换城市
    replaceCity(val){
      this.citys=val
    }
  
  },
  computed:{
    turnoff(){
      return this.citys.length<=0
    },
    turnoffno(){
      return (this.fiterList.length<=0 && this.citys.length>0)
    },

  },
 
}
</script>
<style lang="scss" scoped>
.app{
  z-index: 1111 !important;
}.city {
  position: relative;
  width: 168px;
  margin: auto;
  .city-components {
    background: #fff;
    position: absolute;
    width: 440px;
    box-shadow: 0 0 4px 0 rgba(117, 117, 117, 0.5);
    border-radius: 2px;
    padding: 20px 0px;
    margin: 4px 0 0 6px;
    z-index: 1111;
  .city-nofound{
    position:relative;
    
    font-weight:bold;
    font-size: 20px;
    
  }
  }
}
.clearfix {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
li {
  list-style: none;
}
ul {
  padding: 0;
  margin: 0;
}
.filter-tabar {
  border-bottom: 1px solid #d7d7d7;
  cursor: pointer;
  background-color: #ccc;
  box-sizing: content-box;
  li {
    text-align: center;
    padding: 0 14px;
    float: left;
   
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    position: relative;
    &.active {
      background-color: red;
      color:#fff;
    }
    
  }
}
.city-content {
  // max-height: 500px;
  // overflow-y: auto;
  // overflow-x: hidden;
  padding: 10px 13px 0 13px;
  ul {
    display: flex;
    justify-content: left;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  label {
    color: #5f5f5f !important;
    float: left;
    margin-right: 6px;
    font-size: 14px;
    height: 14px;
   
    margin-top: 10px;
  }
  .rr {
    li:nth-child(7) {
      margin-left: 16px !important;
    }
    li:nth-child(12) {
      margin-left: 16px !important;
    }
  }
  li {
    margin: 10px 0;
    // padding: 6px 0 6px;
    // float: left;
    text-align: left;
    font-size: 14px;
    min-width: 70px;
    cursor: pointer;
    float: left;
    list-style-type: none;
    height: 14px;
    width: 70px;
    display: block;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 4px 0 2px;
    word-break: break-all;
    word-wrap: break-word;
  }
}
.city-components {
  position: absolute;
  width: 400px;
  // height: 200px;
  box-shadow: 0 0 4px 0 rgba(117, 117, 117, 0.5);
  border-radius: 2px;
  padding: 20px 21px;
}
</style>

