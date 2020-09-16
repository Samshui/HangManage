//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '进入Demo',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  talkWaring: function (){
    console.log('you click the \'hello world\'')
    // alert('this is a waring!')
    wx.showToast({
      title: 'this is a waring!',
      icon: 'success', // only support success or loading
      duration: 2000,
      mask: true, //蒙层 - default: false
      success(res) {
        console.log('success - tap - res',res)
        wx.navigateTo({
          url: '../logs/logs'
        })
      }
      /**
       * success: function(){},
       * fail: function(){}
       */
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
