//history.js
var app = getApp()
Page({
  data: {
    list: [{title:"现金巴士",img:"../../img/xianjinbashi.png",date:"2016-09-25"},//接口不方便,数据伪造//
    {title:"洋钱罐",img:"../../img/yangqianguan.png",date:"2016-09-22"},
    {title:"用钱宝",img:"../../img/yongqianbao.png",date:"2016-09-15"},
    {title:"洋钱罐",img:"../../img/yangqianguan.png",date:"2016-09-22"},
    {title:"洋钱罐",img:"../../img/yangqianguan.png",date:"2016-09-22"},
    {title:"洋钱罐",img:"../../img/yangqianguan.png",date:"2016-09-22"}]
  },
  //事件处理函数
  bindViewTap: function(e) {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    var that = this
    // wx.request({
    //   url: '',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //      that.setData({
    //      })
    //   }
    // })
  }
})