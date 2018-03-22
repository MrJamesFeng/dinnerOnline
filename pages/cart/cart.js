// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 物品清单
    goodsInCartsStatistics:null,
    // 合
    total:0,
    seatNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    wx.getStorage({
      key: 'goodsInCartsStatistics',
      success: (res) => {
        this.setData({ goodsInCartsStatistics: res.data })
        var total = 0;
        console.log(res)
        res.data.forEach((v, k) => {
          total += v.num * v.detail.price;
        })
        this.setData({total:total})
      },
    })
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
  continueOrder:function(e){

  },
  comfirmOrder:function(e){

  },
  input:function(e){
    console.log(e)
  }
})