//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    login: wx.getStorageSync('loginsatus'),//登录状态
    userInfo: wx.getStorageSync('userInfo'),//登录状态
  },
  onLoad: function () {
    var that = this;
    if (wx.getStorageSync('loginsatus')){
      that.setData({
        login: wx.getStorageSync('loginsatus'),//登录状态
        userInfo: wx.getStorageSync('userInfo'),//登录状态
      })
    }else{
      //此方法用来把app.js里的onlaunch函数运行的login函数返回值推出来
      app.userInfoReadyCallback = res => {
        this.setData({
          login: wx.getStorageSync('loginsatus'),//登录状态
          userInfo: wx.getStorageSync('userInfo'),//登录状态
        })
      };
    }
    
  },
  getUserInfo: function(e) {
    var that = this;
    wx.setStorageSync('loginsatus', true)
    wx.setStorageSync('userInfo', e.detail.userInfo)
    app.getUserInfo(e.detail, function () {
      that.setData({
        login: wx.getStorageSync('loginsatus'),//登录状态
        userInfo: wx.getStorageSync('userInfo'),//登录状态
      })
    })
  }
})
