
// 订单处理模块

var sumPrice = 0//合计金额
var sumNum = 0//合计数量
module.exports = {
  //数组去重
  distinct: function (arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = JSON.stringify(arr[i])) != null; i++) {
      if (!hash[elem]) {
        result.push(JSON.parse(elem));
        hash[elem] = true;
      }
    }
    return result;
  },
  // 统计对象个数
  caculate: function (arr) {
    //去重
    var newArr = this.distinct(arr)

    var result = [], hash = {};
    //存入hash表
    newArr.forEach(function (v, k) {
      hash[JSON.stringify(v)] = 0
    })
    arr.forEach(function (v1, k1) {
      hash[JSON.stringify(v1)] += 1
    })
    var goodItems = []

    for (var k2 in newArr) {
      var v2 = newArr[k2]
      var goodItem = {}
      goodItem.num = hash[JSON.stringify(v2)]//数量
      goodItem.detail = v2
      goodItems.push(goodItem)
    }

    // 总金额
    var sum = 0
    goodItems.forEach(function (v3, k3) {
      sum += v3.detail.price * v3.num
    })

    this.setData({ sumPrice: sum })

    return goodItems
  },
  cartsDetail: function (e) {
    if (this.data.sumPrice > 0) {
      this.setData({ showCartsDetail: true })
    }
  },
  hideCartsDetail: function (e) {
    this.setData({ showCartsDetail: false })
  },
  arrElementToStr: function (arr) {
    var tempArr = []
    arr.forEach(function (v, k) {
      tempArr.push(JSON.stringify(v))
    })
    return tempArr
  },
  arrStrElementToObj: function (arr) {
    var tempArr = []
    arr.forEach(function (v, k) {
      tempArr.push(JSON.parse(v))
    })
    return tempArr
  }
}