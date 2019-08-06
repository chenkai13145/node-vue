const express=require('express')
const yunliRouter=express.Router()
const passpart=require('passport')
data=[
    {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA34"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ21"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32693"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10399"
    }, {
        "start_time": "19-06-27 12:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M13051"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61097"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP8279"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61097"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85225"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M11738"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61097"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D61371"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86061"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61097"
    }, {
        "start_time": "19-06-27 12:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31702"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10390"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ953"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86736"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09569"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ953"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ953"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AU7112"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14911"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L09711"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H99831"
    }, {
        "start_time": "19-06-27 12:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9737"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S920A2"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86067"
    }, {
        "start_time": "19-06-27 12:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀JZ3057"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L56378"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 12:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGJ580"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86325"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86089"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 12:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7K282"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92550"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92550"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92550"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D81917"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86089"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABW495"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H682"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 12:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86876"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7E691"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADK131"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85097"
    }, {
        "start_time": "19-06-27 12:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T070"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86876"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83273"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD2091"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83273"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83016"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83273"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:49",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABA647"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AUX430"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D42661"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98709"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT072"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M00667"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS2157"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22577"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD2971"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7692"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89736"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE425"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82399"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91886"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86030"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A5C831"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APH747"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APH747"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APH747"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52846"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ05"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABK402"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP5697"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 12:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "10091",
        "name": "急刹车",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51722"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86887"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69051"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83858"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACK045"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD3288"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83858"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58776"
    }, {
        "start_time": "19-06-27 12:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83858"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98796"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC3832"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7868"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69218"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7603"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38851"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24004"
    }, {
        "start_time": "19-06-27 12:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85071"
    }, {
        "start_time": "19-06-27 12:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 12:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AU9910"
    }, {
        "start_time": "19-06-27 12:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 12:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81663"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83757"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP470"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29622"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP470"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APW719"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APW719"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83757"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP470"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83757"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54393"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APW719"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 12:06:40",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82583"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80760"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82583"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACF400"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82583"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 12:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACF400"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C27753"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ19"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00514"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5L571"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98762"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AU7112"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G36951"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2330"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 12:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76305"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA1705"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69298"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AJF742"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86510"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AJF742"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86716"
    }, {
        "start_time": "19-06-27 12:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AJF742"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85087"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 12:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S920A2"
    }, {
        "start_time": "19-06-27 12:06:34",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 12:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA7983"
    }, {
        "start_time": "19-06-27 12:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7868"
    }, {
        "start_time": "19-06-27 12:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66867"
    }, {
        "start_time": "19-06-27 12:06:34",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 12:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29885"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A85406"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10091",
        "name": "急刹车",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AJ8529"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25713"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E691"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鲁HPL670"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY3357"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鲁HPL670"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T646"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鲁HPL670"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81296"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86989"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86716"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52892"
    }, {
        "start_time": "19-06-27 12:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07410"
    }, {
        "start_time": "19-06-27 12:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83036"
    }, {
        "start_time": "19-06-27 12:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8279"
    }, {
        "start_time": "19-06-27 12:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABR417"
    }, {
        "start_time": "19-06-27 12:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86561"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABD047"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ12"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 12:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ22"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP047"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86890"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83695"
    }, {
        "start_time": "19-06-27 12:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED5827"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31867"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AAB886"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉CB5391"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58001"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31867"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9801"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52892"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31867"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AAB886"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AAB886"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31867"
    }, {
        "start_time": "19-06-27 12:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86705"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86100"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G66735"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D90034"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98710"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE447"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 12:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACN080"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80782"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ13"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80781"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ21"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8279"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52829"
    }, {
        "start_time": "19-06-27 12:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77180"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA26"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03863"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADK131"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81116"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV295"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8656"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6317"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV295"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6317"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81116"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADV806"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2315"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8656"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01053"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52554"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV295"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81116"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8656"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA24"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6317"
    }, {
        "start_time": "19-06-27 12:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0695"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6030"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29610"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6030"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6030"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29610"
    }, {
        "start_time": "19-06-27 12:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29610"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D64310"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D71131"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85118"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18489"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66897"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "41001",
        "name": "闭眼",
        "carnum": "粤ABR417"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ17"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10091",
        "name": "急刹车",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38851"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58218"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC3852"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66897"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92966"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉CB7919"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA25"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM730"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM730"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM730"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADX625"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83011"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T551"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AU7112"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51722"
    }, {
        "start_time": "19-06-27 12:06:17",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58776"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69638"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC6448"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08290"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ16"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH656"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69633"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AU8069"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH656"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACQ729"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC6448"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86303"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH656"
    }, {
        "start_time": "19-06-27 12:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉F32863"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85217"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85915"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏AP8102"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86523"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 12:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D61371"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AU9560"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03863"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADJ971"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C27753"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20829"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32693"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ12"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86891"
    }, {
        "start_time": "19-06-27 12:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52884"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ493"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10091",
        "name": "急刹车",
        "carnum": "皖A6H682"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET141"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86066"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86876"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET141"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ493"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ493"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀JZ3057"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET141"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 12:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69228"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92901"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58218"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 12:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:10",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTT072"
    }, {
        "start_time": "19-06-27 12:06:10",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 12:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52892"
    }, {
        "start_time": "19-06-27 12:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 12:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98709"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92966"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA1705"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07115"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89727"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACU735"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86581"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D78242"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86617"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92904"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:08",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED5827"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADV409"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91886"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP346"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY3357"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86067"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18489"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33314"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7898"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00724"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L09711"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACF400"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 12:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA32"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D45907"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08003"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2310"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 12:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01035"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ18"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AUE433"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2370"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86161"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "41001",
        "name": "闭眼",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AUE433"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA32"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08290"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25719"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D61371"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AUE433"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 12:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06750"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L53692"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S621A0"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 12:06:02",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ01"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L13378"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 12:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M13051"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AD6662"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D87250"
    }, {
        "start_time": "19-06-27 12:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E691"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82581"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82581"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C27086"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 05:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69228"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTV000"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ04"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES2605"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86751"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 05:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69051"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69051"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DT9311"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55539"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86602"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ19"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54331"
    }, {
        "start_time": "19-06-27 05:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK390"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC7551"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑MR2348"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA9108"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54357"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ12"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82119"
    }, {
        "start_time": "19-06-27 05:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52896"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9801"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86433"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82556"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9801"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ06"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92981"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC4179"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85073"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 05:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC4179"
    }, {
        "start_time": "19-06-27 05:06:50",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "湘AB2480"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81698"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FN9256"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP5606"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98166"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92904"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADJ643"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S621A0"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂N09491"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69208"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 05:06:47",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 05:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 05:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ15"
    }, {
        "start_time": "19-06-27 05:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10330"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AJM051"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89779"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58001"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07410"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26100"
    }, {
        "start_time": "19-06-27 05:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D71127"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT069"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58330"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86772"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 05:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9737"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L26119"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83233"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ17"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AP1135"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ14"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ05"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58218"
    }, {
        "start_time": "19-06-27 05:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08683"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L56783"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA1705"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY3357"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC6448"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86772"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 05:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 05:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 05:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86029"
    }, {
        "start_time": "19-06-27 05:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 05:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57773"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10380"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7R169"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EP3511"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06735"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖KQ6338"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 05:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9470"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EA5325"
    }, {
        "start_time": "19-06-27 05:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14440"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L02797"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92904"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 05:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C57771"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82790"
    }, {
        "start_time": "19-06-27 05:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA38"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB049"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M16086"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83126"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85087"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA38"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2330"
    }, {
        "start_time": "19-06-27 05:06:36",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTT071"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85775"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T646"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82382"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82157"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82382"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82157"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82382"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AG9198"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52826"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51768"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86303"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP346"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L35199"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ17"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06376"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS4277"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86161"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86617"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT067"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED6626"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24004"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25712"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK7022"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06376"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85073"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABF745"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89037"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 05:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉C3F460"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ991"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25770"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86721"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86226"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ991"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP047"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ991"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82399"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D74381"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A85406"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 05:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE447"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08003"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA26"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS2157"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9876"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD6218"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08683"
    }, {
        "start_time": "19-06-27 05:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83811"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D64310"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83811"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83811"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86690"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA7983"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 05:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10330"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTS636"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK6508"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D11267"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83695"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81270"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 05:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APS747"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89786"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AAB886"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APS747"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪FA1165"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APS747"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪FA1165"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AAB886"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪FA1165"
    }, {
        "start_time": "19-06-27 05:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AAB886"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86716"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D05054"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 05:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06376"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M19692"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17470"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L53180"
    }, {
        "start_time": "19-06-27 05:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86078"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ10"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12619"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉F32863"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D74381"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:21",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ06"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC8347"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖KQ6338"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08683"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C29639"
    }, {
        "start_time": "19-06-27 05:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94247"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "41005",
        "name": "抽烟",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86982"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52896"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94247"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C27086"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86703"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94247"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58155"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AG9198"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY7307"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTK526"
    }, {
        "start_time": "19-06-27 05:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08952"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98198"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91857"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABM935"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85576"
    }, {
        "start_time": "19-06-27 05:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M13051"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7765"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 05:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABF745"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58218"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTB691"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AB2480"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 05:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86726"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69280"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 05:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58270"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ17"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C57771"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 05:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E691"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83395"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6038"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83395"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7K282"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY7307"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25719"
    }, {
        "start_time": "19-06-27 05:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83395"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89037"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘JB1787"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85073"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82556"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19024"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ21"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "吉C3F460"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51722"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83733"
    }, {
        "start_time": "19-06-27 05:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 05:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83202"
    }, {
        "start_time": "19-06-27 05:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 05:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83202"
    }, {
        "start_time": "19-06-27 05:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT073"
    }, {
        "start_time": "19-06-27 05:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85519"
    }, {
        "start_time": "19-06-27 05:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83202"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80727"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M16086"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82318"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81663"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82318"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86638"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES8767"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82318"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66504"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 05:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AG9198"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59391"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "41005",
        "name": "抽烟",
        "carnum": "粤AG9198"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ER5129"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 05:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK7022"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D08753"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED6626"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52884"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6038"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE447"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABJ907"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6038"
    }, {
        "start_time": "19-06-27 05:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11727"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AG9198"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 05:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98166"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86721"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9946"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06735"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY6388"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86776"
    }, {
        "start_time": "19-06-27 05:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 05:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 05:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 05:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 05:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 05:06:03",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ12"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91861"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82039"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9737"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA3115"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤E26048"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52892"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L21117"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK7068"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 05:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP5379"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52826"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 05:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83695"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C57773"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE540"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C28129"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82581"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S928A0"
    }, {
        "start_time": "19-06-27 05:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89736"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉C3F467"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54357"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 04:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H311"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22582"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M14945"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66504"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT067"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A85406"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80712"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K323"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D42661"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L05512"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6038"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV295"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K323"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV295"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACM449"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T096"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA26"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66867"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K323"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV295"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83395"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69219"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83395"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D05054"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9846"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D47515"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83395"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA34"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86638"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "粤AG9185"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M14945"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98756"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L06376"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52826"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 04:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81698"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86755"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AB2480"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91811"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69208"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4284"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 04:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52884"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT066"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31645"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31645"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ12"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADF582"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31645"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D94247"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2067"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54352"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2067"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS5943"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8132"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86831"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACM849"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ16"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE857"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T507"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C56968"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ET3852"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ET3852"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D67644"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82039"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE857"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H99831"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ET3852"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE857"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 04:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86716"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK978"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69258"
    }, {
        "start_time": "19-06-27 04:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L35199"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF3628"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": ""
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83939"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83939"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83939"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81686"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83939"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGH039"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADX625"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF8901"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7R169"
    }, {
        "start_time": "19-06-27 04:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABZ548"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82270"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA37"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89095"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABJ907"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66867"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABF745"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86067"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD2091"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86221"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86791"
    }, {
        "start_time": "19-06-27 04:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤S33196"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣E06638"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86876"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA1705"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D08753"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82057"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 04:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85576"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54393"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA37"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8656"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86703"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24487"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8656"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8132"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8656"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83515"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98708"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏AP8102"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83515"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTS607"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83515"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29607"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTB691"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGJ569"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85576"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADJ643"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 04:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13708"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9028"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83821"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA22"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "41005",
        "name": "抽烟",
        "carnum": "吉C3F460"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86602"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES8767"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13708"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89037"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "湘A69638"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7775"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83821"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13708"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86877"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83821"
    }, {
        "start_time": "19-06-27 04:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6038"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ19"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGH039"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6038"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D36783"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25770"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT068"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D45907"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19024"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52884"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA1705"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AJ2515"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82126"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY7307"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC8569"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H99831"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91825"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 04:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC2559"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86098"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06735"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86703"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C56968"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D47515"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AB2480"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82108"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "桂BV1179"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A92367"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD0629"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝BQ2606"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGH039"
    }, {
        "start_time": "19-06-27 04:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98198"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA22"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTB691"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A92367"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92901"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C32028"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86703"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00514"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGH039"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H99831"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82052"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖KQ1923"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADV409"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82052"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82052"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA34"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M13051"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AT4996"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACK047"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EL5365"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7135"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 04:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABD237"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D71289"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D71289"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC7142"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86690"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91840"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC4833"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D71289"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59386"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S928A0"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D71289"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF3628"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADF582"
    }, {
        "start_time": "19-06-27 04:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ER5635"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2317"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑MR2348"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACC559"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA9108"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83695"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86876"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTT072"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9001"
    }, {
        "start_time": "19-06-27 04:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP047"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69215"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25770"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 04:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACY475"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86680"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86893"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣AG0178"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G31727"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACM449"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D78242"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00724"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66816"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82983"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85159"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86887"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C27753"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD3288"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD0629"
    }, {
        "start_time": "19-06-27 04:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACQ729"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV273"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ19"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV273"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV273"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66867"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 04:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D78242"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31645"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51601"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00514"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31645"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31645"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AG9185"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABA647"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00614"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4186"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L35331"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69218"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGJ569"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AAR303"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AP1135"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT067"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 04:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69266"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D78242"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD0629"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DS8583"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86617"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86887"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 04:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D36114"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP346"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92901"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89770"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29622"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "汇A155JT"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86089"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57772"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC2559"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AP1135"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86523"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT068"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89037"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17470"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38900"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ16"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 04:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES3835"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06750"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D47515"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC3852"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85087"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86666"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖KQ6338"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:21",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADC480"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH768"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH768"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83126"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D53827"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH768"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AP1135"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D53827"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D53827"
    }, {
        "start_time": "19-06-27 04:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BF8801"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BF8801"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M28126"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86363"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "湘AB2480"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58992"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AUX451"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ22"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80712"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2370"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81270"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC4833"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86758"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81270"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69208"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC2438"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10380"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98756"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTB691"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC2559"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L35199"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86736"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91840"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 04:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTB691"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTH270"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86363"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17617"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98710"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89037"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17617"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L50290"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D08753"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA22"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83202"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17617"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT066"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7775"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D11267"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C27086"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69280"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86009"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54393"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98198"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK7022"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AF8730"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22582"
    }, {
        "start_time": "19-06-27 04:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82061"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82061"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ11"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85073"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91889"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D67644"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADC480"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77180"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01053"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86363"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82039"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82061"
    }, {
        "start_time": "19-06-27 04:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED6626"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BF8801"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACC559"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTT071"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BF8801"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 04:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACX889"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC2559"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06735"
    }, {
        "start_time": "19-06-27 04:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M13051"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7E691"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19024"
    }, {
        "start_time": "19-06-27 04:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32544"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91857"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC8569"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19024"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": ""
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D67644"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 04:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C56559"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82061"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82061"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2317"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18489"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD3288"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82061"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 04:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ18"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86638"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 04:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86038"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACC539"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92901"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AJ8529"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20862"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20862"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38900"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82659"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B26383"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86755"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82823"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82659"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82823"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82659"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M16855"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82823"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98186"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11727"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58001"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D42661"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM732"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91886"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85576"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82157"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82052"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D87250"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82052"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G96870"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM732"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82052"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM732"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69218"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M16855"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25961"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86221"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83658"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP327"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣E04979"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET147"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85097"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83895"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83895"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83658"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H827"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86297"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83658"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9737"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET147"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83895"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET147"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD6218"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FP3159"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E677"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08290"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86617"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE801"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82076"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91818"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8618"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H99831"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A92367"
    }, {
        "start_time": "19-06-27 04:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC3852"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81663"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGH039"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82039"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA6070"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79210"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 04:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "吉C3F460"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85915"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EP3059"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69266"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L09711"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AS6736"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82252"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTS607"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF8901"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92904"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86221"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA22"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82252"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91861"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣E04979"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 04:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EE7278"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AT8965"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00514"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABF745"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83920"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98739"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "湘AG8828"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AAR303"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7898"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80712"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 04:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D71600"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58992"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L32260"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTB691"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80712"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82556"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L56783"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EG7707"
    }, {
        "start_time": "19-06-27 03:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86363"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54329"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES2871"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES2871"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABA647"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA28"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86703"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86869"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES2871"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 03:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H87567"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM730"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT070"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22582"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D45907"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM730"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11727"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51768"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM730"
    }, {
        "start_time": "19-06-27 03:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86098"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AN7967"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7775"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTT072"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77180"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33780"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C28769"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25712"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10091",
        "name": "急刹车",
        "carnum": "皖AC8839"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86816"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT072"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D36114"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L32260"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82399"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E677"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7R169"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E677"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏AP8102"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52896"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ22"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L32260"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 03:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77106"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE540"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L53692"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF3628"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EB8511"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EB8511"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9737"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08139"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33314"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M16951"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGJ569"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8132"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81567"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86205"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T507"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9876"
    }, {
        "start_time": "19-06-27 03:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADB908"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK6508"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "京AGJ569"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ06"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 03:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L06550"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L35199"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC4833"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2317"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D72311"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98708"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7E677"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86703"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7603"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L26119"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9071"
    }, {
        "start_time": "19-06-27 03:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98763"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82252"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66867"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G78950"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80760"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT066"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABD047"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AG8132"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82252"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24422"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP5208"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G77261"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 03:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82252"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M16086"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADF046"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86638"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51722"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01154"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58218"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FP3159"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ06"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86716"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86632"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66882"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH656"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98756"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABV347"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH656"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92901"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADF046"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA29"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T646"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA32"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂N09342"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98711"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACC559"
    }, {
        "start_time": "19-06-27 03:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86009"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86751"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZE038"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D05054"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ03"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZE038"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89727"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25712"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZE038"
    }, {
        "start_time": "19-06-27 03:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D74381"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACX946"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K336"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K336"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADF582"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C29639"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K336"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19024"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D87250"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AUE433"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT066"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69228"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣E07801"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AUE433"
    }, {
        "start_time": "19-06-27 03:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D42661"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86100"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE857"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86100"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S907A0"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L56378"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE857"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGH039"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE857"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC3852"
    }, {
        "start_time": "19-06-27 03:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT069"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69638"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T885"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82108"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08126"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25908"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86726"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7603"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55651"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85298"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M03125"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FN6378"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APW719"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86726"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABW495"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APW719"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D08753"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APW719"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘JB1787"
    }, {
        "start_time": "19-06-27 03:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85217"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABE120"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86477"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA7983"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC8347"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 03:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM732"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC8347"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2067"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTS607"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM732"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM732"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ16"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ945"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤BH2067"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51768"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 03:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81200"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K192"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ES8767"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K192"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10380"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K192"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9071"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69638"
    }, {
        "start_time": "19-06-27 03:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12619"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤S33196"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98166"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA37"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61390"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L06767"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61390"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61371"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61390"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A85406"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK7022"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED6626"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61390"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07309"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H311"
    }, {
        "start_time": "19-06-27 03:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT070"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86736"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY7307"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69218"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7868"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98186"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED5827"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69298"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC8347"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "桂BX7205"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP327"
    }, {
        "start_time": "19-06-27 03:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7T507"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ945"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "湘AG8132"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86893"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48588"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ945"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BF8801"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BF8801"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83193"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2399"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83193"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83193"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82583"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98708"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20862"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7R169"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82583"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82583"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86982"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82515"
    }, {
        "start_time": "19-06-27 03:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86433"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK313"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77180"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK313"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA38"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘LA2330"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACA149"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK313"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86089"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89770"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 03:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E691"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91811"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69215"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK6508"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80760"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ12"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC8347"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 03:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D63452"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6079"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTV267"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52884"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACK045"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6079"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK6508"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6079"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 03:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91886"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTB691"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK390"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13766"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACC559"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13766"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK390"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13766"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38900"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK390"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AT8965"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86716"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H827"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69298"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 03:06:21",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57772"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85307"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80727"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 03:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00514"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17617"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80712"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9876"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69208"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08702"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L38963"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10390"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17617"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18484"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7T507"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80727"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 03:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17617"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鲁HPL670"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83233"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC8839"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7868"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85073"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D62347"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC7730"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66882"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52896"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鲁HPL670"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣AG0178"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G78950"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L02797"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D62347"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D62347"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鲁HPL670"
    }, {
        "start_time": "19-06-27 03:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89736"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85298"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98762"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ06"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25770"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08126"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS2157"
    }, {
        "start_time": "19-06-27 03:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06735"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06767"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08952"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H99831"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ11"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83808"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85529"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08139"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "京AKD517"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T070"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59386"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT070"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 03:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86703"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP5208"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FP3159"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G96870"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50290"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK0187"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66867"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86009"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69218"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L35199"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7868"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9733"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22582"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 03:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABK402"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86561"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D78242"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80782"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85859"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 03:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69218"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08126"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7603"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29622"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTS636"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19024"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADN016"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L35199"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC8839"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89523"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L95709"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASH659"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79040"
    }, {
        "start_time": "19-06-27 03:06:09",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86089"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85597"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "京AKD517"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85561"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACU756"
    }, {
        "start_time": "19-06-27 03:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ903"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ903"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91811"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L11727"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18489"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉F32863"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L50630"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ903"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82556"
    }, {
        "start_time": "19-06-27 03:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86038"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D62347"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98756"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85217"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33314"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABE120"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D62347"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D62347"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91886"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 03:06:06",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S920A2"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86009"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86067"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85225"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89727"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20829"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑MR2348"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": ""
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ18"
    }, {
        "start_time": "19-06-27 03:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA9108"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ06"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AK5540"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L02227"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61371"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H80153"
    }, {
        "start_time": "19-06-27 03:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C27086"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACU756"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98796"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA6070"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉C3F460"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 03:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D59575"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 03:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP047"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85071"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADJ643"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 03:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52896"
    }, {
        "start_time": "19-06-27 03:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 03:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABF745"
    }, {
        "start_time": "19-06-27 03:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADB908"
    }, {
        "start_time": "19-06-27 03:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS2157"
    }, {
        "start_time": "19-06-27 03:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12619"
    }, {
        "start_time": "19-06-27 03:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98198"
    }, {
        "start_time": "19-06-27 03:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26100"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55686"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29602"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DT7650"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29602"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29602"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52896"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ12"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D28207"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K327"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10362"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D28207"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K327"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98738"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K327"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66827"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D59391"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85056"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86066"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86066"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52892"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9001"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86066"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "湘A69638"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57772"
    }, {
        "start_time": "19-06-27 02:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98371"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98371"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58218"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98371"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98371"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8618"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86352"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86632"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98371"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83875"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB049"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86776"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABW495"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55539"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABS401"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD2091"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA26"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T551"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D40605"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07115"
    }, {
        "start_time": "19-06-27 02:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98796"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C32028"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83273"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C29639"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01035"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83273"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85576"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83273"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ER5635"
    }, {
        "start_time": "19-06-27 02:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D71127"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86061"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98739"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤Y39291"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86970"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55686"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83895"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83895"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35396"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC7147"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86907"
    }, {
        "start_time": "19-06-27 02:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85073"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83515"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89779"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83515"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83515"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7E677"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77106"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 02:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18484"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHR831"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D78242"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ET3852"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC7730"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ET3852"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EA8929"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ABT473"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H311"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L38900"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ABT473"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24004"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ET3852"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37020"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 02:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ABT473"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31702"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91869"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉CB5391"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C27086"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AU8069"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T646"
    }, {
        "start_time": "19-06-27 02:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏AP8102"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21969"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C28129"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21969"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21969"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9737"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21969"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86038"
    }, {
        "start_time": "19-06-27 02:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H87071"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82501"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83193"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82501"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D78242"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83997"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55539"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D11230"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83193"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP047"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83193"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 02:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D11230"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85706"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D37073"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE820"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86751"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 02:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT075"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADS951"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58218"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66831"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18441"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADS951"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP047"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADS951"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98738"
    }, {
        "start_time": "19-06-27 02:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52884"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADB908"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18489"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADL647"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABH047"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01154"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94414"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A6H853"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7045"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48555"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82821"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "41003",
        "name": "注意力分散",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89727"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L21117"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91811"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACD059"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80760"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 02:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58001"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82581"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACA149"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82581"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASW997"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91811"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01035"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABL198"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABL198"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ06"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ASW997"
    }, {
        "start_time": "19-06-27 02:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85561"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86617"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉C3F467"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86690"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69051"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51768"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C28769"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9876"
    }, {
        "start_time": "19-06-27 02:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25908"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H311"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHJ032"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86038"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86533"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHJ032"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85118"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91825"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25687"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H853"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHJ032"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 02:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ET2317"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69219"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4101"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTJ228"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99370"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9801"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4101"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4101"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08126"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10362"
    }, {
        "start_time": "19-06-27 02:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24004"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83895"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA32"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81663"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86231"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 02:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTV267"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08139"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪ED5827"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 02:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTP227"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7775"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21999"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91840"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7765"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80782"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21999"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10380"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80727"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA28"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98118"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21999"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 02:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D21999"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C29639"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L20609"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M13051"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D90034"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08139"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘M11738"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83321"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86727"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55539"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L05512"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66867"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M14945"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP470"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EG8068"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EG8068"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACN080"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EG8068"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12619"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EG8068"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP470"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF3628"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP470"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EG8068"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86008"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L35331"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EG8068"
    }, {
        "start_time": "19-06-27 02:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06750"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85295"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58776"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85576"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 02:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86726"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA26"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖KQ6338"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABM935"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85973"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C58001"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L53692"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92901"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29622"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83112"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08952"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY7736"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6317"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92917"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTJ228"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86705"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6317"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G31727"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY2810"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6317"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86069"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D64310"
    }, {
        "start_time": "19-06-27 02:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86893"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D16929"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98166"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7765"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55539"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D16929"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D16929"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98756"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00514"
    }, {
        "start_time": "19-06-27 02:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD2091"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA30"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7837"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7829"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92917"
    }, {
        "start_time": "19-06-27 02:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTV267"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖KQ1923"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH768"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85071"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH768"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92917"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98711"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M06893"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZH768"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ21"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHP061"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D28207"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHP061"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92904"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AHP061"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13787"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H311"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32202"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2105"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ953"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A92367"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A92367"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ953"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ953"
    }, {
        "start_time": "19-06-27 02:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7K282"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98198"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7R169"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7898"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69258"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25719"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89786"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:21",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTP227"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92904"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83811"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D13757"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83126"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91811"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83811"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4101"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69249"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80760"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98763"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69296"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83811"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AJ2515"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4101"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96032"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 02:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ABT473"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC2902"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7603"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC2902"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83596"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC2902"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADF046"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ABT473"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89786"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 02:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66816"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L56220"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33696"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ22"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92966"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 02:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25712"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABA647"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6920"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85206"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82318"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ991"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82318"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66831"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82501"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S923A5"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9071"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ991"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20829"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82318"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10362"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D26197"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ991"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY3357"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82306"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91840"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08126"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑LC6725"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑LC6725"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83859"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑LC6725"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19280"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET141"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52892"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08126"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14911"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A92367"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET141"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AET141"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86877"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86581"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L53692"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖KQ1923"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D47552"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33314"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTS636"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "粤ACE409"
    }, {
        "start_time": "19-06-27 02:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA32"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APS792"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM790"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9470"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY7736"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ03"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APS792"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D16929"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM790"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D16929"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86989"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98708"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂APS792"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D16929"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANM790"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L05512"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 02:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6038"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏AP8102"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52884"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26169"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9001"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M14945"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82119"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FN6378"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD2091"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D28692"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10399"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98118"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D36114"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98198"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF3628"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACE649"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA7983"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18441"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08952"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82605"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98708"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D05054"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52896"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4186"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86279"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98186"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98711"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06735"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA34"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D79210"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69218"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83016"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA34"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14949"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:08",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L53692"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ041"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS2157"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ041"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏H2168R"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D31808"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C29639"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTP227"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣E07801"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ041"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M01154"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZE078"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09552"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58747"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10091",
        "name": "急刹车",
        "carnum": "皖AD2091"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZE078"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D65353"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C27753"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABZ147"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZE078"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 02:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D99315"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85859"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADJ643"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ16"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77505"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12619"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24300"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18441"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D28207"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D46695"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92966"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M14945"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ02"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D28207"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACX607"
    }, {
        "start_time": "19-06-27 02:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABS401"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08126"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTH270"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "41005",
        "name": "抽烟",
        "carnum": "湘A69622"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 02:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8279"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7E677"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61371"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "41003",
        "name": "注意力分散",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT067"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9876"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91825"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83336"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D64310"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "吉C3F467"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-27 02:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98756"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT075"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29602"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29602"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29622"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29602"
    }, {
        "start_time": "19-06-27 02:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92966"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54331"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91818"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTK110"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91811"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉CB5391"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83990"
    }, {
        "start_time": "19-06-27 02:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83633"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83633"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20889"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D67644"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83112"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83633"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98710"
    }, {
        "start_time": "19-06-27 01:06:59",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H235"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10399"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81270"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83633"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83633"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8618"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09569"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83926"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ADF046"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83633"
    }, {
        "start_time": "19-06-27 01:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D03313"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏FH4087"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AR5242"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS4277"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S907A0"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADB908"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC6771"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BH2181"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP2045"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52829"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 01:06:57",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA35"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D74381"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C27753"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ23"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86352"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FP3159"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G96870"
    }, {
        "start_time": "19-06-27 01:06:56",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D16939"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADF582"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D16939"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACU735"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86230"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D16939"
    }, {
        "start_time": "19-06-27 01:06:55",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7898"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86831"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D33314"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D97910"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT069"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:54",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98739"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98762"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABW495"
    }, {
        "start_time": "19-06-27 01:06:53",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26169"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94414"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DT7650"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25687"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZZ047"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:52",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑LE2138"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7021"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACA149"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑LE2138"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7021"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H499"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86066"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑LE2138"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7021"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D48427"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86727"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "苏CJY802"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA7902"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D32544"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82322"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92966"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ16"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03863"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M15650"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7R169"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24333"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92904"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83979"
    }, {
        "start_time": "19-06-27 01:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91857"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA26"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20833"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC3852"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L03863"
    }, {
        "start_time": "19-06-27 01:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "41001",
        "name": "闭眼",
        "carnum": "粤ADF046"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86325"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S920A2"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69221"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D24467"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85231"
    }, {
        "start_time": "19-06-27 01:06:48",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86009"
    }, {
        "start_time": "19-06-27 01:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 01:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 01:06:47",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 01:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 01:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "晋AJ2515"
    }, {
        "start_time": "19-06-27 01:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 01:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85597"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP9352"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABR412"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69258"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ05"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86791"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32551"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D96039"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA28"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY7307"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10399"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADL647"
    }, {
        "start_time": "19-06-27 01:06:46",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H827"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA31"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADJ971"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "川C28129"
    }, {
        "start_time": "19-06-27 01:06:45",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D08753"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22582"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86325"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D17470"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AT4996"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91861"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H311"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV263"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89037"
    }, {
        "start_time": "19-06-27 01:06:44",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DT7650"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤BCV369"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY3357"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91142"
    }, {
        "start_time": "19-06-27 01:06:43",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29610"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86860"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29610"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92966"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D29610"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22597"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC7711"
    }, {
        "start_time": "19-06-27 01:06:42",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99317"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT071"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25471"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D28207"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86533"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82399"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86805"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACB645"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86755"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19024"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8669"
    }, {
        "start_time": "19-06-27 01:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C58776"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANJ304"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACY129"
    }, {
        "start_time": "19-06-27 01:06:39",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69208"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86067"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83821"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE832"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7T885"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ945"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94247"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE832"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83821"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AVE832"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86030"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83821"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94247"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D94247"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:38",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98738"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGJ580"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D40605"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T885"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85300"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA28"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ411"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85300"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ411"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ411"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B23609"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M00667"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85775"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85300"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:36",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S920A2"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABA647"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D35617"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85217"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA27"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:35",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘A69228"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83536"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83536"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69228"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACK045"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7898"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83536"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 01:06:34",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV263"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABL198"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀JZ3057"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M13051"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83658"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACV263"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83658"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S928A0"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10091",
        "name": "急刹车",
        "carnum": "吉AP7573"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00624"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52893"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABL198"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83658"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4186"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M16951"
    }, {
        "start_time": "19-06-27 01:06:33",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25712"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACC539"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D49433"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32551"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89770"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP327"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:32",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD2971"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86303"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81530"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98709"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ903"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC9215"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "黑AU8069"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ903"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ903"
    }, {
        "start_time": "19-06-27 01:06:31",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86363"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "桂BF0737"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H83893"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "湘AB2480"
    }, {
        "start_time": "19-06-27 01:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANJ304"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8278"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC8569"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H85775"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANJ304"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D77515"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABF745"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANJ304"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7775"
    }, {
        "start_time": "19-06-27 01:06:29",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "京AGJ516"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D99924"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25687"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H81686"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57070"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82108"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98198"
    }, {
        "start_time": "19-06-27 01:06:28",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AC9946"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86283"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86581"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP5606"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7T885"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86066"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86719"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABF745"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83976"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪DT7650"
    }, {
        "start_time": "19-06-27 01:06:27",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤AP7603"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L51001"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00724"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D60940"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D08753"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADX625"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FN5695"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32693"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98796"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTZ25"
    }, {
        "start_time": "19-06-27 01:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G96870"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25712"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57911"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83016"
    }, {
        "start_time": "19-06-27 01:06:25",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L31001"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A6H827"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY3882"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14949"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86087"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:24",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86009"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D26169"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA23"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80760"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 01:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZF775"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA40"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89030"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H87968"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H87587"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP346"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZF775"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZF775"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C57773"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D96055"
    }, {
        "start_time": "19-06-27 01:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ421"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADX625"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀FP3159"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G77261"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82127"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D21918"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:21",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D57279"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G78950"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6030"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14337"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69228"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H85775"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91886"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G96870"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "渝D83962"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6030"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82987"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86358"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣GC6030"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 01:06:20",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86617"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08290"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L53692"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H87968"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8658"
    }, {
        "start_time": "19-06-27 01:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86755"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADG745"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98738"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "41002",
        "name": "打哈欠",
        "carnum": "湘A69638"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA32"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D18447"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04705"
    }, {
        "start_time": "19-06-27 01:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86601"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09587"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9876"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52849"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D08753"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACY129"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABL198"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91825"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D52871"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP4547"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ945"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABL198"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ945"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86805"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08290"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89030"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AEJ945"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H99831"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD1209"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTP227"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S920A2"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D64310"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂S920A2"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H499"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86230"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "30002",
        "name": "车道偏离",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D05884"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:15",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23707"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32551"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D61007"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABQ337"
    }, {
        "start_time": "19-06-27 01:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC0333"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘AB2480"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACA149"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D31702"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A6H499"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D92981"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12357"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86751"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82872"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86910"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "京AGJ580"
    }, {
        "start_time": "19-06-27 01:06:13",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTTA28"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ19"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86729"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57911"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91825"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤E28175"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖M00667"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D04155"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86433"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D80781"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:12",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H32551"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D67644"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABR412"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D61371"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AC7147"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀JZ3057"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "粤AV1068"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A90332"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D89523"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ADZ476"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D82576"
    }, {
        "start_time": "19-06-27 01:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0676"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "汇A155JT"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D87250"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D16939"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L06977"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADE457"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D16939"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D06731"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86151"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADB908"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83177"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:10",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D16939"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83695"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54352"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AJD660"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55539"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H32572"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AJD660"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D69247"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACP612"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85056"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L11671"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82075"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AJD660"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08092"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:09",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA26"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D35396"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85599"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83016"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8606"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D38516"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98710"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADB908"
    }, {
        "start_time": "19-06-27 01:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B26383"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24467"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖A7K282"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖B54393"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24467"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D24467"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤ACH367"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D07410"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D04551"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85073"
    }, {
        "start_time": "19-06-27 01:06:07",
        "event_type": "30000",
        "name": "碰撞报警",
        "carnum": "湘AG8168"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP7868"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉C4E325"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82307"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "41001",
        "name": "闭眼",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86407"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉C4E325"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D14390"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A93732"
    }, {
        "start_time": "19-06-27 01:06:06",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉C4E325"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP5697"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ANB841"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K323"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69617"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "皖AD3288"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝H09322"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K323"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00724"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12936"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "闽A5K323"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00724"
    }, {
        "start_time": "19-06-27 01:06:05",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D22577"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂FTP227"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98738"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ABD205"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D55705"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D86089"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D09528"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝A92367"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D66831"
    }, {
        "start_time": "19-06-27 01:06:04",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP7075"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS2157"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03997"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D19094"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTA33"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30550"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57262"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H33678"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK313"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57262"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57262"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57262"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98796"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK313"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D57262"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AS2157"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86796"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86672"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86716"
    }, {
        "start_time": "19-06-27 01:06:02",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H82121"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津CA3115"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L12022"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤ADR079"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L02797"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98796"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EK7068"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "津C57009"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A8C546"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H82376"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE447"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H85915"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D18484"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "30005",
        "name": "车距过近",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-27 01:06:01",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "津C55011"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D30131"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖AD0683"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86061"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10329"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8636"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86617"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8636"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D10336"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L89030"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "皖A7T096"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤E28463"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "吉AP8636"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D58507"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91883"
    }, {
        "start_time": "19-06-27 01:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:59",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L50663"
    }, {
        "start_time": "19-06-26 11:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-26 11:06:58",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "粤AV1063"
    }, {
        "start_time": "19-06-26 11:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-26 11:06:58",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ATP452"
    }, {
        "start_time": "19-06-26 11:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D06771"
    }, {
        "start_time": "19-06-26 11:06:56",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADX625"
    }, {
        "start_time": "19-06-26 11:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AP8279"
    }, {
        "start_time": "19-06-26 11:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACU147"
    }, {
        "start_time": "19-06-26 11:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACU147"
    }, {
        "start_time": "19-06-26 11:06:51",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-26 11:06:51",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂ACU147"
    }, {
        "start_time": "19-06-26 11:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-26 11:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-26 11:06:50",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D23773"
    }, {
        "start_time": "19-06-26 11:06:49",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D77517"
    }, {
        "start_time": "19-06-26 11:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-26 11:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-26 11:06:48",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D25496"
    }, {
        "start_time": "19-06-26 11:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D20802"
    }, {
        "start_time": "19-06-26 11:06:47",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ABR417"
    }, {
        "start_time": "19-06-26 11:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "沪EF3628"
    }, {
        "start_time": "19-06-26 11:06:46",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L08139"
    }, {
        "start_time": "19-06-26 11:06:41",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADE447"
    }, {
        "start_time": "19-06-26 11:06:40",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86813"
    }, {
        "start_time": "19-06-26 11:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08139"
    }, {
        "start_time": "19-06-26 11:06:39",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }, {
        "start_time": "19-06-26 11:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADK747"
    }, {
        "start_time": "19-06-26 11:06:38",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D91883"
    }, {
        "start_time": "19-06-26 11:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H83126"
    }, {
        "start_time": "19-06-26 11:06:37",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACH347"
    }, {
        "start_time": "19-06-26 11:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:37",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:36",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D40605"
    }, {
        "start_time": "19-06-26 11:06:35",
        "event_type": "11011",
        "name": "超速",
        "carnum": "吉AS1643"
    }, {
        "start_time": "19-06-26 11:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D83250"
    }, {
        "start_time": "19-06-26 11:06:34",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D00614"
    }, {
        "start_time": "19-06-26 11:06:31",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25793"
    }, {
        "start_time": "19-06-26 11:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACU756"
    }, {
        "start_time": "19-06-26 11:06:30",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D38442"
    }, {
        "start_time": "19-06-26 11:06:29",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L21005"
    }, {
        "start_time": "19-06-26 11:06:27",
        "event_type": "41006",
        "name": "脱离监控",
        "carnum": "湘AD6662"
    }, {
        "start_time": "19-06-26 11:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-26 11:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-26 11:06:26",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ADN016"
    }, {
        "start_time": "19-06-26 11:06:26",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-26 11:06:24",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D98126"
    }, {
        "start_time": "19-06-26 11:06:23",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L03863"
    }, {
        "start_time": "19-06-26 11:06:22",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤GTT067"
    }, {
        "start_time": "19-06-26 11:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-26 11:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-26 11:06:20",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-26 11:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "粤ACV747"
    }, {
        "start_time": "19-06-26 11:06:19",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A69228"
    }, {
        "start_time": "19-06-26 11:06:19",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ21"
    }, {
        "start_time": "19-06-26 11:06:18",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "冀G32686"
    }, {
        "start_time": "19-06-26 11:06:17",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTT072"
    }, {
        "start_time": "19-06-26 11:06:17",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣L32260"
    }, {
        "start_time": "19-06-26 11:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝BY9737"
    }, {
        "start_time": "19-06-26 11:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D81907"
    }, {
        "start_time": "19-06-26 11:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-26 11:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D81907"
    }, {
        "start_time": "19-06-26 11:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-26 11:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D81907"
    }, {
        "start_time": "19-06-26 11:06:16",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "鄂AZK282"
    }, {
        "start_time": "19-06-26 11:06:14",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤GTTZ13"
    }, {
        "start_time": "19-06-26 11:06:14",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L36350"
    }, {
        "start_time": "19-06-26 11:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:12",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-26 11:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:12",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D76411"
    }, {
        "start_time": "19-06-26 11:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "吉AP8233"
    }, {
        "start_time": "19-06-26 11:06:11",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣H86736"
    }, {
        "start_time": "19-06-26 11:06:11",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "赣H86363"
    }, {
        "start_time": "19-06-26 11:06:10",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "赣L08120"
    }, {
        "start_time": "19-06-26 11:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A8C546"
    }, {
        "start_time": "19-06-26 11:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A8C546"
    }, {
        "start_time": "19-06-26 11:06:08",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "湘A8C546"
    }, {
        "start_time": "19-06-26 11:06:03",
        "event_type": "11000",
        "name": "停车超时",
        "carnum": "渝D25762"
    }, {
        "start_time": "19-06-26 11:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-26 11:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-26 11:06:03",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D45233"
    }, {
        "start_time": "19-06-26 11:06:03",
        "event_type": "11011",
        "name": "超速",
        "carnum": "粤AV0692"
    }, {
        "start_time": "19-06-26 11:06:00",
        "event_type": "10069",
        "name": "空挡滑行",
        "carnum": "渝D29826"
    }
]

