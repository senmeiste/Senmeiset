//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());// 
    wx.setStorageSync('logs', logs);
    if (!wx.getStorageSync('loginsatus')) {
      this.loginFntemplate();
    }
    
  },
  loginstatus:{
    logins:false,
    userdata:"",
  },
  loginFntemplate: function (callback) {
    var that = this,_this = this;
    console.log(that)
    // 登录
    wx.login({
      success: res => {
        console.log(res.code);
        wx.setStorageSync('loginsatus', true)
        
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var logincode = res.code;
        console.log(res);
        // 获取用户信息
        wx.getSetting({
          success(res) {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  wx.setStorageSync('userInfo', res.userInfo);
                  that.loginstatus.userdata = res.userInfo;
                  that.loginstatus.logins = true;
                  var imgurl = encodeURIComponent(res.userInfo.avatarUrl),//传给后台，后台要求转码
                    iv = res.iv,
                    encryptedData = res.encryptedData;
                  res.userInfo.avatarUrl = imgurl;
                  var loginuser = res.userInfo
                 
                  // wx.request({
                  //   url: that.globalData.weachLoginApi,
                  //   data: {
                  //     code: logincode,
                  //     encryptedData: encryptedData,
                  //     iv: iv,
                  //     user: JSON.stringify(loginuser),
                  //     softName: "duiduinongzhuang"
                  //   },
                  //   method: 'POST',
                  //   header: {
                  //     "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
                  //   },
                  //   success: function (res) {
                  //     if (res.data.error_code == 0) {
                  //       wx.setStorageSync('loginsatus', true);
                  //       wx.setStorageSync('userData', res.data.user);
                  //       wx.setStorageSync('isnewuser', res.data.user.isnewuser);
                  //       wx.setStorageSync('mobile', res.data.user.userPhone);
                  //       wx.setStorageSync('userJwt', res.data.user.token);
                  //       wx.setStorageSync('usershareid', res.data.user.SharId);
                  //       wx.setStorageSync('userUnionid', res.data.user.userUnionid);
                  //       wx.setStorageSync('unionid', res.data.user.userUnionid);
                  //       wx.setStorageSync('setingTelStyle', 0);
                  //       wx.setStorageSync('openid', res.data.user.userOpenid);
                  //     }
                  //   }
                  // })

                  if (callback) {
                    callback()
                  }
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (_this.userInfoReadyCallback) {
                    _this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })
      }
    })

  },
  getUserInfo: function(userdata, callback){
    var that = this;
    console.log(that)
    // 登录
    wx.login({
      success: res => {
        console.log(res.code);
        wx.setStorageSync('loginsatus', true)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var logincode = res.code;
        // 获取用户信息
        // 可以将 res 发送给后台解码出 unionId
        wx.setStorageSync('userInfo', userdata.userInfo);
        var imgurl = encodeURIComponent(userdata.avatarUrl),//传给后台，后台要求转码
          iv = userdata.iv,
          encryptedData = userdata.encryptedData;
        userdata.avatarUrl = imgurl;
        var loginuser = userdata
        //这是向后台请求用户的所有参数，具体根据业务需求
        // wx.request({
        //   url: api.globalData.weachLoginApi,
        //   data: {
        //     code: logincode,
        //     encryptedData: encryptedData,
        //     iv: iv,
        //     user: JSON.stringify(loginuser),
        //     softName: "duiduinongzhuang"
        //   },
        //   method: 'POST',
        //   header: {
        //     "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
        //   },
        //   success: function (res) {
        //     if (res.data.error_code == 0) {
        //       wx.setStorageSync('loginsatus', true);
        //       wx.setStorageSync('userData', res.data.user);
        //       wx.setStorageSync('isnewuser', res.data.user.isnewuser);
        //       wx.setStorageSync('mobile', res.data.user.userPhone);
        //       wx.setStorageSync('userJwt', res.data.user.token);
        //       wx.setStorageSync('usershareid', res.data.user.SharId);
        //       wx.setStorageSync('userUnionid', res.data.user.userUnionid);
        //       wx.setStorageSync('unionid', res.data.user.userUnionid);
        //       wx.setStorageSync('setingTelStyle', 0);
        //       wx.setStorageSync('openid', res.data.user.userOpenid);
        //     }
        //   }
        // })

        if (callback) {
          callback()
        }
      }
    })
  }
})