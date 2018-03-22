// pages/home/home.js
var data = require('../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop: {
      name: '味觉牛庄',
      desc: '凡在本店办理会员，一律享受8.8折优惠'
    },

    cart: {
      count: 0,
      total: 0,
      list: {}
    },

    cartList: {},
    showCartDetail: false,

    goods: [],
    goodList: [],
    currentGoodItems: [],
    selectedID: 'hot',
    scrollDown: false,
    // 购物车
    goodsIncart: [],
    goodsInCartsStatistics:[],
    // 合计金额
    sumPrice:0,
    showCartsDetail:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setGoodList(res => {
      this.setData({ goods: data.goods, goodList: res, currentGoodItems: res[0].goodItems })
      // console.log(this.data)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  setGoodList: function (cb) {
    var goodsOrignal = data.goods
    var goodsListOrignal = data.goodsList
    var goodsList = []
    goodsListOrignal.forEach(function (item, index) {
      var goodsItem = item;
      var goods = []
      var goodsItems = item.goodItems
      for (var index in goodsItems) {
        var goodsItemIndex = goodsItems[index]
        goods.push(goodsOrignal[goodsItemIndex])
      }
      goodsItem.goodItems = goods
      goodsList.push(goodsItem)
    })
    if (cb) {
      cb(goodsList)
    }
  },
  classifyClick: function (e) {
    var slectedId = e.currentTarget.dataset.id
    if (this.data.selectedID === slectedId) return;
    this.data.goodList.forEach((item, index) => {
      if (item.id === slectedId) {
        this.setData({ selectedID: slectedId, currentGoodItems: item.goodItems })
      }
    })
    // console.log(this.data)

  },
  onscroll: function (e) {
    var scrollTop = e.detail.scrollTop
    if (scrollTop > 50 && !this.data.scrollDown) {
      this.setData({ scrollDown: true })
    } else if (scrollTop < 50 && this.data.scrollDown) {
      this.setData({ scrollDown: false })
    }
  },
  //添加到购物车
  addToCart: function (e) {
    //明细
    var goodsIncart = this.data.goodsIncart
    goodsIncart.push(e.currentTarget.dataset.gooditem)
    this.setData({ goodsIncart: goodsIncart})

    //统计
    this.setData({ goodsInCartsStatistics: this.caculate(goodsIncart)})
  },
  // 移出购物车
  reduceFromCart: function (e) {
    var goodsIncart = this.data.goodsIncart
    var gooditem = e.currentTarget.dataset.gooditem

    var gooditemStr = JSON.stringify(gooditem)
    var goodsIncartStr = this.arrElementToStr(goodsIncart)
    var index = goodsIncartStr.indexOf(gooditemStr)
    if(index != -1){
      goodsIncartStr.splice(index, 1)
      this.setData({ goodsIncart: this.arrStrElementToObj(goodsIncartStr) })
      //统计
      this.setData({ goodsInCartsStatistics: this.caculate(this.arrStrElementToObj(goodsIncartStr)) })
      if (goodsIncartStr.length < 1) {
        this.setData({ showCartsDetail: false })
      }
      
    }
   console.log(this.data)
  },
  // 购物车统计
  caculateCart: function () {

  },
  // 判断对象是不是相等
  isObjectValueEqual: function (a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  },
  // 数组去重
  distinct: function (arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = JSON.stringify(arr[i])) != null; i++) {
      if (!hash[elem]) {
        result.push(JSON.parse(elem));
        hash[elem] = true;
      }
    }
    // console.log(result)
    return result;
  },
  // 统计对象个数
  caculate: function (arr) {
    //去重
    var newArr = this.distinct(arr)

    var result = [], hash = {};
    //存入hash表
    newArr.forEach(function(v,k){
      hash[JSON.stringify(v)] = 0
    })
    arr.forEach(function(v1,k1){
      hash[JSON.stringify(v1)]+=1
    })
    var goodItems = []

    for (var k2 in newArr){
      var v2 = newArr[k2]
      var goodItem = {}
      goodItem.num = hash[JSON.stringify(v2)]//数量
      goodItem.detail = v2
      goodItems.push(goodItem)
    }

    // 总金额
    var sum = 0
    goodItems.forEach(function(v3,k3){
      sum += v3.detail.price * v3.num
    })

    this.setData({ sumPrice:sum})

    return goodItems
  },
  cartsDetail:function(e){
    if (this.data.sumPrice>0){
      this.setData({showCartsDetail:true})
    }
  },
  hideCartsDetail:function(e){
    this.setData({ showCartsDetail: false })
  },
  arrElementToStr:function(arr){
    var tempArr = []
    arr.forEach(function(v,k){
      tempArr.push(JSON.stringify(v))
    })
    return tempArr
  },
  arrStrElementToObj:function(arr){
    var tempArr = []
    arr.forEach(function (v, k) {
      tempArr.push(JSON.parse(v))
    })
    return tempArr
  },
  submit:function(e){
    wx.setStorage({
      key: 'goodsInCartsStatistics',
      data: this.data.goodsInCartsStatistics,
      success:function(){
        wx.switchTab({
          url: '../cart/cart',
        })
      }
    })
  }
})