data2=[
    {
        "amount7": 0,
        "amount6": 15,
        "outerTotal": 66,
        "truckTotal": 5074,
        "start": 0,
        "ownStart": 0,
        "finish": 27,
        "ownFinish": 0,
        "code_name": "商贸物流",
        "plan": 0,
        "ownTotal": 0,
        "amount8": 15
    }
]

data3=[
    {
        "latitude": "33.5516",
        "num": 0,
        "state": "2",
        "type": "0",
        "carnum": "沪D23642",
        "longitude": "125.2515"
    }, {
        "latitude": "29.602682534641946",
        "num": 0,
        "state": "3",
        "type": "0",
        "carnum": "渝D76305",
        "longitude": "106.73005127704187"
    }, {
        "latitude": "29.04086164138122",
        "num": 0,
        "state": "4",
        "type": "0",
        "carnum": "渝D83997",
        "longitude": "120.28026869275976"
    }, {
        "latitude": "32.1111",
        "num": 0,
        "state": "1",
        "type": "0",
        "carnum": "京A00100",
        "longitude": "122.11111"
    }, {
        "latitude": "38.799526135907094",
        "num": 0,
        "state": "1",
        "type": "1",
        "carnum": "京AGH210",
        "longitude": "115.4980050872416"
    }, {
        "latitude": "33",
        "num": 0,
        "state": "3",
        "type": "0",
        "carnum": "川A0000",
        "longitude": "123"
    }
]
yunliRouter.get('/openApi/listCarnumEvent', passpart.authenticate('jwt', { session: false }),(req,res)=>{
    res.json({code:0,msg:'success',data})
})

yunliRouter.get('/VolumeMonitor/getTruckUseByOrgCode', passpart.authenticate('jwt', { session: false }),(req,res)=>{
    res.json({code:0,msg:'success',data:data2})
})

yunliRouter.get('/Monitor/getTruckWaybil', passpart.authenticate('jwt', { session: false }),(req,res)=>{
    res.json({code:0,msg:'success',data:data3})
})



 
 module.exports=yunliRouter