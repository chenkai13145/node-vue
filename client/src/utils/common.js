const enumerateKey = key => {
  let investor = {
    GBL: '商贸物流',
    HSL: '顺捷物流',
    GNL: '商贸日邮',
    GTT: '广丰物流',
    FNL: '富田日捆',
    GRTL: '商铁物流',
    GQCQ: '广汽传祺',
    GQFK: '广汽菲克',
    GQSL: '广汽三菱',
    GTMC: '广汽丰田',
    GQBT: '广汽本田',
    GQXNY: '广汽新能源',
    GQCQGZ: '广汽传祺（广州）',
    GQCQHZ: '广汽传祺（杭州）',
    GQCQYC: '广汽传祺（宜昌）',
    GQCQWLMQ: '广汽传祺（乌鲁木齐）',
    GQFKGZ: '广汽菲克（广州）',
    GQFKCS: '广汽菲克（长沙）'
  }
  return investor[key]
}

const enumerateImg = key => {
  let img = {
    GQCQ: '广汽@2x.png',
    GQFK: '丰田@2x.png',
    GQSL: '丰田@2x.png',
    GTMC: '丰田@2x.png',
    GQBT: '丰田@2x.png',
    GQXNY: '丰田@2x.png'
  }
  return img[key]
}
export { enumerateKey, enumerateImg }
